const Services = () => {
  const services = [
    {
      title: "Individual Therapy",
      description: "One-on-one sessions tailored to your unique needs. We provide personalized support for depression, anxiety, stress, and other mental health concerns.",
      icon: (
        <svg className="w-12 h-12" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
        </svg>
      ),
      color: "blue",
      features: ["Personalized approach", "Confidential sessions", "Evidence-based methods"]
    },
    {
      title: "Couples Counseling",
      description: "Helping partners improve communication and connection. We work with couples to rebuild trust, enhance intimacy, and resolve conflicts.",
      icon: (
        <svg className="w-12 h-12" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
        </svg>
      ),
      color: "purple",
      features: ["Communication skills", "Conflict resolution", "Intimacy building"]
    },
    {
      title: "Family Therapy",
      description: "Supporting families to heal and grow together. We help families improve communication, resolve conflicts, and navigate life transitions.",
      icon: (
        <svg className="w-12 h-12" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4" />
        </svg>
      ),
      color: "green",
      features: ["Family dynamics", "Healing together", "Life transitions"]
    },
    {
      title: "Child & Adolescent Therapy",
      description: "Specialized support for younger clients. We provide age-appropriate therapy for children and teens dealing with emotional and behavioral challenges.",
      icon: (
        <svg className="w-12 h-12" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M14.828 14.828a4 4 0 01-5.656 0M9 10h.01M15 10h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
        </svg>
      ),
      color: "orange",
      features: ["Age-appropriate methods", "Play therapy", "School collaboration"]
    }
  ]

  const colorClasses = {
    blue: {
      bg: "bg-blue-500",
      lightBg: "bg-blue-50",
      text: "text-blue-700",
      border: "border-blue-200",
      hover: "hover:bg-blue-600"
    },
    purple: {
      bg: "bg-purple-500",
      lightBg: "bg-purple-50",
      text: "text-purple-700",
      border: "border-purple-200",
      hover: "hover:bg-purple-600"
    },
    green: {
      bg: "bg-green-500",
      lightBg: "bg-green-50",
      text: "text-green-700",
      border: "border-green-200",
      hover: "hover:bg-green-600"
    },
    orange: {
      bg: "bg-orange-500",
      lightBg: "bg-orange-50",
      text: "text-orange-700",
      border: "border-orange-200",
      hover: "hover:bg-orange-600"
    }
  }

  return (
    <section id="services" className="py-20 bg-gradient-to-br from-gray-50 to-blue-50 relative overflow-hidden">
      {/* Background elements */}
      <div className="absolute top-0 right-0 w-1/4 h-1/4 bg-blue-100 rounded-full mix-blend-multiply filter blur-3xl opacity-30"></div>
      <div className="absolute bottom-0 left-0 w-1/3 h-1/3 bg-purple-100 rounded-full mix-blend-multiply filter blur-3xl opacity-30"></div>
      
      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <span className="inline-block py-1.5 px-4 mb-4 text-sm font-semibold text-blue-700 bg-blue-100 rounded-full uppercase tracking-wide">
            Our Services
          </span>
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
            Comprehensive <span className="text-blue-600">Mental Health</span> Support
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            We offer a range of counseling services tailored to your specific needs. All sessions are confidential and conducted by licensed professionals.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-2 xl:grid-cols-4 gap-8">
          {services.map((service, index) => (
            <div 
              key={index} 
              className="group relative bg-white rounded-2xl p-8 shadow-lg hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2 overflow-hidden"
            >
              {/* Color accent bar */}
              <div className={`absolute top-0 left-0 w-full h-2 ${colorClasses[service.color].bg}`}></div>
              
              {/* Icon container */}
              <div className={`inline-flex items-center justify-center p-3 mb-6 rounded-2xl ${colorClasses[service.color].lightBg} ${colorClasses[service.color].text} group-hover:scale-110 transition-transform duration-300`}>
                {service.icon}
              </div>
              
              {/* Content */}
              <h3 className="text-xl font-bold text-gray-900 mb-4 group-hover:text-blue-600 transition-colors duration-300">
                {service.title}
              </h3>
              
              <p className="text-gray-600 mb-6 leading-relaxed">
                {service.description}
              </p>
              
              {/* Features list */}
              <ul className="space-y-2 mb-6">
                {service.features.map((feature, i) => (
                  <li key={i} className="flex items-center text-sm text-gray-600">
                    <svg className={`w-4 h-4 mr-2 ${colorClasses[service.color].text} flex-shrink-0`} fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                    {feature}
                  </li>
                ))}
              </ul>
              
              {/* CTA button */}
              <button className={`w-full py-3 px-4 ${colorClasses[service.color].bg} hover:${colorClasses[service.color].hover} text-white font-medium rounded-lg transition-colors duration-300 transform group-hover:scale-105`}>
                Learn More
              </button>
              
              {/* Hover effect overlay */}
              <div className="absolute inset-0 bg-gradient-to-b from-transparent to-white opacity-0 group-hover:opacity-10 transition-opacity duration-300"></div>
            </div>
          ))}
        </div>

        {/* Bottom CTA */}
        <div className="mt-16 text-center">
          <div className="bg-white rounded-2xl p-8 shadow-lg border border-blue-100">
            <h3 className="text-2xl font-bold text-gray-900 mb-4">Ready to Begin Your Journey?</h3>
            <p className="text-gray-600 mb-6 max-w-2xl mx-auto">
              Take the first step toward better mental health. Schedule a consultation with one of our experienced therapists today.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button className="px-8 py-3 bg-blue-600 hover:bg-blue-700 text-white font-medium rounded-lg transition-colors duration-300">
                Book a Session
              </button>
              <button className="px-8 py-3 border border-blue-600 text-blue-600 hover:bg-blue-50 font-medium rounded-lg transition-colors duration-300">
                Contact Us
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Services