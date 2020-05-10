import React from 'react';
import { graphql } from 'gatsby';

//* Components
import Header from '../components/header';
import Footer from '../components/footer';
import SEO from '../components/seo';
import PostLink from '../components/post-link';

const TagTemplate = ({ data, pageContext }) => {
  let { tag } = pageContext;
  const { edges, totalCount } = data.allMarkdownRemark;

  const Posts = edges.map(edge => (
    <PostLink key={edge.node.id} post={edge.node} />
  ));

  return (
    <>
      <Header title={tag} />
      <SEO title={`${tag} posts`} />
      <div className="blog-post-container relative mb-20 h-sc">
        <div className="blog-post-content">
          <div className="text-2xl mt-3 font-boogaloo text-blog-primary transition-colors duration-500">
            {totalCount} Posts tagged - <span>{tag}</span>
          </div>
          <div className="posts mb-20">{Posts}</div>
        </div>
      </div>
      <Footer />
    </>
  );
};

export default TagTemplate;

export const pageQuery = graphql`
  query TagPage($tag: String) {
    allMarkdownRemark(
      limit: 1000
      sort: { order: DESC, fields: [frontmatter___date] }
      filter: { frontmatter: { tags: { in: [$tag] } } }
    ) {
      totalCount
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
            tags
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
`;
