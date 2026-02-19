---
title: 'My Confusion Around the Way Homebrew Handles Formulas on macOS'
description:
  "Homebrew is considered macOS's missing package manager. It has an unexpected behavior in how it
  links and locates some formulas. Here is my mental model of that."
pubDate: '2025-08-12'
tags: ['Homebrew', 'Self-Thoughts']
---

> **Disclaimer**  
> What I share here, these are just my thoughts and my mental model about this, so don’t take it too
> seriously. Sometimes, the way I talk about this might not be so accurate.

If you are a Mac user, as we already know, Homebrew is considered the missing package manager for
macOS.

Just to take a quick entry into what I’m going to talk about, there are two main things that we
install through Homebrew. We can install casks and formulas.

If you don’t know yet, all the formulas that we install through Homebrew live inside the
`/opt/homebrew/Cellar` location and from there, it links each formula’s binary to the
`/opt/homebrew/bin` location, which is the default binary location for Homebrew formulas, and it
creates another symlink of the version folder of the formula to the `/opt/homebrew/opt` location.
This is basically the normal way Homebrew behaves inside Apple Silicon Macs.

But if you have closely inspected, for some Homebrew formulas, it doesn’t link the binary of the
formula from `/opt/homebrew/Cellar` to the default binary location, which is `/opt/homebrew/bin`.
Instead, it just creates the symlink of the version folder of that installed formula to the
`/opt/homebrew/opt` location.

So if you want to use that binary inside your shell environment, Homebrew recommends that you
manually add this path `/opt/homebrew/opt/<formula-folder>/bin/<binary>` to your `$PATH` variable
inside your shell config file. Or you can simply use the brew link command and manually link the
binary to the `/opt/homebrew/bin` location. Otherwise, your shell doesn’t have any idea about the
binary of the formula that you are looking for. Homebrew only includes the default binary path
inside the `$PATH` variable by default. For anything outside, you have to manually add it to the
`$PATH` variable.

Here is the logic that I use inside the `.zshrc` file to add paths manually to the `$PATH` variable,
if it’s useful for someone.

```bash
# keg-only utils
typeset -U path PATH

prepend_paths=(
  /opt/homebrew/opt/curl/bin
  /opt/homebrew/opt/sqlite/bin
  # add as many as you want
)

path=($prepend_paths $path)
```

I just tried to figure out what the reason for this behavior is, because I couldn’t find any pattern
or logic about what kind of formulas face this behavior. At some point, I thought it was formulas
that already have a Mac-provided version of that same utility inside macOS that face this behavior.
Those Mac default utilities mostly live inside the `/usr/bin` location.

And I just checked it. But we can’t think in that direction either, because some of the Mac default
utilities, I have installed them again with Homebrew. As an example, let’s say rsync, which is
provided by Mac as a default utility but is outdated, so I installed it with Homebrew. So I’m using
the latest and greatest version of that utility inside my shell environment. So according to that
logic, the rsync binary shouldn’t have been linked to Homebrew’s default binary location. But its
binary has been linked to the default binary location of Homebrew even though it’s a system default
utility.

It’s just weird, right?

After a few rounds of research again, I found out that, as I thought earlier, this is something that
comes when we try to install a formula but macOS has already provided a version of that same utility
as a system utility under `/usr/bin`.

Wait… the formula that we are going to install with Homebrew, if Mac has already provided that same
utility, then why would we need to install it again with Homebrew?

All right, here is the thing, even though Mac has provided most of the general utilities like bash,
zsh, python, curl, and a lot more by default, most of them have outdated versions. That’s the
reason.

Back to where we stopped, now where the confusion lies is that it doesn’t affect every formula that
parallelly has a macOS-provided version of that same utility in `/usr/bin`. It only happens to the
formulas that have been flagged as keg-only by Homebrew.

> **Homebrew’s definition of keg-only**  
> keg-only means it was not symlinked into `/opt/homebrew`, because macOS already provides this
> software and installing another version in parallel can cause all kinds of trouble.

Homebrew doesn’t include this flag on every formula of that type, as I mentioned earlier. The
majority of formulas we can install as non-keg-only even though macOS already provides them under
`/usr/bin`. And another thing that I have noticed is that Homebrew removes this keg-only flag from
some of the formulas over time.

Now we know what this behavior is, and the point that causes this behavior is also so clear and
logical.

But now what I don’t understand is, it says “_installing another version in parallel can cause all
kinds of trouble_”, but how can it be a trouble and how can that trouble be avoided by just not
linking the binary of the formula inside the default binary location of Homebrew? And as Homebrew
recommends, exporting `/opt/homebrew/opt/<formula-folder>/bin/<binary>` manually to the `$PATH`
variable avoids that trouble? And what makes exporting it manually to the `$PATH` variable through
the shell config different from linking the binary to Homebrew’s default binary location? At the end
of the day, both linking its binary to the default binary location and exporting the path manually
do the same thing. Both come before `/usr/bin` in the `$PATH` variable, and inside the shell
environment in both ways it overrides the system-provided utility version.

None of this seems logical to me regarding how it can be a trouble. What I’m wondering about is what
can be avoided by just not linking the binary of the formula to the default binary location of
Homebrew for these types of formulas.

If linking the binary of this type of formula to the default binary location of Homebrew overrides
the macOS-provided version of that same utility system-wide, then that’s a trouble and it’s
understandable, because there could be a reason for these outdated versions of Mac-provided system
utilities. These system-provided utilities are the ones that are used for system processes, as I
know.

As an example, for the software update process, Mac uses curl underneath, and in this process Mac is
supposed to use the system-provided utility, not the Homebrew version of it. Let’s say the
Mac-provided curl version had been overridden by Homebrew’s latest version and what if that latest
version had some kind of a bug? Then the complete software update process could fail.

But there is no way linking the binary of the Homebrew-installed formula to the default binary
location can override the system version of that same utility.

Those binaries live in separate locations. The system binary is located in `/usr/bin` and the
Homebrew-installed version’s binary is located in `/opt/homebrew/bin`. Which binary’s path comes
first inside the `$PATH` variable decides which version runs inside the shell environment. And this
is something that only affects the shell environment. It’s not something that affects the
system-wide behavior and it doesn’t override the system utilities. So all the system processes can
still use the macOS-provided system utilities.

> **Assumption**  
> After coming this far across this issue, trying to logically catch the point of why Homebrew
> includes the keg-only flag for some formulas and why those formulas don’t link their binaries to
> the default Homebrew binary location as it usually does, what I finally understand is that this
> behavior could be a result of old Homebrew architecture.

As I know, for Intel Macs, Homebrew’s default binary location was `/usr/local/bin` and the default
formula installation location was `/usr/local/Cellar`. Sometimes in that architecture, linking
keg-only formulas to the default binary location might override the system-provided binary of the
same utility which is inside `/usr/bin`. But I don’t know exactly, because mostly these things are
only affected inside the shell environment.

The only advantage of this behavior for keg-only formulas, as I figure out, is that because we have
to manually add these types of formula binaries to the `$PATH` variable, in case we want a quick
shift from the latest version of the utility back to the system-provided version, what we just have
to do is comment out the export line and that’s it. If it was linked to the default binary location
of Homebrew, then there is much more work in order to shift back. We would have to unlink it from
there using the brew unlink command.

Before wrapping this up, if you have a doubt about why I’m writing about this, my answer would be I
just wanted to keep a note of this confusion on the internet. That’s it.

If you know more about this behavior, or if you think I was wrong somewhere here, let me know and I
will update this writing so others will also be informed about that.
