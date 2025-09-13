// // components/ProductSupport.jsx
// export default function ProductSupport() {
//   return (
//     <section className="bg-white px-16 py-16">
//       <div className="max-w-4xl mx-auto">
//         <h2 className="text-3xl font-bold text-gray-800 mb-6">Outplay the Competition</h2>
//         <p className="text-gray-600 mb-6">
//           Experience a 40% boost in computing from last generation. MSI Desktop equips the 10th Gen. 
//           Intel® Core™ i7 processor with the upmost computing power to bring you an unparalleled 
//           gaming experience.
//         </p>
//         <p className="text-gray-500 text-sm mb-8">
//           *Performance compared to i7-9700, specs varies by model.
//         </p>
        
//         <div className="border-t border-gray-200 pt-8">
//           <h3 className="text-xl font-semibold text-gray-800 mb-4">Product Support</h3>
//           <div className="flex space-x-8">
//             <div className="flex items-center text-blue-600 hover:text-blue-700 cursor-pointer">
//               <span className="mr-2">FAQ</span>
//               <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
//                 <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
//               </svg>
//             </div>
//             <div className="flex items-center text-blue-600 hover:text-blue-700 cursor-pointer">
//               <span className="mr-2">Our Buyer Guide</span>
//               <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
//                 <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
//               </svg>
//             </div>
//           </div>
//         </div>
//       </div>
//     </section>
//   );
// }

//components/ProductSupport.jsx
export default function ProductSupport() {
  return (
    <section className="bg-white px-16 py-16">
      <div className="max-w-4xl mx-auto">
        <h2 className="text-3xl font-bold text-gray-800 mb-6">Outplay the Competition</h2>
        <p className="text-gray-600 mb-6">
          Experience a 40% boost in computing from last generation. MSI Desktop equips the 10th Gen. 
          Intel® Core™ i7 processor with the upmost computing power to bring you an unparalleled 
          gaming experience.
        </p>
        <p className="text-gray-500 text-sm mb-12">
          *Performance compared to i7-9700, specs varies by model.
        </p>
        
        {/* Product Support Section */}
        <div className="bg-gray-50 p-8 rounded-lg">
          <h3 className="text-xl font-semibold text-gray-800 mb-6">Product</h3>
          <div className="space-y-4">
            
            {/* Support */}
            <div className="flex items-center justify-between p-4 bg-white rounded-md shadow-sm hover:shadow-md transition-shadow cursor-pointer">
              <span className="text-gray-800">Support</span>
              <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-gray-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
              </svg>
            </div>

            {/* FAQ */}
            <div className="flex items-center justify-between p-4 bg-white rounded-md shadow-sm hover:shadow-md transition-shadow cursor-pointer">
              <span className="text-gray-800">FAQ</span>
              <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-gray-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
              </svg>
            </div>

            {/* Our Buyer Guide */}
            <div className="flex items-center justify-between p-4 bg-white rounded-md shadow-sm hover:shadow-md transition-shadow cursor-pointer">
              <span className="text-gray-800">Our Buyer Guide</span>
              <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-gray-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
              </svg>
            </div>

          </div>
        </div>
      </div>
    </section>
  );
}
