---
layout: post
title: "What is Kubernetes?"
date: 2021-06-10 07:00:00 +0700
author: "Bui Quang Bao"
tags: technology what
series: WHAT
thumbnail: "../post-img/thumbnail/what-kubernetes.png"
preview: "Kubernetes is a tool for managing and automating containerized workloads in the cloud. Imagine you have an orchestra. Think of each individual musician as a docker container. To create beautiful music, we need a conductor to manage the musicians and set the tempo. Kubernetes is the tool that orchestrates the infrastructure to handle the changing workload."
---

Kubernetes is a tool for managing and automating containerized workloads in the cloud. 

Imagine you have an orchestra. Think of each individual musician as a docker container. To create beautiful music, we need a conductor to manage the musicians and set the tempo. 

Now imagine the conductor as Kubernetes and the orchestra as an app like Robinhood. When the markets are closed, an app like Robinhood isn't doing much. But when they open it needs to fulfill millions of trades for overpriced stocks like Tesla and Shopify. 

Kubernetes is the tool that orchestrates the infrastructure to handle the changing workload. It can scale containers across multiple machines. And if one fails, it knows how to replace it with a new one. 

A system deployed on Kubernetes is known as a "cluster". 

The brain of the operation is known as the "control plane". It exposes an API server that can handle both internal and external requests to manage the cluster. It also contains its own key-value database called "ETCD", used to store important information about running the cluster. 

What it's managing is one or more worker machines called "nodes". When you hear node, think of a machine. 

Each node is running something called a "kubelet", which is a tiny application that runs on the machine to communicate back with the main control plane mother ship. 

Inside of each node, we have multiple "pods" which is the smallest deployable unit in Kubernetes. When you hear pod, think of a pot of whales or containers running together. 

As the workload increases, Kubernetes can automatically scale horizontally by adding more nodes to the cluster. In the process, it takes care of complicated things like networking, secret management, persistent storage, and so on. 

It's designed for high availability, and one way it achieves that is by maintaining a replica set, which is just a set of running pods or containers ready to go at any given time. 

As a developer, you define objects in YAML that describe the desired state of your cluster. For example, we might have an Nginx deployment that has a replica set with three pods. In the spec field, we can define exactly how it should behave like its containers, volumes, ports, and so on.

```yaml
apiVersion: apps/v1
kind: Deployment
metadata:
	name: nginx-deployment
spec:
	replicas: 3
	containers:
	- name: nginx
		image: nginx: 1.14.5
		ports:
		- containerPort: 80
		volumes:
		- name: my-volume-oh-yeah
```

You can then take this configuration and use it to provision and scale containers automatically and ensure that they're always up and running and healthy.