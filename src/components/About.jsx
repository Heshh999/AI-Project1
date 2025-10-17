function About() {
  return (
    <section id="about" className="py-16 px-8">
      <h2 className="text-4xl font-bold mb-8 text-center">About Me</h2>
      <div className="flex flex-col md:flex-row items-center justify-center">
        <img src="https://source.unsplash.com/random/400x400/?portrait" alt="Justin Gaskins" className="w-64 h-64 rounded-full mb-8 md:mb-0 md:mr-8" />
        <p className="text-lg max-w-2xl">
          Hi, I'm Justin Gaskins. I'm passionate about technology, trading, and building innovative web applications. With experience in JavaScript frameworks like React, I create dynamic and user-friendly websites.
        </p>
      </div>
    </section>
  )
}

export default About
