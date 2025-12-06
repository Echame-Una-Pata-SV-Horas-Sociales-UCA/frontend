import { Link } from "react-router-dom";
import {
  PaidOutlined,
  VolunteerActivismOutlined,
} from "@mui/icons-material";
import PetsRounded from "@mui/icons-material/PetsRounded";
import { motion } from "framer-motion";

export default function SupportSection() {
  const supportOptions = [
    {
      title: "Doná",
      description: "alimento, insumos de limpieza o efectivo",
      icon: <PaidOutlined className="text-white" style={{ fontSize: 36 }} />,
      to: "/apadrina",
    },
    {
      title: "Apadriná",
      description:
        "mensualmente con $10.00 a un peludo rescatado que vive en el refugio",
      icon: (
        <VolunteerActivismOutlined
          className="text-white"
          style={{ fontSize: 36 }}
        />
      ),
      to: "/apadrina",
    },
    {
      title: "Adoptá",
      description:
        "responsablemente a un peludo rehabilitado en nuestro refugio",
      icon: <PetsRounded className="text-white" style={{ fontSize: 36 }} />,
      to: "/adopta",
    },
  ];

  return (
    <section className="py-16 px-4 md:px-8 lg:px-16 bg-white">
      <div className="max-w-6xl mx-auto">

        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-12"
        >
          <h2 className="text-4xl md:text-5xl font-bold text-black mb-6">
            ¿Qué puedes hacer para apoyar?
          </h2>
          <p className="text-gray-600 text-lg max-w-2xl mx-auto">
            Podés apoyarnos de muchas formas: donando, apadrinando o adoptando.
            Cada acción cuenta y nos ayuda a seguir rescatando y cuidando a más
            peludos que necesitan una segunda oportunidad.
          </p>
        </motion.div>

        {/* Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {supportOptions.map((option, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.2 }}
              whileHover={{
                scale: 1.03,
                boxShadow: "0 12px 25px rgba(0,0,0,0.15)",
              }}
              className="border-2 border-gray-300 rounded-3xl p-8 flex flex-col items-center text-center transition-all bg-white"
            >
              {/* Icon Circle */}
              <motion.div
                whileHover={{ scale: 1.1 }}
                className="bg-[#F23413] rounded-full p-4 mb-6 flex items-center justify-center"
              >
                {option.icon}
              </motion.div>

              {/* Title */}
              <h3 className="text-xl font-bold text-black mb-3">
                {option.title}
              </h3>

              {/* Description */}
              <p className="text-gray-700 text-sm mb-6 flex-grow">
                {option.description}
              </p>

              {/* Button */}
              <Link
                to={option.to}
                className="bg-black text-white px-6 py-2 rounded-full font-semibold text-sm hover:bg-gray-800 transition-colors"
              >
                QUIERO SABER MÁS
              </Link>
            </motion.div>
          ))}
        </div>

      </div>
    </section>
  );
}
