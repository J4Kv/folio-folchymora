function About() {
    return (
      <section className="min-h-screen flex flex-col items-center justify-start p-8 bg-gray-50 text-gray-800">
        <div className="max-w-4xl w-full text-center mb-12">
          <h1 className="text-4xl font-bold mb-4">¿Quiénes Somos?</h1>
          <p className="text-lg text-gray-600">
            En el Estudio Jurídico Folch & Mora, unimos experiencia, compromiso y vocación de servicio para ofrecer soluciones jurídicas de calidad en las áreas de familia, penal y laboral.
          </p>
        </div>
  
        {/* Imagen del equipo */}
        <div className="my-6 flex flex-col items-center">
          <img
            src="/somos.jpeg"
            alt="Abogados del Estudio"
            className="rounded-xl shadow-lg w-full max-w-md object-cover"
          />
          <div className="mt-4 text-center">
            <h2 className="text-xl font-semibold text-blue-900">Karen Mora & Hans Folch</h2>
            <p className="text-gray-600 text-sm">Abogados fundadores</p>
          </div>
        </div>
  
        {/* Descripción conjunta con mejoras */}
        <div className="max-w-3xl text-center text-gray-700 mt-4">
          <p className="text-lg mb-4 leading-relaxed">
            Karen Mora y Hans Folch cuentan con una sólida trayectoria en tramitaciones familiares, penales, civiles y mediaciones familiares, entregando atención personalizada en la región de Valparaíso.
          </p>
          <p className="text-lg mb-4 leading-relaxed">
            Nuestro objetivo es brindarle la confianza y asesoría necesaria para proteger sus derechos y alcanzar las mejores soluciones legales.
          </p>
        </div>
      </section>
    );
  }
  
  export default About;
  