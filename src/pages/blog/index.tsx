import { graphql, Link } from 'gatsby';
import { Table } from 'ka-table';
import React from 'react';
import { Col, Container, Nav, Row } from 'react-bootstrap';

import Layout from '../layout';

const PostLink = ({ post }: any) => (
  <div>
    <Link to={`/blog/${post.frontmatter.slug}`}>
      {post.frontmatter.title} ({post.frontmatter.date})
    </Link>
  </div>
)

const IndexPage = ({
  data: {
    allMarkdownRemark: { edges },
  },
}: any) => {
  const posts = edges
    .map((edge: any) => edge.node)

  return(
  <Layout>
    <Container style={{marginBottom: 50}}>
        <Row style={{padding: '40px 0'}}>
          <Col>
            <Table
              childComponents={{
                cellText: {
                  content: ({ column, rowData }) => {
                    if(column.key === 'name'){
                    return <PostLink post={rowData}/>
                    }
                  }
                }
              }}
              rowKeyField='id' 
              columns={[{key: 'name', title: "Название"}]} data={posts}/>
          </Col>
        </Row>
      </Container>
  </Layout>
  )
}

export default IndexPage

export const pageQuery = graphql`
  query {
    allMarkdownRemark(sort: { frontmatter: { date: DESC }}) {
      edges {
        node {
          id
          excerpt(pruneLength: 250)
          frontmatter {
            date(formatString: "MMMM DD, YYYY")
            slug
            title
          }
        }
      }
    }
  }
`;