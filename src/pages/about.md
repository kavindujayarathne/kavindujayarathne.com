---
layout: ../layouts/AboutLayout.astro
title: About | Kavindu Jayarathne
description:
  Learn more about Kavindu Jayarathne, a Computer Science enthusiast who loves to build and break
  things.
---

## Hello, I'm Kavindu

This isn’t just a typical “About Me.” It’s a personal timeline, a collection of everything I’ve
explored, struggled with, built, and understood in my own way. This includes four chapters that
reflect how it all began for me. They don’t capture everything I’ll ever learn, but they shaped the
foundation. What comes next will be built on top of this.

## Chapter 1

Chapter one starts from the university. University was my starting point for all kind of computer
related things. I first started with Java. That was the first programming language I learnt. Back
then, I had just started. I didn’t even know what programming was — let alone the languages. But I
kept going.

I came across these fundamental concepts of programming through university modules like Data
Structures and Algorithms (DSA), Object-Oriented Programming (OOP), Design Patterns, Software
Development Lifecycle (SDLC) methodologies, and so on. So, I started learning them.

Alongside that, I also learned fundamental concepts of mathematics that are closely related to
computing. Then I was exposed to the programming language Python in the middle of my university
time. That was because there was a module for Artificial Intelligence. That was where, for the first
time, I got an idea about how to train a machine by feeding data.

Last semester was quite intense. We had to write some scripts in C involving multithreading and GPU
acceleration with CUDA. I wrote a script to hash a four-character password (two capital letters and
two numbers) using a salt, and then created another script to brute-force and match that hash. This
task gave me a lot of insights.

It was where I first started to understand how password security works. I realized that hashing is a
one way process that you can’t reverse it like encryption. So instead of decrypting, you have to
guess and hash again to see if it matches.

Another thing I realized was about how we, as beginner web developers, usually handle login pages.
We often just store raw passwords in the database and write logic to check if the typed password
matches what’s stored. But what if the database gets hacked? The attacker would easily see all the
sensitive information. That’s when it hit me that we should store the hashed version of the password
instead. Then, during login, we can hash the typed password the same way and compare it with the
stored hash. I got that whole idea while working on those hashing scripts.

I had the opportunity to do some Android development as well using Java. It was a simple blog
application where users could post blog articles with or without an attached image. The main
requirement was that it should work both online and offline. Users needed to be able to upload or
delete posts whether they were connected to the internet or not. If someone tried to upload or
delete a blog article while offline, the changes had to be applied locally first. Then, once the
user reconnected to the internet, those changes would sync globally.

To achieve that, I had to use two databases. A local database and a cloud database. It was a bit
tricky, but overall it was a great experience. I also learned a lot about debugging while working on
that application.

I should also mention my final year research project. That was where I learned a lot about both
research writing and web development. I didn’t have much experience with web development back then,
but I still managed to complete the project.

University was the place where I was exposed to most of the fundamental concepts and technologies.
That was where I began to love computer science and developed a strong enthusiasm for it. I finally
graduated with First Class Honours in Computer Science (Software Engineering). This is the end of
Chapter One.

## Chapter 2

Chapter Two starts with an exploring mind. Like I said before, during university I was exposed to
different domains in computer science. I wanted to start from somewhere, so I chose web development.

At the beginning, it was pretty overwhelming with all the technologies out there. But I just started
with HTML, CSS, and JavaScript, building simple projects without jumping straight into frameworks,
libraries, or any complex tech. I went with plain HTML, vanilla CSS, and vanilla JavaScript.

Why? Because I wanted to understand the reason behind all the technologies that have been invented
over time. I also wanted to get hands-on experience with what early developers had to go through.

In my opinion, every technology is invented for a reason, and I wanted to find those reasons, so I
could better understand how to use those tools efficiently in solving problems.

What I believe is, programming isn’t just about coding or using a bunch of technologies. It’s about
solving problems. Coding and using tools is just a part of that process.

Over time, I started facing some issues. When the projects got bigger, the codebase became messier
and harder to manage. Even for simple UI interactions, I had to write a lot of code.

I ran into problems with the DOM (Document Object Model) as well. When using vanilla JavaScript, I
had to deal with the real DOM directly, which isn’t efficient when the project gets bigger. I had to
manually handle the states, UI updates, routing, and there was a lot of repeated code because I
didn’t have components or templates. All of this manual work became a serious problem as the project
size increased.

But going through that helped me a lot. It gave me a better understanding of modern web tools and
why they exist. That experience became the training for me to pick the right tool at the right time,
but with a solid understanding of how things work underneath.

So I kept learning.

And then out of nowhere I broke my laptop. I don’t know whether to call it a good thing or a bad
thing. You will find the reason for that doubt in the next chapter.

But with that, Chapter Two of my journey comes to an end.

## Chapter 3

I had the opportunity to move to a MacBook. It was my first time using macOS. So this is the
beginning of Chapter Three.

macOS is built on top of UNIX foundations. Unix and Linux are quite similar in structure. I started
learning about Unix/Linux commands, file structure (there are some differences between Unix and
Linux when it comes to the file structure, but mostly it’s similar), and I ended up spending most of
my time in the terminal. I got super comfortable with it and became familiar with most of the
Unix/Linux concepts.

At this time, I found a concept called dotfiles.

This is sort of a broader concept, but if I simply define what it is, it’s about building and
maintaining your own development environment. The way it has been configured, the flow, tools,
scripts, all of these things depend on the personal preferences of the developer. So it’s a unique
environment from developer to developer. Every developer is absolutely efficient in their own dev
environment.

I was exposed to a whole new world with this. I started learning about the terminal, terminal
emulators, shell scripting, different shell programs, different shell sessions, how to handle
environment variables under different shell settings, and a lot more.

Finally, I built an entire development environment for myself with all the tools, scripts, and
configurations, and managed to write full documentation for the repository and pushed it to GitHub.
[Click Here](https://github.com/kavindujayarathne/dotfiles) to check out my dotfiles.

I took a big shift here by replacing VS Code with Neovim, which is a terminal-based,
keyboard-centric editor, as my main IDE. This is where I became familiar with the Lua programming
language. All the configuration in my Neovim setup was written using Lua and followed its
modularization approach. That was also another experience I had.

A development environment is highly based on a keyboard-centric approach. It has a large ecosystem
with so many tools and applications. All these things have been developed to use common keyboard
navigations. That’s why I used the word ecosystem. In order to be efficient and comfortable with the
tools and settings inside a development environment, you should be good at touch typing, which I was
able to master during my university time. Otherwise, it’s not going to work.

The other thing was, for tools inside a development environment, there are no graphical user
interfaces. So we have to define their behavior as code inside configuration files. Even though I
mentioned them as code, these are more like structured data that define the settings, key bindings,
and behavior options.

Throughout this experience, I got some important insights.

Working on the development environment was where I learned and got an idea about different
configuration formats (.yaml, .toml, .json). I had a good amount of hands-on experience writing
them, because at that time I had written so many configuration files for different tools inside my
dev environment.

Later on, when I was exposed to DevOps tools and concepts like Terraform, Ansible and similar tools,
I came across the term Infrastructure as Code (IaC), and I immediately clicked with it. It felt like
an extension of what I was already doing, defining the behavior of different tools using
configuration files. It was like I was unknowingly practicing some DevOps practices. That could also
be a reason for my tendency towards DevOps.

I’ve tried to understand Docker containerization concepts before, but it didn’t work, and I didn’t
really get the real use case of them. This was the moment when I finally got a clear idea about
Docker containerization as well.

And in most places where we need to configure things, like in web development too, we need those
configuration files. So it was a great experience that I had to work with them throughout the
process of building my dev environment.

Before I wrap up this chapter, I should mention this as well, I created a structured note system
using Notion that works as a second brain for all my dev-related work. Important keybindings related
to different tools, code snippets, some commands, notes and sketches I take, different concepts that
I learn, and so many other things have been documented there for ease of work in a structured
manner.

This chapter was mostly about building a core structure for myself that would support me in the long
run. And it helped me to grasp some common patterns in computer science and how the same strategy
has been applied in different places.

This is one of the main chapters of my journey where I learned a ton of things. With that, I mark
the end of this chapter.

## Chapter 4

Chapter Four starts with the idea of learning about domains. I started digging into domains and
subdomains, and then I came across DNS, DNS providers, DNS resolvers, DNS records, authoritative
name servers, domain registrars, and so on.

This was where I learned about pointing the apex domain to the IP address of a server using an ‘A’
DNS record, and pointing the ‘www’ subdomain to a server using a 'CNAME' record, those kinds of DNS
management tasks. I also learned how to change the nameservers from one DNS provider to another.

I wanted to dive a bit deeper into DNS, and I broke down the DNS resolution process step by step,
from first sending the request to root servers, then to TLD servers, then to authoritative
nameservers, and finally resolving the IP address of the server and sending the response back to the
user’s device to load the web server in the browser.

I kept going with the flow and ended up learning all the fundamental networking concepts from how
devices communicate on a network, to how data flows through each layer of the TCP/IP and OSI models.
I started understanding things like IP addressing, DHCP servers, MAC addresses, ARP, routing,
switching, ports, port forwarding, VPN, Proxy, Proxychains, protocols, and how everything fits
together across all the network layers from the physical layer up to the application layer.

After that, I created a cybersecurity lab inside virtual machines and started simulating some real
world networking scenarios with user machines, a software based router like pfSense, a Ubuntu
server, some Active Directory setups, and stuff like that.

Networking is the best way to understand how everything is connected throughout the internet, and
how the internet actually works.

The knowledge I gained through all those networking experiences has helped me a lot ever since I
learned them, especially when it comes to connecting the dots and seeing the bigger picture.

This is the last chapter. It has finally come to an end.

## Final words to the world

I appreciate it if you’re reading this far. It took me exactly a complete year to go through these
chapters, and I believe this will be the backbone for the rest of my journey in computer science.

What I want to say at the end is, keep loving what you’re doing. Sometimes in life, you might be
unable to do what you really want. If that’s the case, then do what you have to do with love and
passion toward it. That will eventually help you create an opportunity to do what you truly want in
life.

**Thank you**  
_Kavindu Jayarathne_
