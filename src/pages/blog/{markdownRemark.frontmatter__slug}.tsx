import * as React from 'react';

import {
  breadcrumb,
  breadcrumbItem,
  container,
  row
} from '../splavy/splavy_detail.module.scss';

import Layout from '../layout';
import { graphql } from 'gatsby';

export default function BlogPostTemplate({
  data, // this prop will be injected by the GraphQL query below.
}: any) {
  const { markdownRemark } = data; // data.markdownRemark holds your post data
  const { frontmatter, html } = markdownRemark;
  return (
    <Layout>

      <div className={container} style={{ paddingTop: 0 }}>
        <nav aria-label="breadcrumb" style={{ marginTop: 10 }}>
          <ol className={breadcrumb}>
            <li className={breadcrumbItem}><a href="/blog/">Блог</a></li>
            <li className={breadcrumbItem}>/</li>
          </ol>
        </nav>
      </div>
      <div className={container} style={{ paddingTop: 0 }}>
        <div className={row}>
          <div>
            <h1>{frontmatter.title}</h1>
            <p>{frontmatter.date}</p>
            <div dangerouslySetInnerHTML={{ __html: html }} />
          </div>
        </div>
      </div>
    </Layout>
  );
}

export const pageQuery = graphql`
  query ($id: String!) {
    markdownRemark(id: { eq: $id }) {
      html
      frontmatter {
        date(formatString: "MMMM DD, YYYY", locale:"ru")
        slug
        title
      }
    }
  }
`;
