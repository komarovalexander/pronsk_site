import { graphql } from 'gatsby';
import * as React from 'react';

import Layout from '../layout';

export default function BlogPostTemplate({
  data, // this prop will be injected by the GraphQL query below.
}: any) {
  const { markdownRemark } = data; // data.markdownRemark holds your post data
  const { frontmatter, html } = markdownRemark;
  return (
    <Layout>
        <div className="container text">
          <div>
            <h1>{frontmatter.title}</h1>
            <h2>{frontmatter.date}</h2>
            <div 
              dangerouslySetInnerHTML={{ __html: html }}
            />
          </div>
      </div>
    </Layout>
  )
}

export const pageQuery = graphql`
  query($id: String!) {
    markdownRemark(id: { eq: $id }) {
      html
      frontmatter {
        date(formatString: "MMMM DD, YYYY")
        slug
        title
      }
    }
  }
`