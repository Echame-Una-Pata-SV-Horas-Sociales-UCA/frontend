import donacion from '../../assets/donacion.svg';

export default function MetodosDonacion() {
  return (
    <section className="w-full py-8 px-4 sm:px-8 lg:px-16 bg-white">
      <div className="max-w-7xl mx-auto flex justify-center">
        <img 
          src={donacion} 
          alt="Métodos de donación - Échame Una Pata" 
          className="w-full max-w-full h-auto object-contain"
        />
      </div>
    </section>
  );
}

