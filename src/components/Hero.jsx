export default function Hero() {
  return (
    <section className="bg-gray-50 flex items-center justify-between px-16 py-20">
      <div className="max-w-lg">
        <h2 className="text-4xl font-bold text-gray-800 leading-snug">
          Outplay the Competition
        </h2>
        <p className="mt-4 text-gray-600">
          Experience up to 40% boost in computing from last generation. Optimized
          for performance and designed for speed.
        </p>
        <button className="mt-6 px-6 py-3 bg-blue-600 text-white rounded-lg hover:bg-blue-700">
          Learn More
        </button>
      </div>
      <img
        src="/assets/hero-image.png"
        alt="Hero"
        className="w-1/2 rounded-lg shadow-lg"
      />
    </section>
  );
}



