import { useState } from 'react'
import { Link, useLocation } from 'react-router-dom'
import Logo from '../assets/Openhear-Logo.png' // Import the logo

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const location = useLocation()

  const navigation = [
    { name: 'Home', href: '/' },
    { name: 'About Us', href: '/about' },
    { name: 'Services', href: '/services' },
    { name: 'Book a Session', href: '/booking' },
    { name: 'Contact Us', href: '/contact' },
  ]

  return (
    <header className="bg-gradient-to-br from-blue-50 to-indigo-50 shadow-md sticky top-0 z-50 border-b border-gray-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-35">
          <div className="flex items-center">
            <Link to="/" className="flex items-center space-x-3">
              {/* Logo with subtle container to make red logo stand out */}
              <div className="bg-white p-3 rounded-2xl shadow-sm border border-gray-100 hover:shadow-md transition-shadow duration-300">
                <img 
                  src={Logo} 
                  alt="OpenHeart Counseling" 
                  className="h-30 w-auto transition-all duration-300 hover:scale-105" // Adjusted size
                />
              </div>
              
            </Link>
          </div>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex space-x-6">
            {navigation.map((item) => (
              <Link
                key={item.name}
                to={item.href}
                className={`${
                  location.pathname === item.href
                    ? 'text-blue-600 border-b-2 border-red-500 font-semibold'
                    : 'text-gray-700 hover:text-blue-600'
                } px-3 py-2 text-sm font-medium transition-all duration-200 hover:scale-105 flex items-center`}
              >
                {item.name}
                {location.pathname === item.href && (
                  <span className="ml-1 w-2 h-2 bg-red-500 rounded-full animate-pulse"></span>
                )}
              </Link>
            ))}
          </nav>

          {/* Mobile menu button */}
          <div className="md:hidden">
            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="inline-flex items-center justify-center p-3 rounded-md text-gray-600 hover:text-blue-600 hover:bg-blue-50 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-blue-500 transition-all duration-200"
            >
              <span className="sr-only">Open main menu</span>
              {!isMenuOpen ? (
                <svg className="block h-6 w-6" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
                </svg>
              ) : (
                <svg className="block h-6 w-6" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                </svg>
              )}
            </button>
          </div>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <div className="md:hidden">
            <div className="px-2 pt-2 pb-4 space-y-2 bg-white border-t border-gray-200 rounded-b-lg shadow-lg">
              {navigation.map((item) => (
                <Link
                  key={item.name}
                  to={item.href}
                  className={`${
                    location.pathname === item.href
                      ? 'bg-blue-50 text-blue-600 font-semibold border-l-4 border-red-500'
                      : 'text-gray-700 hover:bg-blue-50 hover:text-blue-600'
                  } block px-4 py-3 rounded-md text-base font-medium transition-all duration-200 pl-3`}
                  onClick={() => setIsMenuOpen(false)}
                >
                  <div className="flex items-center">
                    {item.name}
                    {location.pathname === item.href && (
                      <span className="ml-2 w-2 h-2 bg-red-500 rounded-full animate-pulse"></span>
                    )}
                  </div>
                </Link>
              ))}
            </div>
          </div>
        )}
      </div>

      {/* Add subtle decorative elements */}
      <style>{`
        header {
          position: relative;
          overflow: hidden;
        }
        header::before {
          content: '';
          position: absolute;
          top: 0;
          left: 0;
          right: 0;
          bottom: 0;
          background-image: url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%233b82f6' fill-opacity='0.05'%3E%3Cpath d='M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E");
          opacity: 0.3;
          pointer-events: none;
        }
      `}</style>
    </header>
  )
}

export default Header