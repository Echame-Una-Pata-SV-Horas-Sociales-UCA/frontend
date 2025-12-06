//falta el useEfect
import { useState } from "react";
// import { FindMetrics } from "../../service/DashboardService"; //  Descomentar al conectar con la API
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

function SkeletonCard() {
  return (
    <div className="p-8 bg-[#F5F5F5] rounded-2xl shadow-sm flex flex-col items-center animate-pulse">
      <div className="h-6 w-32 bg-gray-300 mb-4 rounded-md" />
      <div className="w-full h-64 bg-gray-300 rounded-lg" />
      <div className="h-6 w-20 bg-gray-300 mt-4 rounded-md" />
      <div className="h-4 w-32 bg-gray-300 mt-2 rounded-md" />
    </div>
  );
}

export default function ImpactSection() {
  // Datos quemados para desarrollo / pruebas
  const [impactData] = useState<ImpactData>({
    perrosEnSantuario: 155,
    padrinosGlobales: 40,
    rescatesPorAno: { "2024": 150, "2025": 200 },
    perrosAdoptados: 380,
  });

  // Loading deshabilitado para datos quemados
  const [loading] = useState(false);

  const PRIMARY = "#2D6FF7";
  const PRIMARY_LIGHT = "#B0D0FF";
  const TEXT = "#1A1A1A";

  /*
  useEffect(() => {
    const fetchMetrics = async () => {
      try {
        setLoading(true);
        const data = await FindMetrics(); //  Descomentar para usar API
        setImpactData(data.data);         //  Descomentar para usar API
      } catch (error) {
        console.error("Error al traer métricas:", error);
      } finally {
        setLoading(false);
      }
    };

    fetchMetrics();
  }, []);
  */

  const radialData = [
    { name: "Ocupación", value: impactData.perrosEnSantuario, full: 1200 },
  ];
  const barData = Object.entries(impactData.rescatesPorAno).map(
    ([year, rescued]) => ({ year, rescued })
  );
  const donutData = [
    { name: "Adoptados", value: impactData.perrosAdoptados },
    {
      name: "Pendientes",
      value: Math.max(0, 1200 - impactData.perrosAdoptados),
    },
  ];
  const totalRescues = Object.values(impactData.rescatesPorAno).reduce(
    (acc, val) => acc + val,
    0
  );
  const yearsCount = barData.length;
  const avgRescues = yearsCount > 0 ? Math.round(totalRescues / yearsCount) : 0;

  return (
    <section className="w-full py-20 bg-white">
      <h2 className="text-4xl font-bold text-center mb-12 text-[#1A1A1A]">
        Nuestro impacto hasta ahora
      </h2>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-10 px-6 max-w-6xl mx-auto">
        {loading
          ? Array.from({ length: 4 }).map((_, idx) => (
              <SkeletonCard key={idx} />
            ))
          : [
              <div
                key="radial"
                className="p-8 bg-[#F5F5F5] rounded-2xl shadow-sm flex flex-col items-center transition-opacity duration-700 opacity-0 animate-fadeIn"
                style={{ animationDelay: `0ms` }}
              >
                <h3 className="font-bold mb-4 text-lg text-[#1A1A1A]">
                  Perros en el Santuario
                </h3>
                <div className="w-64 h-64">
                  <ResponsiveContainer>
                    <RadialBarChart
                      innerRadius="70%"
                      outerRadius="100%"
                      startAngle={90}
                      endAngle={-270}
                      data={radialData}
                    >
                      <RadialBar
                        dataKey="value"
                        cornerRadius={50}
                        fill={PRIMARY}
                      />
                    </RadialBarChart>
                  </ResponsiveContainer>
                </div>
                <p className="text-4xl font-bold mt-2 text-[#1A1A1A]">
                  {impactData.perrosEnSantuario}
                </p>
                <p className="text-gray-600">Perros actualmente</p>
              </div>,

              <div
                key="bar"
                className="p-8 bg-[#F5F5F5] rounded-2xl shadow-sm flex flex-col items-center transition-opacity duration-700 opacity-0 animate-fadeIn"
                style={{ animationDelay: `100ms` }}
              >
                <h3 className="font-bold mb-4 text-lg text-[#1A1A1A]">
                  Rescates por Año
                </h3>
                <div className="w-full h-64">
                  <ResponsiveContainer>
                    <BarChart data={barData}>
                      <XAxis dataKey="year" stroke={TEXT} />
                      <YAxis stroke={TEXT} />
                      <Tooltip />
                      <Bar
                        dataKey="rescued"
                        fill={PRIMARY}
                        radius={[6, 6, 0, 0]}
                      />
                    </BarChart>
                  </ResponsiveContainer>
                </div>
                <p className="text-4xl font-bold text-[#1A1A1A] mt-2">
                  +{totalRescues}
                </p>
                <p className="text-gray-600">
                  Total rescatados (en {yearsCount}{" "}
                  {yearsCount !== 1 ? "años" : "año"} mostrados)
                </p>
                <p className="text-gray-600">Promedio: {avgRescues} por año</p>
              </div>,

              <div
                key="donut"
                className="p-8 bg-[#F5F5F5] rounded-2xl shadow-sm flex flex-col items-center transition-opacity duration-700 opacity-0 animate-fadeIn"
                style={{ animationDelay: `200ms` }}
              >
                <h3 className="font-bold mb-4 text-lg text-[#1A1A1A]">
                  Perros Adoptados
                </h3>
                <div className="w-64 h-64 relative">
                  <ResponsiveContainer>
                    <PieChart>
                      <Pie
                        data={donutData}
                        dataKey="value"
                        innerRadius="65%"
                        outerRadius="100%"
                      >
                        <Cell fill={PRIMARY} />
                        <Cell fill={PRIMARY_LIGHT} />
                      </Pie>
                    </PieChart>
                  </ResponsiveContainer>
                  <p className="absolute inset-0 flex items-center justify-center text-4xl font-bold">
                    {impactData.perrosAdoptados}
                  </p>
                </div>
                <p className="text-gray-600">Entregados en adopción</p>
              </div>,

              <div
                key="padrinos"
                className="p-8 bg-[#F5F5F5] rounded-2xl shadow-sm flex flex-col items-center transition-opacity duration-700 opacity-0 animate-fadeIn"
                style={{ animationDelay: `300ms` }}
              >
                <h3 className="font-bold mb-4 text-lg text-[#1A1A1A]">
                  Padrinos Globales
                </h3>
                <div className="w-64 h-64 relative flex items-center justify-center">
                  <div className="w-36 h-36 rounded-full bg-gradient-to-r from-[#2D6FF7] to-[#B0D0FF] flex items-center justify-center text-white text-4xl font-bold shadow-md">
                    +{impactData.padrinosGlobales}
                  </div>
                </div>
                <p className="text-gray-600">Padrinos alrededor del mundo</p>
              </div>,
            ]}
      </div>

      <style>{`
        @keyframes fadeIn {
          from { opacity: 0; transform: translateY(20px); }
          to { opacity: 1; transform: translateY(0); }
        }
        .animate-fadeIn {
          animation: fadeIn 0.7s forwards;
        }
      `}</style>
    </section>
  );
}
