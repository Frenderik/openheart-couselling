const About = () => {
  return (
    <section id="about" className="py-20 bg-gradient-to-br from-blue-50 to-indigo-50 relative overflow-hidden">
      {/* Background decorative elements */}
      <div className="absolute top-0 right-0 w-1/3 h-1/3 bg-blue-100 rounded-full mix-blend-multiply filter blur-3xl opacity-30"></div>
      <div className="absolute bottom-0 left-0 w-1/4 h-1/4 bg-purple-100 rounded-full mix-blend-multiply filter blur-3xl opacity-30"></div>
      
      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <span className="inline-block py-1.5 px-4 mb-4 text-sm font-semibold text-blue-700 bg-blue-100 rounded-full uppercase tracking-wide">
            Our Story
          </span>
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
            Compassionate Care for <span className="text-blue-600">Mental Wellness</span>
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Our team of licensed therapists is dedicated to helping individuals overcome challenges, build resilience, and find a path to healing.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Image with modern frame */}
          <div className="relative">
            <div className="relative z-10 rounded-2xl overflow-hidden shadow-2xl">
              <img 
                src="/src/assets/images/therapist-margaret.jpg" 
                alt="Therapist Margaret" 
                className="w-full h-auto"
              />
            </div>
            {/* Decorative elements */}
            <div className="absolute -bottom-6 -left-6 w-24 h-24 bg-blue-200 rounded-2xl opacity-50"></div>
            <div className="absolute -top-6 -right-6 w-32 h-32 bg-purple-200 rounded-2xl opacity-50"></div>
          </div>
          
          {/* Content */}
          <div>
            <div className="mb-8">
              <span className="inline-block py-1 px-3 mb-3 text-xs font-semibold text-blue-700 bg-blue-100 rounded-full">
                LEAD THERAPIST
              </span>
              <h3 className="text-3xl font-bold text-gray-900 mb-2">Dr. Margaret Wanjiru</h3>
              <p className="text-lg text-blue-600 font-medium mb-4">Licensed Professional Clinical Counselor (PCY)</p>
              <p className="text-gray-700 mb-6 leading-relaxed">
                Specializes in adolescent counseling, trauma recovery, grief and loss support, crisis intervention, and psychological counseling. 
                With over 15 years of experience, Dr. Margaret has helped hundreds of clients navigate life's most challenging moments 
                with compassion, expertise, and evidence-based approaches.
              </p>
            </div>
            
            {/* Credentials card */}
            <div className="bg-white p-8 rounded-2xl shadow-lg border border-blue-100">
              <h4 className="text-xl font-bold text-gray-900 mb-4 flex items-center">
                <svg className="w-6 h-6 text-blue-600 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                </svg>
                Education & Credentials
              </h4>
              <ul className="space-y-3">
                <li className="flex items-start">
                  <svg className="w-5 h-5 text-green-500 mt-0.5 mr-3 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                  <span className="text-gray-700">PhD in Clinical Psychology, University of Nairobi</span>
                </li>
                <li className="flex items-start">
                  <svg className="w-5 h-5 text-green-500 mt-0.5 mr-3 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                  <span className="text-gray-700">Licensed Professional Clinical Counselor (LPCC)</span>
                </li>
                <li className="flex items-start">
                  <svg className="w-5 h-5 text-green-500 mt-0.5 mr-3 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                  <span className="text-gray-700">Certified in Trauma-Focused Cognitive Behavioral Therapy</span>
                </li>
                <li className="flex items-start">
                  <svg className="w-5 h-5 text-green-500 mt-0.5 mr-3 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                  <span className="text-gray-700">Member of Kenya Psychological Association</span>
                </li>
                <li className="flex items-start">
                  <svg className="w-5 h-5 text-green-500 mt-0.5 mr-3 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                  <span className="text-gray-700">15+ Years of Clinical Experience</span>
                </li>
              </ul>
            </div>

            {/* Call to action */}
            <div className="mt-8 flex flex-wrap gap-4">
              <a href="#booking" className="px-6 py-3 bg-blue-600 hover:bg-blue-700 text-white font-medium rounded-lg transition-colors duration-200">
                Schedule Consultation
              </a>
              <a href="#services" className="px-6 py-3 border border-blue-600 text-blue-600 hover:bg-blue-50 font-medium rounded-lg transition-colors duration-200">
                View Services
              </a>
            </div>
          </div>
        </div>

        {/* Stats section */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mt-20">
          <div className="bg-white p-6 rounded-2xl shadow-sm text-center border border-blue-50">
            <div className="text-3xl font-bold text-blue-600 mb-2">500+</div>
            <div className="text-sm text-gray-600">Clients Helped</div>
          </div>
          <div className="bg-white p-6 rounded-2xl shadow-sm text-center border border-blue-50">
            <div className="text-3xl font-bold text-blue-600 mb-2">15+</div>
            <div className="text-sm text-gray-600">Years Experience</div>
          </div>
          <div className="bg-white p-6 rounded-2xl shadow-sm text-center border border-blue-50">
            <div className="text-3xl font-bold text-blue-600 mb-2">98%</div>
            <div className="text-sm text-gray-600">Success Rate</div>
          </div>
          <div className="bg-white p-6 rounded-2xl shadow-sm text-center border border-blue-50">
            <div className="text-3xl font-bold text-blue-600 mb-2">5</div>
            <div className="text-sm text-gray-600">Specializations</div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default About