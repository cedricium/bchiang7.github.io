---
title: 'Unearth Diary #03: The Tech Powering Unearth'
date: '2020-02-22T15:30:00.000Z'
draft: false
---

This is the third in a series of articles discussing my long-time side project,
Unearth. For my more technical audience, this post will cover Unearth's tech
stack and architecture.

---

Unearth subscribes to the monolithic repo (or monorepo) philosophy. Examining
the source code, you can see that all of the code for both the backend and
frontend reside in a single repository. Furthermore, the programming language of
choice is JavaScript since that's what I know best.

## Backend

- Node.js
- Express.js
- PostgreSQL
- SocketIO
- Nodemailer

The backend server is powered by Express.js, a web application framework for
Node.js. The server itself consists of a REST API that returns JSON responses
and an instance of a socket.io server for polling during the Reddit sync
process.

**Database**

Data storage/persistence is accomplished using PostgreSQL. The database itself
consists of two tables: users and things. The former contains Unearth users and
holds information like their Reddit id, username, email, account preferences,
and whether they've completed the onboarding process. The latter contains saved
items (which can either be a Reddit post or comment). The things' columns
mirror those of Reddit data, with fields such as: `id`, `subreddit`, `score`, `over_18` (aka NSFW), and `url` to name a few. The things table also has a
`user_id` column which is used to create a many-to-one relationship with user
entities.

<div style="margin: 1rem 0 1.5rem">
    <img src="./unearth-db-schema.png" alt="Unearth database schema" />
  <center>
    <small>Unearth database schema courtesy dbdiagram.io</small>
  </center>
</div>

**Emails**

Emails are sent using Nodemailer. Having never worked with emails or templating
engines before, I made the mistake of going with PugJS to create the email
templates. For example, take a look at the
[Unearth welcome email](https://github.com/cedricium/unearth/blob/master/emails/welcome/html.pug).
Personally, I find it very hard to read compared to traditional HTML so
sometime in the future I would like to refactor the templates to something more
readable such as Handlebars.js.

## Frontend

- React.js / Gatsby
- Redux
- styled-components

When Unearth was first built, the client app was written in React, scaffolded
using Create React App. I've since ported the entire site over to GatsbyJS.

**Frontend Web Frameworks**

There were a number of reasons for choosing Gatsby. One, I wanted to have a
statically-generated SEO-optimized landing page that was fast to load. Another
requirement that Gatsby allowed was not having to separate the landing site
from the actual dynamic web app. I highly recommend reading
[_Gatsby for Apps_](https://www.gatsbyjs.org/blog/2018-11-07-gatsby-for-apps/)
and watching any of Dustin Schau's conference talks if you want to learn more
about using Gatsby to build hybrid static/dynamic sites.

**Styling**

Styled Components are used to style the landing and markdown pages. The rest of
the app is styled using Water.css. In the future I have plans to refactor the
web app, removing Water.css and replacing it with a themeable React component
library like Chakra UI.

**State Management**

Before Unearth was what it is today (a newsletter delivery service), it was
supposed to be a web app for filtering, searching, and sorting users' Reddit
saves—much akin to sites like RedditManager or Savvit. As such, I setup Redux in
the project to help manage global state throughout the app. In addition to
Redux, I had used helper libraries like redux-thunk and redux-persist in order
to work with asynchronous actions and store Redux state in the user's local
storage, respectively.

There's no real reason for keeping Redux on the client nowadays since there is
a minimal amount of data being fetched and worked on behind the `/app` route. I
don't think I will remove it anytime soon, however, because I might venture
down the path of allowing users to interact with their saves—I guess we'll see.

## Deployments & DevOps

Despite using a monorepo, the backend and frontend are not coupled together
when deployed. I use a Heroku hobby dyno for the backend server. This app has a
couple add-ons installed:

- Heroku Postgres (production hobby-basic database)
- Advanced Scheduler (for managing and executing cron jobs responsible for
  sending scheduled newsletters).

The frontend is deployed via Netlify and makes use of the Netlify DNS. Some of
the DNS settings and records I need to manage include:

- pointing Namecheap's nameservers to Netlify
- improving email deliverability using DKIM and SPF authentication
- domain authentication

Both Heroku and Netlify are integrated with GitHub to do automatic deployments
from the `master` branch. Netlify is specifically configured to only deploy
when changes occur in the client-v2 directory.

Heroku deploys everything minus the client and client-v2 directories, thus
limiting the size of the slug. Recently, I setup a GitHub Actions workflow to
run tests for all PRs and pushes to the `master` branch. Heroku uses the results
from this workflow to automatically deploy new builds if all tests pass.

As for emails, both transactional and scheduled/marketing emails are delivered
via Twilio Sendgrid. I use Zoho Mail to send one-off emails with the
`tryunearth.com` domain to Unearth users regarding updates to the service.

---

If Unearth sounds like something you would find useful,
[sign up today and give it try](https://www.tryunearth.com/). I would love to
hear your thoughts about the service and any other questions or comments you may
have.
