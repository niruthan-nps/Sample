
export default function Footer() {
  return (
    <footer className="bg-black text-gray-400 px-16 pt-16 pb-10">
      <div className="grid grid-cols-1 md:grid-cols-4 gap-10 text-sm">
        {/* Column 1 */}
        <div>
          <h3 className="text-white font-semibold mb-4">Information</h3>
          <ul className="space-y-2">
            <li>About Us</li>
            <li>How to Pay</li>
            <li>Privacy Policy</li>
            <li>Terms</li>
            <li>Orders and Returns</li>
            <li>Contact Us</li>
            <li>Advanced Search</li>
            <li>Newsletter Subscription</li>
          </ul>
        </div>

        {/* Column 2 */}
        <div>
          <h3 className="text-white font-semibold mb-4">PC Parts</h3>
          <ul className="space-y-2">
            <li>CPUs</li>
            <li>Add On Cards</li>
            <li>Hard Drives (Internal)</li>
            <li>Graphic Cards</li>
            <li>Keyboards / Mice</li>
            <li>Cases / Power Supplies / Cooling</li>
            <li>Memory</li>
            <li>Motherboards</li>
          </ul>
        </div>

        {/* Column 3 */}
        <div>
          <h3 className="text-white font-semibold mb-4">Laptops</h3>
          <ul className="space-y-2">
            <li>Everyday Use Notebooks</li>
            <li>MSI Workstation Series</li>
            <li>MSI Prestige Series</li>
            <li>Tablets and Pads</li>
            <li>Netbooks</li>
            <li>Infinity Gaming Notebooks</li>
          </ul>
        </div>

        {/* Column 4 - Newsletter + Address */}
        <div>
          <h3 className="text-white font-semibold mb-4">Sign Up To Our Newsletter</h3>
          <p className="text-gray-500 text-sm mb-4">
            Be the first to hear about the latest offers.
          </p>
          {/* Newsletter Form */}
          <form className="flex bg-white/10 rounded-lg overflow-hidden">
            <input
              type="email"
              placeholder="Your Email"
              className="flex-1 px-4 py-2 bg-transparent text-white placeholder-gray-400 focus:outline-none"
            />
            <button
              type="submit"
              className="px-6 py-2 bg-blue-600 text-white hover:bg-blue-700"
            >
              Subscribe
            </button>
          </form>

          {/* Address */}
          <div className="mt-6 text-sm leading-relaxed">
            <p>Address: 1234 Street Address City Address, 1234</p>
            <p>Phone: (00) 1234 5678</p>
            <p>Email: support@shop.com</p>
            <p className="mt-2">Mon–Thu: 9:00 AM – 5:30 PM</p>
            <p>Fri: 9:00 AM – 6:00 PM</p>
            <p>Sat: 9:00 AM – 5:00 PM</p>
          </div>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="mt-12 flex flex-col md:flex-row justify-between items-center border-t border-gray-800 pt-6">
        <p className="text-gray-600 text-sm">
          © 2025 Shop Pty. Ltd. All rights reserved.
        </p>
        <div className="flex gap-4 mt-4 md:mt-0">
          {/* Replace with real icons if you have */}
          <img src="/assets/facebook.svg" alt="Facebook" className="w-6 h-6" />
          <img src="/assets/twitter.svg" alt="Twitter" className="w-6 h-6" />
          <img src="/assets/visa.svg" alt="Visa" className="w-10 h-6" />
          <img src="/assets/mastercard.svg" alt="MasterCard" className="w-10 h-6" />
        </div>
      </div>
    </footer>
  );
}
