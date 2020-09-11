import React from 'react';
import { graphql } from 'gatsby';

//* Components
import Layout from '../components/layout';
import SEO from '../components/seo';
import PostLink from '../components/post-link';

const DigitalGarden = ({
  data: {
    allMdx: { edges },
  },
}) => {
  let post = edges.filter((edge) => edge.node.frontmatter.published === false);
  const Posts = post.map((edge) => (
    <PostLink key={edge.node.id} post={edge.node} />
  ));

  return (
    <Layout page="digitalgarden">
      <SEO title="🌱 Digital Garden of Chetan Raj" />
      <div className="text-4xl font-light text-blog-lightgray mt-6 mb-4">
        Posts
      </div>
      <div className="posts mb-20">{Posts}</div>
    </Layout>
  );
};

export default DigitalGarden;

export const pageQuery = graphql`
  query {
    allMdx(sort: { order: DESC, fields: [frontmatter___date] }) {
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
