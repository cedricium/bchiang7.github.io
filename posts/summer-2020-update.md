---
title: 'Summer 2020 Update'
excerpt: 'A lot has happened since I last blogged. This is a quick summary of
  the major events.'
date: '2020-07-26T16:25:00.000Z'
draft: false
---

If you've been following my blog over the years, you would know it is not
uncommon for me to take a break from blogging. Usually these absences are due
to not much going on in my life; there's nothing for me to write about.

These last three-ish months are different however. Instead of too little going
on, a lot has happened and I have been too busy to sit down and write about it.
I found myself with some spare time this Sunday so I figured I would quickly
outline the major things that have happened.

### Unearth 2.0 🛠

A majority of my blog posts since February have been about my long-time side
project, Unearth. At the time, Unearth was a service that would surface a
handful of users' Reddit saves in the form of an email. It was a fun project to
build and when shared online, others thought the idea was neat as well.

Like all my side projects, I built Unearth to scratch my own itch.
Unfortunately, Unearth in its current form at the time just wasn't what I was
looking for. Around the same time of having this realization, it became
increasingly clear to me that other Redditors wanted more out of their Reddit
saves as well: they were asking for ways to manage and search their saves rather
than a way to surface saves like Unearth was built to do.

I then went back to the drawing board and decided to start coding a new project
from scratch titled Unearth 2.0. You can actually see a glimpse of this in my
_Fooled by "Magic" Scrollbars_ post.

[Unearth 2.0 is what I had originally envisioned the project would be](https://www.tryunearth.com/about).
The reason I was never able to get it off the ground in the first place was
because I got stuck designing the app. This time around, however, I decided to
copy a tried-and-true app design, pulling inspiration from Pocket.

<div style="margin: 1rem 0">
<img src="./pocket-vs-unearth.png" alt="Comparison of Pocket and Unearth" />
<center>
  <small>Comparison of Pocket (left) and Unearth (right).</small>
</center>
</div>

In these past few months I've been able to design and develop this [full-stack
web application](https://github.com/tryunearth)
that includes a RESTful API, single-page web app, and a marketing website. I've
since soft-launched Unearth 2.0 by posting in r/SideProject and recommending it
in various subs on Reddit where I think users might find it beneficial.

At the time of writing, there are:

- 165 users registered
- 66K Reddit saves synced
- 107 custom tags created
- 454 saves tagged

### Sunsetting Old Unearth 🌅

As mentioned above, surfacing Reddit saves using emails wasn't as useful as I
had hoped, at least not for me personally. Because there weren't that many
people using the service to begin with, I made the hard decision to pull the
plug on that version of Unearth (I call it Unearth Surfacer or Unearth 1.0).

Fortunately, the database schema used in Unearth 2.0 could allow for the same
surfacing technique to be used in the event that I wanted to re-engineer that
as an additional feature.

### Goodbye Menlo Security 👋

I don't think I ever mentioned my work in any blog posts, but up until the end
of May I had been working at a cybersecurity startup called Menlo Security. I
had been there for a little over 3 years doing a Software Development Engineer
in Test co-op. This was a great position because it offered flexible work hours
which gave me the time to also go to school.

I primarily coded in Python but did use JavaScript/Node a few times for some proof-of-concept browser automation scripts. Many of my projects were based on
developing tests or fixing infrastructure for the dev team.

Despite their interest in bringing me on full-time, I had to decline because my
heart has always been to work directly on a product as part of a dev team.

### (Almost) Done with Lambda School 🎓

Like Menlo, I don't think I ever mentioned attending Lambda School in my blog,
although I do know it is listed on my personal site. Since February of 2019, I
have been doing Lambda's Full Stack Web Development part-time program. This
means having class in the evenings from 6-9pm PST, Monday through Friday.

I should have finished the program near the end of April but due to COVID-19 and
exhaustion, I decided to take a six week hiatus.

I've since started back up with the program and am now only 3 weeks away from
finally graduating! Finishing the program has been a long time coming and it's
only been even more difficult recently because I…

### Joined the Herd 🐮

[I am currently a Software Engineering Intern at Moogsoft](https://www.linkedin.com/posts/cedricamaya_im-thrilled-to-announce-that-this-summer-activity-6638885923692118016-Kxec),
whose mascot is a cow and whose employees are colloquially known as "the herd".
This is your typical summer tech internship that demands 40-hour work weeks,
hence the reason why doing Lambda in the evenings has been more difficult than
usual.

Nonetheless, I am ecstatic about what I am doing at Moogsoft and would be lying
if I said I wouldn't be sad to not receive an offer letter after the internship.

Originally the internship was to take place at the company's headquarters in San Francisco, but due to the Bay Area's continued shelter-in-place orders,
Moogsoft
decided to make it remote.

I am working on the front-end team whose focus is developing the UI for the
company's latest product, a cloud-based SaaS monitoring and alert application
called Moogsoft Express. The web app is a single-page Vue application that
utilizes common Vue libraries like Vue Router and Vuex for handling browser
navigation and global store, respectively.

Since starting on June 15th, I have:

- improved build time performance by reducing bundle size
- updated old dependencies
- fixed small bugs
- migrated charts from D3 to FusionCharts

At the time of writing, I'm halfway done with the internship and am looking
forward to the remaining five weeks ahead.
