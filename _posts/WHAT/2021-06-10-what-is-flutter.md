---
layout: post
title: "What is Flutter?"
date: 2021-06-10 07:00:00 +0700
author: "Bui Quang Bao"
tags: technology what
series: WHAT
thumbnail: "../post-img/thumbnail/what-flutter.png"
preview: "Flutter, a UI framework for building apps on iOS, Android, web, and desktop. At its core, Flutter combines a high-performance graphics engine with the Dart programming language. In development, Dart provides full-type safety and stateful hot reload to help you build reliable apps quickly."
---

Flutter, a UI framework for building apps on iOS, Android, web, and desktop. At its core, Flutter combines a high-performance graphics engine with the Dart programming language. 

In development, Dart provides full-type safety and stateful hot reload to help you build reliable apps quickly. 

In production, Dart compiles to native machine code which means your graphics will render beautifully on any platform. 

Install Flutter, then run `flutter create` to create a new project.

```
flutter create mynewapp
```

Now open the `main.dart` file this is where you build your app. 

The UI is laid out like a tree of widgets. And the framework provides hundreds of pre-built widgets to handle things like animations, scrolling, responsive layout, and more. You can build your own widget by extending the stateless widget class, then define your UI by overriding its build method.

```dart
class MyNewApp extends StatelessWidget {

	@override
	Widget build(BuildContext context) {
		// Your new widget here
	}

}
```

It's important to understand that everything in Flutter is a widget. A method returns a widget, and its children return widgets, and their children return widgets, giving us an expressive declarative UI structure that you can easily traverse using Flutter's awesome tool. Whenever the input data to this widget changes flutter will rebuild the UI by calling your build method.

Stateless widgets are immutable and don't have any internal data.

```dart
class MyNewApp extends StatelessWidget {

	@override
	Widget build(BuildContext context) {
		return MaterialApp(
			home: Home(),
		);
	}

}
```

When you have an interactive widget where the internal data might change based on user input, you can extend a stateful widget.

```dart
class Home extends StatefulWidget {
	_HomeState createState() => _HomeState();
}

class _HomeState extends State<Home> {

	@override
	Widget build(BuildContext context) {
		return Scaffold(

		);
	}

}
```

Properties defined in a class can be reactive. For example, we might have a counter that starts at zero, then in our build method, we have one of Flutter's built-in buttons that cause a function whenever it's pressed. It increments the counter by calling `setState` which tells the framework that the widgets data has changed causing the UI to re-render with the latest data.

```dart
class Home extends StatefulWidget {
	_HomeState createState() => _HomeState();
}

class _HomeState extends State<Home> {

	int count = 0; //State

	@override
	Widget build(BuildContext context) {
		return Scaffold(
			body: FlatButton(
				child: Text('Button was pressed $count time(s)!'),
				onPressed: () {
					setState( () => count++ ); //Rebuild UI
				},
			),
		);
	}

}
```

You can now play with this app on a real device using the `flutter run` command.

```
flutter run
```

Let's make some changes. We'll go back to our source code and center the button in the middle of the screen. Instead of writing code, just click on the button and hit Ctrl Shft R, then wrap your button with a center widget. Next, change the color of the button and notice how flutter previews that color directly in your IDE.

```dart
return Scaffold(
	body: Center(
		child: FlatButton(
			color: Colors.blue,
			child: Text('Button was pressed $count time(s)!'),
			onPressed: () {
				setState( () => count++ ); //Rebuild UI
			},
		),
	),
);
```

To hot reload the app, simply type `R` into the command line. It only took a few milliseconds to build a new version of our app. And notice how the state of the counter was unchanged. That's what I like to call an awesome developer experience.