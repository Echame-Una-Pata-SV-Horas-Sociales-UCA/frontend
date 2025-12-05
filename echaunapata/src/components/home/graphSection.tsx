import { useEffect, useState } from "react";
import { FindMetrics } from "../../service/DashboardService";
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
  LineChart,
  Line,
} from "recharts";

interface ImpactData {
  perrosEnSantuario: number;
  padrinosGlobales: number;
  rescatesPorAno: Record<string, number>;
  perrosAdoptados: number;
}

export default function ImpactSection() {
  const [impactData, setImpactData] = useState<ImpactData>({
    perrosEnSantuario: 0,
    padrinosGlobales: 0,
    rescatesPorAno: {},
    perrosAdoptados: 0,
  });

  const [loading, setLoading] = useState(true);

  const PRIMARY = "#2D6FF7";
  const PRIMARY_LIGHT = "#B0D0FF";
  const TEXT = "#1A1A1A";

  useEffect(() => {
    const fetchMetrics = async () => {
      try {
        const data = await FindMetrics();
        setImpactData(data.data);
      } catch (error) {
        console.error("Error al traer métricas:", error);
      } finally {
        setLoading(false);
      }
    };

    fetchMetrics();
  }, []);

  if (loading) {
    return <p className="text-center py-10">Cargando datos...</p>;
  }

  // RADIAL
  const radialData = [
    { name: "Ocupación", value: impactData.perrosEnSantuario, full: 1200 },
  ];

  // FIX: TIPADO PARA EVITAR TS18046
  const barData = Object.entries(impactData.rescatesPorAno).map(
    ([year, rescued]: [string, number]) => ({
      year,
      rescued,
    })
  );

  const donutData = [
    { name: "Adoptados", value: impactData.perrosAdoptados },
    {
      name: "Pendientes",
      value: Math.max(0, 1200 - impactData.perrosAdoptados),
    },
  ];

  // FIX: TIENE QUE TENER VALORES NUMÉRICOS TIPADOS
  const totalRescues = Object.values(impactData.rescatesPorAno).reduce(
    (acc: number, val: number) => acc + val,
    0
  );

  const sparkData = [
    { month: "Ene", value: impactData.padrinosGlobales },
    { month: "Feb", value: impactData.padrinosGlobales },
    { month: "Mar", value: impactData.padrinosGlobales },
    { month: "Abr", value: impactData.padrinosGlobales },
    { month: "May", value: impactData.padrinosGlobales },
    { month: "Jun", value: impactData.padrinosGlobales },
  ];

  return (
    <section className="w-full py-20 bg-white">
      <h2 className="text-4xl font-bold text-center mb-12 text-[#1A1A1A]">
        Impacto de <span className="text-[#2D6FF7]">Échame Una Pata SV</span>
      </h2>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-10 px-6 max-w-6xl mx-auto">
        {/* CARD 1 – RADIAL */}
        <div className="p-8 bg-[#F5F5F5] rounded-2xl shadow-sm flex flex-col items-center">
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
                <RadialBar dataKey="value" cornerRadius={50} fill={PRIMARY} />
              </RadialBarChart>
            </ResponsiveContainer>
          </div>

          <p className="text-4xl font-bold mt-2 text-[#1A1A1A]">
            {impactData.perrosEnSantuario}
          </p>
          <p className="text-gray-600">Perros actualmente</p>
        </div>

        {/* CARD 2 – BAR CHART */}
        <div className="p-8 bg-[#F5F5F5] rounded-2xl shadow-sm flex flex-col items-center">
          <h3 className="font-bold mb-4 text-lg text-[#1A1A1A]">
            Rescates por Año
          </h3>

          <div className="w-full h-64">
            <ResponsiveContainer>
              <BarChart data={barData}>
                <XAxis dataKey="year" stroke={TEXT} />
                <YAxis stroke={TEXT} />
                <Tooltip />
                <Bar dataKey="rescued" fill={PRIMARY} radius={[6, 6, 0, 0]} />
              </BarChart>
            </ResponsiveContainer>
          </div>

          <p className="text-4xl font-bold text-[#1A1A1A] mt-2">
            +{totalRescues}
          </p>
          <p className="text-gray-600">Perros rescatados en el año</p>
        </div>

        {/* CARD 3 – DONUT */}
        <div className="p-8 bg-[#F5F5F5] rounded-2xl shadow-sm flex flex-col items-center">
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
        </div>

        {/* CARD 4 – SPARKLINE */}
        <div className="p-8 bg-[#F5F5F5] rounded-2xl shadow-sm flex flex-col items-center">
          <h3 className="font-bold mb-4 text-lg text-[#1A1A1A]">
            Padrinos Globales
          </h3>

          <div className="w-full h-40">
            <ResponsiveContainer>
              <LineChart data={sparkData}>
                <Tooltip />
                <Line
                  type="monotone"
                  dataKey="value"
                  stroke={PRIMARY}
                  strokeWidth={3}
                  dot={false}
                />
              </LineChart>
            </ResponsiveContainer>
          </div>

          <p className="text-4xl font-bold text-[#1A1A1A]">
            +{impactData.padrinosGlobales}
          </p>
          <p className="text-gray-600">Padrinos alrededor del mundo</p>
        </div>
      </div>
    </section>
  );
}
