import Navbar from "../components/navbar";
import Footer from "../components/footer";

export default function Refugio() {
  return (
    <div>
      <Navbar solid={false} />
      <div className="min-h-screen pt-20 pb-12 px-6">
        <div className="max-w-7xl mx-auto">
          <h1 className="text-4xl font-bold mb-8 text-center">Refugio</h1>
          <div className="prose max-w-none">
            <p className="text-lg mb-4">
              Bienvenido a nuestro refugio. Aquí encontrarás información sobre nuestras instalaciones
              y cómo trabajamos para cuidar de los animales.
            </p>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  )
}

