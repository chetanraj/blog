---
path: '/nodemon-auto-reload'
date: '2016-06-21'
title: '🔃 Using nodemon for auto-reload of server after code change for node.js applications'
description: 'The compose utility in the styled-system is used to combine multiple style functions together into one'
published: true
tags: ['node']
---

Was a newbie to node.js, whenever I make a change in the code, In the terminal i used to keep on hitting Ctrl+C and then Up Arrow and restart the server.

After few days, found out [nodemon](https://github.com/remy/nodemon), basically nodemon monitors any code changes in your node app and it automatically restarts the server.

### Steps to use nodemon in any node app

```bash
npm install -g nodemon
```

and

```bash
nodemon ./server.js localhost 3000
```

the port number is optional and app specific, if the application accepted a host and port as the arguments, then it’s yours.

nodemon also supports running and monitoring [coffee-script](http://coffeescript.org/) apps

```bash
nodemon server.coffee
```

NOTE: If no script is given, nodemon will look for the package.json file and if exists, the nodemon will run the file associated with the main property.
