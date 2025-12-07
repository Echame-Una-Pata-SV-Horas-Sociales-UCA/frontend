import { VolunteerActivismOutlined, VaccinesOutlined } from "@mui/icons-material";

export default function CardsSection() {
  const cards = [
    {
      title: "Rescate",
      description:
        "Rescatamos perros en situación de vulnerabilidad, los rehabilitamos y buscamos para ellos un hogar responsable y amoroso.",
      icon: (
        <VolunteerActivismOutlined
          className="text-[#7A1F1F]"
          style={{ fontSize: 38 }}
        />
      ),
    },
    {
      title: "Rehabilitación",
      description:
        "Promovemos la tenencia responsable, la adopción consciente y la esterilización canina como pilares fundamentales para reducir la sobrepoblación y el abandono en las calles.",
      icon: (
        <VaccinesOutlined
          className="text-[#7A1F1F]"
          style={{ fontSize: 38 }}
        />
      ),
    },
  ];

  return (
    <section className="w-full pt-16 pb-10 px-6 sm:px-10 lg:px-20 bg-white">
      <div className="max-w-7xl mx-auto text-center mb-12">
        <h1 className="text-3xl sm:text-4xl font-extrabold text-black uppercase tracking-wide">
          Nuestra misión
        </h1>
        <p className="text-gray-600 mt-3 max-w-2xl mx-auto">
          Los pilares que guían cada acción de nuestra fundación.
        </p>
      </div>

      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
          {cards.map((card, index) => (
            <div
              key={index}
              className="
                bg-white
                border border-gray-300
                rounded-2xl
                p-6
                text-center
                animate-slideUp
                transition-transform
                duration-300
                hover:scale-105
              "
              style={{ animationDelay: `${index * 0.15}s` }}
            >
              <div className="flex justify-center mb-3">{card.icon}</div>

              <h3 className="text-xl font-bold text-black mb-3">
                {card.title}
              </h3>

              <p className="text-gray-700 text-base leading-relaxed">
                {card.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
