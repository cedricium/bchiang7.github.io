---
title: 'Fooled By "Magic" Scrollbars'
excerpt: 'A humorous take on a frustrating bug encountered while working on Unearth.'
date: '2020-05-08T00:30:00.000Z'
draft: false
---

As a developer who primarily builds web applications, I don't usually need to
account for users' system preferences. In my (limited) experience developing
these kind of apps, a user's operating system rarely hijacks or alters the way
their browser works. Excluding something like `prefers-color-scheme`, most
anything involving presentation and styling is dictated by the browser itself
and therefore can be handled using good ol' CSS—until it can't. With that in
mind, you might be able to understand why, then, I was so surprised when I
discovered the phenomenon of the disappearing/reappearing scrollbars on Mac
machines.

Take a minute to imagine yourself as a developer who has been working on a
side project for countless days, weeks even. At this point in time, you're
intimately aware of all aspects of the app; you know the inner workings and
core logic like the back of your hand. Furthermore, the design of the app is
ingrained in your brain since surely you're constantly make tiny tweaks to the
client.

Now, with this picture in mind, imagine the confusion-but-borderline-disgust
that overcomes you when suddenly your seemingly perfect app randomly begins
displaying horrendous scrollbars and their gutters. For some, this issue might
seem minute. But for the person who made zero code changes and for those
scrollbars to still unexpectedly appear, it would seem like magic.

This is exactly what happened to me while I was working on my current passion
project, Unearth. Consisting of the standard two-column layout (sidebar and
main content), Unearth's height is restricted to `100vh` or the full height of
the screen. Both columns can have content that is greater than the full height
of the screen, however, and when that occurs, it is expected for scrollbars to
be displayed. The problem was each column in the layout had its own set of
always-shown scrollbar gutters which were not previously there.

After what seemed like an eternity trying different CSS hacks across a range of
browsers, it suddenly dawned on me the one thing I had changed since first
laying eyes on these magic scrollbars.

_I had plugged in an external mouse into my computer._

Let that take a minute to sink in.

Did you think about it? Does it not seem a little bit silly to you that
plugging in an external mouse would render scrollbars? Personally, I was the
slightest bit exasperated after I finally realized what the issue was. And to
be honest, I still don't know why this is a preference on Macs (or any other
operating system for that matter)—if I had to guess, I would probably say it
has to do with accessibility. Again, I'm not sure so if you know please share
the reason.

<div style="margin: 1rem 0">
<video controls preload="auto" width="100%">
  <source src="./magic-scrollbars.mp4" type="video/mp4" />
</video>
<center>
  <small>Demo of the magic scrollbars.</small>
</center>
</div>
