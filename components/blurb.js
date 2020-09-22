export default function Blurb() {
  return (
    <div className="blurb">
      <img
        className="blurb__author-image"
        src="/img/headshot.jpg"
        alt="Cedric Amaya"
      />
      <p className="blurb__author-bio">
        Written by <strong>Cedric Amaya</strong>, a software engineer who enjoys
        occasionally taking a break from coding to write about what is on his
        mind. You should{' '}
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
