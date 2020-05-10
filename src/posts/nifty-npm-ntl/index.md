---
path: "/nifty-npm-ntl"
date: "2020-05-09"
title: "📝 ntl - Node Task List - An interactive cli tool"
description: "Interactive cli tool that lists and run package.json scripts."
published: false
tags: ['nifty', 'npm']
---

### How to install

```bash
$ npm install -g ntl
```

### Usage

cd into a folder containing `package.json` or you can point the project folder containing a `package.json` file and then enter the command

```bash
ntl
```
<br />

```npm:title=Output
✔  Npm Task List - v3.2.1
? Select a task to run: (Use arrow keys)
❯ develop
  build
  format
  start
  serve
  clean
(Move up and down to reveal more choices)
```

When specifying a project folder, the `ntl` command takes an additional path parameter

```bash
ntl blog/
```