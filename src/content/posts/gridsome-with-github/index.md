---
path: '/gridsome-with-github'
date: '2019-05-06'
title: '💡 How Gridsome works with GitHub Pages'
description: 'Gridsome is Vue flavoured and a powerful static site generator. It’s the Gatsby alternative for...'
published: true
tags: ['gridsome', 'static-site']
---

[Gridsome](https://gridsome.org/) is Vue flavoured and a powerful static site generator. It’s the Gatsby alternative for Vue. It is data-driven meaning it uses a GraphQL layer to get data and dynamically update pages from it.

## Features of Gridsome

1. Fast by default ⚡️

1. It’s PWA ready 🚀

1. Prefetching 💪

1. Code Splitting done automatically ✂️

The quickest way to put Gridsome site to GitHub Pages is by using a package — [gh-pages](https://github.com/tschaub/gh-pages).

```bash
npm i gh-pages -D
```

Add a publish script to your package.json

```js:title=package.json
{
    "scripts": {
        "deploy": "gridsome build && gh-pages -d dist"
    }
}
```

In the gridsome-config.js, add your repository name as path prefix

```js:title=gridsome-config.js
module.exports = {
  pathPrefix: '/path',
};
```

When you run npm run deploy all the contents of the build folder will be pushed to your repository’s gh-pages branch.

### If you’re creating a User page

Create a repository named like _username.github.io_

**Note**: In this case you don’t need to specify pathPrefix and your website needs to be pushed to master branch.

```js:title=package.json
{
    "scripts": {
        "deploy": "gridsome build && gh-pages -d dist -b master"
    }
}
```

After running npm run deploy you should see your website at [http://username.github.io](http://username.github.io)

> _Run gh-pages — help to list all the supported options_

### Useful npm scripts for gh-pages

- If your source is in a private repository, create a public repository named about, the source code will reside in the private repository and the static content generated from the build will go into the public repository, add the repository name in gridsome.config.js

```js:title=package.json
{
    "scripts": {
        "deploy": "gridsome build && gh-pages -d dist --repo <url>"
    }
}
```

- Deploy to another branch [Not gh-pages]

```js:title=package.json
{
    "scripts": {
        "deploy": "gridsome build && gh-pages -d dist -b master"
    }
}
```
