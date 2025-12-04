import happyDog from '../../assets/homeframe.png';

interface DogsGridProps {
  showGallery?: boolean;
  title: string;
  description: string | string[];
}

export default function DogsGrid({ title, description }: DogsGridProps) {
  const descriptionArray = Array.isArray(description) ? description : [description];

  return (
    <section className="w-full py-16 px-4 sm:px-8 lg:px-16 bg-white">
      <div className="max-w-7xl mx-auto">

        {/* Top row: text (left) + big image (right) */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12 mb-0 items-center">
          {/* Left side – text */}
          <div className="flex flex-col justify-center max-w-md h-full">
            <h2 className="text-4xl sm:text-5xl font-extrabold uppercase mb-6">
              {title}
            </h2>

            {descriptionArray.map((p, i) => (
              <p
                key={i}
                className={`text-gray-700 text-lg leading-relaxed ${
                  i < descriptionArray.length - 1 ? 'mb-6' : ''
                }`}
              >
                {p}
              </p>
            ))}
          </div>

          {/* Right side – single big image occupying width of two grid columns */}
          <div className="w-full col-span-2 lg:col-span-1">
            <div className="w-full h-[420px] overflow-hidden">
              <img
                src={happyDog}
                alt="Perro en el refugio"
                className="w-full h-full object-cover"
              />
            </div>
          </div>
        </div>

        {/* Bottom row: 4-column gallery, no gap, no radius */}
        <div className="mt-0 grid grid-cols-4 gap-0">
          <div className="h-[210px] overflow-hidden">
            <img src={happyDog} alt="Perro 1" className="w-full h-full object-cover" />
          </div>
          <div className="h-[210px] overflow-hidden">
            <img src={happyDog} alt="Perro 2" className="w-full h-full object-cover" />
          </div>
          <div className="h-[210px] overflow-hidden">
            <img src={happyDog} alt="Perro 3" className="w-full h-full object-cover" />
          </div>
          <div className="h-[210px] overflow-hidden">
            <img src={happyDog} alt="Perro 4" className="w-full h-full object-cover" />
          </div>
        </div>
      </div>
    </section>
  );
}
