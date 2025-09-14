// components/PerformanceSection.jsx
export default function PerformanceSection() {
  return (
    <section className="bg-black text-white px-4 sm:px-8 md:px-16 py-12 md:py-16">
      <div className="max-w-4xl mx-auto text-center">
        <h2 className="text-2xl sm:text-3xl font-bold mb-4 sm:mb-6">Outplay the Competition</h2>
        <p className="text-gray-300 mb-4 sm:mb-6 text-sm sm:text-base">
          Experience a 40% boost in computing from last generation. MSI Desktop equips the 10th Gen. 
          Intel® Core™ i7 processor with the upmost computing power to bring you an unparalleled 
          gaming experience.
        </p>
        <p className="text-gray-400 text-xs sm:text-sm mb-8 md:mb-12">
          *Performance compared to i7-9700. Specs varies by model.
        </p>
        
        {/* Core i7 Badge */}
        <div className="bg-blue-900 bg-opacity-30 inline-block px-6 py-3 rounded-lg border border-blue-600 mb-6">
          <h3 className="text-xl font-bold text-blue-400">CORE i7</h3>
          <p className="text-gray-300 text-sm">10TH GEN</p>
        </div>
      </div>
    </section>
  );
}