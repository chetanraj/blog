---
path: '/nifty-npm-tips'
date: '2020-05-09'
title: '📝 Nifty npm tips'
description: 'Interactive cli tool that lists and run package.json scripts.'
published: false
tags: ['tips', 'npm']
---

### How to install

```bash:small=bash
  $ npm install -g ntl
```

### Usage

cd into a folder containing `package.json` or you can point the project folder containing a `package.json` file and then enter the command

```js live=true
ntl;
```

When specifying a project folder, the `ntl` command takes an additional path parameter

```bash
ntl /path-to-your/blog/
```

### Output

![](./ntl-demo.png)

### Features are
