import { useState } from "react";
import {
  RadialBarChart,
  RadialBar,
  BarChart,
  Bar,
  XAxis,
  YAxis,
  Tooltip,
  ResponsiveContainer,
  PieChart,
  Pie,
  Cell,
} from "recharts";

interface ImpactData {
  perrosEnSantuario: number;
  padrinosGlobales: number;
  rescatesPorAno: Record<string, number>;
  perrosAdoptados: number;
}

export default function ImpactSection() {
  const [impactData] = useState<ImpactData>({
    perrosEnSantuario: 155,
    padrinosGlobales: 40,
    rescatesPorAno: { "2024": 150, "2025": 200 },
    perrosAdoptados: 380,
  });

  const [loading] = useState(false);

  const PRIMARY = "#2D6FF7";
  const PRIMARY_LIGHT = "#B0D0FF";
  const TEXT = "#1A1A1A";

  const radialData = [
    { name: "Ocupación", value: impactData.perrosEnSantuario, full: 1200 },
  ];

  const barData = Object.entries(impactData.rescatesPorAno).map(([year, rescued]) => ({
    year,
    rescued,
  }));

  const donutData = [
    { name: "Adoptados", value: impactData.perrosAdoptados },
    { name: "Pendientes", value: Math.max(0, 1200 - impactData.perrosAdoptados) },
  ];

  const totalRescues = Object.values(impactData.rescatesPorAno).reduce(
    (acc, val) => acc + val,
    0
  );

  const yearsCount = barData.length;
  const avgRescues = yearsCount > 0 ? Math.round(totalRescues / yearsCount) : 0;

  return (
    <section className="w-full py-16 bg-white">

      <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-center mb-12 text-[#1A1A1A] animate-fadeIn">
        Nuestro impacto hasta ahora
      </h2>

      <div
        className="
          grid 
          grid-cols-1 
          sm:grid-cols-2 
          xl:grid-cols-4 
          gap-6 
          px-4 sm:px-6 md:px-10 
          max-w-[1500px] mx-auto w-full
        "
      >
        {/* --- CARD 1 - Radial con ScaleIn --- */}
        <div
          className="
            glass-card 
            p-4 sm:p-6 md:p-8 
            rounded-2xl flex flex-col items-center text-center 
            w-full h-full 
            animate-slideUp
          "
          style={{ animationDelay: "0ms" }}
        >
          <h3 className="font-bold mb-3 text-base sm:text-lg text-[#1A1A1A]">
            Perros en el Santuario
          </h3>

          <div className="w-full h-[200px] sm:h-[240px] md:h-[260px] animate-scaleIn">
            <ResponsiveContainer width="100%" height="100%">
              <RadialBarChart
                innerRadius="70%"
                outerRadius="100%"
                startAngle={90}
                endAngle={-270}
                data={radialData}
              >
                <RadialBar dataKey="value" cornerRadius={50} fill={PRIMARY} />
              </RadialBarChart>
            </ResponsiveContainer>
          </div>

          <p className="text-3xl sm:text-4xl font-bold mt-2 text-[#1A1A1A]">
            {impactData.perrosEnSantuario}
          </p>
          <p className="text-gray-600 text-sm">Perros actualmente</p>
        </div>

        {/* --- CARD 2 - Barras con slideUp --- */}
        <div
          className="
            glass-card 
            p-4 sm:p-6 md:p-8 
            rounded-2xl flex flex-col items-center text-center 
            w-full h-full 
            animate-slideUp
          "
          style={{ animationDelay: "120ms" }}
        >
          <h3 className="font-bold mb-4 text-base sm:text-lg text-[#1A1A1A]">
            Rescates por Año
          </h3>

          <div className="w-full h-[200px] sm:h-[240px] md:h-[260px] animate-fadeIn">
            <ResponsiveContainer width="100%" height="100%">
              <BarChart data={barData}>
                <XAxis dataKey="year" stroke={TEXT} />
                <YAxis stroke={TEXT} />
                <Tooltip />
                <Bar
                  dataKey="rescued"
                  fill={PRIMARY}
                  radius={[6, 6, 0, 0]}
                  animationDuration={1200}
                />
              </BarChart>
            </ResponsiveContainer>
          </div>

          <p className="text-3xl sm:text-4xl font-bold text-[#1A1A1A] mt-2">
            +{totalRescues}
          </p>
          <p className="text-gray-600 text-sm">
            Total rescatados ({yearsCount} {yearsCount !== 1 ? "años" : "año"})
          </p>
          <p className="text-gray-600 text-sm">Promedio: {avgRescues} por año</p>
        </div>

        {/* --- CARD 3 - Donut con pulso --- */}
        <div
          className="
            glass-card 
            p-4 sm:p-6 md:p-8 
            rounded-2xl flex flex-col items-center text-center 
            w-full h-full 
            animate-slideUp
          "
          style={{ animationDelay: "240ms" }}
        >
          <h3 className="font-bold mb-4 text-base sm:text-lg">
            Perros Adoptados
          </h3>

          <div className="relative w-full h-[200px] sm:h-[240px] md:h-[260px] flex items-center justify-center">

            {/* Pulso */}
            <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
              <div className="pulse-circle"></div>
            </div>

            <ResponsiveContainer width="100%" height="100%">
              <PieChart>
                <Pie data={donutData} dataKey="value" innerRadius="60%" outerRadius="100%">
                  <Cell fill={PRIMARY} />
                  <Cell fill={PRIMARY_LIGHT} />
                </Pie>
              </PieChart>
            </ResponsiveContainer>

            <p className="absolute text-3xl sm:text-4xl font-bold">
              {impactData.perrosAdoptados}
            </p>
          </div>

          <p className="text-gray-600 text-sm mt-4">
            Entregados en adopción
          </p>
        </div>

        {/* --- CARD 4 - Padrinos Globales --- */}
        <div
          key="padrinos"
          className="
            glass-card 
            p-6 sm:p-8 
            rounded-2xl flex flex-col 
            items-center text-center 
            w-full h-full 
            animate-slideUp
          "
          style={{ animationDelay: "360ms" }}
        >
          <h3 className="font-bold text-lg sm:text-xl text-[#1A1A1A] mb-6">
            Padrinos Globales
          </h3>

          <div className="flex flex-col items-center justify-center flex-grow space-y-6">

            <div
              className="
                w-28 h-28 sm:w-32 sm:h-32 md:w-36 md:h-36
                rounded-full bg-gradient-to-br from-[#2D6FF7] to-[#B0D0FF]
                flex items-center justify-center
                text-white text-3xl sm:text-4xl md:text-5xl 
                font-bold shadow-lg
                transition-transform hover:scale-105
              "
            >
              +{impactData.padrinosGlobales}
            </div>

            <p className="text-gray-600 text-sm sm:text-base leading-relaxed max-w-[200px]">
              Padrinos alrededor del mundo
            </p>
          </div>
        </div>

      </div>

    </section>
  );
}
