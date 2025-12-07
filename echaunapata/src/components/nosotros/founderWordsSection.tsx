import FullWidthSection from "./fullWiidthSection";
import videoNosotros from "../../assets/video/videoNosotros.mp4";

export default function FounderWordsSection() {
  return (
    <section className="w-full">
      {/* Título */}
      <div className="max-w-4xl mx-auto text-center px-6 py-8">
        <h2 className="text-4xl font-bold mb-4">
          Unas palabras de nuestra fundadora
        </h2>
        <p className="text-lg text-gray-600">
          Un mensaje que refleja nuestra misión, visión y el amor por cada vida que protegemos.
        </p>
      </div>

      {/* Sección con video */}
      <FullWidthSection
        height="100vh"
        videoSrc={videoNosotros}
      />
    </section>
  );
}
