---
layout: post
title: "What is React?"
date: 2021-06-10 07:00:00 +0700
author: "Bui Quang Bao"
tags: technology what
series: WHAT
thumbnail: "../post-img/thumbnail/what-react.png"
preview: "React is a Javascript library for building user interfaces. Developed at Facebook and released in 2013 it's safe to say React has been the most influential UI library of recent memory. We use it to build components that represent logical reusable parts of the UI. The beauty of React is that the simplicity of building a component has been brought down to its theoretical minimum."
---

React is a Javascript library for building user interfaces. Developed at Facebook and released in 2013 it's safe to say React has been the most influential UI library in recent year.

We use it to build components that represent logical reusable parts of the UI. 

```jsx
<Header>
	<Logo icon="😎">
	<Title text="React.js is awesome!">
	<Action onClick={ () => followMeOnGithub() } />
</Header>
```

The beauty of React is that the simplicity of building a component has been brought down to its theoretical minimum. It's just a Javascript function. The return value from this function is your HTML or UI which is written in a special syntax called "JSX", allowing you to easily combine Javascript with HTML markup.

```jsx
function Item() {
	return <p>Hi, my name is Bao!</p> //JSX
}
```

If you want to pass data into a component, you simply pass it a props argument, which you can then reference inside the function body or in the UI using braces. If the value changes, React will react to update the UI.

```jsx
function Item(props) {
	return <p>Hi, my name is {props.text}!</p>
}
```

```jsx
<Item text="Bui Quang Bao"/>
```

If we want to give our component its own internal state, we can use the "state hook". The "hook" is just a function that returns a value as well as a function to change the value.

```jsx
import {useState} from 'react';

function Item() {
	const [count, setCount] = useState(0);

	return <>
		<p>{count}</p>
		<button onClick={ () => setCount(count + 1)}>
			Add
		</button>
}
```

In this case, `count` is our reactive state and `setCount` will change the state. When used in the template, the `count` will always show the most recent value. Then we can bind `setCount` to a button click event, so the user can change the state.

React provides a variety of other built-in hooks to handle common use cases.

But the main reason you might want to use React is not the library itself, but the massive ecosystem that surrounds it. React itself doesn't care about routing, state management, animation, or anything like that. Instead, it lets those concerns evolve naturally within the open-source community. No matter what you're trying to do, there's very likely a good supporting library to help you get it done.

View the list [Awesome React](https://github.com/buiquangbao/awesome-react) that I've forked from [enaqx](https://github.com/enaqx).

Need a static site, you have [Gatsby](https://www.gatsbyjs.com/). Need server-side rendering, you have [Next.js](https://nextjs.org/). For animation, you have [React-Spring](https://react-spring.io/). For forums, you have [Formik](https://formik.org/). State management, you've got [Redux](https://redux.js.org/), [Mobx](https://mobx.js.org/), [Flux](https://facebook.github.io/flux/), [Recoil](https://recoiljs.org/), [Xstate](https://xstate.js.org/), and more.

You have an endless supply of choices to get things done the way you like it.

As an added bonus, once you have React down, you can easily jump into React Native and start building mobile apps. And it's no surprise that knowing this little UI library is one of the most in-demand skills for front-end developers today.