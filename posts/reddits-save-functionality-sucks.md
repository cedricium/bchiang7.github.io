---
title: "Reddit's Save Functionality Sucks"
date: "2019-02-04T20:09:09.630Z"
draft: false
---

### The Problem

I have been a Redditor for over six years and was a "lurker" for a year before
even creating my main account. During my time on Reddit, I have come across
amazing content, such as helpful LifeProTips and great book recommendations. When
browsing dozens of posts and reading even more comments every day, it becomes
difficult trying to remember the most memorable content from a week, a month, or
even a year ago. Fortunately, the engineers at Reddit were smart enough to develop
a way to save your favorite posts and comments. Unfortunately, however, the save
functionality is nowhere near functional and is only slightly more useful if
you're a Premium member.

As a developer myself, I understand the need to monetize certain features of
your product in order to grow, but the problem with saving on Reddit is the fact
that the implementation is incomplete.

For those unaware, saving things on Reddit as a non-Premium member works in the
following way:

  - limited to 1000 saved things (posts and comments) total; once the limit is
    reached, older things are replaced and essentially deleted from history
  - saves are stored in reverse chronological order (latest to oldest) 
  - no way whatsoever to filter or sort saved content
  - no searching capability is provided
  - pagination limit on Reddit site is limited to 25 items, thus requiring users
    to use the "Next Page" or "Prev Page" buttons a lot

Due to the organization of saved content and lack of basic discovery tools like
filtering, searching, and sorting paired with the pagination limit, finding some
specific content becomes a pain with as little as a few dozen saved items.

For members with Reddit Premium, some of the outlined pain points are addressed.
For example, organization of saved content is improved with the ability to create
categories (think folders) which allow users to group related content. I've also
heard that each category itself has a 1000 item limit rather than a hard 1000
limit for all saved content.

However, there are still issues even if users are paying:

  - no discovery tools (filter, search, or sort)
  - categories disappear after Premium membership expires
  - unable to rename or remove categories
  - saves live on old.reddit.com (UI consistency issue if Redditor prefers "new"
    Reddit design)

Hopefully by now you can see how Reddit's save feature is not functional from a
user's perspective. What's even more interesting in my opinion is the fact that
Reddit has the means to support the missing functionality. I know this because
their public API exposes the necessary endpoints to make it possible. That's why
I'm creating a service that will improve Reddit's poor implementation. 

### The Solution: unearth

The app is called "unearth" and is currently in the early stages of development.
I chose unearth because it's suppose to represent the action of "digging through
your saved content and finding gems you had forgotten about".

With unearth, I hope to alleviate the pain of discovering saved content for
Redditors by adding the basic tools like searching and filtering while also
bringing the ability to group content to those without Premium memberships.

I also have more ambitious goals for unearth which I think others might enjoy:

  - native reminder system (think u/RemindMeBot for those familiar with the account)
  - email updates with featured saved posts
  - backup system (importing and exporting of saved items)

For those wondering, this would all be free and for the benefit of the users of
unearth. As of now, I have no intent of monetizing unearth and only want to
provide the best service possible for all users.

Some of you may be asking, What's my end goal? In an ideal world, I think it
would be amazing if the product team at Reddit came across unearth and decided
to improve Reddit's save feature. If that doesn't happen, I would be okay with
building this project and using it as leverage in order to land a job at Reddit.

Want to **stay up to date with unearth's development** and **get early beta
access** once it's ready? **Sign up for the unearth mailing list below!**

<!-- Begin Mailchimp Signup Form -->
<link 
  href="//cdn-images.mailchimp.com/embedcode/horizontal-slim-10_7.css"
  rel="stylesheet"
  type="text/css">
<style type="text/css">
	#mc_embed_signup{
    background:transparent;
    clear:left;
    font:14px Helvetica,Arial,sans-serif;
    width:100%;
  }
  #mc-embedded-subscribe {
    background: #007bff !important;
    color: #007bff;
  }
</style>
<div id="mc_embed_signup">
  <form
    action="https://tryunearth.us19.list-manage.com/subscribe/post?u=339a6a86e5e989d8d4632bca5&amp;id=36bc4cb5eb"
    method="post"
    id="mc-embedded-subscribe-form"
    name="mc-embedded-subscribe-form"
    class="validate" target="_blank" novalidate
  >
    <div id="mc_embed_signup_scroll">
      <input
        type="email" value="" name="EMAIL" class="email"
        id="mce-EMAIL" placeholder="email address" required
      />
    <!-- real people should not fill this in and expect good things - do not remove this or risk form bot signups-->
      <div style="position: absolute; left: -5000px;" aria-hidden="true">
        <input
          type="text" name="b_339a6a86e5e989d8d4632bca5_36bc4cb5eb"
          tabindex="-1" value=""
        />
      </div>
      <div class="clear">
        <input
          type="submit" value="Subscribe" name="subscribe"
          id="mc-embedded-subscribe" class="button"
        />
      </div>
    </div>
  </form>
</div>

<!--End mc_embed_signup-->
