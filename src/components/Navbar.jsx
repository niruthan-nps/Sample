export default function Navbar() {
  return (
    <nav className="flex justify-between items-center px-8 py-4 shadow-md bg-white">
      <h1 className="text-2xl font-bold text-gray-800">BrandLogo</h1>
      <ul className="flex gap-6 text-gray-600">
        <li className="hover:text-blue-600 cursor-pointer">Product</li>
        <li className="hover:text-blue-600 cursor-pointer">Support</li>
        <li className="hover:text-blue-600 cursor-pointer">FAQ</li>
        <li className="hover:text-blue-600 cursor-pointer">Buy Now</li>
      </ul>
    </nav>
  );
}
