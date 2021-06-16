---
layout: post
title: "What is jQuery?"
date: 2021-06-10 07:00:00 +0700
author: "Bui Quang Bao"
tags: technology what
series: WHAT
thumbnail: "../post-img/thumbnail/what-jquery.png"
preview: "JQuery is by far the world's most popular Javascript library. Being found on over 80 percent of the world's top 1 million websites. That's more than four times the adoption of Angular, React and Vue combined. It was invented back in 2006 by John Resig before most of today's junior developers were even born."
---

JQuery is by far the world's most popular Javascript library. Being found on over 80 percent of the world's top 1 million websites. That's more than four times the adoption of Angular, React and Vue combined. 

It was invented back in 2006 by John Resig before most of today's junior developers were even born. He originally wanted to call it jSelect, but all the domains were taken. 

The popularity of jQuery is driven by a fundamental need in the web development market. We want to write less Javascript. Furthermore back in past, browsers had a bunch of interop issues. 

JQuery provided a single API to handle the edge cases across multiple browsers. It's so good in fact that browser vendors of today have standardized many of its features and ship them as native APIs. 

You can install it by finding the source code on the website, right-click to copy it, then open IDE and find all of the HTML pages. Paste it into a script tag on each one. Your Javascript now has access to the mighty dollar-sign function. 

It takes a selector as its argument, as a tag name class or id. It'll grab that HTML from the DOM, allowing you to perform actions on it. 

```jsx
$('.yourClass')
$('#yourId')
```

In the HTML, we have a list of items and we want to grab the first item.

```html
<ul>
	<li class="yourClass"> First item </li>
	<li class="yourClass"> Second item </li>
	<li class="yourClass"> Third item </li>
</ul>
```

In vanilla JS, we'd have to use this ridiculously long line of code to do so.

```jsx
document.getElementsByClassName('yourClass').item(0)
```

With jQuery, we can use the dollar sign to grab all the list items and then call `first()` to get the first one. It's easy and readable.

```jsx
$('.yourClass').first()
```

If we want to animate it, we can do that by simply chaining a method to it.

```jsx
$('.yourClass').first().fadeIn()
```

And we can chain more methods to it to register event listeners and all kinds of other fun stuff.

```jsx
$('.yourClass').first().fadeIn().click(doAction).css().remove()
```

Declarative framework developers love to fight each other about state management. While jQuery developers don't have this problem, because there's no data layer to worry about. Instead, you just start with an object, shade methods to it, and let the state manage itself.

When it comes time to extend jQuery, there's no need for insanely complex web pack bundling or npm packages. You can just extend its prototype with a plugin, and there's already a huge ecosystem of plugins to get things done quickly.

```jsx
// Plugin
$.fn.flamethrower = function() {
	this.text('Helloooooo!');
};
```

As an added bonus, once you've mastered jQuery, you can jump into jQuery mobile and start building native apps for Windows Phone and Blackberry. Developers of today sometimes make fun of jQuery, but that's just the stuff you have to deal with when you're the king of Javascript libraries.