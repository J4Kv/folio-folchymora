function Privacidad() {
    return (
      <section className="min-h-screen flex flex-col justify-center items-center p-8 bg-gray-50 text-gray-800">
        <div className="max-w-3xl">
          <h1 className="text-3xl font-bold mb-6 text-center">Política de Privacidad</h1>
  
          <p className="mb-4">
            <strong>Responsable del tratamiento:</strong> Estudio Jurídico Folch & Mora<br />
            <strong>Correo de contacto:</strong> folch.mora@gmail.com<br />
            <strong>Ubicación:</strong> Villa Alemana, Región de Valparaíso, Chile
          </p>
  
          <h2 className="text-xl font-semibold mt-6 mb-2">1. Datos que se recopilan</h2>
          <p className="mb-4">
            A través del formulario de contacto de nuestro sitio web, recopilamos los siguientes datos:
            nombre, apellidos, RUT, correo electrónico, comuna, región y su consulta legal detallada.
          </p>
  
          <h2 className="text-xl font-semibold mt-6 mb-2">2. Finalidad del tratamiento</h2>
          <p className="mb-4">
            Los datos proporcionados serán utilizados únicamente para responder a su consulta legal,
            establecer contacto con usted si fuese necesario, y llevar un registro de atención temporal.
          </p>
  
          <h2 className="text-xl font-semibold mt-6 mb-2">3. Base legal para el tratamiento</h2>
          <p className="mb-4">
            Este tratamiento se basa en el consentimiento expreso que usted otorga al enviar el formulario.
          </p>
  
          <h2 className="text-xl font-semibold mt-6 mb-2">4. Almacenamiento y protección de datos</h2>
          <p className="mb-4">
            Los datos no se almacenan en bases de datos persistentes. Son enviados por correo electrónico
            a través del servicio EmailJS y gestionados directamente por el Estudio Jurídico Folch & Mora.
          </p>
  
          <h2 className="text-xl font-semibold mt-6 mb-2">5. Cesión o transferencia de datos</h2>
          <p className="mb-4">
            No se cederán datos a terceros, salvo obligación legal. No se realizarán transferencias internacionales.
          </p>
  
          <h2 className="text-xl font-semibold mt-6 mb-2">6. Derechos del titular de los datos</h2>
          <p className="mb-4">
            Usted puede solicitar el acceso, rectificación o eliminación de sus datos, así como revocar su consentimiento.
            Para ello, escriba a: <strong>folch.mora@gmail.com</strong>.
          </p>
  
          <h2 className="text-xl font-semibold mt-6 mb-2">7. Conservación de los datos</h2>
          <p className="mb-4">
            Los datos serán conservados solo mientras dure el proceso de atención de la consulta.
            Posteriormente serán eliminados, salvo que exista una relación profesional posterior.
          </p>
  
          <h2 className="text-xl font-semibold mt-6 mb-2">8. Cambios en esta política</h2>
          <p className="mb-4">
            Esta política puede actualizarse. Recomendamos revisarla periódicamente.
          </p>
  
          <p className="text-center text-gray-500 text-sm mt-8">
            Última actualización: Abril 2025
          </p>
        </div>
      </section>
    );
  }
  
  export default Privacidad;
  