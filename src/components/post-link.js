import React from 'react';
import { Link } from 'gatsby';

const PostLink = ({ post }) => {
  const {
    frontmatter: { path, title, date, description, published },
    fields: { readingTime },
  } = post;

  const timeSince = (date) => {
    var seconds = Math.floor((new Date() - date) / 1000);
    var interval = Math.floor(seconds / 31536000);

    interval = Math.floor(seconds / 86400);
    if (interval >= 0) {
      return interval;
    }
  };

  const since = timeSince(new Date(date));

  return (
    <div className="post">
      <Link className="text-base" to={path}>
        <div className="text-2xl text-blog-primary transition-colors duration-500">
          {title}
        </div>
        <div className="text-blog-secondary text-base font-normal mt-3 transition-colors duration-500">
          {description}
        </div>
        <div className="text-blog-lightgray text-base font-light mt-3 mb-5">
          wrote on {date} &#183;{' '}
          <span>
            <span className="mr-2" role="img" aria-label="hourglass">
              ⏳
            </span>
            {readingTime.text}
          </span>{' '}
          {published && since < 35 ? (
            <span className="hidden sm:inline-block">
              &#183;&nbsp;
              <span className="new not-italic bg-blog-header px-2 rounded inline-block">
                New
              </span>
            </span>
          ) : (
            ''
          )}
          {!published && (
            <span className="hidden sm:inline-block">
              &#183;&nbsp;
              <span className="new not-italic bg-blog-header px-2 rounded inline-block">
                Draft
              </span>
            </span>
          )}
        </div>
      </Link>
    </div>
  );
};

export default PostLink;
