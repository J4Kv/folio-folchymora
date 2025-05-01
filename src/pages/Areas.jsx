import { FaBalanceScale, FaUserShield, FaGavel, FaHandshake, FaFileContract, FaBuilding } from 'react-icons/fa';

function Areas() {
  const areas = [
    {
      title: "Derecho de Familia",
      description: "Asesoría en divorcios, alimentos, cuidado personal, VIF y mediaciones familiares.",
      icon: <FaUserShield size={40} />
    },
    {
      title: "Derecho Penal",
      description: "Defensa en procesos penales y derecho procesal penal.",
      icon: <FaGavel size={40} />
    },
    {
      title: "Derecho Civil",
      description: "Tramitaciones civiles: interdicciones, juicios de arrendamiento, precarios, contratos.",
      icon: <FaFileContract size={40} />
    },
    {
      title: "Mediación Familiar",
      description: "Resolución de conflictos familiares a través de mediaciones certificadas por el Ministerio de Justicia.",
      icon: <FaHandshake size={40} />
    },
    {
      title: "Posesiones Efectivas",
      description: "Asesoría completa en trámites de posesiones efectivas y herencias.",
      icon: <FaBalanceScale size={40} />
    },
    {
      title: "Causas de Policía Local",
      description: "Defensa y asesoría en procedimientos ante juzgados de policía local.",
      icon: <FaBuilding size={40} />
    }
  ];

  return (
    <section className="min-h-screen bg-gray-50 p-8 flex flex-col items-center">
      <h1 className="text-4xl font-bold text-center text-gray-800 mb-12">Áreas de Práctica</h1>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl w-full">
        {areas.map((area, index) => (
          <div key={index} className="bg-white p-6 rounded-2xl shadow-lg flex flex-col items-center text-center transition hover:shadow-2xl hover:scale-105">
            <div className="text-blue-900 mb-4">
              {area.icon}
            </div>
            <h2 className="text-2xl font-semibold mb-2">{area.title}</h2>
            <p className="text-gray-600">{area.description}</p>
          </div>
        ))}
      </div>
    </section>
  );
}

export default Areas;
