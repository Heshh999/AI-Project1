function Hobbies() {
  return (
    <section id="hobbies" className="py-16 px-8 bg-gray-900">
      <h2 className="text-4xl font-bold mb-8 text-center">My Hobbies</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        <div>
          <img src="https://source.unsplash.com/random/400x300/?gaming" alt="Gaming" className="mb-4 rounded" />
          <h3 className="text-2xl mb-2">Gaming</h3>
          <p>I enjoy playing video games like GTA 5 in my free time.</p>
        </div>
        <div>
          <img src="https://source.unsplash.com/random/400x300/?trading" alt="Trading" className="mb-4 rounded" />
          <h3 className="text-2xl mb-2">Trading</h3>
          <p>I've been trading stocks for 5 years. Check out real-time updates below.</p>
        </div>
      </div>
    </section>
  )
}

export default Hobbies
