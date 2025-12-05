import Button from "../commons/button";

export default function CambioSection() {
  return (
    <section className="w-full py-16 px-4 sm:px-8 lg:px-16 bg-white">
      <div className="max-w-4xl mx-auto text-center">
        <h2 className="text-4xl sm:text-5xl font-bold text-black mb-6">
          ¡El cambio comienza en ti!
        </h2>

        <p className="text-base sm:text-lg text-gray-700 leading-relaxed mb-8">
          Vivimos gracias al apoyo de personas solidarias que donan alimento,
          insumos y fondos para nuestros más de 130 perros.
        </p>

        <Button text="¡DONAR!" color="#F23413" to="/apadrina" />
      </div>
    </section>
  );
}
