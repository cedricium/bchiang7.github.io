export default function EmploymentStatus() {
  return (
    <a className="status" href="/resume.pdf" target="_blank">
      <div className="status__light">
        <div className="status__light__ring"></div>
        <div className="status__light__led"></div>
      </div>
      <div className="status__message">
        Check out my resume—I'm currently seeking new opportunities!
      </div>
    </a>
  )
}
