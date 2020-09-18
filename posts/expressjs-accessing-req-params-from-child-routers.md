---
title: "Express: Accessing `req.params` in nested/child routers"
date: "2019-07-28T10:35:00.000Z"
draft: false
---

This past week marks the beginning of the backend portion of my studies at Lambda
School, which means I am approximately a fourth of the way complete with the
program! During the frontend portion, we took a deep dive into JavaScript
fundamentals before moving onto React.js and the Single Page Application ecosystem.
Now on the backend, my peers and I are utilizing our JavaScript chops to build
RESTful APIs using Node.js and Express. 

One week in and I already found myself dealing with an interesting issue. Allow
me to provide some background information.


## Background

The task at hand was to utilize Express to build a REST API. You can think of
this backend server as handling a blog, where there are `Posts` and `Comments`
models. Another requirement of this project was to use an Express `Router` object
to separate and organize the various routes needing implementation later on.

My first order of business was to create a `posts` router to handle HTTP requests
on the `/api/posts` route:

```js
/* routes/posts/index.js */
const postsRouter = require('express').Router()

postsRouter.get('/', async (req, res) => { ... })

...

module.exports = postsRouter


/* server.js */
const express = require('express')
const server = express()
const postsRouter = require('./routes/posts')

server.use('/api/posts', postsRouter)

...
```

Though not required, I thought it best to also separate the comments from the
posts, so I defined a second router for the `comments`:

```js
/* routes/comments/index.js */
const commentsRouter = require('express').Router()

module.exports = commentsRouter

...

/* routes/posts/index.js */
const commentsRouter = require('./routes/comments')

postsRouter.use('/:id/comments', commentsRouter)

...
```


## The Problem

As you can see, any CRUD operations on `comments` would need to be handled via
the `/api/posts/:id/comments` route, thus relying on a specific post `id`.

The issue I ran into was when I attempted to read the `req.params.id` from the
nested/child comments router, I was met with `undefined`:

```js
/* routes/comments/index.js */

commentsRouter.get('/', async (req, res) => {
  const postId = req.params.id  // ==> would return `undefined`
  ...
}

...
```

After a little debugging and googling, I discovered that by default Express
does not pass the `req.params` to child routers. Because the line:

```js
postsRouter.use('/:id/comments', commentsRouter)
```

was defined in `routes/posts/index.js`, `commentsRouter` could not access
that post `id`.

Initially, I thought to eliminate `commentsRouter` entirely and move all of its
route handlers to `postsRouter`. This would effectively give `commentsRouter`
access to all `req.params` by being in the same scope as its parent path
(`/api/posts/:id`). This, however, seemed like a naive fix to the problem and I
felt as though there was a better solution. And there was.


## Solution

When researching a fix for this issue, my attention was brought to the Express
`Router` documentation.<sup>1</sup> There, I saw that the `Router` instantiation
method documented a property of the optional `options` parameter, a little
something named `mergeParams`.

To my excitement, this property (set by default to `false`) does the following:

> Preserve the req.params values from the parent router. If the parent and the
> child have conflicting param names, the child’s value take precedence.

To put that into context, by setting that property to `true`, I could then keep
my `postsRouter` and `commentsRouter` separated *and* access the post `id`
in `commentsRouter` via `req.params`. That was it, just the fix I needed!

One small addition to the code and my original setup now works:

```js
/* routes/comments/index.js */
const commentsRouter = require('express').Router({ mergeParams: true })
           // note the addition of `mergeParams` ^^^^^^^^^^^^^^^^^^^^^
...

commentsRouter.get('/', async (req, res) => {
  const postId = req.params.id  // ==> this now works 🎉
  ...
}
```

If you would like to get a better understanding of what's going behind the scenes
or you just want to see the code, feel free to check it out on GitHub.<sup>2</sup>

It's being able to solve little problems like this that motivate me to keep
coding. No matter how big or small the victory, I will always be proud of myself
and I look forward to tackling the next one.

---

1. Express `Router` instantiation documentation:
https://expressjs.com/en/4x/api.html#express.router

2. Example code on GitHub:
https://github.com/cedricium/webapi-ii-challenge/tree/cedric-amaya