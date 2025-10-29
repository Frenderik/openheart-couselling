const AboutUs = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 to-indigo-50 py-12">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header Section */}
        <div className="text-center mb-16">
          <span className="inline-block py-1.5 px-4 mb-4 text-sm font-semibold text-blue-700 bg-blue-100 rounded-full uppercase tracking-wide">
            Our Story
          </span>
          <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
            About <span className="text-blue-600">OpenHeart Counseling</span>
          </h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Learn more about our mission, values, and the dedicated team committed to your mental wellbeing journey.
          </p>
        </div>

        {/* Mission Section */}
        <div className="bg-white rounded-2xl p-8 shadow-lg mb-12 border border-blue-100">
          <div className="flex flex-col md:flex-row items-start gap-8">
            <div className="md:w-1/4">
              <div className="bg-blue-100 p-4 rounded-2xl text-center">
                <svg className="w-12 h-12 mx-auto text-blue-600 mb-3" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M21 12a9 9 0 01-9 9m9-9a9 9 0 00-9-9m9 9H3m9 9a9 9 0 01-9-9m9 9c1.657 0 3-4.03 3-9s-1.343-9-3-9m0 18c-1.657 0-3-4.03-3-9s1.343-9 3-9m-9 9a9 9 0 019-9" />
                </svg>
                <h3 className="text-lg font-semibold text-blue-800">Our Mission</h3>
              </div>
            </div>
            <div className="md:w-3/4">
              <p className="text-gray-700 mb-4 text-lg leading-relaxed">
                At OpenHeart Counseling, our mission is to provide <span className="text-blue-600 font-medium">accessible, compassionate, and effective</span> mental health support to individuals, couples, and families. We believe that everyone deserves the opportunity to achieve mental wellness and lead a fulfilling life.
              </p>
              <p className="text-gray-700 text-lg leading-relaxed">
                We strive to create a <span className="text-blue-600 font-medium">safe, non-judgmental space</span> where clients can explore their thoughts and feelings, develop coping strategies, and work towards their personal goals with professional guidance.
              </p>
            </div>
          </div>
        </div>

        {/* Approach Section */}
        <div className="bg-white rounded-2xl p-8 shadow-lg mb-12 border border-purple-100">
          <div className="flex flex-col md:flex-row items-start gap-8">
            <div className="md:w-1/4">
              <div className="bg-purple-100 p-4 rounded-2xl text-center">
                <svg className="w-12 h-12 mx-auto text-purple-600 mb-3" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z" />
                </svg>
                <h3 className="text-lg font-semibold text-purple-800">Our Approach</h3>
              </div>
            </div>
            <div className="md:w-3/4">
              <p className="text-gray-700 mb-4 text-lg leading-relaxed">
                Our therapeutic approach is <span className="text-purple-600 font-medium">client-centered and evidence-based</span>. We integrate various therapeutic modalities including Cognitive Behavioral Therapy (CBT), Mindfulness-Based Therapy, Solution-Focused Therapy, and Trauma-Informed Care to create personalized treatment plans for each client.
              </p>
              <p className="text-gray-700 text-lg leading-relaxed">
                We believe in <span className="text-purple-600 font-medium">treating the whole person</span>, not just the symptoms, and we work collaboratively with our clients to help them build resilience, develop healthy coping mechanisms, and create positive change in their lives.
              </p>
            </div>
          </div>
        </div>

        {/* Values Section */}
        <div className="bg-white rounded-2xl p-8 shadow-lg mb-12 border border-green-100">
          <div className="text-center mb-8">
            <span className="inline-block py-1.5 px-4 mb-4 text-sm font-semibold text-green-700 bg-green-100 rounded-full uppercase tracking-wide">
              Core Values
            </span>
            <h2 className="text-3xl font-bold text-gray-900 mb-4">What Guides Our Practice</h2>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {[
              {
                title: "Compassion",
                description: "We approach every client with empathy, understanding, and kindness.",
                icon: "",
                color: "red"
              },
              {
                title: "Confidentiality",
                description: "We maintain the highest standards of privacy and confidentiality.",
                icon: "",
                color: "blue"
              },
              {
                title: "Professionalism",
                description: "We adhere to ethical guidelines and continuously update our skills.",
                icon: "",
                color: "amber"
              },
              {
                title: "Inclusivity",
                description: "We welcome clients from all backgrounds, cultures, and identities.",
                icon: "",
                color: "green"
              },
              {
                title: "Collaboration",
                description: "We work together with clients as partners in healing.",
                icon: "",
                color: "purple"
              },
              {
                title: "Excellence",
                description: "We are committed to providing the highest quality care.",
                icon: "",
                color: "indigo"
              }
            ].map((value, index) => (
              <div key={index} className="bg-gray-50 p-6 rounded-xl border border-gray-200 hover:shadow-md transition-shadow duration-300">
                <div className="text-3xl mb-4">{value.icon}</div>
                <h3 className="text-xl font-semibold text-gray-900 mb-2">{value.title}</h3>
                <p className="text-gray-600">{value.description}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Why Choose Us Section */}
        <div className="bg-white rounded-2xl p-8 shadow-lg mb-12 border border-orange-100">
          <div className="text-center mb-8">
            <span className="inline-block py-1.5 px-4 mb-4 text-sm font-semibold text-orange-700 bg-orange-100 rounded-full uppercase tracking-wide">
              Why Choose Us
            </span>
            <h2 className="text-3xl font-bold text-gray-900 mb-4">What Sets Us Apart</h2>
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            <div className="bg-blue-50 p-6 rounded-xl border border-blue-200">
              <div className="flex items-center mb-4">
                <div className="w-10 h-10 bg-blue-600 rounded-full flex items-center justify-center text-white mr-4">
                  <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
                  </svg>
                </div>
                <h3 className="text-xl font-semibold text-gray-900">Experienced Professionals</h3>
              </div>
              <p className="text-gray-700">Our team consists of licensed therapists with years of experience in various specialties and ongoing professional development.</p>
            </div>

            <div className="bg-purple-50 p-6 rounded-xl border border-purple-200">
              <div className="flex items-center mb-4">
                <div className="w-10 h-10 bg-purple-600 rounded-full flex items-center justify-center text-white mr-4">
                  <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z" />
                  </svg>
                </div>
                <h3 className="text-xl font-semibold text-gray-900">Personalized Care</h3>
              </div>
              <p className="text-gray-700">We develop customized treatment plans tailored to your unique needs, goals, and personal circumstances.</p>
            </div>

            <div className="bg-green-50 p-6 rounded-xl border border-green-200">
              <div className="flex items-center mb-4">
                <div className="w-10 h-10 bg-green-600 rounded-full flex items-center justify-center text-white mr-4">
                  <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                </div>
                <h3 className="text-xl font-semibold text-gray-900">Flexible Scheduling</h3>
              </div>
              <p className="text-gray-700">We offer appointment times to accommodate your busy schedule, including evening and weekend options for your convenience.</p>
            </div>

            <div className="bg-red-50 p-6 rounded-xl border border-red-200">
              <div className="flex items-center mb-4">
                <div className="w-10 h-10 bg-red-600 rounded-full flex items-center justify-center text-white mr-4">
                  <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" />
                  </svg>
                </div>
                <h3 className="text-xl font-semibold text-gray-900">Safe Environment</h3>
              </div>
              <p className="text-gray-700">Our practice provides a comfortable, confidential space for healing and growth, both in-person and through secure online sessions.</p>
            </div>
          </div>
        </div>

        {/* CTA Section */}
        <div className="text-center">
          <div className="bg-gradient-to-r from-blue-600 to-purple-600 rounded-2xl p-12 text-white shadow-xl">
            <h2 className="text-3xl md:text-4xl font-bold mb-6">Ready to Start Your Journey?</h2>
            <p className="text-xl mb-8 max-w-2xl mx-auto">
              Take the first step toward better mental health with our compassionate and experienced team.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button className="px-8 py-4 bg-white text-blue-600 hover:bg-blue-50 font-semibold rounded-xl transition-colors duration-300">
                Book a Consultation
              </button>
              <button className="px-8 py-4 border border-white text-white hover:bg-white/10 font-semibold rounded-xl transition-colors duration-300">
                Meet Our Team
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default AboutUs