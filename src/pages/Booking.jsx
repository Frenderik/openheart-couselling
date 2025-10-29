import BookingForm from '../components/BookingForm'

const Booking = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 to-indigo-50 py-12">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header Section */}
        <div className="text-center mb-16">
          <span className="inline-block py-2 px-5 mb-4 text-sm font-semibold text-blue-700 bg-blue-100 rounded-full uppercase tracking-wide">
            Begin Your Journey
          </span>
          <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
            Schedule Your <span className="text-blue-600">Healing Session</span>
          </h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Take the first step toward mental wellness. Book your appointment with our compassionate therapists today.
          </p>
        </div>

        <div className="grid lg:grid-cols-5 gap-8 mb-16">
          {/* Before Booking Card - Takes 2 columns - UNIQUE STYLING */}
          <div className="lg:col-span-2">
            <div className="relative bg-white rounded-2xl p-8 shadow-2xl h- border-0 overflow-hidden group hover:shadow-2xl transition-all duration-500">
              {/* Decorative gradient corner */}
              <div className="absolute top-0 right-0 w-32 h-32 bg-gradient-to-br from-blue-500 to-purple-500 rounded-bl-3xl opacity-10"></div>
              
              {/* Animated border effect */}
              <div className="absolute inset-0 rounded-2xl bg-gradient-to-r from-blue-400 to-purple-400 p-1 -m-1 opacity-0 group-hover:opacity-100 transition-opacity duration-700">
                <div className="bg-white rounded-2xl h-full w-full"></div>
              </div>
              
              <div className="relative z-10">
                <div className="text-center mb-6">
                  {/* Animated icon container */}
                  <div className="inline-flex items-center justify-center w-20 h-20 bg-gradient-to-br from-blue-500 to-purple-500 rounded-2xl mb-4 shadow-lg group-hover:scale-105 transition-transform duration-300">
                    <svg className="w-10 h-10 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                    </svg>
                  </div>
                  <h2 className="text-2xl font-bold text-gray-900 mb-4 bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
                    Before You Book
                  </h2>
                </div>
                
                <ul className="space-y-4">
                  {[
                    "Check your availability for the preferred date and time",
                    "Have your payment method ready (credit card or M-Pesa)",
                    "Review our 24-hour cancellation policy",
                    "Ensure a quiet, private space for online sessions"
                  ].map((item, index) => (
                    <li key={index} className="flex items-start group/item">
                      <div className="flex-shrink-0 mt-1">
                        <div className="w-7 h-7 bg-gradient-to-br from-blue-100 to-purple-100 rounded-full flex items-center justify-center group-hover/item:from-blue-200 group-hover/item:to-purple-200 transition-colors duration-300">
                          <div className="w-3 h-3 bg-gradient-to-br from-blue-500 to-purple-500 rounded-full"></div>
                        </div>
                      </div>
                      <span className="ml-4 text-gray-700 group-hover/item:text-gray-900 transition-colors duration-300">{item}</span>
                    </li>
                  ))}
                </ul>

                {/* Quick Tips with unique styling */}
                <div className="mt-8 pt-6 border-t border-gray-100 relative">
                  {/* Decorative element */}
                  <div className="absolute -top-3 left-1/2 transform -translate-x-1/2 w-6 h-6 bg-white rounded-full flex items-center justify-center">
                    <div className="w-2 h-2 bg-blue-400 rounded-full"></div>
                  </div>
                  
                  <h3 className="font-semibold text-gray-900 mb-3 flex items-center justify-center">
                    <svg className="w-5 h-5 text-blue-500 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                    </svg>
                    Pro Tip
                  </h3>
                  <div className="bg-blue-50 rounded-xl p-4 border border-blue-100">
                    <p className="text-sm text-blue-700 text-center">
                      Sessions typically last 50 minutes. Choose a time when you can be fully present and undisturbed.
                    </p>
                  </div>
                </div>

                {/* Decorative elements */}
                <div className="absolute bottom-4 left-4 w-3 h-3 bg-purple-300 rounded-full opacity-50"></div>
                <div className="absolute top-4 right-4 w-4 h-4 bg-blue-300 rounded-full opacity-30"></div>
              </div>
            </div>
          </div>

          {/* Booking Form - Takes 3 columns */}
          <div className="lg:col-span-3">
            <BookingForm />
          </div>
        </div>

        {/* After Booking Section */}
        <div className="bg-gradient-to-r from-blue-600 to-purple-600 rounded-2xl p-10 text-white shadow-xl mb-16">
          <div className="text-center mb-10">
            <span className="inline-block py-2 px-5 mb-4 text-sm font-semibold text-blue-100 bg-blue-500/20 rounded-full uppercase tracking-wide">
              Next Steps
            </span>
            <h2 className="text-3xl md:text-4xl font-bold mb-4">After You Book</h2>
            <p className="text-lg text-blue-100 max-w-2xl mx-auto">
              Here's what happens once you complete your booking:
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            <div className="bg-white/10 backdrop-blur-sm rounded-xl p-6 border border-white/20">
              <h3 className="text-xl font-semibold mb-4 flex items-center">
                <div className="w-10 h-10 bg-white/20 rounded-lg flex items-center justify-center mr-3">
                  <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
                  </svg>
                </div>
                Confirmation & Details
              </h3>
              <ul className="space-y-3 text-blue-100">
                <li className="flex items-start">
                  <svg className="w-5 h-5 text-green-300 mt-0.5 mr-3 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                  <span>Immediate email confirmation with appointment details</span>
                </li>
                <li className="flex items-start">
                  <svg className="w-5 h-5 text-green-300 mt-0.5 mr-3 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                  <span>Session link (for online) or location details (for in-person)</span>
                </li>
                <li className="flex items-start">
                  <svg className="w-5 h-5 text-green-300 mt-0.5 mr-3 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                  <span>Therapist introduction and background information</span>
                </li>
              </ul>
            </div>

            <div className="bg-white/10 backdrop-blur-sm rounded-xl p-6 border border-white/20">
              <h3 className="text-xl font-semibold mb-4 flex items-center">
                <div className="w-10 h-10 bg-white/20 rounded-lg flex items-center justify-center mr-3">
                  <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253" />
                  </svg>
                </div>
                Preparation Materials
              </h3>
              <ul className="space-y-3 text-blue-100">
                <li className="flex items-start">
                  <svg className="w-5 h-5 text-green-300 mt-0.5 mr-3 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                  <span>Digital intake forms to complete before your session</span>
                </li>
                <li className="flex items-start">
                  <svg className="w-5 h-5 text-green-300 mt-0.5 mr-3 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                  <span>What to expect guide for your first session</span>
                </li>
                <li className="flex items-start">
                  <svg className="w-5 h-5 text-green-300 mt-0.5 mr-3 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                  <span>Direct contact information for any questions</span>
                </li>
              </ul>
            </div>
          </div>

          {/* Support Note */}
          <div className="mt-10 bg-white/15 backdrop-blur-sm rounded-xl p-6 text-center border border-white/20">
            <p className="text-lg font-medium">
              <svg className="w-6 h-6 inline-block mr-2 text-blue-200" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M18.364 5.636l-3.536 3.536m0 5.656l3.536 3.536M9.172 9.172L5.636 5.636m3.536 9.192l-3.536 3.536M21 12a9 9 0 11-18 0 9 9 0 0118 0zm-5 0a4 4 0 11-8 0 4 4 0 018 0z" />
              </svg>
              Need immediate assistance? Contact us at{' '}
              <span className="font-semibold text-white">support@openheart.com</span> or call{' '}
              <span className="font-semibold text-white">+254 700 123 456</span>
            </p>
          </div>
        </div>

        {/* FAQ Section */}
        <div className="bg-white rounded-2xl p-10 shadow-lg border border-gray-100">
          <div className="text-center mb-12">
            <span className="inline-block py-2 px-5 mb-4 text-sm font-semibold text-gray-700 bg-gray-100 rounded-full uppercase tracking-wide">
              Common Questions
            </span>
            <h2 className="text-3xl font-bold text-gray-900 mb-4">Frequently Asked Questions</h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Find answers to common questions about our booking process and services.
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-6">
            {[
              {
                question: "What payment methods do you accept?",
                answer: "We accept major credit cards, mobile payments (M-Pesa), and bank transfers for your convenience."
              },
              {
                question: "Can I reschedule my appointment?",
                answer: "Yes, you can reschedule with at least 24 hours notice. Late cancellations may incur a fee."
              },
              {
                question: "Do you offer online sessions?",
                answer: "Yes, we offer secure video sessions through our encrypted platform for your privacy and convenience."
              },
              {
                question: "What if I need to cancel?",
                answer: "We offer full refunds for cancellations made at least 24 hours in advance of your scheduled session."
              },
              {
                question: "How long are the sessions?",
                answer: "Standard therapy sessions are 50 minutes long, with extended options available upon request."
              },
              {
                question: "Is my information kept confidential?",
                answer: "Absolutely. We adhere to strict confidentiality protocols and all sessions are completely private."
              }
            ].map((faq, index) => (
              <div key={index} className="bg-gray-50 p-6 rounded-xl hover:shadow-md transition-shadow duration-300">
                <h3 className="font-semibold text-gray-900 mb-3 flex items-center">
                  <svg className="w-5 h-5 text-blue-500 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8.228 9c.549-1.165 2.03-2 3.772-2 2.21 0 4 1.343 4 3 0 1.4-1.278 2.575-3.006 2.907-.542.104-.994.54-.994 1.093m0 3h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                  {faq.question}
                </h3>
                <p className="text-gray-600 text-sm">{faq.answer}</p>
              </div>
            ))}
          </div>

          {/* Additional Support */}
          <div className="mt-10 text-center">
            <p className="text-gray-600">
              Still have questions?{' '}
              <a href="/contact" className="text-blue-600 hover:text-blue-700 font-semibold">
                Contact us directly
              </a>{' '}
              for personalized assistance.
            </p>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Booking