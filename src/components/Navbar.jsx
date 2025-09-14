

// export default function Navbar() {
//   return (
//     <nav className="bg-white">
//       {/* Top info bar */}
//       <div className="bg-gray-100 text-gray-700 text-xs py-2 px-8">
//         <div className="flex justify-between items-center">
//           <div className="flex items-center">
//             <span>Mon-Thu: </span>
//             <span className="font-medium ml-1">9:00AM - 5:30PM</span>
//             <span className="mx-2">|</span>
//             <span>Visit our showroom in 1234 Street Address City Address, 1234</span>
//             <span className="mx-2">|</span>
//             <span className="text-blue-600 hover:underline cursor-pointer">Contact Us</span>
//           </div>
//           <div className="flex items-center">
//             <span>Call us: (00) 1234 5678</span>
//           </div>
//         </div>
//       </div>

//       {/* Main navigation */}
//       <div className="px-8 py-4 border-b">
//         <div className="flex justify-between items-center">
//           {/* Logo */}
//           <h1 className="text-2xl font-bold text-gray-800">Logitops</h1>

//           {/* Main navigation items - evenly spaced */}
//           <div className="flex-1 mx-8">
//             <ul className="flex justify-between text-gray-600">
//               <li className="hover:text-blue-600 cursor-pointer">Laptops</li>
//               <li className="hover:text-blue-600 cursor-pointer">Desktop PCs</li>
//               <li className="hover:text-blue-600 cursor-pointer">Networking Devices</li>
//               <li className="hover:text-blue-600 cursor-pointer">Printers & Scanners</li>
//               <li className="hover:text-blue-600 cursor-pointer">PC Parts</li>
//               <li className="hover:text-blue-600 cursor-pointer">All Other Products</li>
//               <li className="hover:text-blue-600 cursor-pointer">Repairs</li>
//             </ul>
//           </div>

//           {/* Search and cart icons */}
//           <div className="flex items-center gap-4">
//             <button className="p-2 rounded-full hover:bg-gray-100">
//               {/* Search icon */}
//               <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
//                 <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
//               </svg>
//             </button>
//             <button className="p-2 rounded-full hover:bg-gray-100">
//               {/* Cart icon */}
//               <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
//                 <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 3h2l.4 2M7 13h10l4-8H5.4M7 13L5.4 5M7 13l-2.293 2.293c-.63.63-.184 1.707.707 1.707H17m0 0a2 2 0 100 4 2 2 0 000-4zm-8 2a2 2 0 11-4 0 2 2 0 014 0z" />
//               </svg>
//             </button>
//           </div>
//         </div>
//       </div>

//       {/* Product tabs and action section - now aligned properly */}
//       <div className="px-8 py-4 border-b">
//         <div className="flex justify-between items-center">
//           {/* Product tabs */}
//           <div className="flex space-x-8">
//             <span className="text-blue-600 font-medium border-b-2 border-blue-600 pb-1">About Product</span>
//             <span className="text-gray-600 hover:text-blue-600 cursor-pointer">Details</span>
//             <span className="text-gray-600 hover:text-blue-600 cursor-pointer">Specs</span>
//           </div>
          
//           {/* Product action section - aligned to right */}
//           <div className="flex items-center space-x-4">
//             <div className="text-right">
//               <div className="text-sm text-gray-500">On Sale from</div>
//               <div className="text-xl font-bold text-gray-800">$3,299.00</div>
//             </div>
            
//             <div className="flex items-center border rounded-md overflow-hidden">
//               <button className="px-3 py-1 bg-gray-100 hover:bg-gray-200">-</button>
//               <span className="px-3 py-1 bg-white">1</span>
//               <button className="px-3 py-1 bg-gray-100 hover:bg-gray-200">+</button>
//             </div>
            
//             <button className="px-4 py-2 bg-blue-600 text-white rounded-md hover:bg-blue-700 text-sm">
//               Add to Cart
//             </button>
//           </div>
//         </div>
//       </div>
//     </nav>
//   );
// }


// components/Navbar.jsx
// export default function Navbar() {
//   return (
//     <nav className="bg-white">
//       {/* Top info bar */}
//       <div className="bg-black text-white text-xs py-2 px-8">
//         <div className="flex justify-between items-center">
//           <div className="flex items-center">
//             <span>Mon-Thu: </span>
//             <span className="font-medium ml-1">9:00AM - 5:30PM</span>
//             <span className="mx-2">|</span>
//             <span>Visit our showroom in 1234 Street Address City Address, 1234</span>
//             <span className="mx-2">|</span>
//             <span className="text-blue-600 hover:underline cursor-pointer">Contact Us</span>
//           </div>
//           <div className="flex items-center">
//             <span>Call us: (00) 1234 5678</span>
//           </div>
//         </div>
//       </div>

//       {/* Main navigation */}
//       <div className="px-8 py-4 border-b">
//         <div className="flex justify-between items-center">
//           {/* Logo */}
//           <h1 className="text-2xl font-bold text-gray-800">Logitops</h1>

//           {/* Main navigation items */}
//           <div className="flex-1 mx-8">
//             <ul className="flex justify-between text-gray-600">
//               <li className="hover:text-blue-600 cursor-pointer">Laptops</li>
//               <li className="hover:text-blue-600 cursor-pointer">Desktop PCs</li>
//               <li className="hover:text-blue-600 cursor-pointer">Networking Devices</li>
//               <li className="hover:text-blue-600 cursor-pointer">Printers & Scanners</li>
//               <li className="hover:text-blue-600 cursor-pointer">PC Parts</li>
//               <li className="hover:text-blue-600 cursor-pointer">All Other Products</li>
//               <li className="hover:text-blue-600 cursor-pointer">Repairs</li>
//             </ul>
//           </div>

//           {/* Search and cart icons */}
//           <div className="flex items-center gap-4">
//             <button className="p-2 rounded-full hover:bg-gray-100">
//               <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
//                 <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
//               </svg>
//             </button>
//             <button className="p-2 rounded-full hover:bg-gray-100">
//               <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
//                 <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 3h2l.4 2M7 13h10l4-8H5.4M7 13L5.4 5M7 13l-2.293 2.293c-.63.63-.184 1.707.707 1.707H17m0 0a2 2 0 100 4 2 2 0 000-4zm-8 2a2 2 0 11-4 0 2 2 0 014 0z" />
//               </svg>
//             </button>
//           </div>
//         </div>
//       </div>

//       {/* Product tabs and action section */}
//       <div className="px-8 py-4 border-b">
//         <div className="flex justify-between items-center">
//           {/* Product tabs */}
//           <div className="flex space-x-8">
//             <span className="text-blue-600 font-medium border-b-2 border-blue-600 pb-1">About Product</span>
//             <span className="text-gray-600 hover:text-blue-600 cursor-pointer">Details</span>
//             <span className="text-gray-600 hover:text-blue-600 cursor-pointer">Specs</span>
//           </div>
          
//           {/* Product action section */}
//           <div className="flex items-center space-x-4">
//             <div className="text-right">
//               <div className="text-sm text-gray-500">On Sale from</div>
//               <div className="text-xl font-bold text-gray-800">$3,299.00</div>
//             </div>
            
//             <div className="flex items-center border rounded-md overflow-hidden">
//               <button className="px-3 py-1 bg-gray-100 hover:bg-gray-200">-</button>
//               <span className="px-3 py-1 bg-white">1</span>
//               <button className="px-3 py-1 bg-gray-100 hover:bg-gray-200">+</button>
//             </div>
            
//             <button className="px-4 py-2 bg-blue-600 text-white rounded-md hover:bg-blue-700 text-sm">
//               Add to Cart
//             </button>
//           </div>
//         </div>
//       </div>
//     </nav>
//   );
// }


// export default function Navbar() {
//   return (
//     <nav className="bg-white">
//       {/* Top info bar - Now black background */}
//       <div className="bg-black text-white text-xs py-2 px-8">
//         <div className="flex justify-between items-center">
//           <div className="flex items-center">
//             <span>Mon-Thu: </span>
//             <span className="font-medium ml-1">9:00AM - 5:30PM</span>
//             <span className="mx-2">|</span>
//             <span>Visit our showroom in 1234 Street Address City Address, 1234</span>
//             <span className="mx-2">|</span>
//             <span className="text-blue-400 hover:underline cursor-pointer">Contact Us</span>
//           </div>
//           <div className="flex items-center">
//             <span>Call us: (00) 1234 5678</span>
//           </div>
//         </div>
//       </div>

//       {/* Main navigation */}
//       <div className="px-8 py-4 border-b">
//         <div className="flex justify-between items-center">
//           {/* Logo */}
//           <h1 className="text-2xl font-bold text-gray-800">Logitops</h1>

//           {/* Main navigation items - Updated spacing and styling */}
//           <div className="flex-1 mx-8">
//             <ul className="flex justify-between text-gray-600 font-medium">
//               <li className="hover:text-blue-600 cursor-pointer py-2">Laptops</li>
//               <li className="hover:text-blue-600 cursor-pointer py-2">Desktop PCs</li>
//               <li className="hover:text-blue-600 cursor-pointer py-2">Networking Devices</li>
//               <li className="hover:text-blue-600 cursor-pointer py-2">Printers & Scanners</li>
//               <li className="hover:text-blue-600 cursor-pointer py-2">PC Parts</li>
//               <li className="hover:text-blue-600 cursor-pointer py-2">All Other Products</li>
//               <li className="hover:text-blue-600 cursor-pointer py-2">Repairs</li>
//             </ul>
//           </div>

//           {/* Search and cart icons */}
//           <div className="flex items-center gap-4">
//             <button className="p-2 rounded-full hover:bg-gray-100">
//               <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
//                 <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
//               </svg>
//             </button>
//             <button className="p-2 rounded-full hover:bg-gray-100">
//               <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
//                 <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 3h2l.4 2M7 13h10l4-8H5.4M7 13L5.4 5M7 13l-2.293 2.293c-.63.63-.184 1.707.707 1.707H17m0 0a2 2 0 100 4 2 2 0 000-4zm-8 2a2 2 0 11-4 0 2 2 0 014 0z" />
//               </svg>
//             </button>
//           </div>
//         </div>
//       </div>

//       {/* Product tabs and action section */}
//       <div className="px-8 py-4 border-b">
//         <div className="flex justify-between items-center">
//           {/* Product tabs */}
//           <div className="flex space-x-8">
//             <span className="text-blue-600 font-medium border-b-2 border-blue-600 pb-1">About Product</span>
//             <span className="text-gray-600 hover:text-blue-600 cursor-pointer">Details</span>
//             <span className="text-gray-600 hover:text-blue-600 cursor-pointer">Specs</span>
//           </div>
          
//           {/* Product action section */}
//           <div className="flex items-center space-x-4">
//             <div className="text-right">
//               <div className="text-sm text-gray-500">On Sale from</div>
//               <div className="text-xl font-bold text-gray-800">$3,299.00</div>
//             </div>
            
//             <div className="flex items-center border rounded-md overflow-hidden">
//               <button className="px-3 py-1 bg-gray-100 hover:bg-gray-200">-</button>
//               <span className="px-3 py-1 bg-white">1</span>
//               <button className="px-3 py-1 bg-gray-100 hover:bg-gray-200">+</button>
//             </div>
            
//             <button className="px-4 py-2 bg-blue-600 text-white rounded-md hover:bg-blue-700 text-sm">
//               Add to Cart
//             </button>
//           </div>
//         </div>
//       </div>
//     </nav>
//   );
// }


// export default function Navbar() {
//   return (
//     <nav className="bg-white">
//       {/* Top info bar - Black background */}
//       <div className="bg-black text-white text-xs py-2 px-8">
//         <div className="flex justify-between items-center">
//           <div className="flex items-center">
//             <span>Mon-Thu: </span>
//             <span className="font-medium ml-1">9:00AM - 5:30PM</span>
//             <span className="mx-2">|</span>
//             <span>Visit our showroom in 1234 Street Address City Address, 1234</span>
//             <span className="mx-2">|</span>
//             <span className="text-blue-400 hover:underline cursor-pointer">Contact Us</span>
//           </div>
//           <div className="flex items-center">
//             <span>Call us: (00) 1234 5678</span>
//           </div>
//         </div>
//       </div>

//       {/* Main navigation */}
//       <div className="px-8 py-4 border-b">
//         <div className="flex justify-between items-center">
//           {/* Logo */}
//           <h1 className="text-2xl font-bold text-gray-800">Logitops</h1>

//           {/* Main navigation items */}
//           <div className="flex-1 mx-8">
//             <ul className="flex justify-between text-gray-600 font-medium">
//               <li className="hover:text-blue-600 cursor-pointer py-2">Laptops</li>
//               <li className="hover:text-blue-600 cursor-pointer py-2">Desktop PCs</li>
//               <li className="hover:text-blue-600 cursor-pointer py-2">Networking Devices</li>
//               <li className="hover:text-blue-600 cursor-pointer py-2">Printers & Scanners</li>
//               <li className="hover:text-blue-600 cursor-pointer py-2">PC Parts</li>
//               <li className="hover:text-blue-600 cursor-pointer py-2">All Other Products</li>
//               <li className="hover:text-blue-600 cursor-pointer py-2">Repairs</li>
//             </ul>
//           </div>

//           {/* Right side: Our Deals, Search, Cart, and Profile */}
//           <div className="flex items-center gap-4">
//             {/* Our Deals - Separate from main navigation */}
//             <span className="text-gray-600 font-medium hover:text-blue-600 cursor-pointer py-2">
//               Our Deals
//             </span>
            
//             {/* Search icon */}
//             <button className="p-2 rounded-full hover:bg-gray-100">
//               <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
//                 <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
//               </svg>
//             </button>
            
//             {/* Cart icon */}
//             <button className="p-2 rounded-full hover:bg-gray-100">
//               <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
//                 <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 3h2l.4 2M7 13h10l4-8H5.4M7 13L5.4 5M7 13l-2.293 2.293c-.63.63-.184 1.707.707 1.707H17m0 0a2 2 0 100 4 2 2 0 000-4zm-8 2a2 2 0 11-4 0 2 2 0 014 0z" />
//               </svg>
//             </button>
            
//             {/* Profile icon/image */}
//             <button className="p-2 rounded-full hover:bg-gray-100">
//               <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
//                 <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
//               </svg>
//             </button>
//           </div>
//         </div>
//       </div>

//       {/* Product tabs and action section */}
//       <div className="px-8 py-4 border-b">
//         <div className="flex justify-between items-center">
//           {/* Product tabs */}
//           <div className="flex space-x-8">
//             <span className="text-blue-600 font-medium border-b-2 border-blue-600 pb-1">About Product</span>
//             <span className="text-gray-600 hover:text-blue-600 cursor-pointer">Details</span>
//             <span className="text-gray-600 hover:text-blue-600 cursor-pointer">Specs</span>
//           </div>
          
//           {/* Product action section */}
//           <div className="flex items-center space-x-4">
//             <div className="text-right">
//               <div className="text-sm text-gray-500">On Sale from</div>
//               <div className="text-xl font-bold text-gray-800">$3,299.00</div>
//             </div>
            
//             <div className="flex items-center border rounded-md overflow-hidden">
//               <button className="px-3 py-1 bg-gray-100 hover:bg-gray-200">-</button>
//               <span className="px-3 py-1 bg-white">1</span>
//               <button className="px-3 py-1 bg-gray-100 hover:bg-gray-200">+</button>
//             </div>
            
//             <button className="px-4 py-2 bg-blue-600 text-white rounded-md hover:bg-blue-700 text-sm">
//               Add to Cart
//             </button>
//           </div>
//         </div>
//       </div>
//     </nav>
//   );
// }

export default function Navbar() {
  return (
    <nav className="bg-white">
      {/* Top info bar - Black background */}
      <div className="bg-black text-white text-xs py-2 px-8">
        <div className="flex justify-between items-center">
          <div className="flex items-center">
            <span>Mon-Thu: </span>
            <span className="font-medium ml-1">9:00AM - 5:30PM</span>
            <span className="mx-2">|</span>
            <span>Visit our showroom in 1234 Street Address City Address, 1234</span>
            <span className="mx-2">|</span>
            <span className="text-blue-400 hover:underline cursor-pointer">Contact Us</span>
          </div>
          <div className="flex items-center">
            <span>Call us: (00) 1234 5678</span>
          </div>
        </div>
      </div>

      {/* Main navigation */}
      <div className="px-8 py-4 border-b">
        <div className="flex justify-between items-center">
          {/* Logo */}
          <h1 className="text-2xl font-bold text-gray-800">Logitops</h1>

          {/* Main navigation items */}
          <div className="flex-1 mx-8">
            <ul className="flex justify-between text-gray-600 font-medium">
              <li className="hover:text-blue-600 cursor-pointer py-2">Laptops</li>
              <li className="hover:text-blue-600 cursor-pointer py-2">Desktop PCs</li>
              <li className="hover:text-blue-600 cursor-pointer py-2">Networking Devices</li>
              <li className="hover:text-blue-600 cursor-pointer py-2">Printers & Scanners</li>
              <li className="hover:text-blue-600 cursor-pointer py-2">PC Parts</li>
              <li className="hover:text-blue-600 cursor-pointer py-2">All Other Products</li>
              <li className="hover:text-blue-600 cursor-pointer py-2">Repairs</li>
            </ul>
          </div>

          {/* Right side: Our Deals button, Search, Cart, and Profile */}
          <div className="flex items-center gap-4">
            {/* Our Deals - Blue outline with rounded corners */}
            <button className="border-2 border-blue-600 text-blue-600 font-medium py-2 px-4 rounded-full 
                             hover:bg-blue-50 transition-colors">
              Our Deals
            </button>
            
            {/* Search icon */}
            <button className="p-2 rounded-full hover:bg-gray-100">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
              </svg>
            </button>
            
            {/* Cart icon */}
            <button className="p-2 rounded-full hover:bg-gray-100">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 3h2l.4 2M7 13h10l4-8H5.4M7 13L5.4 5M7 13l-2.293 2.293c-.63.63-.184 1.707.707 1.707H17m0 0a2 2 0 100 4 2 2 0 000-4zm-8 2a2 2 0 11-4 0 2 2 0 014 0z" />
              </svg>
            </button>
            
            {/* Profile icon/image */}
            <button className="p-2 rounded-full hover:bg-gray-100">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
              </svg>
            </button>
          </div>
        </div>
      </div>

      {/* Product tabs and action section */}
      <div className="px-8 py-4 border-b">
        <div className="flex justify-between items-center">
          {/* Product tabs */}
          <div className="flex space-x-8">
            <span className="text-blue-600 font-medium border-b-2 border-blue-600 pb-1">About Product</span>
            <span className="text-gray-600 hover:text-blue-600 cursor-pointer">Details</span>
            <span className="text-gray-600 hover:text-blue-600 cursor-pointer">Specs</span>
          </div>
          
          {/* Product action section */}
          <div className="flex items-center space-x-4">
            <div className="text-right">
              <div className="text-sm text-gray-500">On Sale from</div>
              <div className="text-xl font-bold text-gray-800">$3,299.00</div>
            </div>
            
            <div className="flex items-center border rounded-md overflow-hidden">
              <button className="px-3 py-1 bg-gray-100 hover:bg-gray-200">-</button>
              <span className="px-3 py-1 bg-white">1</span>
              <button className="px-3 py-1 bg-gray-100 hover:bg-gray-200">+</button>
            </div>
            
            <button className="px-4 py-2 bg-blue-600 text-white rounded-md hover:bg-blue-700 text-sm">
              Add to Cart
            </button>
          </div>
        </div>
      </div>
    </nav>
  );
}