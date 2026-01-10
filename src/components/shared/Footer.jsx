import {
    FaFacebookF,
    FaTwitter,
    FaInstagram,
    FaLinkedinIn,
    FaEnvelope,
  } from "react-icons/fa";
  
  const Footer = () => {
    return (
      <footer className="bg-primary text-gray-300">
        <div className="max-w-7xl mx-auto px-4 py-12">
          {/* Top Grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-8">
            {/* Brand */}
            <div>
              <h2 className="text-2xl font-bold text-white">
                Smart<span className="text-secondary">Shop</span>
              </h2>
              <p className="mt-3 text-sm leading-relaxed">
                SmartShop is your trusted online store for quality products,
                fast delivery and secure shopping experience.
              </p>
            </div>

            {/* Shop */}
            <div>
              <h3 className="text-white font-semibold mb-4">Shop</h3>
              <ul className="space-y-2 text-sm">
                <li className="hover:text-secondary cursor-pointer">
                  Electronics
                </li>
                <li className="hover:text-secondary cursor-pointer">Fashion</li>
                <li className="hover:text-secondary cursor-pointer">
                  Groceries
                </li>
                <li className="hover:text-secondary cursor-pointer">
                  Accessories
                </li>
              </ul>
            </div>

            {/* Customer Service */}
            <div>
              <h3 className="text-white font-semibold mb-4">
                Customer Service
              </h3>
              <ul className="space-y-2 text-sm">
                <li className="hover:text-secondary cursor-pointer">
                  Contact Us
                </li>
                <li className="hover:text-secondary cursor-pointer">FAQs</li>
                <li className="hover:text-secondary cursor-pointer">
                  Return Policy
                </li>
                <li className="hover:text-secondary cursor-pointer">
                  Shipping Info
                </li>
              </ul>
            </div>

            {/* Company */}
            <div>
              <h3 className="text-white font-semibold mb-4">Company</h3>
              <ul className="space-y-2 text-sm">
                <li className="hover:text-secondary cursor-pointer">
                  About Us
                </li>
                <li className="hover:text-secondary cursor-pointer">Careers</li>
                <li className="hover:text-secondary cursor-pointer">Blog</li>
                <li className="hover:text-secondary cursor-pointer">
                  Privacy Policy
                </li>
              </ul>
            </div>

            {/* Newsletter */}
            <div>
              <h3 className="text-white font-semibold mb-4">Stay Connected</h3>

              <div className="flex items-center bg-white rounded overflow-hidden">
                <input
                  type="email"
                  placeholder="Your email"
                  className="w-full px-3 py-2 text-sm text-gray-800 outline-none"
                />
                <button className="bg-secondary px-3 py-2 text-white">
                  <FaEnvelope />
                </button>
              </div>

              {/* Social Icons */}
              <div className="flex gap-3 mt-4">
                {[FaFacebookF, FaTwitter, FaInstagram, FaLinkedinIn].map(
                  (Icon, index) => (
                    <span
                      key={index}
                      className="p-2 bg-gray-800 rounded-full hover:bg-secondary cursor-pointer transition"
                    >
                      <Icon size={14} />
                    </span>
                  )
                )}
              </div>
            </div>
          </div>

          {/* Divider */}
          <div className="border-t border-gray-700 mt-10 pt-6 text-center text-sm">
            © {new Date().getFullYear()} SmartShop. All rights reserved.
          </div>
        </div>
      </footer>
    );
  };
  
  export default Footer;
  