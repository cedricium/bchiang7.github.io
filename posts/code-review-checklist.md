---
title: 'Code Review Checklist'
excerpt: ''
date: '2020-08-21T21:18:00.000Z'
draft: false
---

I had an insightful conversation with one of the senior developers on my team
about code reviews yesterday. Along with explaining why even I—the most junior
on the team—should conduct code reviews, he also gave me a list of things he
looks out for when reviewing code.

Below is the general outline he follows when doing code reviews. Over time, I
may add my own things to watch out for once I begin conducting more reviews.

- unit tests or a very good reason not to have unit tests?
- is this absolutely the best array method/data structure/whatever for the
  problem at hand?
- is this css going to break with a slightly different screen size?
- if I have to make a change to this code in 6 months, will I understand  
  everything (meaning, good comments and good variable names and organization)?
