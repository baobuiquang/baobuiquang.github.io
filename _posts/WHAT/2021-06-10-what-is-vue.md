---
layout: post
title: "What is Vue?"
date: 2021-06-10 07:00:00 +0700
author: "Bui Quang Bao"
tags: technology what
series: WHAT
thumbnail: "../post-img/thumbnail/what-vue.png"
preview: "In Vue, you can start simple and then progressively add in the tools and features that you need to build a complex web application. At its core, it provides a way to build components, that encapsulate data or state in your JavaScript and then connect that state reactively to a template in HTML."
---

In Vue, you can start simple and then progressively add in the tools and features that you need to build a complex web application. At its core, it provides a way to build components, that encapsulate data or state in your JavaScript and then connect that state reactively to a template in HTML. 

```html
<template>
	<!-- UI elements -->
</template>

<script>
	<!-- data & logic -->
</script>
```

We call these components declarative Vue because the same data inputs will always produce the same output in the visual UI. 

When we declare data on this data object, it links or binds it to the HTML on the template above. When the value of the data changes, the component will automatically rerender, or in other words, it's reactive. 

```html
<template>
	<p>
		This blog has &lcub;{ views }} 👀
	</p>
</template>

<script>
	export default {
		data() {
			return {
				views: 0,
			}
		}
	}
</script>
```

And the framework does a ton of work under the hood to make sure that this process's performance across a huge component tree. 

We can work with this data in the template thanks to Vue HTML-based template syntax. We can interpolate a value for expression using double braces. And we also have a variety of directives to control the behavior of the HTML based on the data. 

We can use v-if to only render an element when the value on the right side is truthy. 

```html
<template>
	<p v-if="views > 0">
		This blog has &lcub;{ views }} 👀
	</p>
</template>
```

And then we might have a fallback element after that's only rendered when the values false with v-else. 

```html
<template>
	<p v-if="views > 0">
		This blog has &lcub;{ views }} 👀
	</p>
	<p v-else>
		Oh no, whyyyy 😥
	</p>
</template>
```

We can make the app interactive by listening to events. Using the v-on directive, we can listen to an event on an element, then run some code to handle that event on the right side. We can do that directly in the template or define a custom method and the components methods object.

```html
<template>
	<p v-if="views > 0">
		This blog has &lcub;{ views }} 👀
	</p>
	<p v-else>
		Oh no, whyyyy 😥
	</p>
	<button v-on:click="nextBlog()">
		Read more blog!
	</button>
</template>
```

The method has access to our reactive data, and that means all we have to do is change the value of the data and the component will automatically rerender.

```jsx
export default {
	data() {
		return {
			views: 0,
		}
	},
	methods: {
		nextBlog() {
			this.views++;
		}
	}
}
```

And that's all it takes to build an interactive reactive declarative UI component with Vue. 

The framework is loved by developers for its simplicity, but also its ability to scale up in complexity incrementally. Its plugin system allows you to easily drop in things like a router, state management, firebase support, and more.

```jsx
Vue.use(VueRouter)
Vue.use(Vuesax)
Vue.use(firestorePlugin)
Vue.use(Vuex)
```