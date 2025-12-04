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

export default function ImpactSection() {
  // 1. RADIAL – Capacidad anual vs perros actuales
  const radialData = [
    { name: "Ocupación", value: 300, full: 1200 }, // 25%
  ];

  // 2. BARRAS – Rescates por año
  const barData = [
    { year: "2021", rescued: 250 },
    { year: "2022", rescued: 300 },
    { year: "2023", rescued: 220 },
    { year: "2024", rescued: 230 },
  ];

  // 3. DONUT – Adopciones vs no adoptados
  const donutData = [
    { name: "Adoptados", value: 1000 },
    { name: "Pendientes", value: 200 },
  ];

  // 4. SPARKLINE – Padrinos por mes
  const sparkData = [
    { month: "Ene", value: 200 },
    { month: "Feb", value: 300 },
    { month: "Mar", value: 450 },
    { month: "Abr", value: 600 },
    { month: "May", value: 800 },
    { month: "Jun", value: 1000 },
  ];

  // Tus colores de marca
  const PRIMARY = "#2D6FF7";
  const PRIMARY_LIGHT = "#B0D0FF";
  const TEXT = "#1A1A1A";
  const RED = "#FF4D4D";

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
                <RadialBar
                  dataKey="value"
                  cornerRadius={50}
                  fill={PRIMARY}
                />
              </RadialBarChart>
            </ResponsiveContainer>
          </div>

          <p className="text-4xl font-bold mt-2 text-[#1A1A1A]">300</p>
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

          <p className="text-4xl font-bold text-[#1A1A1A] mt-2">+1000</p>
          <p className="text-gray-600">Perros rescatados en 15 años</p>
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
              1000
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

          <p className="text-4xl font-bold text-[#1A1A1A]">+1000</p>
          <p className="text-gray-600">Padrinos alrededor del mundo</p>
        </div>

      </div>
    </section>
  );
}
