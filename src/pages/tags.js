import React from 'react';
import { graphql } from 'gatsby';

//* Components
import Layout from '../components/layout';
import SEO from '../components/seo';
import PostLink from '../components/post-link';

const Tags = ({ data }) => {
  const sorted = [...data.allMdx.group]
    .sort((a, b) => {
      if (a.totalCount <= b.totalCount) {
        return 1;
      }

      return -1;
    })
    .map((post) => ({
      title: post.fieldValue,
      content: post.nodes,
      length: post.nodes.length,
    }));

  return (
    <Layout>
      <SEO title="Hi 👋" />
      <div className="text-4xl font-light text-blog-darkgray mt-6 mb-10">
        Tags
      </div>

      {sorted.map((section) => {
        const { title, content, length } = section;
        const posts = content.map((node) => (
          <PostLink key={node.id} post={node} />
        ));
        return (
          <>
            <div className="flex items-center justify-between">
              <div className="text-2xl font-light text-blog-lightgray mb-4">
                {title}
              </div>
              <div className="text-base font-light text-blog-lightgray mb-4">
                {length > 1 ? `${length} posts` : `${length} post`}
              </div>
            </div>
            <div className="posts mb-10">{posts}</div>
          </>
        );
      })}
    </Layout>
  );
};

export default Tags;

export const pageQuery = graphql`
  query getGroupedTagsQuery {
    allMdx(filter: { frontmatter: { published: { eq: true } } }) {
      group(field: frontmatter___tags) {
        fieldValue
        totalCount
        nodes {
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
