import Card from "../commons/cards";

export default function CardsSection() {
    return (
        <section className="w-full py-16 px-4 sm:px-8 lg:px-16 bg-white">
            <div className="max-w-7xl mx-auto">
                <h1 className="text-2xl sm:text-3xl font-bold text-black mb-8 uppercase text-center">NUESTRA MISIÓN</h1>
            </div>
            <div className="max-w-7xl mx-auto">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <Card title="Rescate" description="Rescatamos perros en situación de vulnerabilidad, los rehabilitamos y buscamos para ellos un hogar responsable y amoroso." />
                    <Card title="Rehabilitacion" description="Promovemos la tenencia responsable, la adopción consciente y la esterilización canina como pilares fundamentales para reducir la sobrepoblación y el abandono en las calles." />
                </div>
            </div>
        </section>
    )
}