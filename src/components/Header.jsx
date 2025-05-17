import { useState, useEffect } from 'react';
import { FaBook, FaCalendarAlt, FaUser, FaEnvelope, FaBars, FaTimes, FaHome, FaGraduationCap, FaLinkedin, FaTwitter, FaInstagram } from 'react-icons/fa';

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [activeSection, setActiveSection] = useState('home');

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 10);
      
      // Update active section based on scroll position
      const sections = ['home', 'reservation', 'books', 'about', 'contact'];
      for (const section of sections) {
        const element = document.getElementById(section);
        if (element) {
          const rect = element.getBoundingClientRect();
          if (rect.top <= 100 && rect.bottom >= 100) {
            setActiveSection(section);
            break;
          }
        }
      }
    };
    
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navItems = [
        { 
      name: 'خانه', 
      href: '#home',
      icon: <FaHome className="ml-2" />,
      section: 'home'
    },
      { 
      name: 'دوره‌های آموزشی', 
      href: '#courses',
      icon: <FaGraduationCap className="ml-2" />,
      section: 'courses'
    },
       { 
      name: 'کتاب‌های من', 
      href: '#books',
      icon: <FaBook className="ml-2" />,
      section: 'books'
    },

        { 
      name: 'رزرو کلاس', 
      href: '#reservation',
      icon: <FaCalendarAlt className="ml-2" />,
      section: 'reservation'
    },
    { 
      name: 'تماس با من', 
      href: '#contact',
      icon: <FaEnvelope className="ml-2" />,
      section: 'contact'
    },
    { 
      name: 'درباره من', 
      href: '#about',
      icon: <FaUser className="ml-2" />,
      section: 'about'
    },


  

  ];

  const socialLinks = [
    { icon: <FaLinkedin className="text-lg  " />, href: "#" },
    { icon: <FaTwitter className="text-lg " />, href: "#" },
    { icon: <FaInstagram className="text-lg mx-3" />, href: "#" }
  ];

  return (
    <header className={`fixed w-full z-50 transition-all duration-500 ${scrolled ? 'bg-white/95 shadow-md py-2 backdrop-blur-sm' : 'bg-white/90 py-3 backdrop-blur-none'}`}>
      <div className="container mx-auto px-4 md:px-6">
        <div className="flex justify-between items-center">
          {/* Logo */}
          <div className="flex items-center">
            <a href="#home" className="flex items-center group" onClick={() => setActiveSection('home')}>
              <div className={`w-10 h-10 bg-gradient-to-r from-blue-600 to-blue-400 rounded-lg flex items-center justify-center text-white font-bold text-xl transition-all duration-500 group-hover:rotate-6 ${activeSection === 'home' ? 'ring-2 ring-blue-300' : ''}`}>
                AEK
              </div>
              <span className={`mr-3 text-xl font-bold hidden sm:block transition-colors duration-300 ${activeSection === 'home' ? 'text-blue-600' : 'text-gray-800'}`}>
                امیرعلی باباکیانی
              </span>
            </a>
          </div>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center space-x-1 space-x-reverse">
            {navItems.map((item, index) => (
              <a
                key={index}
                href={item.href}
                className={`flex items-center px-4 py-2 transition-all duration-300 font-medium rounded-lg ${activeSection === item.section ? 'text-blue-600 bg-blue-50' : 'text-gray-600 hover:text-blue-600 hover:bg-blue-50/50'}`}
                onClick={() => setActiveSection(item.section)}
              >
                {item.icon}
                <span>{item.name}</span>
              </a>
            ))}
            
            {/* Social Links */}
            <div className="flex items-center mr-4 border-r border-gray-200 pr-4 space-x-4 space-x-reverse">
              {socialLinks.map((link, index) => (
                <a 
                  key={index} 
                  href={link.href} 
                  className="text-gray-500 hover:text-blue-500 transition-colors duration-300"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  {link.icon}
                </a>
              ))}
            </div>
          </nav>

          {/* Mobile Menu Button */}
          <div className="md:hidden flex items-center">
            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="text-gray-600 focus:outline-none p-2 rounded-lg hover:bg-gray-100 transition-colors duration-300"
              aria-label="Toggle menu"
            >
              {isMenuOpen ? (
                <FaTimes className="w-6 h-6" />
              ) : (
                <FaBars className="w-6 h-6" />
              )}
            </button>
          </div>
        </div>

        {/* Mobile Menu */}
        {isMenuOpen && (
          <div className="md:hidden mt-4 pb-4 animate-fadeInDown">
            <div className="flex flex-col space-y-2 space-y-reverse bg-white rounded-xl p-2 shadow-xl border border-gray-100">
              {navItems.map((item, index) => (
                <a
                  key={index}
                  href={item.href}
                  className={`flex items-center px-4 py-3 rounded-lg transition-all duration-300 ${activeSection === item.section ? 'bg-blue-50 text-blue-600' : 'text-gray-700 hover:bg-blue-50'}`}
                  onClick={() => {
                    setActiveSection(item.section);
                    setIsMenuOpen(false);
                  }}
                >
                  {item.icon}
                  <span className="mr-2 font-medium">{item.name}</span>
                </a>
              ))}
              
              {/* Mobile Social Links */}
              <div className="flex justify-center pt-2 border-t border-gray-100">
                <div className="flex space-x-6 space-x-reverse">
                  {socialLinks.map((link, index) => (
                    <a 
                      key={index} 
                      href={link.href} 
                      className="text-gray-500 hover:text-blue-500 transition-colors duration-300 p-2"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      {link.icon}
                    </a>
                  ))}
                </div>
              </div>
            </div>
          </div>
        )}
      </div>
    </header>
  );
};

export default Header;