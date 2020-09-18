---
title: "Setting Up Continuous Deployments (CD) for a React App using Netlify"
date: "2019-05-09T12:30:00.000Z"
draft: false
---

*A straightforward guide to setting up Continuous Deployment for a React app
hosted on GitHub and deployed using Netlify.*


## Background

If you're reading this, I assume you already know how awesome React.js is. With
tools such as `create-react-app` to help scaffold a basic template in seconds,
getting started with and building your own React apps couldn't be any easier.

One aspect of working with modern web apps that can be confusing, however, is
the deployment process; the steps needed in order to have your app accessible
to everyone via the web.

This tutorial will walk you through setting up Continuous Deployments (CD) for
a React app that has been bootstrapped with `create-react-app` using Netlify.

CD means a lot like what it sounds like, from Wikipedia:

> a strategy for software releases wherein any code commit that passes the automated 
> testing phase is automatically released into the production environment, making
> changes that are visible to the software's users.

In researching how to deploy a React app myself, I came across numerous tutorials
describing how to use Netlify's drag-and-drop functionality or their CLI. These
methods are certainly alright, however, any changes made to your application
require you to repeat the same steps every time to have your deployed app updated.

With CD, your workflow as a developer doesn't change minus the initial setup--make
some code changes, commit and push said changes to GitHub, and voila, within
moments your deployed React app should reflect the changes you have made.

Sounds great, huh? Trust me, it is. Let's see how it's done!


## Prerequisites

To keep this tutorial short and sweet, I'm going to assume a few things:

  - you have a React app handy which was bootstrapped using `create-react-app`
  - said React app is hosted on GitHub or a similar web-based version control
    hosting service

If you want to just see how it's done, I have
[setup a GitHub repository](https://github.com/cedricium/netlify-cd-example) which
you can fork and toy with as you follow along.

If at any point you do run into trouble, feel free to contact me and I'd be happy
to help you out.


## Netlify Deployments

  1. **Log in or Sign up with Netlify**

Since you have a GitHub account, this should be a breeze. Head over to 
https://www.netlify.com/ to get started. In the top right corner of their website,
choose whatever option works best for you (either log in or sign up).

  2. **Create a New site from git**

We have our amazing React app and want to show it off to the world, right? This
is the way it's done. Once you're logged in, there should be a green primary
"New site from Git" button--click it.

Next, you should be asked to connect to a Git provider. In our case, it will be
GitHub, however, you can also choose GitLab or BitBucket. Click the button
corresponding to your Git provider.

Now you'll need to choose which repository you want to link your site on Netlify.
Depending on the settings you chose when authorizing Netlify to use your GitHub
account, you may or may not see all of your repos. If that's the case, scroll down
to the button of the page and click the link embedded in the "Can’t see your repo
here? Configure the Netlify app on GitHub." text.

Once you've selected the repo to link the Netlify site to, you should arrive at
the "Deploy settings for <your\-username>/<your\-repo>" page.

If your repo contains a `package.json` and similar config files in the root
directory, Netlify should have been able to figure out this was a React app and
pre-filled the "Basic build settings" such as "Build command" and
"Publish directory". If that's your case then all you need to do is click the
"Deploy site" button.

Otherwise, if your repo uses an unconventional directory structure, move on to
the next section (looking at you Lambda School people). Don't worry about filling
out the "Basic build settings" inputs for now.

  3. **Optionally: Advanced site settings**

So, maybe your React app is nested inside a directory or two. Have no fear, this
poses no problem for us. For now, go ahead and click the "Deploy site" button.

You will be directed to the main dashboard for your Netlify site. If you check
the url provided for your deployed site, you should be given a "Page Not Found"
error; that's to be expected since we didn't specify where Netlify could find the
built React app.

Find and click "Site settings" from the main dashboard, then select "Build & deploy"
from the sidebar.

Under "Build settings", lets fill out as much as we can by first selecting "Edit
settings".

  - **Repository:** this should already be defined, so no need to change anything
  - **Base directory:** think of this as the root directory of the React app. For
    example, given the repo structure below, our base directory would be `nested`.
    If your React app is further nested, you can use `as/many/nests/as/possible`.

```
netlify-cd-example/
    .gitignore
    README.md
    nested/
        README.md
        package.json
        yarn.lock
        public/
            index.html
            ...
        src/
            App.js
            ...
```

  - **Build command:** this is the command Netlify uses to well, build our site. In
    case of a React app configured using `create-react-app`, we would type `yarn
    build` here.
  - **Publish directory:** this is the directory from which Netlify actually
    serves the built static content. The path from your "Base directory" should
    already be filled in, so all we need to add for a React app is `build`.
  - **Deploy log visibility:** fairly self-explanatory, select whichever you want.

And that should be all that is needed to get our React app up and running. Verify
your settings match your repo structure and then click "Save".

Select "Deploys" in the top navbar of your dashboard, then under the "Trigger
deploy" dropdown, select "Clear cache and deploy site". Netlify's robots will
then start the process of building the React app and deploying it.

Barring any errors or issues, the deployment will be successful and you can now
check out your live React site by clicking the "Preview deploy" link.

Cheers! You've just deployed your React app. Now any changes you make to the
production branch (default is `master` but can be changed under "Settings >
Build & deploy > Deploy contexts > Production branch") will trigger Netlify
bots to auto-build your React app and keep it updated.


## Caveats & More

### Netlify + React Router

If your React application is using the popular `react-router` package, the above
settings may not work out of the box. There is some additional setup needed for
routing to work when deploying a React using Netlify--the article
[*Netlify and React Router*](https://medium.com/@sschannaknetlify-and-react-router-1537aebe6256) 
should put you in the right direction.

### Advanced Configuration

For those of you who like config files, all of the Netlify GUI steps outlined in
this article can be done by specifying the proper values in a `netlify.toml` file
which must reside in the repository's root directory.

To learn more about configuring a Netlify site using the `netlify.toml` file, check
out [the official Netlify docs](https://www.netlify.com/docs/netlify-toml-reference).
