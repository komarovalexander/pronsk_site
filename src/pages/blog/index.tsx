import { HeadFC, Link, graphql } from 'gatsby';
import React from 'react';

import Layout from '../../components/Layout';
import Seo from '../../components/Seo';
import * as styles from './index.module.scss';

type BlogPost = {
  id: string;
  excerpt: string;
  frontmatter: {
    date: string;
    updated?: string;
    description?: string;
    image?: string;
    imageAlt?: string;
    section?: string;
    additionalSections?: string[];
    slug: string;
    title: string;
  };
};

const sectionDefinitions = [
  {
    slug: 'places',
    title: 'Места и маршруты',
    navTitle: 'Места и маршруты',
    description: 'Путеводители, прогулки, исторические места и локальные проекты Пронского края.',
  },
  {
    slug: 'local-people',
    title: 'Люди Пронской земли',
    navTitle: 'Люди Пронской земли',
    description: 'Люди науки, искусства, просвещения и путешествий, чья жизнь связана с Пронской землёй.',
  },
  {
    slug: 'seafarers',
    title: 'Мореплаватели и морская история',
    navTitle: 'Мореплаватели',
    description: 'Адмиралы, полярные исследователи, землепроходцы и предания, связанные с морем.',
  },
  {
    slug: 'travelers',
    title: 'Путешественники и географы',
    navTitle: 'Путешественники и географы',
    description: 'Экспедиции, географические открытия и люди, посвятившие жизнь изучению мира.',
  },
];

const plural = (count: number, forms: [string, string, string]) => {
  const lastTwo = count % 100;
  const last = count % 10;

  if (lastTwo >= 11 && lastTwo <= 14) return forms[2];
  if (last === 1) return forms[0];
  if (last >= 2 && last <= 4) return forms[1];
  return forms[2];
};

const PostCard = ({ post }: { post: BlogPost }) => (
  <article className={styles.postCard}>
    <Link className={styles.postCardLink} to={`/blog/${post.frontmatter.slug}/`}>
      {post.frontmatter.image ? (
        <div className={styles.postImageWrapper}>
          <img
            className={styles.postImage}
            src={post.frontmatter.image}
            alt={post.frontmatter.imageAlt || post.frontmatter.title}
            loading='lazy'
          />
        </div>
      ) : (
        <div className={styles.postPlaceholder} aria-hidden='true'>
          <span>3D</span>
          <small>Красная школа</small>
        </div>
      )}
      <div className={styles.postContent}>
        <time className={styles.postDate}>
          {post.frontmatter.updated ? `Обновлено ${post.frontmatter.updated}` : post.frontmatter.date}
        </time>
        <h3>{post.frontmatter.title}</h3>
        <p>{post.frontmatter.description || post.excerpt}</p>
        <span className={styles.readMore}>Читать статью <span aria-hidden='true'>→</span></span>
      </div>
    </Link>
  </article>
);

const IndexPage = ({ data: { allMarkdownRemark: { nodes } } }: { data: { allMarkdownRemark: { nodes: BlogPost[] } } }) => {
  const sections = sectionDefinitions
    .map((section) => ({
      ...section,
      posts: nodes.filter((node) => (
        node.frontmatter.section === section.slug ||
        node.frontmatter.additionalSections?.includes(section.slug)
      )),
    }))
    .filter((section) => section.posts.length > 0);

  const groupedIds = new Set(sections.flatMap((section) => section.posts.map((post) => post.id)));
  const otherPosts = nodes.filter((node) => !groupedIds.has(node.id));
  if (otherPosts.length) {
    sections.push({
      slug: 'other',
      title: 'Другие материалы',
      navTitle: 'Другие материалы',
      description: 'Заметки и статьи о Пронском крае.',
      posts: otherPosts,
    });
  }

  const featuredPost = nodes.find((node) => node.frontmatter.slug === 'pronsk');

  return (
    <Layout>
      <main className={styles.page}>
        <div className={styles.content}>
          <section className={styles.hero}>
            <div className={styles.heroIntro}>
              <p className={styles.eyebrow}>Места · история · люди</p>
              <h1>Блог о Пронске и Пронском районе</h1>
              <p className={styles.heroDescription}>
                Истории малой родины, биографии замечательных людей и маршруты для новых открытий.
              </p>
              <div className={styles.heroFooter}>
                <span>{nodes.length} {plural(nodes.length, ['материал', 'материала', 'материалов'])}</span>
                <Link to='/authors/'>Об авторах и источниках <span aria-hidden='true'>→</span></Link>
              </div>
            </div>

            {featuredPost && (
              <Link className={styles.featuredCard} to={`/blog/${featuredPost.frontmatter.slug}/`}>
                <div className={styles.featuredImageWrapper}>
                  <img
                    className={styles.featuredImage}
                    src={featuredPost.frontmatter.image}
                    alt={featuredPost.frontmatter.imageAlt || featuredPost.frontmatter.title}
                  />
                  <span className={styles.featuredBadge}>Начните с этого путеводителя</span>
                </div>
                <div className={styles.featuredContent}>
                  <h2>{featuredPost.frontmatter.title}</h2>
                  <p>{featuredPost.frontmatter.description}</p>
                  <span className={styles.featuredLink}>Открыть путеводитель <span aria-hidden='true'>→</span></span>
                </div>
              </Link>
            )}
          </section>

          <nav className={styles.topics} aria-label='Разделы блога'>
            <p className={styles.topicsTitle}>Выберите тему</p>
            <div className={styles.topicLinks}>
              {sections.map((section) => (
                <a key={section.slug} href={`#${section.slug}`}>
                  <span>{section.navTitle}</span>
                  <span className={styles.topicCount}>{section.posts.length}</span>
                </a>
              ))}
            </div>
          </nav>

          <div className={styles.sections}>
            {sections.map((section, index) => (
              <section className={styles.section} key={section.slug} id={section.slug}>
                <header className={styles.sectionHeader}>
                  <div>
                    <p className={styles.sectionKicker}>Раздел {String(index + 1).padStart(2, '0')}</p>
                    <div className={styles.sectionTitleRow}>
                      <h2>{section.title}</h2>
                      <span>{section.posts.length}</span>
                    </div>
                  </div>
                  <p className={styles.sectionDescription}>{section.description}</p>
                </header>
                <ul className={styles.postsGrid}>
                  {section.posts.map((post) => (
                    <li key={post.id}><PostCard post={post} /></li>
                  ))}
                </ul>
              </section>
            ))}
          </div>

          <aside className={styles.aboutProject}>
            <div>
              <p className={styles.sectionKicker}>О проекте</p>
              <h2>У каждого места есть своя история</h2>
            </div>
            <div>
              <p>Рассказываем, как готовим материалы, проверяем факты и выбираем источники.</p>
              <Link to='/authors/'>Познакомиться с авторами <span aria-hidden='true'>→</span></Link>
            </div>
          </aside>
        </div>
      </main>
    </Layout>
  );
};

export default IndexPage;

export const Head: HeadFC = ({ location }) => (
  <Seo
    title='Блог о Пронске и Пронском районе — В Пронске'
    description='Статьи о достопримечательностях, истории и жителях Пронского края, путешествиях, сплавах и полезных местах для отдыха.'
    pathname={location.pathname}
  />
);

export const pageQuery = graphql`
  query {
    allMarkdownRemark(sort: { frontmatter: { date: DESC } }) {
      nodes {
        id
        excerpt(pruneLength: 250)
        frontmatter {
          date(formatString: "DD.MM.YYYY")
          updated(formatString: "DD.MM.YYYY")
          description
          image
          imageAlt
          section
          additionalSections
          slug
          title
        }
      }
    }
  }
`;
