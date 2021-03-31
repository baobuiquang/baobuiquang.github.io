---
layout: post
title: "Publish your package to npm"
date: 2021-03-25 20:00:00 +0700
author: "Bui Quang Bao"
authorlink: https://buiquangbao.github.io/
tags: technology web npm
series:
preview: "How to publish packages to npm (the way the industry does things)."
---

## 1. What is [npm](https://www.npmjs.com/)? Create an npm account.

`npm` is a package manager for the JavaScript programming language.

`npm` is the command line client that allows developers to install and publish packages - packaged modules of code.

`npm` is an [open source](https://github.com/npm) project and free to use.

Official website: **[npm](https://npmjs.com/)**

Documentation: **[npm Docs](https://docs.npmjs.com/)**

![NPM Landing Page](./post_img/npm/1-npm-landing-page.png)

Create an npm account at: **[Sign Up](https://www.npmjs.com/signup)**

Login: **[Login](https://www.npmjs.com/login)**

![NPM Sign Up](./post_img/npm/2-npm-sign-up.png)


## 2. What is [Node.js](https://nodejs.org/en/)? Download Node.js.

`Node.js` is an open-source, cross-platform, back-end JavaScript runtime environment.

`Node.js` is an [open source](https://github.com/nodejs) project and free to use.

Official website: **[Nodejs](https://nodejs.org/en/)**

Documentation: **[Nodejs Docs](https://nodejs.org/en/docs/)**

![NPM Landing Page](./post_img/npm/3-nodejs-landing-page.png)

Download Node.js at: **[Download Node.js](https://nodejs.org/en/download/)**

![Nodejs Download](./post_img/npm/4-nodejs-download.png)

## 3. Prepare your package

Put all your package's files in 1 folder

```
📁your-pkg-name
├── 📁your-pkg-name-01
├── 📁your-pkg-name-02
└── 📁your-pkg-name-03
```

Create a `package.json` file

```
📁your-pkg-name
├── 📁your-pkg-name-01
├── 📁your-pkg-name-02
├── 📁your-pkg-name-03
└── package.json
```

Edit the `package.json` file

``` json
{
    "name": "your-pkg-name",
    "version": "1.0.1",
    "description": "Write your package's description here.",
    "main": "your-pkg-name.js",
    "scripts": 
    {
        "test": "echo \"Error\" && exit 1"
    },
    "keywords": 
    [
        "your-package-keyword"
    ],
    "author": "Your Name Here",
    "license": "MIT"
}
```

## 4. Publish your package

<style>
.youtube {
    width: 100%; height: 46.87vw;
    border: none; background: transparent;
} @media only screen and (min-width: 768px) {
    .youtube {
        width: 42vw; height: 23.625vw;
    }
}
</style>
<iframe class="youtube"
src="https://www.youtube.com/embed/lxxndOskI1o" 
frameborder="0" 
allow="accelerometer; encrypted-media; gyroscope; picture-in-picture" 
allowfullscreen></iframe>

Open command line and navigate to your package's folder

```
cmd
```

Login your npm account

```
npm login
```

Note that when you input the password, there is no clue show that you are typing. This will be confused if this is the first time you use the command line.

Initialize npm package manager

```
npm init
```

If you have prepared your package, all you need to do is just enter.

Finally, type

```
yes
```

Publish your package

```
npm publish
```

If you see the line

```
+ your-pkg-name@1.0.1
```

your package has been published on npm successfully!

If there is any error, you should:

* Check your package's name, it maybe used by other user (for example: you can't name your package `react` or `vue`). In this case, you should change your package's name, or publish your package under your name or organization's name.
* Check your folder's structure, `package.json` file.
* Check your npm account.