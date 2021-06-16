---
layout: post
title: "What is Docker?"
date: 2021-06-10 07:00:00 +0700
author: "Bui Quang Bao"
tags: technology what
series: WHAT
thumbnail: "../post-img/thumbnail/what-docker.png"
preview: "Docker is a tool that can package software into containers that run reliably in any environment. Let's imagine you built an app with Cobol that runs on some weird flavor of Linux. You want to share this app with your friend but he has an entirely different system, so the problem becomes."
---

Docker is a tool that can package software into "containers" that run reliably in any environment. 

But what is a container? And why do you need one? 

Let's imagine you built an app with Cobol that runs on some weird flavor of Linux. You want to share this app with your friend but he has an entirely different system, so the problem becomes. How do we replicate the environment our software needs on any machine? 

One way to package an app is with a virtual machine, where the hardware is simulated then installed with the required OS and dependencies. This allows us to run multiple apps on the same infrastructure. However, because each VM is running its own operating system, they tend to be bulky and slow. 

A docker container is conceptually very similar to a VM with one key difference. Instead of virtualizing hardware, containers only virtualize the OS or in other words, all apps or containers are run by a single kernel, and this makes almost everything faster and more efficient. 

There are three fundamental elements in the universe of docker: the docker file, the image, and the container. 

The docker file is like DNA. It's just code that tells Docker how to build an image which itself is a snapshot of your software along with all of its dependencies down to the operating system level. 

The image is immutable and it can be used to spin up multiple containers which is your actual software running in the real world. Create a docker file and use from to start from an existing template like Ubuntu.

```docker
FROM ubuntu:20.04
```

This base image gets pulled down from the cloud, and you can also upload your own images to a variety of different docker registries. From there, you might want to use `run` to run a terminal command that installs dependencies into your image. 

```docker
RUN apt-get install sl
```

You can set environment variables and do all kinds of other stuff, then the last thing you'll do is set a default command that's executed when you start up a container. 

```docker
ENV PORT=8080

CMD ["echo", "Oh yeahhhhhhhhh!!!"]
```

And now we can create the image file by running the docker build command.

```
docker build -t mydockerapp ./pathtodockerfile
```

It goes through each step in our docker file to build the image layer by layer. 

We can then bring this image to life as a container with the `docker run` command.

```
docker run mydockerapp
```

As your app demands more resources you can run it on multiple machines, multiple clouds, on-prem or wherever you want reliably.