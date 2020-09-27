import React from 'react';

export default function footer() {
  return (
    <footer className="bg-blog-header">
      <div className="p-6 sm:flex justify-between items-center">
        <div className="left pt-6">
          <a
            className="text-2xl text-blog-bg pointer transition-colors duration-500"
            href="https://chetanraj.in"
          >
            Chetan Raj
          </a>
          <div className="opacity-50 text-blog-bg pointer transition-colors duration-500 pt-16 hidden sm:block md:block lg:block xl:block">
            &copy; Chetan Raj. All Rights Reserved.
          </div>
        </div>
        <div className="right pt-10 sm:pt-0 flex">
          <div className="pr-20 social">
            <h4 className="opacity-50 text-blog-bg pointer transition-colors duration-500">
              Social
            </h4>
            <div className="grid grid-cols-1  pt-4 w-full">
              <a
                className="text-blog-bg pointer transition-colors duration-500"
                href="https://twitter.com/chetan_raj"
              >
                Twitter
              </a>
              <a
                className="text-blog-bg pointer transition-colors duration-500 pt-2"
                href="https://github.com/chetanraj"
              >
                GitHub
              </a>
              <a
                className="text-blog-bg pointer transition-colors duration-500 pt-2"
                href="https://www.instagram.com/thecjstream/"
              >
                Instagram
              </a>
            </div>
          </div>
          <div className="links">
            <h4 className="opacity-50 text-blog-bg pointer transition-colors duration-500">
              Links
            </h4>
            <div className="grid grid-cols-1  pt-4 w-full">
              <a
                className="text-blog-bg pointer transition-colors duration-500"
                href="https://snpt.netlify.app/"
              >
                <span className="mr-2" role="img" aria-label="laptop">
                  💻
                </span>
                Snpt
              </a>
              <a
                className="text-blog-bg pointer transition-colors duration-500 pt-2"
                href="https://esexplorer.netlify.app/"
              >
                <span className="mr-2" role="img" aria-label="magnifying glass">
                  🔍
                </span>
                ES Explorer
              </a>
              <a
                className="text-blog-bg pointer transition-colors duration-500 pt-2"
                href="https://www.instagram.com/javascriptessentials/"
              >
                <span className="mr-2" role="img" aria-label="globe">
                  🌏
                </span>
                JavaScript Essentials
              </a>
            </div>
          </div>
        </div>
        <div className="opacity-50 text-blog-bg pointer transition-colors duration-500 pt-16 block sm:hidden md:hidden lg:hidden xl:hidden">
          &copy; Chetan Raj. All Rights Reserved.
        </div>
      </div>
    </footer>
  );
}
