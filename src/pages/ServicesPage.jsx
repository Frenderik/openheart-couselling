import Services from '../components/Services'

const ServicesPage = () => {
  const additionalServices = [
    {
      title: "Group Therapy",
      description: "Join small groups of individuals facing similar challenges for shared support and learning.",
      benefits: ["Peer support", "Reduced cost", "Shared experiences", "Diverse perspectives"],
      icon: (
        <svg className="w-10 h-10" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
        </svg>
      ),
      color: "purple"
    },
    {
      title: "Online Counseling",
      description: "Receive therapy from the comfort of your home through secure video sessions.",
      benefits: ["Convenience", "Accessibility", "Flexibility", "Comfort of home"],
      icon: (
        <svg className="w-10 h-10" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9.75 17L9 20l-1 1h8l-1-1-.75-3M3 13h18M5 17h14a2 2 0 002-2V5a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
        </svg>
      ),
      color: "blue"
    },
    {
      title: "Crisis Intervention",
      description: "Immediate support for urgent mental health concerns and emergencies.",
      benefits: ["24/7 availability", "Immediate support", "Crisis management", "Safety planning"],
      icon: (
        <svg className="w-10 h-10" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M18.364 5.636l-3.536 3.536m0 5.656l3.536 3.536M9.172 9.172L5.636 5.636m3.536 9.192l-3.536 3.536M21 12a9 9 0 11-18 0 9 9 0 0118 0zm-5 0a4 4 0 11-8 0 4 4 0 018 0z" />
        </svg>
      ),
      color: "red"
    }
  ]

  const colorClasses = {
    purple: {
      bg: "bg-purple-100",
      text: "text-purple-700",
      border: "border-purple-200"
    },
    blue: {
      bg: "bg-blue-100",
      text: "text-blue-700",
      border: "border-blue-200"
    },
    red: {
      bg: "bg-red-100",
      text: "text-red-700",
      border: "border-red-200"
    }
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 to-indigo-50 py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        

        {/* Main Services Component */}
        <Services />

        {/* Additional Services Section */}
        <div className="mt-20">
          <div className="text-center mb-12">
            <span className="inline-block py-1.5 px-4 mb-4 text-sm font-semibold text-purple-700 bg-purple-100 rounded-full uppercase tracking-wide">
              Specialized Support
            </span>
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">Additional Services</h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Beyond our core offerings, we provide specialized support to meet diverse needs and circumstances.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {additionalServices.map((service, index) => (
              <div key={index} className="bg-white rounded-2xl p-8 shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2 h-full border border-gray-100">
                <div className={`inline-flex items-center justify-center p-3 mb-6 rounded-2xl ${colorClasses[service.color].bg} ${colorClasses[service.color].text}`}>
                  {service.icon}
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-4">{service.title}</h3>
                <p className="text-gray-600 mb-6">{service.description}</p>
                
                <h4 className="font-semibold text-gray-900 mb-3 flex items-center">
                  <svg className="w-4 h-4 mr-2 text-green-500" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                  Key Benefits
                </h4>
                <ul className="space-y-2">
                  {service.benefits.map((benefit, i) => (
                    <li key={i} className="flex items-center text-sm text-gray-600">
                      <svg className="w-4 h-4 mr-2 text-green-400 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                      </svg>
                      {benefit}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>

        {/* What to Expect Section */}
        <div className="mt-20 bg-white rounded-2xl p-8 shadow-lg border border-blue-100">
          <div className="text-center mb-12">
            <span className="inline-block py-1.5 px-4 mb-4 text-sm font-semibold text-blue-700 bg-blue-100 rounded-full uppercase tracking-wide">
              Your Journey
            </span>
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">What to Expect in Therapy</h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Understanding the therapy process can help you feel more comfortable and prepared for your sessions.
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-10">
            <div className="bg-blue-50 p-8 rounded-2xl border border-blue-200">
              <div className="flex items-center mb-6">
                <div className="w-12 h-12 bg-blue-600 rounded-full flex items-center justify-center text-white font-bold text-xl mr-4">
                  1
                </div>
                <h3 className="text-2xl font-semibold text-gray-900">First Session</h3>
              </div>
              <p className="text-gray-700 mb-4 leading-relaxed">
                Your initial session focuses on building rapport and understanding your unique situation. We'll discuss your personal history, current challenges, and goals for therapy in a safe, confidential space.
              </p>
              <p className="text-gray-700 leading-relaxed">
                This is your opportunity to ask questions about our approach and determine if we're the right fit for your needs. Many clients feel a sense of relief after sharing their concerns for the first time.
              </p>
            </div>

            <div className="bg-purple-50 p-8 rounded-2xl border border-purple-200">
              <div className="flex items-center mb-6">
                <div className="w-12 h-12 bg-purple-600 rounded-full flex items-center justify-center text-white font-bold text-xl mr-4">
                  2
                </div>
                <h3 className="text-2xl font-semibold text-gray-900">Ongoing Sessions</h3>
              </div>
              <p className="text-gray-700 mb-4 leading-relaxed">
                Subsequent sessions focus on actively working toward your therapeutic goals using evidence-based techniques. We'll help you develop insights, build coping skills, and implement positive changes in your life.
              </p>
              <p className="text-gray-700 leading-relaxed">
                The frequency and duration of therapy will be tailored to your individual needs. Many clients see noticeable improvements within the first few weeks of consistent sessions.
              </p>
            </div>
          </div>

          {/* Progress Timeline */}
          <div className="mt-12 bg-gradient-to-r from-blue-100 to-purple-100 rounded-2xl p-8 border border-blue-200">
            <h3 className="text-xl font-semibold text-gray-900 mb-6 text-center">Typical Therapy Progress</h3>
            <div className="flex flex-col md:flex-row justify-between items-center relative">
              <div className="flex flex-col items-center mb-6 md:mb-0 z-10">
                <div className="w-16 h-16 bg-blue-600 rounded-full flex items-center justify-center text-white font-bold text-lg mb-2">
                  1-3
                </div>
                <p className="text-sm font-medium text-gray-700 text-center">Building<br />Foundation</p>
              </div>
              <div className="flex flex-col items-center mb-6 md:mb-0 z-10">
                <div className="w-16 h-16 bg-blue-500 rounded-full flex items-center justify-center text-white font-bold text-lg mb-2">
                  4-8
                </div>
                <p className="text-sm font-medium text-gray-700 text-center">Active<br />Work</p>
              </div>
              <div className="flex flex-col items-center mb-6 md:mb-0 z-10">
                <div className="w-16 h-16 bg-purple-500 rounded-full flex items-center justify-center text-white font-bold text-lg mb-2">
                  8-12
                </div>
                <p className="text-sm font-medium text-gray-700 text-center">Noticeable<br />Progress</p>
              </div>
              <div className="flex flex-col items-center z-10">
                <div className="w-16 h-16 bg-purple-600 rounded-full flex items-center justify-center text-white font-bold text-lg mb-2">
                  12+
                </div>
                <p className="text-sm font-medium text-gray-700 text-center">Maintenance &<br />Growth</p>
              </div>
              <div className="hidden md:block absolute top-8 left-16 right-16 h-1 bg-gradient-to-r from-blue-400 to-purple-400"></div>
            </div>
          </div>
        </div>

        {/* CTA Section */}
        <div className="mt-20 text-center">
          <div className="bg-gradient-to-r from-blue-600 to-purple-600 rounded-2xl p-12 text-white shadow-xl">
            <h2 className="text-3xl md:text-4xl font-bold mb-6">Ready to Begin Your Healing Journey?</h2>
            <p className="text-xl mb-8 max-w-2xl mx-auto">
              Take the first step toward better mental health. Our compassionate therapists are here to support you every step of the way.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button className="px-8 py-4 bg-white text-blue-600 hover:bg-blue-50 font-semibold rounded-xl transition-colors duration-300">
                Book a Session
              </button>
              <button className="px-8 py-4 border border-white text-white hover:bg-white/10 font-semibold rounded-xl transition-colors duration-300">
                Contact Us
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default ServicesPage