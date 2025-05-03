function Footer() {
    return (
      <footer className="bg-blue-900 text-white text-center text-sm py-6 px-4">
        <p className="mb-2">
          © {new Date().getFullYear()} Estudio Jurídico Folch & Mora {" "}
          <span className="font-semibold"></span>
        </p>
        <a
          href="/privacidad"
          className="underline text-gray-300 hover:text-white transition"
        >
          Política de Privacidad
        </a>
        <a href="/terminos" className="underline text-gray-300 hover:text-white transition block mt-1">
          Términos y Condiciones
        </a>

      </footer>

    );
  }
  
  export default Footer;
  