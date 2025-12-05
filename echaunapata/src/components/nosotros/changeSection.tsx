import Button from "../commons/button";

export default function ChangeSection() {
    return (
        <section className="w-full py-16 px-4 sm:px-8 lg:px-16 bg-white">
            <div className="max-w-4xl mx-auto text-center">
                <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold text-black mb-6 leading-tight">
                    ¡El cambio comienza en ti!
                </h1>
                
                <p className="text-base sm:text-lg text-gray-700 leading-relaxed mb-6">
                    Vivimos gracias al apoyo de personas solidarias que donan alimento, insumos y fondos para nuestros más de 130 perros.
                </p>
                
                <p className="text-base sm:text-lg text-gray-700 leading-relaxed mb-8">
                    Con el Plan Padrino Mensual, podés apadrinar un peludo con $10 al mes y ayudar a cubrir sus cuidados y bienestar.
                </p>
                
                <Button text="¡DONAR!" color="#F23413" to="/apadrina" />
            </div>
        </section>
    )
}