function Hero() {
    return (
      <section
        className="relative min-h-[80vh] flex flex-col justify-center items-center text-center px-6 text-white"
        style={{
          backgroundImage: "url('/fondo.png')",
          backgroundSize: "cover",
          backgroundPosition: "top center",
          backgroundRepeat: "no-repeat",
          backgroundAttachment: "fixed",
          backgroundBlendMode: "overlay",
          backgroundColor: "#1e3a8a",
          backgroundPositionY: "-20px", // azul oscuro elegante
        }}
      >
        <div className="max-w-3x1 pt-[30vh] pb-16">
            <h1 className="text-4xl md:text-5xl font-bold mb-6">
                Defendiendo tus derechos con excelencia
            </h1>
  
            <p className="text-lg md:text-xl mb-8 drop-shadow-sm max-w-xl mx-auto">
                Comprometidos con la justicia, la ética y su tranquilidad jurídica.
            </p>
  
            <a
                href="/contact"
            className="bg-white text-blue-900 font-semibold px-8 py-3 rounded-full shadow-md hover:bg-gray-200 transition"
            >
               Realizar Consulta
            </a>
        </div>
      </section>
    );
  }
  
  export default Hero;
  