import happyDog from '../../assets/homeframe.png';
export default function CTASection() {
    return (
      <section
        className="relative w-full h-96 flex items-center justify-center bg-cover bg-center"
        style={{
          backgroundImage: `url(${happyDog})`,
        }}
      >
        {/* Overlay oscuro */}
        <div className="absolute inset-0 bg-black/40" />
  
        {/* Contenido */}
        <div className="relative z-10 text-center">
          <h2 className="text-4xl md:text-5xl font-bold text-white text-balance">¡El cambio comienza en ti!</h2>
        </div>
      </section>
    )
  }
  