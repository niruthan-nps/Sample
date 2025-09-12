export default function Footer() {
  return (
    <footer className="bg-black text-gray-400 px-16 py-10">
      <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
        <div>
          <h3 className="text-white font-semibold mb-4">Product Support</h3>
          <ul className="space-y-2">
            <li>FAQ</li>
            <li>Buyer's Guide</li>
            <li>Warranty</li>
          </ul>
        </div>
        <div>
          <h3 className="text-white font-semibold mb-4">Company</h3>
          <ul className="space-y-2">
            <li>About Us</li>
            <li>Careers</li>
            <li>Press</li>
          </ul>
        </div>
        <div>
          <h3 className="text-white font-semibold mb-4">Contact</h3>
          <p>Email: support@brand.com</p>
          <p>Phone: +94 77 123 4567</p>
        </div>
        <div>
          <h3 className="text-white font-semibold mb-4">Follow Us</h3>
          <div className="flex gap-4">
            <span>🌐</span>
            <span>📘</span>
            <span>🐦</span>
          </div>
        </div>
      </div>
      <p className="text-center text-gray-600 mt-8">
        © 2025 Brand. All Rights Reserved.
      </p>
    </footer>
  );
}
