module.exports = {
  pathPrefix: '/blog',
  siteMetadata: {
    title: `Blog by Chetan Raj`,
    description: `Web Designer & Web Developer, Tech Instagrammer, Music, Movies, Gadgets, Iron Man & Batman lover`,
    author: `Chetan Raj`,
    siteUrl: 'https://chetanraj.in/blog',
  },
  plugins: [
    {
      resolve: `gatsby-plugin-google-analytics`,
      options: {
        trackingId: 'UA-57147313-6',
        head: false,
      },
    },
    `gatsby-plugin-react-helmet`,
    `gatsby-transformer-sharp`,
    `gatsby-plugin-sharp`,
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: `Blog by Chetan Raj`,
        short_name: `Blog`,
        start_url: `/`,
        background_color: `#0f4c81`,
        theme_color: `#0f4c81`,
        display: `minimal-ui`,
        icon: `src/images/favicon.png`,
      },
    },
    `gatsby-plugin-catch-links`,
    {
      resolve: `gatsby-source-filesystem`,
      options: { path: `${__dirname}/src/posts`, name: 'posts' },
    },
    {
      resolve: `gatsby-source-filesystem`,
      options: { path: `${__dirname}/src/images`, name: `images` },
    },
    {
      resolve: `gatsby-plugin-mdx`,
      options: {
        extensions: [`.mdx`, `.md`],
        gatsbyRemarkPlugins: [
          `gatsby-remark-code-titles`,
          'gatsby-remark-unwrap-images',
          // Wrap images by pictures
          {
            resolve: `gatsby-remark-images`,
            options: {
              maxWidth: 590,
              backgroundColor: 'transparent',
            },
          },
          {
            resolve: `gatsby-remark-autolink-headers`,
            options: {
              offsetY: `100`,
              icon: `<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="color"><line x1="4" y1="9" x2="20" y2="9"></line><line x1="4" y1="15" x2="20" y2="15"></line><line x1="10" y1="3" x2="8" y2="21"></line><line x1="16" y1="3" x2="14" y2="21"></line></svg>`,
              className: `anchor-class`,
              maintainCase: true,
              removeAccents: true,
              elements: [`h1`, `h2`],
            },
          },
          {
            resolve: `gatsby-remark-prismjs`,
            options: {
              classPrefix: 'language-',
              inlineCodeMarker: null,
              aliases: {},
              showLineNumbers: false,
              noInlineHighlight: false,
              languageExtensions: [
                {
                  language: 'superscript',
                  extend: 'javascript',
                  definition: {
                    superscript_types: /(SuperType)/,
                  },
                  insertBefore: {
                    function: {
                      superscript_keywords: /(superif|superelse)/,
                    },
                  },
                },
              ],
              prompt: {
                user: 'root',
                host: 'localhost',
                global: false,
              },
              escapeEntities: {},
            },
          },
        ],
      },
    },
    `gatsby-remark-reading-time`,
    `gatsby-plugin-postcss`,
    {
      resolve: 'gatsby-plugin-web-font-loader',
      options: {
        google: {
          families: [`Boogaloo`],
        },
      },
    },
    {
      resolve: `gatsby-plugin-feed`,
      options: {
        query: `
          {
            site {
              siteMetadata {
                title
                description
                siteUrl
                site_url: siteUrl
              }
            }
          }
        `,
        feeds: [
          {
            serialize: ({ query: { site, allMdx } }) => {
              return allMdx.edges.map((edge) => {
                return Object.assign({}, edge.node.frontmatter, {
                  description: edge.node.excerpt,
                  date: edge.node.frontmatter.date,
                  url: site.siteMetadata.siteUrl + edge.node.frontmatter.path,
                  custom_elements: [{ 'content:encoded': edge.node.html }],
                });
              });
            },
            query: `
              {
                allMdx(
                  sort: { order: DESC, fields: [frontmatter___date] },
                ) {
                  edges {
                    node {
                      excerpt
                      html
                      frontmatter {
                        date(formatString: "DD MMMM YYYY")
                        path
                        title
                        description
                      }
                    }
                  }
                }
              }
            `,
            output: '/rss.xml',
            title: "Chetan Raj Blog's RSS feed",
          },
        ],
      },
    },
    // this (optional) plugin enables Progressive Web App + Offline functionality
    // To learn more, visit: https://gatsby.dev/offline
    // `gatsby-plugin-offline`,
  ],
};
