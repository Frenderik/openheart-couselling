const Testimonials = () => {
  const testimonials = [
    {
      quote: "Dr. Margaret helped me navigate the most difficult time in my life. Her compassionate approach made me feel heard and understood.",
      author: "Sarah K.",
      role: "Client",
      avatar: "S", // Initial for avatar placeholder
      rating: 5
    },
    {
      quote: "The couples counseling sessions transformed our relationship. We learned communication skills that brought us closer together.",
      author: "James & Lisa M.",
      role: "Clients",
      avatar: "J+L", // Initial for avatar placeholder
      rating: 5
    },
    {
      quote: "As a teenager, I was hesitant about therapy, but Dr. Margaret made me feel comfortable and helped me manage my anxiety.",
      author: "Michael T.",
      role: "Client",
      avatar: "M", // Initial for avatar placeholder
      rating: 4
    }
  ]

  // Star rating component
  const StarRating = ({ rating }) => {
    return (
      <div className="flex justify-center mb-4">
        {[...Array(5)].map((_, i) => (
          <svg
            key={i}
            className={`w-5 h-5 ${i < rating ? 'text-yellow-400' : 'text-gray-300'}`}
            fill="currentColor"
            viewBox="0 0 20 20"
          >
            <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
          </svg>
        ))}
      </div>
    )
  }

  return (
    <section className="py-20 bg-gradient-to-br from-gray-50 to-blue-50 relative overflow-hidden">
      {/* Decorative elements */}
      <div className="absolute top-0 left-0 w-72 h-72 bg-blue-100 rounded-full mix-blend-multiply filter blur-3xl opacity-30 animate-blob"></div>
      <div className="absolute top-0 right-0 w-72 h-72 bg-purple-100 rounded-full mix-blend-multiply filter blur-3xl opacity-30 animate-blob animation-delay-2000"></div>
      <div className="absolute bottom-0 left-1/2 w-72 h-72 bg-indigo-100 rounded-full mix-blend-multiply filter blur-3xl opacity-30 animate-blob animation-delay-4000"></div>
      
      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <span className="inline-block py-1 px-3 mb-4 text-xs font-semibold text-blue-600 bg-blue-100 rounded-full">
            TESTIMONIALS
          </span>
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
            Stories of <span className="text-blue-600">Healing & Growth</span>
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Discover how our clients have transformed their lives through compassionate counseling.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <div 
              key={index} 
              className="bg-white rounded-2xl p-8 shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2 relative overflow-hidden"
            >
              {/* Quote icon */}
              <div className="absolute top-4 right-4 opacity-10">
                <svg className="w-16 h-16 text-blue-500" fill="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                  <path d="M14.017 21v-7.391c0-5.704 3.731-9.57 8.983-10.609l.995 2.151c-2.432.917-3.995 3.638-3.995 5.849h4v10h-9.983zm-14.017 0v-7.391c0-5.704 3.748-9.57 9-10.609l.996 2.151c-2.433.917-3.996 3.638-3.996 5.849h3.983v10h-9.983z" />
                </svg>
              </div>
              
              {/* Rating */}
              <StarRating rating={testimonial.rating} />
              
              {/* Testimonial text */}
              <p className="text-lg text-gray-700 italic mb-6 relative z-10">
                "{testimonial.quote}"
              </p>
              
              {/* Client info */}
              <div className="flex items-center">
                <div className="flex-shrink-0">
                  <div className="w-12 h-12 bg-gradient-to-r from-blue-500 to-purple-500 rounded-full flex items-center justify-center text-white font-bold">
                    {testimonial.avatar}
                  </div>
                </div>
                <div className="ml-4">
                  <h4 className="text-lg font-semibold text-gray-900">{testimonial.author}</h4>
                  <p className="text-blue-600">{testimonial.role}</p>
                </div>
              </div>
              
              {/* Decorative corner */}
              <div className="absolute bottom-0 right-0 w-16 h-16 overflow-hidden">
                <div className="absolute bottom-0 right-0 w-16 h-16 bg-blue-50 rounded-tl-full"></div>
              </div>
            </div>
          ))}
        </div>
        
        {/* Trust indicators */}
        <div className="mt-16 text-center">
          <p className="text-gray-600 mb-6">Trusted by clients from various backgrounds</p>
          <div className="flex flex-wrap justify-center items-center gap-8 opacity-70">
            <div className="bg-white rounded-lg py-3 px-6 shadow-sm">
              <span className="text-sm font-medium text-gray-700">Individual Therapy</span>
            </div>
            <div className="bg-white rounded-lg py-3 px-6 shadow-sm">
              <span className="text-sm font-medium text-gray-700">Couples Counseling</span>
            </div>
            <div className="bg-white rounded-lg py-3 px-6 shadow-sm">
              <span className="text-sm font-medium text-gray-700">Teen Support</span>
            </div>
            <div className="bg-white rounded-lg py-3 px-6 shadow-sm">
              <span className="text-sm font-medium text-gray-700">Family Therapy</span>
            </div>
          </div>
        </div>
      </div>
      
      {/* Animation styles */}
      <style jsx>{`
        @keyframes blob {
          0% { transform: translate(0px, 0px) scale(1); }
          33% { transform: translate(30px, -50px) scale(1.1); }
          66% { transform: translate(-20px, 20px) scale(0.9); }
          100% { transform: translate(0px, 0px) scale(1); }
        }
        .animate-blob {
          animation: blob 7s infinite;
        }
        .animation-delay-2000 {
          animation-delay: 2s;
        }
        .animation-delay-4000 {
          animation-delay: 4s;
        }
      `}</style>
    </section>
  )
}

export default Testimonials