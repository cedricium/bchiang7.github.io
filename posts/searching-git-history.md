---
title: 'Searching Git History'
date: '2019-12-24T21:00:00.000Z'
draft: false
---

## tl;dr

When you need to see when a specific piece of code was introduced or deleted in your
codebase, use the following command:

```bash
$ git log -S<string> [<options> [-- <path>…]]
```

## Problem

A few times a month, a coworker of mine will ask to see what the code for a given
event does (they do not have access to our company's GitHub repos). This particular
coworker is the company's go-to person for all things related to Splunk since they
manage the graphs and create queries based on the data coming in from our service.
Having an idea of what the code does for any given event is helpful when
debugging—thus the reason they ask to see the code.

We always begin by using GitHub's search functionality and search for the event
by its name (e.g. "reports-get-manifest-error"). Usually this will show us the
relevant parts of the code like where this event was defined and where it is
handled.

Recently, however, searching for a specific result on GitHub yielded no results.
Strange—that had never happened before.

The last time that particular event was triggered was two years ago, so we thought
it was definitely possible the event was removed from the code since then. Although
my coworker had no need to investigate further, I was curious as to when this event
became deprecated. So I did what I do best when I don't know something and turned
to Google. I don't remember what exactly I googled but it must have been something
along the lines of "git search deleted code", and sure enough, `git` did in fact have
this very capability.

## Solution

In order to see when some particular code is added or removed, you can use the `git log`
command. Specifically, you will want to pass the `-S <string>` flag which tells git
to "look for differences that introduce or remove an instance of string."<sup>1</sup>

Given the dilemma outlined above, what I did was use the `git log` command along with
the event passed to the `-S` flag (I also added the path to the file where the
event should have been):

```bash
$ git log -S "reports-get-manifest-error" -- src/controllers/policy-evaluation.js
```

After running this command, I was presented with two commits: one where the
"reports-get-manifest-error" event was originally introduced in the codebase,
and the other where it was removed.

---

1. `git log -S<string>` documentation:
   https://git-scm.com/docs/git-log#Documentation/git-log.txt--Sltstringgt
