import React, { useState } from 'react';
import Helmet from 'react-helmet';
import { Link, graphql } from "gatsby";

//* Components
import Header from '../components/header';
import Footer from '../components/footer';
import "../components/layout.css";
import useDocumentScrollThrottled from '../components/useDocumentScrollThrottled';

const Template = ({ data, pageContext }) => {
  const post = data.markdownRemark;

  const { fields: {readingTime} } = data.markdownRemark;

  const thumbnail = (post.frontmatter.hero_image && post.frontmatter.hero_image.publicURL) || 'https://chetanraj.in/blog/icons/icon-512x512.png';

  const { previous, next } = pageContext

  const [shouldShowShadow, setShouldShowShadow] = useState(false);

  useDocumentScrollThrottled(callbackData => {
    const { currentScrollTop } = callbackData;

    setShouldShowShadow(currentScrollTop > 256);
  });

  const shadowStyle = shouldShowShadow ? 'sticky opacity-100' : 'opacity-0';


  return (
    <>
      <Header title={post.frontmatter.title} />
      <div className="blog-post-container relative">
        <Helmet>
          <title>{`${post.frontmatter.title}`}</title>
          <meta
            name="description"
            content={`${post.frontmatter.description}`}
          />

          {/* Open Graph / Facebook */}
          <meta property="og:type" content="website" />
          <meta property="og:title" content={`${post.frontmatter.title}`} />
          <meta
            property="og:url"
            content={`https://chetanraj.in/blog${post.frontmatter.path}/`}
          />
          <meta
            property="og:description"
            content={`${post.frontmatter.description}`}
          />
          <meta
            property="og:image"
            content="https://chetanraj.in/blog/icons/icon-512x512.png"
          />

          {/* Twitter */}
          <meta property="twitter:card" content="summary_large_image" />
          <meta
            property="twitter:url"
            content={`https://chetanraj.in/blog${post.frontmatter.path}/`}
          />
          <meta
            property="twitter:title"
            content={`${post.frontmatter.title}`}
          />
          <meta
            property="twitter:description"
            content={`${post.frontmatter.description}`}
          />
          <meta
            property="twitter:image"
            content={thumbnail}
          />
        </Helmet>
        <header
          className={`sticky-header h-16 ${shadowStyle} text-center text-xl top-0 w-full bg-blog-header text-blog-bg flex items-center justify-center transition duration-1000 z-10`}
        >
          <span className="w-3/4">{post.frontmatter.title}</span>
        </header>
        <span className="absolute bg-blog-header left-2 opacity-50 px-2 reading-time rounded text-blog-bg top-1">{post.frontmatter.published === false ? `Draft` : ''}</span>
        <span className="reading-time absolute right-2 top-1 text-blog-lightgray text-blog-primary">{readingTime.text}</span>
        <div className="blog-post-content">
          <div
            className="blog-post-text text-blog-primary text-lg leading-7 m-auto pb-6 sm:px-12 md:px-12 lg:px-12 xl:px-12"
            dangerouslySetInnerHTML={{ __html: post.html }}
          />
          <nav className="m-auto pb-6 sm:px-12 text-blog-primary">
            <ul className="flex">
              <li className="flex-grow-0">
                {previous && previous.frontmatter.published && (
                  <Link
                    className="text-base"
                    to={previous.frontmatter.path}
                    rel="Previous"
                  >
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="20"
                      height="20"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      className="mr-3 inline-block align-middle color"
                    >
                      <line x1="19" y1="12" x2="5" y2="12"></line>
                      <polyline points="12 19 5 12 12 5"></polyline>
                    </svg>
                    {previous.frontmatter.title}
                  </Link>
                )}
              </li>
              <li className="flex-grow-0 text-right">
                {next && (
                  <Link
                    className="text-base"
                    to={next.frontmatter.path}
                    rel="Next"
                  >
                    {next.frontmatter.title}
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="20"
                      height="20"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      className="ml-3 inline-block align-middle color"
                    >
                      <line x1="5" y1="12" x2="19" y2="12"></line>
                      <polyline points="12 5 19 12 12 19"></polyline>
                    </svg>
                  </Link>
                )}
              </li>
            </ul>
          </nav>
        </div>
      </div>
      <Footer />
    </>
  );
}

export default Template;

export const pageQuery = graphql`
  query BlogPostByPath($path: String!) {
    markdownRemark(frontmatter: { path: { eq: $path } }) {
      html
      frontmatter {
        date(formatString: "MMMM DD, YYYY")
        path
        title
        description
        published
        hero_image {
          publicURL
        }
      }
      fields {
        readingTime {
          text
        }
      }
    }
  }
`;
