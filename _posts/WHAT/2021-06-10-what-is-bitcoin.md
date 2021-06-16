---
layout: post
title: "What is Bitcoin?"
date: 2021-06-10 07:00:00 +0700
author: "Bui Quang Bao"
tags: technology what
series: WHAT
thumbnail: "../post-img/thumbnail/what-bitcoin.png"
preview: "Bitcoin, a peer-to-peer electronic cash system, first described in a 2008 white paper authored by the mysterious Satoshi Nakamoto. The modern financial system relies on our trust of big centralized banks to hold our fiat currencies and execute transactions. But trust is a weakness that eventually requires intervention by lawyers and the government. "
---

Bitcoin, a peer-to-peer electronic cash system, first described in a 2008 white paper authored by the mysterious Satoshi Nakamoto. 

The modern financial system relies on our trust of big centralized banks to hold our fiat currencies and execute transactions. But trust is a weakness that eventually requires intervention by lawyers and the government. 

Bitcoin allows two parties to make reliable transactions based on cryptographic proof, eliminating the need for a trustee middleman. 

The optimists call it digital gold, the pessimists call it fool's gold. But in reality, it's just software. And like all software, its purpose is to arrange ones and zeros in a meaningful way. 

The protocol that makes it meaningful is blockchain, which allows two parties to engage in transactions denominated in Bitcoins. And just like dollars and cents, they have value because we believe they do. 

From a financial perspective, the blockchain is like a shared public ledger that contains all transactions from all Bitcoin users, and is distributed and synchronized around the world, which eliminates the need for a central authority to maintain and validate it. 

From a technical perspective, think of the blockchain as a database, structured as a linked list where each record or block represents a group of transactions that have been permanently committed to the database. It works kind of like a git repo that can never be rebased. The important thing is that each new block is linked to the previous one in the blockchain.

"Blockchain is just a Linked List but with salt."

Bitcoin's creation goes through a very strict set of cryptographic rules. Each user or wallet has a unique public key for receiving money, kind of like a username and a unique private key for spending money, kind of like a password. 

Before you can spend money, you'll need to prove that you're the owner of a public key that money has been sent to in the past. Each transaction contains a hash or encrypted representation of the previous transaction and the new owner's public key. The hash is then signed with the previous owner's private key, this makes it possible to validate the chain of ownership without the need to expose the private key. And the signature makes it virtually impossible to alter the transaction after it's been issued. 

But what if somebody tries to pay two different people with Bitcoin at the exact same time, or double-spend their money? 

That's where mining comes in, which is a system that allows multiple computers around the world to agree on the appropriate state of the entire system or ledger. 

Each new transaction is broadcast to all nodes in the network. The transactions are packaged into a block, then miners will expend computing power to validate proof of work. They compute a proof for a random problem that is very difficult to solve but very easy to verify. 

The first miner to solve the proof which happens via dumb luck gets a portion of the Bitcoin as a reward. The block is then broadcast back to all other nodes where it's permanently confirmed on the blockchain.