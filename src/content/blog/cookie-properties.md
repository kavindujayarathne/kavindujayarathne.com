---
title: 'How Cookie Flags Actually Protect Your Sessions'
description: 'Breaking down the cookie flags that protect against XSS and CSRF'
pubDate: '2025-05-17'
tags: ['Web Security', 'Cookies']
---

Recently, I was messing around with how cookies work. Epecially from a security perspective. If
you’re into web hacking or just wanna see what’s really happening inside your browser, go to
DevTools → Application tab → open the Cookies section, and you’ll see a list of cookies for the
domain you’re visiting.

Now once you click on a domain (like github.com or whatever site you’re testing), you’ll notice a
bunch of columns for each cookie, things like Secure, HttpOnly, SameSite, etc.

This is what im going to talk about in this writing.

## Lets look at 'HttpOnly' first;

If a cookie has the HttpOnly flag enabled, that means JavaScript running inside the browser can’t
access this cookie via document.cookie.

Why does that matter? Because if someone pulls off an XSS attack (injecting JS into your site), they
can’t steal your session cookie if it’s marked HttpOnly. So yeah, this flag is a solid defense move.

If it’s **not set**, an attacker could easily run:

```js
document.cookie;
```

and you know what is going to happen next. Your session will be stolen.

## Now lets look at whats with 'secure' cookie property

This one’s simple. If the Secure flag is on, the cookie only gets sent over HTTPS, never on plain
HTTP.

It’s super important on public networks (like Wi-Fi) because without it, cookies might get exposed
in plaintext. Always use HTTPS and always mark sensitive cookies as Secure.

now, 'samesite' property; This flag controls whether your browser sends cookies during cross-site
requests. That includes when a different site tries to make requests to your logged-in session
somewhere else (classic CSRF attack vector).

It has a few modes:

- Strict – Cookies only go with same-site requests. Most secure, but might break some flows.
- Lax – Cookies are sent on top-level navigations (like clicking a link), but not on background
  requests.
- None – Cookies go with all requests, even from other sites. But if you use this, **you must set
  Secure=true**.

So depending on what kind of stuff your site is doing, this flag can make or break things. But from
a security perspective, Lax or Strict is generally safer.

## Here are my final thoughts

These cookie flags are small, but powerful. They can literally be the difference between a secure
app and a totally vulnerable one. If you’re building anything involving login/session logic, make
sure you understand what these do and why they matter.

And if you’re testing stuff, just try editing or removing cookies in DevTools and see what happens
after a refresh. It’s one of the best ways to learn.

More cookie stuff coming soon 🍪
