import { Link } from 'react-router-dom'

const Hero = () => {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden bg-white">
      {/* Main content container with side margins */}
      <div className="relative z-10 w-full max-w-9xl mx-auto px-6 sm:px-8 lg:px-10 py-20">
        {/* Blue background "card" */}
        <div className="bg-gradient-to-br from-gray-900 via-blue-900 to-indigo-900 rounded-3xl p-8 md:p-12 lg:p-16 relative overflow-hidden">
          
          {/* Animated background elements inside the card */}
          <div className="absolute inset-0 opacity-20">
            <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-purple-500 rounded-full mix-blend-soft-light filter blur-3xl opacity-30 animate-pulse-slow"></div>
            <div className="absolute bottom-1/3 right-1/4 w-80 h-80 bg-blue-500 rounded-full mix-blend-soft-light filter blur-3xl opacity-40 animate-pulse-medium"></div>
            <div className="absolute top-3/4 left-1/2 w-64 h-64 bg-indigo-500 rounded-full mix-blend-soft-light filter blur-3xl opacity-30 animate-pulse-slow"></div>
          </div>
          
          {/* Subtle grid pattern inside the card */}
          <div className="absolute inset-0 opacity-10"
               style={{
                 backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23ffffff' fill-opacity='0.1'%3E%3Cpath d='M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`
               }}>
          </div>

          {/* Content */}
          <div className="relative z-20 text-center">
            {/* Logo/Brand mark */}
            <div className="mb-10 flex justify-center">
              <div className="w-28 h-28 bg-white/5 backdrop-blur-md rounded-3xl flex items-center justify-center border border-white/10 shadow-2xl">
                <div className="relative">
                  <svg className="w-16 h-16 text-blue-400" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M12 21.35L10.55 20.03C5.4 15.36 2 12.28 2 8.5C2 5.42 4.42 3 7.5 3C9.24 3 10.91 3.81 12 5.09C13.09 3.81 14.76 3 16.5 3C19.58 3 22 5.42 22 8.5C22 12.28 18.6 15.36 13.45 20.04L12 21.35Z" fill="currentColor"/>
                  </svg>
                  <div className="absolute -inset-2 bg-blue-500 rounded-full opacity-20 blur-md"></div>
                </div>
              </div>
            </div>

            {/* Main heading with gradient text */}
            <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold mb-8 leading-tight">
              <span className="bg-clip-text text-transparent bg-gradient-to-r from-blue-300 to-purple-300">
                OpenHeart
              </span>
              <br />
              <span className="text-white">Counseling & Care</span>
            </h1>

            {/* Description */}
            <p className="text-xl md:text-2xl mb-12 text-blue-100 max-w-3xl mx-auto leading-relaxed font-light">
              Where <span className="font-medium text-white">compassionate care</span> meets professional therapy in a safe, supportive environment. Your journey to <span className="font-medium text-white">mental wellness</span> begins here.
            </p>

            {/* CTA Buttons with modern styling */}
            <div className="flex flex-col sm:flex-row gap-6 justify-center items-center mb-16">
              <Link 
                to="/booking" 
                className="group relative flex items-center justify-center px-8 py-4 bg-gradient-to-r from-blue-600 to-purple-600 text-white font-semibold rounded-2xl overflow-hidden transition-all duration-300 hover:shadow-2xl hover:-translate-y-0.5"
              >
                <span className="relative z-10 flex items-center">
                  Book a Session
                  <svg className="w-5 h-5 ml-2 group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" />
                  </svg>
                </span>
                <div className="absolute inset-0 bg-gradient-to-r from-blue-500 to-purple-500 opacity-0 group-hover:opacity-100 transition-opacity duration-300 z-0"></div>
                <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-blue-400 to-purple-400"></div>
              </Link>
              
              <Link 
                to="/services" 
                className="group relative flex items-center justify-center px-8 py-4 bg-transparent border-2 border-white/20 text-white font-semibold rounded-2xl overflow-hidden transition-all duration-300 hover:border-white/40 hover:bg-white/5 hover:shadow-2xl hover:-translate-y-0.5"
              >
                <span className="relative z-10 flex items-center">
                  Our Services
                  <svg className="w-5 h-5 ml-2 group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                  </svg>
                </span>
                <div className="absolute inset-0 bg-white/0 group-hover:bg-white/5 transition-colors duration-300 z-0"></div>
              </Link>
            </div>

            {/* Stats section */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 text-white/80 max-w-4xl mx-auto">
              <div className="bg-white/5 backdrop-blur-sm p-6 rounded-2xl border border-white/10 hover:border-white/20 transition-colors">
                <div className="text-4xl font-bold text-blue-300 mb-2">98%</div>
                <div className="text-sm uppercase tracking-wider">Client Satisfaction</div>
              </div>
              <div className="bg-white/5 backdrop-blur-sm p-6 rounded-2xl border border-white/10 hover:border-white/20 transition-colors">
                <div className="text-4xl font-bold text-purple-300 mb-2">15+</div>
                <div className="text-sm uppercase tracking-wider">Years Experience</div>
              </div>
              <div className="bg-white/5 backdrop-blur-sm p-6 rounded-2xl border border-white/10 hover:border-white/20 transition-colors">
                <div className="text-4xl font-bold text-indigo-300 mb-2">1.2K+</div>
                <div className="text-sm uppercase tracking-wider">Lives Transformed</div>
              </div>
            </div>
          </div>
        </div>

        {/* Scroll indicator */}
        <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2">
          <div className="animate-bounce">
            <div className="w-8 h-12 border-2 border-gray-300 rounded-full flex justify-center">
              <div className="w-1 h-3 bg-gray-400 rounded-full mt-2"></div>
            </div>
            <p className="text-gray-500 text-sm mt-2">Scroll to explore</p>
          </div>
        </div>
      </div>

      {/* Add custom animation keyframes */}
      <style>{`
        @keyframes pulse-slow {
          0%, 100% { opacity: 0.3; }
          50% { opacity: 0.5; }
        }
        @keyframes pulse-medium {
          0%, 100% { opacity: 0.4; }
          50% { opacity: 0.6; }
        }
        .animate-pulse-slow {
          animation: pulse-slow 8s ease-in-out infinite;
        }
        .animate-pulse-medium {
          animation: pulse-medium 6s ease-in-out infinite;
        }
      `}</style>
    </section>
  )
}

export default Hero