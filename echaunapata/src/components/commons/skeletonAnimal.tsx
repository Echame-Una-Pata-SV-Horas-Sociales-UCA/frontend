export default function SkeletonAnimal() {
  return (
    <div className="animate-pulse max-w-6xl mx-auto px-4 sm:px-8 py-10">
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
        <div className="flex justify-center lg:justify-start">
          <div className="w-[260px] sm:w-[300px] lg:w-[330px] h-[330px] bg-gray-300 rounded-xl" />
        </div>

        <div className="flex flex-col justify-center gap-4">
          <div className="h-6 w-24 bg-gray-300 rounded-full"></div>
          <div className="h-10 w-3/4 bg-gray-300 rounded-md"></div>
          <div className="h-6 w-1/2 bg-gray-300 rounded-md"></div>
          <div className="h-4 w-full bg-gray-300 rounded-md"></div>
          <div className="h-4 w-full bg-gray-300 rounded-md"></div>
          <div className="h-4 w-3/4 bg-gray-300 rounded-md"></div>
          <div className="h-12 w-full bg-gray-400 rounded-md mt-4"></div>
        </div>
      </div>

      <div className="mt-20 flex justify-between items-start divide-x divide-gray-200 gap-6">
        {[...Array(4)].map((_, i) => (
          <div
            key={i}
            className="flex flex-col items-center text-center gap-2 w-full"
          >
            <div className="w-14 h-14 bg-gray-300 rounded-full" />
            <div className="h-4 w-16 bg-gray-300 rounded-md"></div>
            <div className="h-4 w-12 bg-gray-300 rounded-md"></div>
          </div>
        ))}
      </div>
    </div>
  );
}
