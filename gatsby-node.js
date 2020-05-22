const path = require(`path`);

exports.createPages = async ({ actions, graphql, reporter }) => {
  const { createPage } = actions;

  const result = await graphql(`
    {
      allMdx(
        sort: { order: DESC, fields: [frontmatter___date] }
        limit: 1000
      ) {
        edges {
          node {
            frontmatter {
              title
              path
              tags
              published
            }
          }
        }
      }
    }
  `);

  // Handle errors
  if (result.errors) {
    reporter.panicOnBuild(`Error while running GraphQL query.`);
    return;
  }

  const blogPostTemplate = path.resolve(`src/templates/blog-template.js`);
  const tagTemplate = path.resolve(`src/templates/tag.js`);

  //! Stuff
  const posts = result.data.allMdx.edges;

  const tagSet = new Set();

  posts.forEach((post, index) => {
    //* For previous & next
    const previous = index === 0 ? null : posts[index - 1].node;
    const next = index === posts.length - 1 ? null : posts[index + 1].node;

    if (post.node.frontmatter.tags) {
      const { tags } = post.node.frontmatter;
      tags.forEach(tag => {
        tagSet.add(tag);
      });
    }

    createPage({
      path: post.node.frontmatter.path,
      component: blogPostTemplate,
      context: {
        previous,
        next,
      }, 
    });
  });

  const tagList = Array.from(tagSet)

  tagList.forEach(tag => {
    createPage({
      path: `/tags/${tag}/`,
      component: tagTemplate,
      context: {
        tag,
      },
    })
  })

};
