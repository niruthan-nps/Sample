// export default function Hero() {
//   return (
//     <section className="bg-gray-50 flex items-center justify-between px-16 py-20">
//       <div className="max-w-lg">
//         <h2 className="text-4xl font-bold text-gray-800 leading-snug">
//           Outplay the Competition
//         </h2>
//         <p className="mt-4 text-gray-600">
//           Experience up to 40% boost in computing from last generation. Optimized
//           for performance and designed for speed.
//         </p>
//         <button className="mt-6 px-6 py-3 bg-blue-600 text-white rounded-lg hover:bg-blue-700">
//           Learn More
//         </button>
//       </div>
//       <img
//         src="/assets/hero-image.png"
//         alt="Hero"
//         className="w-1/2 rounded-lg shadow-lg"
//       />
//     </section>
//   );
// }



// components/Hero.jsx
// export default function Hero() {
//   return (
//     <section className="bg-gray-50 flex items-center justify-between px-16 py-20">
//       <div className="max-w-lg">
//         <h2 className="text-4xl font-bold text-gray-800 leading-snug">
//           Outplay the Competition
//         </h2>
//         <p className="mt-4 text-gray-600">
//           Experience up to 40% boost in computing from last generation. Optimized
//           for performance and designed for speed.
//         </p>
//         <div className="mt-8 flex space-x-4">
//           <button className="px-6 py-3 bg-blue-600 text-white rounded-lg hover:bg-blue-700">
//             Add to Home 1
//           </button>
//           <button className="px-6 py-3 border border-gray-300 text-gray-700 rounded-lg hover:bg-gray-100">
//             Add to Home 2
//           </button>
//         </div>
//       </div>
//       <img
//         src="/assets/hero-image.png"
//         alt="MSI MPG Trident 3 Gaming Desktop"
//         className="w-1/2 rounded-lg shadow-lg"
//       />
//     </section>
//   );
// }

export default function Hero() {
  return (
    <section className="bg-white px-8 md:px-16 py-8 md:py-12">
      {/* Breadcrumb */}
      <div className="text-sm text-gray-500 mb-6">
        <span className="hover:text-blue-600 cursor-pointer">Home</span>
        <span className="mx-2">·</span>
        <span className="hover:text-blue-600 cursor-pointer">Language</span>
        <span className="mx-2">·</span>
        <span className="text-gray-800">MSI MPG Service</span>
      </div>

      <div className="flex flex-col md:flex-row items-center justify-between gap-8">
        {/* Product Info */}
        <div className="max-w-lg">
          <h1 className="text-2xl md:text-3xl font-bold text-gray-800 mb-4">
            MSI MPG Trident 3
          </h1>
          
          <p className="text-gray-600 text-sm mb-4">
            Be the first to review this product
          </p>

          <p className="text-gray-700 mb-6 leading-relaxed">
            MSI MPG Trident 3 IOSC-005AU Intel i7 10700F, 2000 SUPER, 16GB RAM, 
            512GB SSD, 2TB HDD, Windows 10 Home, Gaming Keyboard and Mouse 
            3 Years Warranty Gaming Desktop
          </p>

          {/* Brand and SKU */}
          <div className="mb-6">
            <p className="text-gray-600 text-sm mb-2">
              Home © GearMiner® Controls Ltd
            </p>
            <p className="text-gray-600 text-sm">
              SKU: DS/BIAI
            </p>
          </div>

          {/* More Information */}
          <div className="flex items-center text-blue-600 hover:text-blue-700 cursor-pointer mb-6">
            <span className="mr-2 font-medium">+ MORE INFORMATION</span>
            <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
            </svg>
          </div>

          {/* Payment options */}
          <div className="text-sm text-gray-600">
            <p className="mb-1">zip | own & now, up to 6 months</p>
            <p>Microsoft New Board model</p>
          </div>
        </div>

        {/* Product Image */}
        <div className="w-full md:w-1/2">
          <img
            src="/assets/hero-image.png"
            alt="MSI MPG Trident 3 Gaming Desktop"
            className="w-full rounded-lg shadow-lg"
          />
        </div>
      </div>
    </section>
  );
}

