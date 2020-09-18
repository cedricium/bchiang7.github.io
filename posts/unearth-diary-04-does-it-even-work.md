---
title: 'Unearth Diary #04: Does It Even Work?'
excerpt: "A poor man's attempt at determining user sentiment based solely on 
email metrics."
date: '2020-03-12T15:50:00.000Z'
draft: false
---

This is the fourth in a series of articles where I discuss my long-time side
project, Unearth. Unearth is a service that surfaces users' Reddit saves using
personalized emails at the frequency of their choice—think of it like Timehop
for Reddit saves.

## A Poor Man’s Attempt at Determining User Sentiment Based Solely on Email Metrics

It's an interesting (though mostly unsettling) feeling when the product you
made no longer seems to be working, at least not as you had intended. That's
how I feel with Unearth. Its goal seemed simple: surface the hundreds of things
I had saved on Reddit and assist me with removing some of that content.

As much as I hate to admit it, it seems as though Unearth doesn't work; at
least not for me personally. I would often ignore the Unearth emails entirely
and rarely would I click any of the links in the email if I did open it in the
first place. I started to catch on to the fact that Unearth wasn't as useful as
I had wished when I found myself deleting my own personalized emails as soon as
they hit my inbox. But then people
[told me it was a cool idea](https://news.ycombinator.com/item?id=22177077), so
maybe I am just the odd one out.

Without talking to my users directly, it's hard to tell. I wonder if the
numbers paint a different picture? As a naturally-curious individual, I set out
to determine Unearth users' sentiments towards the platform based solely on the
email metrics provided by Sendgrid.

### Email Metrics

Full disclosure: I connected Unearth to Sendgrid on around October 20, 2019. At
that time, there would have been only ~2 users/accounts: my own and my
girlfriend's (basically a test account). I'm not going to try and remove those
numbers from the coming metrics since the test account basically went unused
and I consider my account as an actual Unearth user.

They say a picture is worth a thousands words, so I'll just drop a screenshot
of my Sendgrid dashboard containing the most relevant information.

<div style="margin: 1rem 0 1.5rem">
    <img
      src="./sendgrid-stats.png"
      alt="Sendgrid stats dashboard for Unearth since its inception."
    />
  <center>
    <small>Sendgrid stats dashboard for Unearth since its inception.</small>
  </center>
</div>

So what do these graphs and numbers tell us? I'm not entirely sure myself. From
the little research I've done so far, I have learned there are several key
performance indicators (or KPIs) that are beneficial in understanding how well
one's emails are doing. As I mentioned earlier, because Unearth's emails and
their contents are personalized to the receiver, I'm not sure how applicable
these KPIs are for measuring Unearth's success. We'll run with them anyways.

The KPIs we'll be examining in this article are as follows:

- open rate (OR): "number of emails opened compared to the total amount
  delivered"
- click-through rate (CTR): "number of clicks on the links"
- click-to-open rate (CTOR): "number of clicks with respect to the number of
  openings…measuring the level of interaction"

Using the stats obtained from Sendgrid, let's calculate the aforementioned KPIs
for Unearth:

- OR: 413 emails opened / 820 emails delivered = **50.37%**
- CTR: 118 unique links clicked / 820 emails delivered = **14.39%**
- CTOR: 118 unique links clicked / 413 emails opened = **28.57%**

### Analysis

Without any reference, these percentages are useless. A little googling later
and I found several resources that outline what "good" or the average KPIs are
across various industries. According to Mailchimp (as calculated by their
customers' campaigns with more than 1,000 subscribers), the **average open rate
is 21.33%**. Compared to Unearth's roughly 50%, that seems pretty good on
our part!

Likewise, they analyzed the **average click rate to be a mere 2.62%**. Remember
Unearth's click rate is about 14%, again well above average.

Sendgrid determined the **aggregate click-to-open rate in 2018 was 10.1%**.
Like the other two KPIs we've examined, Unearth beats this at a CTOR of about
29%.

### Verdict

As the subtitle suggests, this comparison between Unearth's KPIs and the
average KPIs of Mailchimp's and Sendgrid's customers isn't exactly
apples-to-apples. It does, however, give me faith that Unearth is still helping
others even if it doesn't fit my own wants or wishes. At the end of the day,
this research has proven to me the platform does in fact seem to be working and
there is no reason to shut it down now.

---

References:

- https://blog.mailup.com/2017/01/email-metrics/
- https://mailchimp.com/resources/email-marketing-benchmarks/
- https://ahoy.sendgrid.com/rs/294-TKB-300/images/18_SendGrid_Global_Email_Benchmark_Report.pdf
- https://www.campaignmonitor.com/resources/knowledge-base/what-are-the-average-click-and-read-rates-for-email-campaigns/
- https://sendgrid.com/blog/click-to-open-rate-how-relevant-is-my-email/
