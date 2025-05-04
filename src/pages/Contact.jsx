import { useRef } from 'react';
import emailjs from '@emailjs/browser';

function Contact() {
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs.sendForm(
      'service_2you4pc',        // Tu Service ID
      'template_tcrgrge',       // Tu Template ID
      form.current,
      'JneEtbGCmlSfjViTz'       // Tu Public Key
    )
    .then((result) => {
      console.log('Consulta enviada con éxito:', result.text);
      alert('Tu consulta fue enviada correctamente. Te contactaremos pronto. Gracias por contactar con Folch & Mora Abogados.');
      form.current.reset();
    }, (error) => {
      console.log('Error al enviar la consulta:', error.text);
      alert('Hubo un error al enviar tu consulta. Por favor intenta nuevamente.');
    });
  };

  return (
    <section
      className="relative min-h-screen flex flex-col items-center justify-start p-8 text-white"
      style={{
        backgroundImage: "url('/fondo.png')",
        backgroundSize: "cover",
        backgroundPosition: "top center",
        backgroundRepeat: "no-repeat",
        backgroundAttachment: "fixed",
        backgroundColor: "#1e3a8a",
        backgroundBlendMode: "overlay",
        backgroundPositionY: "-20px",
      }}
    >
      <div className="bg-white/90 text-gray-800 rounded-xl shadow-lg p-8 w-full max-w-3xl mt-[10vh]">
        <h1 className="text-4xl font-bold text-center mb-6">Contáctanos</h1>
        <p className="text-center text-gray-600 mb-8">
          Envíanos tu consulta para evaluar tu caso y nos pondremos en contacto contigo a la brevedad.
        </p>

        <form ref={form} onSubmit={sendEmail} className="space-y-4">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <input type="text" name="rut" placeholder="RUT" required className="border p-3 rounded-lg w-full" />
            <input type="text" name="nombre" placeholder="Nombre" required className="border p-3 rounded-lg w-full" />
            <input type="text" name="apellido_paterno" placeholder="Apellido Paterno" required className="border p-3 rounded-lg w-full" />
            <input type="text" name="apellido_materno" placeholder="Apellido Materno" required className="border p-3 rounded-lg w-full" />
            <input type="text" name="comuna" placeholder="Comuna" required className="border p-3 rounded-lg w-full" />
            <input type="text" name="region" placeholder="Región" required className="border p-3 rounded-lg w-full" />
            <div className="w-full">
              <label htmlFor="fechaNacimiento" className="text-sm text-gray-600 block mb-1">
                Fecha de Nacimiento
              </label>
              <input
                type="date"
                name="fechaNacimiento"
                id="fechaNacimiento"
                required
                className="border p-3 rounded-lg w-full"
              />
            </div>
            <input type="text" name="titulo_consulta" placeholder="Título de la Consulta" required className="border p-3 rounded-lg w-full" />
            <input type="text" name="telefono" placeholder="Teléfono de contacto" required className="border p-3 rounded-lg w-full" />
            <input type="email" name="correo" placeholder="Correo electrónico" required className="border p-3 rounded-lg w-full" />
          </div>

          <textarea
            name="consulta"
            placeholder="Escribe aquí tu consulta detalladamente..."
            required
            className="border p-3 rounded-lg w-full h-32"
          ></textarea>

          <button
            type="submit"
            className="bg-blue-900 text-white py-3 rounded-lg w-full hover:bg-blue-800 transition"
          >
            Enviar Consulta
          </button>
        </form>
      </div>

      {/* Información adicional */}
      <div className="text-center text-sm text-white mt-10 space-y-2">
        <p><strong>Dirección:</strong> Valparaíso, Villa Alemana, Chile</p>
        <p><strong>Correo:</strong> folch.mora@gmail.com</p>
        <p><strong>Teléfono:</strong> +56 9 8765 4321</p>
      </div>
    </section>
  );
}

export default Contact;
