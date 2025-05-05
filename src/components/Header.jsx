import { Link } from "react-router-dom";

function Header() {
  return (
    <header className="bg-white shadow-md">
      <div className="container mx-auto flex justify-between items-center py-4 px-6">
        {/* Logo y Nombre del Estudio */}
        <div className="text-2xl font-bold text-blue-900">
          FOLCH & MORA ABOGADOS
        </div>

        {/* Menú de navegación */}
        <nav className="space-x-6">
          <Link to="/" className="text-blue-900 hover:text-blue-700 font-medium">
            Inicio
          </Link>
          <Link to="/about" className="text-blue-900 hover:text-blue-700 font-medium">
            Nosotros
          </Link>
          <Link to="/areas" className="text-blue-900 hover:text-blue-700 font-medium">
            Áreas
          </Link>
          <Link to="/contact" className="text-blue-900 hover:text-blue-700 font-medium">
            Contacto
          </Link>
        </nav>
      </div>
    </header>
  );
}

export default Header;
