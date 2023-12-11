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
  const Posts = edges
    .filter((edge: any) => !!edge.node.frontmatter.date) // You can filter your posts based on some criteria
    .map((edge: any) => <PostLink key={edge.node.id} post={edge.node} />)

  return(
  <Layout>
    <Container style={{marginBottom: 50}}>
        <Row style={{padding: '40px 0'}}>
          <Col>
            <Table
              childComponents={{
                cellText: {
                  content: ({ column, value }) => {
                    if(column.key === 'name'){
                      return  <Nav.Link>{Posts}</Nav.Link>
                    }
                  }
                }
              }}
              rowKeyField='id' 
              columns={[{key: 'name', title: "Название"}]} data={[{ name: `${Posts.key}`}]}/>
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