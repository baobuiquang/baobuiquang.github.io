---
layout: post
title: "What is SVG?"
date: 2021-06-10 07:00:00 +0700
author: "Bui Quang Bao"
tags: technology what
series: WHAT
thumbnail: "../post-img/thumbnail/what-svg.png"
preview: "Scalable vector graphics, or SVG, is an image format that's like HTML for 2D graphics. They differ from raster images like PNG or JPG that use a grid of tiny pixels to create an image. As you zoom in, the pixels become larger, making the image grainy. In contrast, a vector image can be scaled to any size without losing its resolution."
---

Scalable vector graphics, or SVG, is an image format that's like HTML for 2D graphics. 

They differ from raster images like PNG or JPG that use a grid of tiny pixels to create an image. As you zoom in, the pixels become larger, making the image grainy. 

In contrast, a vector image can be scaled to any size without losing its resolution. Because instead of fixed pixels, its appearance is based on geometry. 

You can create SVGs with tools like Figma or Illustrator, or by writing the code directly which is easier than you might think and opens the door to animation and interactivity. 

Create one by opening an `svg` tag, then define a coordinate system with the view box attribute. That gives us a frame with a width and height of 200 units on which we can draw graphics. Draw basic shapes by adding elements like rectangle, circle, and polygon. 

```html
<svg viewBox="0 0 200 200">
	<rect/>
	<circle/>
	<polygon/>
</svg>
```

Position the rectangle by defining its x-y value on the view box. Then give it a size, which can take values that are either explicit or responsive. We can change the color of the shape by defining its fill or define an outline with the stroke attribute.

```html
<svg viewBox="0 0 200 200">
	<rect
		x="10" y="10"
		width="50%" height="50"
		fill="white" stroke="black"
	/>
</svg>
```

If our styling gets too complex, we can extract everything into a separate CSS stylesheet by applying a class to it just like any HTML element.

We have the full power of CSS at our fingertips which means we can react to events on the shapes and then change their styling or animation accordingly.

But most graphics are more than just basic shapes, they contain complex artwork with all kinds of twists and turns. And that's where the path element comes in. The shape of a path is determined by one attribute `d` to draw.

```html
<svg viewBox="0 0 200 200">
	<path d="">
</svg>
```

Coding a path is like controlling the tip of a pen with a series of commands. The most basic command is `m` to move which will move the pen tip to an x y coordinate. An uppercase letter means to move relative to the view box and lowercase means move relative to the last point in the path. 

```html
<svg viewBox="0 0 200 200">
	<path d="M 20 20">
</svg>
```

But `m` doesn't actually draw anything. To put the pen tip down on the paper and draw something, use the `l` command. It works exactly like `m`, but draws a line that can be styled. 

```html
<svg viewBox="0 0 200 200">
	<path d="M 20 20 l 10 15 l -5 -10">
</svg>
```

Straight lines are cool, but what if we wanted to add a curve like we would with the handles in Figma or Illustrator? Create Bezier curves with the `C` (Cubic Bezier) and `Q` (Quadratic Bezier) commands. Define the position of two control points, then the x and y coordinates where the curve should end.

```html
<svg viewBox="0 0 200 200">
	<path d="M 20 20 C 20 80, 40 80, 50 60">
</svg>
```

Then SVG will automatically calculate a smooth curve for you at any scale.