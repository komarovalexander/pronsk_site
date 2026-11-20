import * as React from 'react';
import { graphql, Link, useStaticQuery } from 'gatsby';

import Layout from './Layout';
import {
  breadcrumb,
  breadcrumbItem,
  container,
} from '../pages/splavy/splavy_detail.module.scss';

type AuthorPageProps = {
  slug: string;
  name: string;
  role: string;
  description: string;
  vkUrl?: string;
};

const AuthorPage = ({ slug, name, role, description, vkUrl }: AuthorPageProps) => {
  const { allMarkdownRemark } = useStaticQuery(graphql`
    query AuthorArticles {
      allMarkdownRemark(sort: { frontmatter: { date: DESC } }) {
        nodes {
          frontmatter {
            author
            description
            slug
            title
          }
        }
      }
    }
  `);
  const articles = allMarkdownRemark.nodes.filter((node: any) => node.frontmatter.author === slug);

  return (
    <Layout>
      <div className={container} style={{ paddingTop: 20 }}>
        <nav aria-label='Хлебные крошки'>
          <ol className={breadcrumb}>
            <li className={breadcrumbItem}><Link to='/'>Главная</Link></li>
            <li className={breadcrumbItem}>/</li>
            <li className={breadcrumbItem}><Link to='/authors/'>Авторы</Link></li>
            <li className={breadcrumbItem}>/</li>
            <li className={breadcrumbItem} aria-current='page'>{name}</li>
          </ol>
        </nav>
        <h1>{name}</h1>
        <p><strong>{role}</strong></p>
        <p>{description}</p>
        {vkUrl && <p><a href={vkUrl} target='_blank' rel='noreferrer'>Профиль автора ВКонтакте</a></p>}

        <section>
          <h2>Статьи автора</h2>
          <ul style={{ listStyle: 'none', padding: 0 }}>
            {articles.map((article: any) => (
              <li key={article.frontmatter.slug} style={{ marginBottom: 24 }}>
                <h3 style={{ marginBottom: 8 }}>
                  <Link to={`/blog/${article.frontmatter.slug}/`}>{article.frontmatter.title}</Link>
                </h3>
                <p style={{ margin: 0 }}>{article.frontmatter.description}</p>
              </li>
            ))}
          </ul>
        </section>
      </div>
    </Layout>
  );
};

export default AuthorPage;
