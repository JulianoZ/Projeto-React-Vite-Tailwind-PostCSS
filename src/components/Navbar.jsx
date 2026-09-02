// components/Navbar.jsx
import { Link } from "react-router-dom"

function Navbar() {
  return (
    <nav className="flex gap-4">
      <Link to="/" className="hover:underline">Home nav</Link>
      <Link to="/sobre" className="hover:underline">Sobre nav</Link>
      <Link to="/contato" className="hover:underline">Contato nav</Link>
    </nav>
  )
}

export default Navbar