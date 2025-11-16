interface CardProps {
  title: string;
  description: string;
}

export default function Card({ title, description }: CardProps) {
  return (
    <div className=" rounded-lg p-8 shadow-sm bg-gray-100">
      {/* Title with dotted border */}
      <div className="flex justify-center mb-6">
        <div className=" rounded-lg px-6 py-3">
          <h3 className="text-2xl md:text-3xl font-bold text-black text-center">
            {title}
          </h3>
        </div>
      </div>

      {/* Description */}
      <p className="text-base md:text-lg text-gray-700 text-center leading-relaxed">
        {description}
      </p>
    </div>
  );
}

