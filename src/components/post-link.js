import React from 'react';
import { Link } from 'gatsby';

const PostLink = ({ post }) => {
  const {
    frontmatter: { path, title, date, description },
    fields: { readingTime },
  } = post;

  const timeSince = (date) => {
    var seconds = Math.floor((new Date() - date) / 1000);  
    var interval = Math.floor(seconds / 31536000);

    interval = Math.floor(seconds / 86400);
    if (interval >= 0) {
      return interval;
    }
  }

  const since = timeSince(new Date(date));

  return (
    <div className="post">
      <Link to={path}>
        <div className="text-2xl text-blog-primary transition-colors duration-500">
          {title}
        </div>
        <div className="text-blog-secondary text-base font-normal mt-3">
          {description}
        </div>
        <div className="text-blog-lightgray text-base font-light mt-3 mb-5 italic">
          wrote on {date} &#183; <span>{readingTime.text}</span> {since < 35 ? <span className="hidden sm:inline-block">&#183;&nbsp;<span className="new not-italic bg-blog-header p-1 px-2 rounded opacity-50">New</span></span> : ''}
        </div>
      </Link>
    </div>
  );
};

export default PostLink;
