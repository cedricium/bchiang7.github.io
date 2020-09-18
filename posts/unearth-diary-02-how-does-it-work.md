---
title: 'Unearth Diary #02: How Does It Work'
date: '2020-02-18T12:15:00.000Z'
draft: false
---

This is the second in a series of articles where I discuss my long-time side
project, Unearth. Topics will include the motivation behind building Unearth,
what it is, how it works, and the technology powering the service to name a few.
Check back often for future updates.

---

Unearth is a service that sends users a personalized newsletter with a handful
of their Reddit saves at the frequency of their choice.
[Read the first article](../unearth-diary-01-what-is-it)
in this series to get a better understanding of what Unearth is.

New users can join by visiting the Unearth homepage:
[www.tryunearth.com](https://www.tryunearth.com).

From there, signing up is as simple as clicking the "Get Started" button. This
authenticates users via Reddit using the OAuth 2 protocol and authorizes Unearth
to use their Reddit information (namely, their Reddit id, username, and saved
things).

Assuming they've never joined Unearth before, users are then walked through a
simple three-step onboarding process. This consists of gathering their email,
preferred frequency for newsletters (daily, weekly, or monthly), and finally,
syncing their Reddit saves with Unearth. Even with a thousand saved items, this
entire process is very quick, usually taking less than a minute.

Once onboarding is complete, users are:

1. sent their first Unearth newsletter containing five of their saved things
2. displayed the date of their first scheduled newsletter

From this point on, users do not need to do anything else. Depending on the
preferred frequency, they will either receive their scheduled newsletters every
day, every Monday, or every 15th of the month. Again, these Unearth newsletters
are personalized, containing only links that they themselves have saved.

If a user would like to update their email or frequency preference or delete
their account and all associated data entirely, they can do so by visiting the
Account page.

<div>
    <img src="./account-page.png" alt="Example Unearth Account page" />
  <center>
    <small>Screenshot of the Account page.</small>
  </center>
</div>

The main focus of Unearth is tackling the issue of rediscovering and managing
saved content. As such, the current features may seem minimal but they are doing
the trick.

Potential features to come:

- unsaving things automatically, either:
  - when clicking a link in the newsletter
  - when the thing itself is surfaced (added to a newsletter)
  - never (manual unsave via Reddit)
- newsletter previewer (to see the below email options):
  - include thumbnails
  - show/hide Reddit post self-text
  - show/hide nsfw content
- browser-viewable emails/newsletter
- browser extensions of Unearth to inject saved content into Reddit main feed
- up-to-date syncs with Reddit (limited or manual usage for free accounts,
  automatic backups/syncs as a premium feature)

Stay tuned for the next post where I dive into the various tech used to power
Unearth. Until next time!

---

If Unearth sounds like something you would find useful,
[sign up today and give it try](https://www.tryunearth.com/). I would love to
hear your thoughts about the service and any other questions or comments you may
have.
