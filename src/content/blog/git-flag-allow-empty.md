---
title: '--allow-empty Git Flag (most people don’t know this exists)'
description:
  'I found this cool trick to add empty commits with no changes, and here I talk about it along with
  common use cases'
pubDate: '2025-05-16'
tags: ['Git', 'GitHub']
---

When it comes to git, there are so many useful flags that most people don’t even know exist. One of
them is `--allow-empty` flag. Let's talk about that in this writing.

Normally, we can’t create a commit without any changes in the git working tree. But I found this new
flag called `--allow-empty` which we can use in git to create a commit even if there are not changes
in the working directory or staging area.

Normally, we can't create a commit without any changes in the git working tree. But I found this
flag called `--allow-empty` which we can use in git to create a commit even if there are no changes
in the working directory or staging area.

Here’s how it looks:

```bash
git commit --allow-empty -m "Trigger graph update"

```

Just that. No changes in files. No staging. Just an empty commit with a message.

## Common Reasons to Use --allow-empty

Now here are some solid use cases I found when playing around with this:

**_1. To Trigger GitHub Contribution Graph_**

Sometimes GitHub doesn’t show your activity (those green boxes) if there’s no public commit pushed.
But if you’re having one of those days, you can just run an empty commit like this and push it. It
triggers the graph update.

```bash
git commit --allow-empty -m "Trigger graph update"
git push
```

I mean, if you are really concerned about those green little boxes in GitHub, you can use this flag
to get your square.

**_2. To Rerun CI/CD Pipelines_**

If you have GitHub Actions or any CI pipelines configured to trigger on push, and you just want to
rerun it without doing any code change, this is the move:

```bash
git commit --allow-empty -m "Rerun build"
git push

```

That’ll trigger your workflows again without touching anything.

**_3. Test Git Hooks / Automation_**

Let’s say you’re testing post-commit or pre-push hooks, or any kind of automation that runs on
commit. Instead of doing dummy file edits, just use this flag. You can keep your repo clean and
still trigger everything.

**_4. Mark Something in Git History_**

You might want to mark an event or a point in your project where something happened (even if there’s
no actual change).

Example:

```bash
git commit --allow-empty -m "Deployed to production"
```

or

```bash
git commit --allow-empty -m "Reached stable version"
```

And that’s it.

Just found this today and thought it’s cool enough to be shared.
