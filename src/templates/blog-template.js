import React, { useState } from 'react';
import {Helmet} from 'react-helmet';
import { Link, graphql } from "gatsby";
import { MDXRenderer } from "gatsby-plugin-mdx";

//* Components
import Header from '../components/header';
import Footer from '../components/footer';
import "../components/layout.css";
import useDocumentScrollThrottled from '../components/useDocumentScrollThrottled';

const Template = ({ data, pageContext }) => {
  const { fields: {readingTime} } = data.mdx;
  const post = data.mdx;

  const thumbnail = post.frontmatter.hero_image && post.frontmatter.hero_image.publicURL

  const image = thumbnail ? `https://chetanraj.in/${thumbnail}` : 'https://chetanraj.in/blog/icons/icon-512x512.png';

  const twitterShare = `http://twitter.com/share?text=${encodeURIComponent(post.frontmatter.title)} - &url=https://chetanraj.in/blog${post.frontmatter.path}/&via=chetan_raj`;

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
          <meta property="og:image:width" content="1280" />
          <meta property="og:image:height" content="675" />
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
            content={image}
          />

          {/* Twitter */}
          <meta property="twitter:card" content="summary_large_image" />
          <meta name="twitter:creator" content="@chetan_raj"></meta>
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
            content={image}
          />
        </Helmet>
        <header
          className={`sticky-header h-16 ${shadowStyle} text-center text-xl top-0 w-full bg-blog-header text-blog-bg flex items-center justify-center transition duration-1000 z-10`}
        >
          <span className="w-3/4">{post.frontmatter.title}</span>
        </header>
        <div className="absolute left-2 top-1">
          <a target="_blank" rel="noopener noreferrer" href={twitterShare}><svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="color"><path d="M23 3a10.9 10.9 0 0 1-3.14 1.53 4.48 4.48 0 0 0-7.86 3v1A10.66 10.66 0 0 1 3 4s-4 9 5 13a11.64 11.64 0 0 1-7 2c9 5 20 0 20-11.5a4.5 4.5 0 0 0-.08-.83A7.72 7.72 0 0 0 23 3z"></path></svg></a>
        </div>
        <span className="absolute bg-blog-header draft opacity-50 px-2 rounded text-blog-bg top-1">{post.frontmatter.published === false ? `Draft` : ''}</span>
        <span className="reading-time absolute right-2 top-1 text-blog-lightgray text-blog-primary"><span className="mr-2" role="img" aria-label="hourglass">⏳</span>
        {readingTime.text}</span>
        <div className="blog-post-content text-blog-primary">
          <MDXRenderer className="blog-post-text text-blog-primary text-lg leading-7 m-auto pb-6 sm:px-12 md:px-12 lg:px-12 xl:px-12">{post.body}</MDXRenderer>
          <div className="tags py-10">
            {post.frontmatter.tags.map(tag => (
              <Link key={tag} to={`/tags/${tag}`} className="bg-blog-header mr-4 p-2 rounded text-base text-blog-bg transition duration-500">{tag}</Link>
            ))}
          </div>
          <nav className="m-auto pb-6 text-blog-primary">
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
    mdx(frontmatter: { path: { eq: $path } }) {
      id
      body
      frontmatter {
        date(formatString: "MMMM DD, YYYY")
        path
        title
        description
        published
        hero_image {
          publicURL
        }
        tags
      }
      fields {
        readingTime {
          text
        }
      }
      headings {
        depth
        value
      }
    }
  }
`;
