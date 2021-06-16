---
layout: post
title: "What is Angular?"
date: 2021-06-10 07:00:00 +0700
author: "Bui Quang Bao"
tags: technology what
series: WHAT
thumbnail: "../post-img/thumbnail/what-angular.png"
preview: "Angular is a TypeScript-based framework for building user interfaces. It was developed at Google and released in 2016 as the sequel to AngularJS. As an Angular developer, you hit the ground running with its extremely powerful CLI tool. When you generate your initial application, it comes pre-configured with routing a testing framework and your favorite style preprocessor."
---

Angular is a TypeScript-based framework for building user interfaces. It was developed at Google and released in 2016 as the sequel to AngularJS. 

As an Angular developer, you hit the ground running with its extremely powerful CLI tool.

```
ng new my-app
```

When you generate your initial application, it comes pre-configured with routing a testing framework and your favorite style preprocessor. 

In addition, the magic `ng add` command can turn your app into a progressive web app, add server-side rendering, firebase support, and do a whole bunch of other cool stuff.

```
ng add @angular/pwa
```

```
ng add @nguniversal/express-engine
```

```
ng add @angular/fire
```

But at its core, Angular is just a component-based UI library.

```
ng generate component navbar
```

We can create a component with the CLI and if we go into its TypeScript file, you'll notice the component decorator which makes this TypeScript class a component.

```jsx
import { Component } from '@angular/core';

@Component({
	//...
})
export class NavBarComponent {
	//...
}
```

Any properties on this class are considered reactive states, and when their values change, the component will re-render the UI. For example, we can bind the property to HTML using double braces in the template.

```jsx
import { Component } from '@angular/core';

@Component({
	selector: 'app-navbar',
	template: `
		<p> {{ count }} </p>
	`
})
export class NavBarComponent {
	count = 0; //State
}
```

From there, we can add a button that increments this value every time it's clicked. We add the event name on the left side in parentheses, then an expression on the right side. In this case, it points to a method in our class. Each time the button is clicked, it calls the method which changes the state and re-render the UI.

```jsx
import { Component } from '@angular/core';

@Component({
	selector: 'app-navbar',
	template: `
		<p> {{ count }} </p>
		<button (click)="addOne()">
			Add
		</button>
	`
})
export class NavBarComponent {
	count = 0;
	addOne() {
		this.count++;
	}
}
```

Angular also has a variety of directives for building complex templates.

Use `ngIf` to handle conditional logic.

```html
<!-- In Component -->
<p *ngIf="count >= 10"> {{ count }} </p>
```

Or if you have an iterable value, use `ngFor` to loop over it.

```html
<!-- In Component -->
<p *ngFor="let item of items"> {{ item }} </p>
```

But where angular really excels is handling complexity. And one of its primary tools for doing so is called dependency injection.

When your app grows to hundreds of components, you'll likely need a way to share data and functionality between them.

```
ng generate service count
```

We can take our component logic here and extract it into a service, which can be treated as a global singleton throughout the application.

```jsx
@Injectable({
	provideIn: 'root'
})
export class MyAddOneService {
	count = 0;
	addOne() {
		this.count++;
	}
}
```

Now any component that wants to use this state or logic can simply add this class to its constructor. The end result is a simple and reliable way to compose complex applications.