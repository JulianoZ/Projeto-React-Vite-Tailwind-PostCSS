// components/Header.jsx
import Navbar from "./Navbar"

function Header() {
  return (
    <header className="bg-amber-500">
      <div className="max-w-6xl mx-auto flex justify-between items-center p-4">
        <h1 className="text-2xl font-bold text-blue-600 bg-red-500">
          Curso de TailWind
        </h1>
        <Navbar />
      </div>
    </header>
  )
}

export default Header