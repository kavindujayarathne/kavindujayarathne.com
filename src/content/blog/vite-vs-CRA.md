---
title: 'Vite over Create React App (CRA): The React team deprecating Create React App for new apps?'
description:
  'React officially deprecated Create React App (CRA) in 2025. In this article, I dive into why CRA
  is no longer recommended, and why Vite is now the go-to tool for scaffolding new React projects.'
pubDate: '2025-02-16'
tags: ['Web Development', 'Frontend', 'React', 'Vite']
---

If you didn’t know guys, the React team has officially announced that Create React App(CRA) is
deprecated as of February 2025 and is no longer recommended for starting new React projects. Instead
of using CRA, they are recommending some other modern build tools such as Vite, Parcel, RSBuild, or
something like that.

You can read the original blog article published by the React team[^1].

[^1]: [Sunsetting Create React App](https://react.dev/blog/2025/02/14/sunsetting-create-react-app)

If you remember, back in the day, we didn’t have many options. The most preferred and traditional
go-to scaffolding way of starting a React project was using Create React App. If you’ve been around
React development for a while, then you might be familiar with this CRA thing we used for years.

Now what do you think? What would be able to take that baton from CRA? There are many other build
tools for React apps, even the React team is recommending tools like Vite, Parcel, RSBuild, and so
on. But the thing is, they’re not all scaffolders, except Vite.

A scaffolder is a tool that gives you an entire project structure. It already has React, ReactDOM,
and all the other relevant plugins installed, has added some sensible defaults, provides built-in
scripts, and also includes templates for different projects.

It basically hides all the complexity and gives a zero-config environment for developers. If you
don’t want your project structure to be a heavily customized one, then the best simple approach to a
React app would be using a scaffolder.

When it comes to build tools such as Parcel, RSBuild, and stuff like that, they are not scaffolders,
they’re just build tools. Which means: just the engine. They don’t create any folder structure,
pre-install plugins, or provide templates and such. If you want to build a fully customized project
structure with a lot of manual work and take full control over everything, then you should go for
something like Parcel or RSBuild (for advanced users) or something like that.

If you want to have a full go-to scaffolding way to start a React project, like we did before with
CRA, one of the best tools you can use now is Vite.

So I’m not going to talk about Parcel, RSBuild, or such tools in this article. Here I’m going to
talk about the differences between CRA and Vite. Let’s understand what could be the reason for the
React team to deprecate CRA, and as devs, let’s see what we have in Vite when we use that for future
React development.

## What they are used for?

Both Vite and CRA are tools that give us a starting template, or you can call it a zero-code
structure, to start with a React app.

That includes:

- A dev server
- Live reloading
- Support for JSX and modern JavaScript (ES Modules)
- Build tooling
- Static bundling for production deployment

Such things which make the development much easier.

Then how exactly do these tools differ from one another?

That’s very simple. On the outside, they give similar facilities, but under the hood, they operate
in very different ways.

## Bundlers and Dev Servers

CRA uses Webpack as the bundler, which is a powerful but older bundler. It was a game-changer in the
early days of web development. But when compared with today’s bundlers, it feels a bit slow.

And when it comes to the dev server in CRA, every time you make a change, it bundles everything
before it serves that on the web browser. That causes a rebuild of the entire dependency tree each
time. Because of this, you might experience some slow startup time if you are working on a really
big project when the app grows.

Vite has a completely different approach to this. Vite uses native ES modules + Rollup for bundling.

For example, in your app, if the homepage only imports Home.js and Nav.js, Vite compiles just those
files. It doesn’t waste time compiling Settings.js or Dashboard.js until it’s necessary.

Because of that selective compiling, you get near-instant cold starts when launching the dev server,
and Hot Module Reloads (HMR) when making changes during development.

Because of this, Vite has a buttery smooth dev experience.

## Configuration and Extensibility

Both Vite and CRA hide the configuration files from the developers by default. That means both these
tools are designed to let the developer start building the app without worrying about managing
configuration files such as Webpack configs, Babel, or PostCSS. Whether it’s Vite or CRA, the tool
manages them for you by itself. It’s called the ‘zero-config philosophy’, as in, ‘let us handle all
the configurations and build process for you, so you can focus more on coding the app’, sort of a
thing.

But when we move along with the project, sometimes, you know, we might need to modify the build
process, like adding a custom plugin, modifying the way files are handled, changing aliases or
environment behaviour, and so on.

This is where the differences between CRA and Vite actually become a thing.

When it comes to CRA, all the config is hidden inside a package called react-scripts.

In case you ever wanted to do some modification to some of the settings, you know, like it could be
in Webpack, or it could be Babel, or it could be any other thing, First, you have to run the below
command to eject the config files…

```JavaScript
npm run eject

```

Before I said, all the configs are hidden inside a package called react-scripts.

What this command does is, when you run it, it ejects all the configuration files from that
react-scripts package and dumps all of them into the root of the project.

From that point forward, you have to manage all the configs on your own. Because CRA no longer
manages your config files for you after the eject happens.

One good thing is, this eject thing gives you full control over your configs. As a result of now you
are managing all your configs.

As we already know, everything has pros and cons.

So the downside is, sometimes this becomes a cause of config bloat and upgrade pain.

And this is a one-way ticket. That means, once you detach from the built-in config management in CRA
with that eject command, then there is no going back to the built-in mode, because there is no way
to undo that to the built-in mode.

When it comes to Vite, there is no need to eject anything. If you ever wanted any customization,
vite.config.js or vite.config.ts (depending on whether you use JavaScript or TypeScript) is already
created inside the root of your project structure by default. What you just have to do is simply
edit the file, and that’s it. By any chance, if the file doesn’t exist in the root of your project,
simply create the file and you can start editing it.

This file gives you full control over plugins, aliases, build options, server options, environment
variables, and all the other things. So you can opt-in gradually.

If you don’t need any customization, then you don’t even have to touch that Vite config file. It’s
that simple.

## Plugin Ecosystem and Extensibility

All right. Let’s talk about the plugin ecosystem and extensibility factor when it comes to CRA and
Vite.

This is something that we should really admit, Vite has a great plugin ecosystem and the most
fascinating fact is it’s growing really fast. And it integrates well with most of the other tools
out there like Tailwind, Preact, React, Astro, and more.

As a matter of fact, Vite is built on top of Rollup for production and ESBuild for development, and
both of which have plugin systems. But Vite has its own plugin API, and it’s simpler than Webpack’s,
easier to debug, and most importantly more aligned with modern frontend tools.

So if you want to use React, then you can use Vite’s React plugin and it handles JSX to JS
conversions and all. If you want to use Tailwind CSS, then it has first-class support in Vite. If
you want markdown files as components, then we have vite-plugin-md in Vite. If you want to use Vue,
Astro, Svelte or anything like that, it all has official and community-driven plugins.

When it comes to CRA, it also has plugin support, but the thing is, it’s not clean or direct,
especially without ejecting.

## TypeScript and JSX Support

In feature support-wise, there is no real difference between Vite and CRA. Both Vite and CRA support
TypeScript, understand JSX/TSX files, and can compile .tsx files and run them in the browser. So
both can handle React + TypeScript without any extra hand.

But the way they handle TypeScript underneath is quite different from each other in approach,
depending on two factors, which are speed and safety.

Vite’s approach prioritizes speed, and CRA’s approach prioritizes safety.

Vite is backed by esbuild during development, which is super fast, but the thing here is, it doesn’t
perform full type checking; it only performs transpilation. That’s what makes it fast though.

So if you want Vite to perform full type checking for type errors, then you would have to run a
separate process:

```bash
tsc --noEmit

```

CRA, on the other hand, uses Babel + TypeScript and performs type checking on every build and save,
and yeah, as you already know, it makes CRA’s approach slow but safer.

## Community and Growth

CRA has a huge community and there are so many tutorials and projects built with it, because CRA has
been around so long.

But Vite is growing and catching up really fast. And most of the other frameworks have taken some
influence from the concepts in Vite.

When it comes to CRA, it’s quite outdated and it’s no longer evolving.

## React Team Deprecates CRA: Final thoughts

I think this is one of the major shifts that has happened in the React ecosystem, and it’s not
something that happened suddenly. That shift's been happening for quite a while among devs.

If you’ve read this far, you probably understand why.

I mean, it’s not a big deal in the domain we’re in. It doesn’t matter how much experience you have.
Every day there is something new that we have to learn in this domain. And I find it pretty
interesting, and I hope you do too.

The only way we can keep up with all these changes is by staying up to date with all the modern
technologies and understanding their pros and cons.
