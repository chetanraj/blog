import React from "react"
import { graphql } from "gatsby"
import PostLink from "../components/post-link"

//* Components
import Layout from "../components/layout"
import SEO from "../components/seo"

const IndexPage = ({
  data: {
    allMarkdownRemark: { edges },
  },
}) =>{
  let Posts = edges.filter(edge => edge.node.frontmatter.published);
  
  let latestPost = Posts[0];
  //*
  Posts.shift();
  const OtherPosts = Posts.map(edge => <PostLink key={edge.node.id} post={edge.node} />)

  return (
    <Layout>
      <SEO title="Hi 👋" />
      <div className="text-4xl font-light text-blog-lightgray mt-6 mb-4">Latest post</div>
      <PostLink key={latestPost.node.id} post={latestPost.node} />
      <div className="text-4xl font-light text-blog-lightgray mb-4">Other posts</div>
      <div className="posts mb-20">{OtherPosts}</div>
    </Layout>
  )
} 

export default IndexPage;

export const pageQuery = graphql`
  query {
    allMarkdownRemark(sort: { order: DESC, fields: [frontmatter___date] }) {
      edges {
        node {
          id
          excerpt(pruneLength: 250)
          frontmatter {
            date(formatString: "DD MMMM YYYY")
            path
            title
            description
            published
          }
          fields {
            readingTime {
              text
            }
          }
        }
      }
    }
  }
`