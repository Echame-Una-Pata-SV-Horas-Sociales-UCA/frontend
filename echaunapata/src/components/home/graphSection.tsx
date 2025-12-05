import { useState } from "react";
// FindMetrics kept for possible re-enable in the future; commented out to avoid unused-import errors
// import { FindMetrics } from "../../service/DashboardService";
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
import Iconloader from "../commons/loadIcon";

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
    rescatesPorAno: {"2024": 150, "2025": 200 },
    perrosAdoptados: 380,
  });

  const [loading] = useState(false);

  const PRIMARY = "#2D6FF7";
  const PRIMARY_LIGHT = "#B0D0FF";
  const TEXT = "#1A1A1A";

  // useEffect(() => {
  //   const fetchMetrics = async () => {
  //     try {
  //       setLoading(true)
  //       const data = await FindMetrics();
  //       setImpactData(data.data);
  //     } catch (error) {
  //       console.error("Error al traer métricas:", error);
  //     } finally {
  //       setLoading(false);
  //     }
  //   };

  //   fetchMetrics();
  // }, []);

  // if (loading) {
    
  // }

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

  // Number of years shown in the bar chart and average rescues per year
  const yearsCount = barData.length;
  const avgRescues = yearsCount > 0 ? Math.round(totalRescues / yearsCount) : 0;

  return (
    <section className="w-full py-20 bg-white">
      {
        loading && <Iconloader/>
      }
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
          <p className="text-gray-600">Total rescatados (en {yearsCount} {yearsCount !== 1 ? "años" : "año"} mostrados)</p>
          <p className="text-gray-600">Promedio: {avgRescues} por año</p>
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

        {/* CARD 4 – Padrinos: KPI badge aligned with neighbor */}
        <div className="p-8 bg-[#F5F5F5] rounded-2xl shadow-sm flex flex-col items-center">
          <h3 className="font-bold mb-4 text-lg text-[#1A1A1A]">Padrinos Globales</h3>

          <div className="w-64 h-64 relative">
            <div className="absolute inset-0 flex items-center justify-center">
              <div className="w-36 h-36 rounded-full bg-gradient-to-r from-[#2D6FF7] to-[#B0D0FF] flex items-center justify-center text-white text-4xl font-bold shadow-md">
                +{impactData.padrinosGlobales}
              </div>
            </div>
          </div>

          <p className="text-gray-600">Padrinos alrededor del mundo</p>
        </div>
      </div>
    </section>
  );
}
