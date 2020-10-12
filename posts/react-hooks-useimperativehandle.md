---
title: 'React Hooks: `useImperativeHandle`'
excerpt: ''
date: '2020-10-11T16:15:00.000Z'
draft: false
---

## An Escape Hatch When Rewrites Aren't Feasible

I recently had to ask myself and ultimately google, "how can a parent component
call its child's method" and discovered a solution using React's
`useImperativeHandle` hook. When initially reading the documentation about this
hook, I was annoyed to see that the example and explanation given were quite
contrived, so I thought I'd share my experience in the hopes that others find it
useful as well.

### Background

For context, the React application I'm helping to develop is a content
management system, or CMS. The CMS is used by content creators, providing them
with tools to create interactive kids shows. In programmer speak, the CMS is
essentially a UI for performing CRUD operations on the various entities involved
such as channels, playlists, and episodes.

Our React app has several Form components that are reused for both creating and
updating entities. Design specified creating entities by displaying a modal with
the form as the main body content. On the other hand, updating an entity is not
done via form-in-modal but rather in a regular page.

Here's a simplified version of the ChannelForm, which is used to create and
update creator channels.

```js
/* ChannelForm.jsx—updating logic removed for simplicity */
import React, { useState } from 'react'
import { create } from 'components/forms/utils'

const ChannelForm = () => {
  const [name, setName] = useState('')
  const [description, setDescription] = useState('')

  const submit = async () => {
    const newChannel = await create({
      path: '/channels',
      attributes,
      obj: channelDetails,
    })
    window.location.href = `/channels/${newChannel.channelId}`
  }

  return (
    <form>
      <label>
        Name
        <input value={name} onChange={(e) => setName(e.target.value)} />
      </label>
      <label>
        Description
        <input
          value={description}
          onChange={(e) => setDescription(e.target.value)}
        />
      </label>
      <button type="submit">Create Channel</button>
    </form>
  )
}

export default ChannelForm
```

What's important to note about said Form components is that all the business
logic (form submission methods for creating or updating entities) as well as the
state used by the form itself all reside in the components themselves. I'll note
later why this is important but just keep this in mind as you read along.

### Task

With the background out of the way, allow me to discuss the task I was given to
get me to where I am now. The ticket was titled "Unify Modal Designs" and
described how all the modals throughout the CMS should be unified, i.e. having
the same look and feel.

At the time, there were two modal designs: a header- and footer-less modal,
usually containing a form, and a modal with colored header and footer sections
with the footer having action buttons, usually "Cancel" and "Create" or "Save."
The ticket wanted all modals to have the colored headers and footers with the
footers having action buttons in order to have a more uniformed UX across the
CMS.

### Challenge

Like most tasks I'm given, I like to plan out how I will implement the feature
and research anything that I'm unfamiliar with. This task was no different so
the first thing I did was perform a global search of the CMS codebase to see
what modals we had and noted any that would need to be updated.

I soon realized that the modals which did not already follow the designs were
the modals that contained our previously-discussed Form components. That's when
it dawned on me: How was I going to hook-up the modal's primary action button
("Create", "Save", etc.) with the Form component's submission handler method?

React is driven by a concept called
[one-way data flow](https://reactjs.org/docs/thinking-in-react.html). That means
any state that a child component needs to know about and/or use resides higher
up in the component tree and is passed down as props. Going back to our modal
and form example, this begs the question, "how can a parent component access a
stateful child's data and methods?"

This is where the important note I wanted you to keep in mind comes into play.
The "right" thing to do would be to refactor the Form components so that all
business logic and state for the form fields is extracted and instead imported
or passed in as props. As an early-stage startup where speed and functionality
are prioritized over efficiency/quality, this approach was just not feasible.

We needed an alternate approach that was as frictionless as possible.

### Solution

Enter the `useImperativeHandle` hook. From the React docs:

> `useImperativeHandle` customizes the instance value that is exposed to parent
> components when using `ref`.

Before moving forward, I suggest you
[familiarize yourself with React refs](https://reactjs.org/docs/refs-and-the-dom.html)
if you aren't already.

The key here is we are able to customize the instance value of the ref exposed
to the parent component by _specifying whatever data we want_ when the ref is
created. That means we can use this hook to create a bidirectional data flow,
allowing the parent component access to its child's data and methods.

There are only a few steps that we need to take in order to get our existing
code working as intended.

1. Wrap our child component (in this case, the Form component) in `forwardRef`
   [per the React docs](https://reactjs.org/docs/hooks-reference.html#useimperativehandle).

```js
/* ChannelForm.jsx */
import React, { useState, forwardRef, useImperativeHandle } from 'react'

/**
 * When form is wrapped in `forwardRef` and uses the `useImperativeHandle` hook,
 * the parent component then has access to whatever data is selectively exposed.
 */
const ChannelForm = forwardRef((props, ref) => {
  const submit = async () => { … }

  return (
    <form>…</form>
  )
})
```

2. Use the `useImperativeHandle` hook to expose the methods we want the parent
   component to have access to. In our form-in-modal scenario, we need the
   parent component (Modal) to have access to the Form's `submit` method.

```js
/* ChannelForm.jsx */
import React, { useState, forwardRef, useImperativeHandle } from 'react'

/**
 * When form is wrapped in `forwardRef` and uses the `useImperativeHandle` hook,
 * the parent component then has access to whatever data is selectively exposed.
 */
const ChannelForm = forwardRef((props, ref) => {
  const submit = async () => {…}

  useImperativeHandle(ref, () => ({ submit }))

  return (
    <form>…</form>
  )
})
```

3. In the parent component, create and pass a ref to the Form child. Accessing
   the child's exposed data is as easy as calling `ref.current.<property-name>`.

```js
/* Modal.jsx */
import React, { useRef } from 'react'
import ReactModal from 'react-modal'

const Modal = ({ title, footerButtons, formNode }) => {
  const formRef = useRef()
  const Form = formNode

  const [isOpen, setIsOpen] = useState(false)

  const handleSubmit = async () => {
    await formRef.current.submit() // we can now call Form's `submit` method ✨
    setIsOpen(false)
  }

  return (
    <ReactModal isOpen={isOpen}>
      <header>
        <h1>{title}</h1>
      </header>
      <main>
        <Form ref={formRef} />
      </main>
      <footer>
        <button onClick={() => setIsOpen(false)}>Cancel</button>
        <button onClick={handleSubmit}>Create</button>
      </footer>
    </ReactModal>
  )
}
```

### Conclusion

To recap, the `useImperativeHandle` hook allows us to customize the instance
value of the ref, effectively giving us the ability to create a bidirectional
data flow from child to parent.

This doesn't fit React's modus operandi, so using this hook in this fashion
should be avoided when possible. It's good to know that such a possibility does
exist, however, in the case that you do need an escape hatch when a large
rewrite is not feasible.

### P.S. - What the heck does imperative mean?

If you're like me, you might have had trouble making sense of this particular
hook's name. I still don't know well enough to explain it myself, but luckily
[Tyler McGinnis has written an excellent blog post](https://ui.dev/imperative-vs-declarative-programming/)
on what imperative programming is (which is where the hook's name comes from).
