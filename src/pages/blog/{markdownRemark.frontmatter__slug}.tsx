import * as React from 'react';
import { graphql, HeadFC, Link } from 'gatsby';

import {
  breadcrumb,
  breadcrumbItem,
  container,
  row,
} from '../splavy/splavy_detail.module.scss';
import Layout from '../../components/Layout';
import Seo from '../../components/Seo';

export default function BlogPostTemplate({ data }: any) {
  const { markdownRemark, allMarkdownRemark } = data;
  const { frontmatter, html } = markdownRemark;
  const relatedPosts = (frontmatter.related || [])
    .map((slug: string) => allMarkdownRemark.nodes.find((node: any) => node.frontmatter.slug === slug))
    .filter(Boolean);

  return (
    <Layout>
      <div className={container} style={{ paddingTop: 0 }}>
        <nav aria-label='Хлебные крошки' style={{ marginTop: 10 }}>
          <ol className={breadcrumb}>
            <li className={breadcrumbItem}><Link to='/'>Главная</Link></li>
            <li className={breadcrumbItem}>/</li>
            <li className={breadcrumbItem}><Link to='/blog/'>Блог</Link></li>
            <li className={breadcrumbItem}>/</li>
            <li className={breadcrumbItem} aria-current='page'>{frontmatter.title}</li>
          </ol>
        </nav>
      </div>
      <div className={container} style={{ paddingTop: 0 }}>
        <div className={row}>
          <article>
            <h1>{frontmatter.title}</h1>
            <p>
              Опубликовано: {frontmatter.date}
              {frontmatter.updated && ` · Обновлено: ${frontmatter.updated}`}
            </p>
            <div dangerouslySetInnerHTML={{ __html: html }} />

            {frontmatter.sources?.length > 0 && (
              <section>
                <h2>Источники и дополнительное чтение</h2>
                <ul>
                  {frontmatter.sources.map((source: { title: string; url: string }) => (
                    <li key={source.url}>
                      <a href={source.url} target='_blank' rel='noreferrer'>{source.title}</a>
                    </li>
                  ))}
                </ul>
              </section>
            )}

            {relatedPosts.length > 0 && (
              <section>
                <h2>Похожие материалы</h2>
                <ul style={{ listStyle: 'none', padding: 0 }}>
                  {relatedPosts.map((post: any) => (
                    <li key={post.frontmatter.slug} style={{ marginBottom: 24 }}>
                      <h3 style={{ marginBottom: 8 }}>
                        <Link to={`/blog/${post.frontmatter.slug}/`}>{post.frontmatter.title}</Link>
                      </h3>
                      <p style={{ margin: 0 }}>{post.frontmatter.description}</p>
                    </li>
                  ))}
                </ul>
              </section>
            )}
          </article>
        </div>
      </div>
    </Layout>
  );
}

export const Head: HeadFC<any> = ({ data, location }) => {
  const { frontmatter, excerpt } = data.markdownRemark;

  return (
    <Seo
      title={`${frontmatter.title} — В Пронске`}
      description={frontmatter.description || excerpt}
      pathname={location.pathname}
      image={frontmatter.image}
      imageAlt={frontmatter.imageAlt}
      type='article'
    />
  );
};

export const pageQuery = graphql`
  query ($id: String!) {
    markdownRemark(id: { eq: $id }) {
      html
      excerpt(pruneLength: 180)
      frontmatter {
        date(formatString: "DD.MM.YYYY", locale: "ru")
        updated(formatString: "DD.MM.YYYY", locale: "ru")
        description
        image
        imageAlt
        related
        slug
        title
        sources {
          title
          url
        }
      }
    }
    allMarkdownRemark {
      nodes {
        frontmatter {
          description
          slug
          title
        }
      }
    }
  }
`;
