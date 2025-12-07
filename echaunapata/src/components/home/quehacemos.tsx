import {
  HomeOutlined,
  VolunteerActivismOutlined,
  PaidOutlined,
  MedicalServicesOutlined, PetsRounded
} from "@mui/icons-material";

export default function QueHacemos() {
  return (
    <section className="bg-[#4A1214] py-16 px-6">
      <div className="max-w-7xl mx-auto">

        {/* Heading */}
        <h2 className="text-4xl md:text-5xl font-bold text-white text-center mb-16">
          Lo que hacemos
        </h2>

        {/* Grid */}
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-8 md:gap-12">

          {/* Refugio */}
          <div className="flex flex-col items-center text-center">
            <HomeOutlined className="text-white mb-4" style={{ fontSize: 48 }} />
            <h3 className="text-xl md:text-2xl font-bold text-white">Refugio</h3>
          </div>

          {/* Apadrinamiento */}
          <div className="flex flex-col items-center text-center">
            <VolunteerActivismOutlined className="text-white mb-4" style={{ fontSize: 48 }} />
            <h3 className="text-xl md:text-2xl font-bold text-white">Apadrinamiento</h3>
          </div>

          {/* Adopciones */}
          <div className="flex flex-col items-center text-center">
            <PetsRounded className="text-white mb-4" style={{ fontSize: 48 }} />
            <h3 className="text-xl md:text-2xl font-bold text-white">Adopciones</h3>
          </div>

          {/* Donaciones */}
          <div className="flex flex-col items-center text-center">
            <PaidOutlined className="text-white mb-4" style={{ fontSize: 48 }} />
            <h3 className="text-xl md:text-2xl font-bold text-white">Donaciones</h3>
          </div>

          {/* Emergencias */}
          <div className="flex flex-col items-center text-center col-span-2 md:col-span-3 lg:col-span-1">
            <MedicalServicesOutlined className="text-white mb-4" style={{ fontSize: 48 }} />
            <h3 className="text-xl md:text-2xl font-bold text-white">
              Emergencias
              <br /> y denuncias
            </h3>
          </div>

        </div>
      </div>
    </section>
  );
}
