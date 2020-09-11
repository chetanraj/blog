---
path: '/context-path'
date: '2020-03-28'
title: '🤔 What is context path ?'
description: 'The context path is the prefix of a URL path that is used to select the context(s) to which an incoming request is passed.'
published: true
hero_image: './context-path.png'
tags: ['javascript 💛']
---

The context path is the prefix of a URL path that is used to select the context(s) to which an incoming request is passed.

> _Context path is also known as sub-path or sub-directory_

Many apps are hosted at something other than the root (/) of their domain. For example, My personal blog is live at [https://chetanraj.in/blog](https://chetanraj.in/blog) or you can host your site on GitHub Pages at [https://example.github.io/blog](https://example.github.io/blog).

Each of these sites need a prefix added to all paths on the site. So a link to a blog which is having the slug “_/features-in-es6/”_ should be rewritten as “_/blog/features-in-es6._”

In addition to the slug of the blog, links to various resources (JavaScript, CSS, images, and other static content) need the same prefix, so that the site continues to function correctly when served with the path prefix in place.

For this to work, you need to specify the config according to them. This allows the built bundle to be deployed under that path.

### Here are some examples where you need to specify the context path before building your app.

## Create React App

```json:title=package.json
{
    ...
    "homepage": ".",
    ...
}
```

## Vue

```js:title=vue.config.js
module.exports = {
  baseUrl: '/blog',
};
```

## Gatsby

```js:title=gatsby-config.js
module.exports = {
  pathPrefix: '/blog',
};
```

NOTE: For Gatsby, you have to add `--prefix-paths` in your build command, like:

```bash
gatsby build --prefix-paths
```

If this flag is not passed, Gatsby will ignore your pathPrefix and build the site as if hosted from the root domain.

### For static files

Also, If you are serving the website from static files, then paste the sub-directory folder in the root folder. This will serve from the sub-directory.
