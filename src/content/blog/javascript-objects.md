---
title: 'JavaScript objects: Memory references, clones, and gotchas'
description:
  'A deep dive into how JavaScript handles objects in memory, covering reference assignment, nested
  objects, shallow cloning with spread syntax, and the subtle gotchas that cause unexpected
  mutations'
pubDate: '2025-05-15'
tags: ['JavaScript']
---

When it comes to working with objects in JavaScript, there’s this one thing that can trip you up if
you don’t know how memory works under the hood.

## Object assignment by reference

Let’s say you have an object like this:

```javascript
const object1 = { name: 'Kavindu', age: 27 };
```

Now, if you do something like this:

```javascript
const object2 = object1;
```

Now both object2 and object1 are pointing to the same memory. This is called assigning by reference.
So if you add a new key to object2, it’ll also show up in object1.

Why?

Because both are referencing the same exact object in memory, it’s not a copy.

## Nested object reference

Now, this is a slightly different case:

```javascript
const object3 = { object1 };
```

This one is a nested object. So object3 looks like this:

```javascript
{
  object1: { name: "Kavindu", age: 27 }
}
```

But the important point here is: that inner object is still pointing to the original object in
memory. So if you modify that inner object, it will reflect in the original one too because again,
it’s by reference.

## Shallow Copy using Spread Syntax

Now comes the interesting part, cloning.

```javascript
const object4 = { ...object1 };
```

This uses the spread operator, and what it does is create a shallow copy of object. That means a new
object is created, and it gets the same keys and values from the original. But this time, it’s not
sharing the same memory location. It’s independent.

So if you change something in object4, the original object won’t be affected, unless one of the
properties is itself an object (like a nested object), then that part is still shared.

## TL;DR (For the nerds and memory geeks like me)

```javascript
const a = b; // reference copy (same memory)
const a = { b }; // nested ref (b inside a)
const a = { ...b }; // shallow copy (new memory, but shallow)
```

Knowing how memory reference works with objects will save you from so many bugs later on, trust me.
