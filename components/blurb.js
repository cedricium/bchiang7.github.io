export default function Blurb() {
  return (
    <div className="blurb">
      <img
        className="blurb__author-image"
        src="https://cedricium.github.io/blog/static/avatar-a4c0572fba2f65f42cbe0ca29987940c.png"
        alt="Cedric Amaya"
      />
      <p className="blurb__author-bio">
        Written by <strong>Cedric Amaya</strong>, a software engineering intern
        who enjoys writing about what is on his mind. You should{' '}
        <a
          href="https://twitter.com/cedricamaya"
          target="_blank"
          rel="noopener noreferrer"
        >
          follow him on Twitter
        </a>
        .
      </p>
    </div>
  )
}
