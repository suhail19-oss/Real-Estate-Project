import { assets } from "../assets/assets";

function Footer() {
  return (
    <div
      className="pt-10 px-4 md:px-20 lg:px-32 bg-gray-900 text-gray-300 w-full overflow-hidden"
      id="Footer"
    >
      <div className="container mx-auto flex flex-col md:flex-row justify-between items-start gap-8 pb-10 border-b border-gray-700">
        <div className="md:w-1/3">
          <img
            src={assets.logo_dark}
            alt="Company Logo"
            className="mb-4 w-36"
          />
          <p className="text-sm leading-relaxed">
            At{" "}
            <span className="font-semibold text-white">DreamHomes Realty</span>,
            we turn aspirations into addresses. Your trusted partner in finding
            the perfect property — whether buying, selling, or investing.
          </p>
        </div>

        <div className="md:w-1/3">
          <h3 className="text-lg font-semibold text-white mb-4">Quick Links</h3>
          <ul className="space-y-2 text-sm">
            <li>
              <a href="#Header" className="hover:text-white">
                Home
              </a>
            </li>
            <li>
              <a href="#About" className="hover:text-white">
                About Us
              </a>
            </li>
            <li>
              <a href="#Contact" className="hover:text-white">
                Contact Us
              </a>
            </li>
            <li>
              <a href="#" className="hover:text-white">
                Privacy Policy
              </a>
            </li>
          </ul>
        </div>

        <div className="md:w-1/3">
          <h3 className="text-lg font-semibold text-white mb-4">
            Get in Touch
          </h3>
          <p className="text-sm mb-2">📍 123 Realty Street, New Delhi, India</p>
          <p className="text-sm mb-2">📞 +91 98765 43210</p>
          <p className="text-sm mb-2">📧 info@dreamhomes.com</p>
        </div>
      </div>

      <div className="text-center py-6 text-sm text-gray-500">
        © {new Date().getFullYear()} DreamHomes Realty. All rights reserved. |
        <a href="#Privacy" className="hover:text-white">
          {" "}
          Privacy Policy
        </a>{" "}
        |
        <a href="#Terms" className="hover:text-white">
          {" "}
          Terms of Service
        </a>
      </div>
    </div>
  );
}

export default Footer;
