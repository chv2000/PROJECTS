function Navbar() {
  return (
    <nav className="flex justify-between items-center px-10 py-4 shadow-sm">
      <h1 className="text-xl font-bold">Vasavi</h1>
      <ul className="flex gap-6 text-gray-600">
        <li>About</li>
        <li>Skills</li>
        <li>Projects</li>
        <li>Contact</li>
      </ul>
    </nav>
  )
}

export default Navbar
