function Resume() {
  return (
    <section id="resume" className="py-16 px-8">
      <h2 className="text-4xl font-bold mb-8 text-center">Resume</h2>
      <div className="text-center">
        <a 
          href="/resume.pdf" 
          download 
          className="bg-ripple-blue text-white px-6 py-3 rounded ripple hover:bg-blue-700 transition"
        >
          Download Resume
        </a>
        <p className="mt-4">Note: Add your resume.pdf to the public folder.</p>
      </div>
    </section>
  )
}

export default Resume
