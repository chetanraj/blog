import React, { useState } from 'react';
import { Link } from 'gatsby';
import useSound from 'use-sound';

//! Sounds
import boopSfx from '../../sounds/switch-on.mp3';

const Header = props => {
  const { title } = props;
  const [play] = useSound(boopSfx);
  const [theme, setTheme] = useState('light');

  const themeChangeIconPos = title ? 'fixed' : 'absolute';

  const toggleTheme = () => {
    if (theme === 'light') {
      document.body.className = 'dark';
      setTheme('dark');
    } else {
      document.body.className = 'light';
      setTheme('light');
    }
  };

  return (
    <header className="bg-blog-header h-64 relative">
      <div className="flex flex-col items-center h-64 hero-text justify-center text-center text-blog-bg relative z-10">
        <div className="text-2xl w-3/4 transition-colors duration-500">
          {title ? title : 'Blog by Chetan Raj'}
        </div>
        {!title && (
          <div className="text-lg font-light md:w-2/5 lg:w-3/5 xl:w-2/5 mt-4 mx-6 lg:mx-0 md:mx-0 transition-colors duration-500">
            Web Designer & Developer,{' '}
            <a
              target="_blank"
              rel="noopener noreferrer"
              href="https://www.instagram.com/javascriptessentials/"
              className="underline"
            >
              Tech Instagrammer
            </a>
            , Music, Movies, Gadgets, Iron Man & Batman lover.
          </div>
        )}
      </div>
      <span className="text-blog-bg home">
        {!title ? (
          <a className="pointer transition-colors duration-500" href="https://chetanraj.in">HOME</a>
        ) : (
          <Link className="pointer transition-colors duration-500" to="/">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
              className="feather feather-arrow-left"
            >
              <line x1="19" y1="12" x2="5" y2="12" />
              <polyline points="12 19 5 12 12 5" />
            </svg>
          </Link>
        )}
      </span>
      <button
        className={`${theme} cursor-pointer z-20 ${themeChangeIconPos}`}
        title={theme}
        onClick={toggleTheme}
        onMouseUp={() => {
          play();
        }}
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="24"
          height="24"
          viewBox="0 0 24 24"
          fill="none"
          stroke="#fff"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
          className="theme"
        >
          {theme === 'light' ? (
            <path d="M21 12.79A9 9 0 1 1 11.21 3 7 7 0 0 0 21 12.79z"></path>
          ) : (
            <>
              <circle cx="12" cy="12" r="5"></circle>
              <line x1="12" y1="1" x2="12" y2="3"></line>
              <line x1="12" y1="21" x2="12" y2="23"></line>
              <line x1="4.22" y1="4.22" x2="5.64" y2="5.64"></line>
              <line x1="18.36" y1="18.36" x2="19.78" y2="19.78"></line>
              <line x1="1" y1="12" x2="3" y2="12"></line>
              <line x1="21" y1="12" x2="23" y2="12"></line>
              <line x1="4.22" y1="19.78" x2="5.64" y2="18.36"></line>
              <line x1="18.36" y1="5.64" x2="19.78" y2="4.22"></line>
            </>
          )}
        </svg>
      </button>
      <div className="bg"></div>
    </header>
  );
};

export default Header;
