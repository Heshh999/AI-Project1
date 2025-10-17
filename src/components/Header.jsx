function Header() {
  return (
    <nav className="bg-dark-blue p-4 flex justify-between items-center sticky top-0 z-10 shadow-md">
      <div className="text-2xl font-bold">Justin Gaskins</div>
      <ul className="flex space-x-6">
        <li className="group relative">
          <a href="#about" className="hover:text-ripple-blue transition">About</a>
          <ul className="absolute hidden group-hover:block bg-dark-blue p-2 shadow-lg rounded">
            <li><a href="#about" className="block px-4 py-2 hover:bg-ripple-blue">Me</a></li>
          </ul>
        </li>
        <li className="group relative">
          <a href="#hobbies" className="hover:text-ripple-blue transition">Hobbies</a>
          <ul className="absolute hidden group-hover:block bg-dark-blue p-2 shadow-lg rounded">
            <li><a href="#trading" className="block px-4 py-2 hover:bg-ripple-blue">Trading</a></li>
          </ul>
        </li>
        <li><a href="#itskills" className="hover:text-ripple-blue transition">IT Skills</a></li>
        <li><a href="#resume" className="hover:text-ripple-blue transition">Resume</a></li>
      </ul>
    </nav>
  )
}

export default Header
