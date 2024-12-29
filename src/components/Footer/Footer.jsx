const Footer = () => {
  return (
    <footer className="bg-gray-900 text-white">
      <div className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Company Info */}
          <div>
            <h3 className="text-xl font-bold mb-4">EventID Inc</h3>
            <p className="text-gray-400">
              Your technology partner for the future. Building innovative solutions for tomorrow.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-xl font-bold mb-4">Quick Links</h3>
            <ul className="space-y-2">
              <li><a href="/" className="text-gray-400 hover:text-white transition-colors">Home</a></li>
              <li><a href="/about" className="text-gray-400 hover:text-white transition-colors">About</a></li>
              <li><a href="#services" className="text-gray-400 hover:text-white transition-colors">Services</a></li>
              <li><a href="#contact" className="text-gray-400 hover:text-white transition-colors">Contact</a></li>
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h3 className="text-xl font-bold mb-4">Contact Us</h3>
            <ul className="text-gray-400 space-y-2">
              <li>STT Terpadu Nurul Fikri</li>
              <li>cimanggis, 13 CC</li>
              <li>Phone: (+62) 123-4567</li>
              <li>Email: info@EventID.com</li>
            </ul>
          </div>

          {/* Social Media */}
          <div>
            <h3 className="text-xl font-bold mb-4">Follow Us</h3>
            <div className="flex space-x-4">
              <a href="#" className="text-gray-400 hover:text-white transition-colors">
                <i className="fab fa-facebook text-2xl"></i>
              </a>
              <a href="#" className="text-gray-400 hover:text-white transition-colors">
                <i className="fab fa-twitter text-2xl"></i>
              </a>
              <a href="#" className="text-gray-400 hover:text-white transition-colors">
                <i className="fab fa-linkedin text-2xl"></i>
              </a>
              <a href="#" className="text-gray-400 hover:text-white transition-colors">
                <i className="fab fa-instagram text-2xl"></i>
              </a>
            </div>
          </div>
        </div>

        {/* Copyright */}
        <div className="border-t border-gray-800 mt-8 pt-8 text-center text-gray-400">
          <p>&copy; {new Date().getFullYear()} EventID inc By Dimas Rio. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;