import { useState, useEffect } from 'react'
import { useForm } from '../hooks/useForm'

const BookingForm = () => {
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [submitMessage, setSubmitMessage] = useState('')
  const [selectedService, setSelectedService] = useState('')
  const [isCustomAmount, setIsCustomAmount] = useState(false)
  const [bookingId, setBookingId] = useState(null)
  const [bookingRef, setBookingRef] = useState('')
  const [showPaymentModal, setShowPaymentModal] = useState(false)
  const [selectedPaymentMethod, setSelectedPaymentMethod] = useState('')
  const [formErrors, setFormErrors] = useState({})
  
  const services = [
    { value: '', label: 'Select a service', price: 0, disabled: true },
    { value: 'individual', label: 'Individual Therapy', price: 120 },
    { value: 'couples', label: 'Couples Counseling', price: 150 },
    { value: 'family', label: 'Family Therapy', price: 180 },
    { value: 'child', label: 'Child & Adolescent Therapy', price: 130 }
  ]

  const { values, handleChange, setValues } = useForm({
    fullName: '',
    email: '',
    service: '',
    date: '',
    time: '',
    amount: '',
    message: ''
  })

  // Debug useEffect to log state changes
  useEffect(() => {
    console.log('Service value changed:', values.service);
    console.log('Selected service state:', selectedService);
  }, [values.service, selectedService]);

  // Clear errors when values change
  useEffect(() => {
    if (formErrors.amount && values.amount) {
      setFormErrors(prev => ({ ...prev, amount: '' }))
    }
    if (formErrors.service && values.service) {
      setFormErrors(prev => ({ ...prev, service: '' }))
    }
  }, [values.amount, values.service, formErrors])

  const handleServiceChange = (e) => {
    const serviceValue = e.target.value;
    console.log('Service selected:', serviceValue);
    
    // Update the form value immediately
    handleChange(e);
    
    // Update selected service state
    setSelectedService(serviceValue);
    
    // Auto-fill amount based on service selection
    if (serviceValue && serviceValue !== '') {
      const selected = services.find(s => s.value === serviceValue);
      console.log('Found service:', selected);
      
      if (selected) {
        // Update amount field
        setValues(prevValues => ({
          ...prevValues,
          amount: selected.price.toString()
        }));
        setIsCustomAmount(false);
        
        // Clear service error
        if (formErrors.service) {
          setFormErrors(prev => ({ ...prev, service: '' }));
        }
      }
    } else {
      // Clear amount if no service selected
      setValues(prevValues => ({
        ...prevValues,
        amount: ''
      }));
    }
  }

  const handleAmountChange = (e) => {
    handleChange(e);
    // Clear amount error when user starts typing
    if (formErrors.amount) {
      setFormErrors(prev => ({ ...prev, amount: '' }));
    }
    
    // If user manually changes the amount, mark it as custom
    if (e.target.value !== '' && selectedService) {
      const selected = services.find(s => s.value === selectedService);
      if (selected && parseFloat(e.target.value) !== selected.price) {
        setIsCustomAmount(true);
      } else {
        setIsCustomAmount(false);
      }
    }
  }

  const handleAmountFocus = (e) => {
    // If amount is the standard price, clear it when user focuses to enter custom amount
    if (selectedService && !isCustomAmount) {
      setValues(prevValues => ({
        ...prevValues,
        amount: ''
      }));
    }
    
    // Clear any existing amount errors
    if (formErrors.amount) {
      setFormErrors(prev => ({ ...prev, amount: '' }));
    }
  }

  const validateForm = () => {
    const errors = {};
    
    console.log('Validating form with values:', values);
    
    if (!values.fullName?.trim()) {
      errors.fullName = 'Full name is required';
    }
    
    if (!values.email?.trim()) {
      errors.email = 'Email is required';
    } else if (!/\S+@\S+\.\S+/.test(values.email)) {
      errors.email = 'Email is invalid';
    }
    
    if (!values.service || values.service === '') {
      errors.service = 'Please select a service';
      console.log('Service validation failed - value is:', values.service);
    }
    
    if (!values.date) {
      errors.date = 'Please select a date';
    }
    
    if (!values.time) {
      errors.time = 'Please select a time';
    }
    
    if (!values.amount || values.amount <= 0) {
      errors.amount = 'Please enter a valid amount';
    }
    
    console.log('Validation errors:', errors);
    setFormErrors(errors);
    return Object.keys(errors).length === 0;
  }

  const handleSubmit = async (e) => {
    e.preventDefault()
    
    console.log('Form submitted with values:', values);
    
    // Validate form using custom validation instead of browser validation
    if (!validateForm()) {
      setSubmitMessage('Please fix the errors in the form.');
      return;
    }
    
    setIsSubmitting(true)
    setSubmitMessage('');
    
    try {
      // Send booking data to PHP backend
      const response = await fetch('http://localhost/openheart_counseling/booking.php', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(values)
      });

      const result = await response.json();
      console.log('API Response:', result);

      if (result.success) {
        setBookingId(result.booking_id);
        setBookingRef(result.booking_ref);
        setSubmitMessage('Booking created successfully! Please select payment method.');
        setShowPaymentModal(true);
      } else {
        setSubmitMessage('Error: ' + result.message);
      }
    } catch (error) {
      console.error('API Error:', error);
      setSubmitMessage('Network error. Please try again.');
    } finally {
      setIsSubmitting(false);
    }
  }

  const handlePayment = async (method) => {
    setIsSubmitting(true);
    
    try {
      // Send payment data to PHP backend
      const paymentData = {
        booking_id: bookingId,
        booking_ref: bookingRef,
        payment_method: method,
        amount: values.amount,
        status: 'completed'
      };
      
      const response = await fetch('http://localhost/openheart_counseling/payment.php', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(paymentData)
      });

      const result = await response.json();
      
      if (result.success) {
        setShowPaymentModal(false);
        setSubmitMessage(`Payment via ${method} completed successfully! Your booking #${bookingRef} is confirmed. We've sent a confirmation to your email.`);
        setSelectedPaymentMethod('');
        
        // Reset form
        setValues({
          fullName: '',
          email: '',
          service: '',
          date: '',
          time: '',
          amount: '',
          message: ''
        });
        setSelectedService('');
        setFormErrors({});
      } else {
        setSubmitMessage('Payment failed: ' + result.message);
      }
    } catch (error) {
      console.error('Payment Error:', error);
      setSubmitMessage('Payment failed. Please try again.');
    } finally {
      setIsSubmitting(false);
    }
  }

  const PaymentModal = () => {
    if (!showPaymentModal) return null;

    return (
      <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50 p-4">
        <div className="bg-white rounded-2xl p-8 max-w-md w-full mx-4">
          <div className="text-center mb-6">
            <h2 className="text-2xl font-bold text-gray-900 mb-2">Select Payment Method</h2>
            <p className="text-gray-600">Booking Reference: {bookingRef}</p>
            <p className="text-xl font-bold text-blue-600 mt-2">${values.amount}</p>
          </div>

          <div className="space-y-4 mb-6">
            {/* M-Pesa Option */}
            <div 
              className={`border-2 rounded-xl p-4 cursor-pointer transition-all ${
                selectedPaymentMethod === 'mpesa' 
                  ? 'border-green-500 bg-green-50' 
                  : 'border-gray-300 hover:border-green-300'
              }`}
              onClick={() => setSelectedPaymentMethod('mpesa')}
            >
              <div className="flex items-center">
                <div className="w-10 h-10 bg-green-100 rounded-lg flex items-center justify-center mr-3">
                  <span className="text-green-600 font-bold text-sm">M-Pesa</span>
                </div>
                <div>
                  <h3 className="font-semibold text-gray-900">M-Pesa</h3>
                  <p className="text-sm text-gray-600">Mobile money payment</p>
                </div>
              </div>
              {selectedPaymentMethod === 'mpesa' && (
                <div className="mt-3 p-3 bg-green-100 rounded-lg">
                  <p className="text-sm text-green-700">
                    You will receive a prompt to enter your M-Pesa PIN
                  </p>
                </div>
              )}
            </div>

            {/* PayPal Option */}
            <div 
              className={`border-2 rounded-xl p-4 cursor-pointer transition-all ${
                selectedPaymentMethod === 'paypal' 
                  ? 'border-blue-500 bg-blue-50' 
                  : 'border-gray-300 hover:border-blue-300'
              }`}
              onClick={() => setSelectedPaymentMethod('paypal')}
            >
              <div className="flex items-center">
                <div className="w-10 h-10 bg-blue-100 rounded-lg flex items-center justify-center mr-3">
                  <span className="text-blue-600 font-bold text-sm">PayPal</span>
                </div>
                <div>
                  <h3 className="font-semibold text-gray-900">PayPal</h3>
                  <p className="text-sm text-gray-600">Secure online payment</p>
                </div>
              </div>
              {selectedPaymentMethod === 'paypal' && (
                <div className="mt-3 p-3 bg-blue-100 rounded-lg">
                  <p className="text-sm text-blue-700">
                    You will be redirected to PayPal
                  </p>
                </div>
              )}
            </div>

            {/* Credit Card Option */}
            <div 
              className={`border-2 rounded-xl p-4 cursor-pointer transition-all ${
                selectedPaymentMethod === 'card' 
                  ? 'border-purple-500 bg-purple-50' 
                  : 'border-gray-300 hover:border-purple-300'
              }`}
              onClick={() => setSelectedPaymentMethod('card')}
            >
              <div className="flex items-center">
                <div className="w-10 h-10 bg-purple-100 rounded-lg flex items-center justify-center mr-3">
                  <span className="text-purple-600 font-bold text-sm">Card</span>
                </div>
                <div>
                  <h3 className="font-semibold text-gray-900">Credit/Debit Card</h3>
                  <p className="text-sm text-gray-600">Secure card payment</p>
                </div>
              </div>
              {selectedPaymentMethod === 'card' && (
                <div className="mt-3 p-3 bg-purple-100 rounded-lg">
                  <p className="text-sm text-purple-700">
                    Enter your card details securely
                  </p>
                </div>
              )}
            </div>
          </div>

          <div className="flex space-x-4">
            <button
              onClick={() => {
                setShowPaymentModal(false);
                setSelectedPaymentMethod('');
              }}
              className="flex-1 py-3 px-4 border border-gray-300 text-gray-700 font-medium rounded-xl transition-colors hover:bg-gray-50"
            >
              Cancel
            </button>
            <button
              onClick={() => handlePayment(selectedPaymentMethod)}
              disabled={!selectedPaymentMethod || isSubmitting}
              className="flex-1 py-3 px-4 bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-white font-medium rounded-xl transition-all disabled:opacity-70"
            >
              {isSubmitting ? (
                <>
                  <svg className="animate-spin -ml-1 mr-2 h-5 w-5 text-white inline" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                    <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                    <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                  </svg>
                  Processing...
                </>
              ) : (
                'Confirm Payment'
              )}
            </button>
          </div>
        </div>
      </div>
    );
  };

  return (
    <section id="booking" className="py-20 bg-gradient-to-br from-blue-50 to-indigo-50 relative overflow-hidden">
      {/* Background elements */}
      <div className="absolute top-0 right-0 w-1/4 h-1/4 bg-blue-100 rounded-full mix-blend-multiply filter blur-3xl opacity-30"></div>
      <div className="absolute bottom-0 left-0 w-1/3 h-1/3 bg-purple-100 rounded-full mix-blend-multiply filter blur-3xl opacity-30"></div>
      
      <div className="relative max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <span className="inline-block py-1.5 px-4 mb-4 text-sm font-semibold text-blue-700 bg-blue-100 rounded-full uppercase tracking-wide">
            Book Your Session
          </span>
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
            Schedule Your <span className="text-blue-600">Appointment</span>
          </h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Complete the form below to request your counseling session. We'll confirm your appointment shortly.
          </p>
        </div>

        <div className="bg-white rounded-2xl shadow-2xl overflow-hidden">
          {/* Form header */}
          <div className="bg-gradient-to-r from-blue-600 to-purple-600 p-6 text-white">
            <h3 className="text-2xl font-bold mb-2">Session Booking</h3>
            <p className="opacity-90">Note: Payment must be completed to confirm your booking</p>
          </div>

          <form onSubmit={handleSubmit} className="p-6 md:p-8" noValidate>
            {/* Success/Error Messages */}
            {submitMessage && !showPaymentModal && (
              <div className={`p-6 rounded-xl mb-6 text-center ${
                submitMessage.includes('successfully') ? 'bg-green-50 border border-green-200 text-green-700' : 
                submitMessage.includes('Error') ? 'bg-red-50 border border-red-200 text-red-700' :
                'bg-blue-50 border border-blue-200 text-blue-700'
              }`}>
                {submitMessage.includes('successfully') ? (
                  <svg className="w-12 h-12 mx-auto mb-4 text-green-500" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                ) : submitMessage.includes('Error') ? (
                  <svg className="w-12 h-12 mx-auto mb-4 text-red-500" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 14l2-2m0 0l2-2m-2 2l-2-2m2 2l2 2m7-2a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                ) : null}
                <p className="text-lg font-medium">{submitMessage}</p>
                {bookingRef && (
                  <div className="mt-4 p-3 bg-green-100 rounded-lg">
                    <p className="text-sm text-green-700">Booking Reference: {bookingRef}</p>
                  </div>
                )}
                {submitMessage.includes('successfully') && !showPaymentModal && (
                  <button 
                    type="button" 
                    onClick={() => setSubmitMessage('')}
                    className="mt-4 px-6 py-2 bg-green-600 hover:bg-green-700 text-white rounded-lg transition-colors"
                  >
                    Book Another Session
                  </button>
                )}
              </div>
            )}

            {/* Booking Form */}
            <div className="grid md:grid-cols-2 gap-6">
              {/* Left column */}
              <div className="space-y-6">
                <div>
                  <label htmlFor="fullName" className="block text-sm font-medium text-gray-700 mb-2">
                    Full Name *
                  </label>
                  <input
                    type="text"
                    id="fullName"
                    name="fullName"
                    value={values.fullName}
                    onChange={handleChange}
                    className={`w-full px-4 py-3 border rounded-xl focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition-all ${
                      formErrors.fullName ? 'border-red-300' : 'border-gray-300'
                    }`}
                    placeholder="Your full name"
                  />
                  {formErrors.fullName && (
                    <p className="text-red-500 text-sm mt-1">{formErrors.fullName}</p>
                  )}
                </div>

                <div>
                  <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-2">
                    Email Address *
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    value={values.email}
                    onChange={handleChange}
                    className={`w-full px-4 py-3 border rounded-xl focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition-all ${
                      formErrors.email ? 'border-red-300' : 'border-gray-300'
                    }`}
                    placeholder="your.email@example.com"
                  />
                  {formErrors.email && (
                    <p className="text-red-500 text-sm mt-1">{formErrors.email}</p>
                  )}
                </div>

                <div>
                  <label htmlFor="service" className="block text-sm font-medium text-gray-700 mb-2">
                    Select Service *
                  </label>
                  <select
                    id="service"
                    name="service"
                    value={values.service}
                    onChange={handleServiceChange}
                    className={`w-full px-4 py-3 border rounded-xl focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition-all appearance-none bg-white ${
                      formErrors.service ? 'border-red-300' : 'border-gray-300'
                    }`}
                  >
                    {services.map((option) => (
                      <option 
                        key={option.value} 
                        value={option.value}
                        disabled={option.disabled || false}
                      >
                        {option.label}
                      </option>
                    ))}
                  </select>
                  {formErrors.service && (
                    <p className="text-red-500 text-sm mt-1">{formErrors.service}</p>
                  )}
                  {values.service && !formErrors.service && values.service !== '' && (
                    <p className="text-green-600 text-sm mt-2">
                      Selected: {services.find(s => s.value === values.service)?.label}
                    </p>
                  )}
                </div>
              </div>

              {/* Right column */}
              <div className="space-y-6">
                <div>
                  <label htmlFor="date" className="block text-sm font-medium text-gray-700 mb-2">
                    Preferred Date *
                  </label>
                  <input
                    type="date"
                    id="date"
                    name="date"
                    value={values.date}
                    onChange={handleChange}
                    className={`w-full px-4 py-3 border rounded-xl focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition-all ${
                      formErrors.date ? 'border-red-300' : 'border-gray-300'
                    }`}
                    min={new Date().toISOString().split('T')[0]}
                  />
                  {formErrors.date && (
                    <p className="text-red-500 text-sm mt-1">{formErrors.date}</p>
                  )}
                </div>

                <div>
                  <label htmlFor="time" className="block text-sm font-medium text-gray-700 mb-2">
                    Preferred Time *
                  </label>
                  <select
                    id="time"
                    name="time"
                    value={values.time}
                    onChange={handleChange}
                    className={`w-full px-4 py-3 border rounded-xl focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition-all appearance-none bg-white ${
                      formErrors.time ? 'border-red-300' : 'border-gray-300'
                    }`}
                  >
                    <option value="">Select time</option>
                    <option value="09:00">9:00 AM</option>
                    <option value="10:00">10:00 AM</option>
                    <option value="11:00">11:00 AM</option>
                    <option value="13:00">1:00 PM</option>
                    <option value="14:00">2:00 PM</option>
                    <option value="15:00">3:00 PM</option>
                    <option value="16:00">4:00 PM</option>
                    <option value="17:00">5:00 PM</option>
                  </select>
                  {formErrors.time && (
                    <p className="text-red-500 text-sm mt-1">{formErrors.time}</p>
                  )}
                </div>

                <div>
                  <label htmlFor="amount" className="block text-sm font-medium text-gray-700 mb-2">
                    Session Fee (USD) *
                  </label>
                  <div className="relative">
                    <span className="absolute left-4 top-1/2 transform -translate-y-1/2 text-gray-500">$</span>
                    <input
                      type="number"
                      id="amount"
                      name="amount"
                      value={values.amount}
                      onChange={handleAmountChange}
                      onFocus={handleAmountFocus}
                      className={`w-full pl-8 pr-4 py-3 border rounded-xl focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition-all ${
                        formErrors.amount ? 'border-red-300' : 'border-gray-300'
                      }`}
                      placeholder="Enter amount"
                      min="1"
                      step="0.01"
                    />
                  </div>
                  {formErrors.amount && (
                    <p className="text-red-500 text-sm mt-1">{formErrors.amount}</p>
                  )}
                  {selectedService && !isCustomAmount && !formErrors.amount && values.amount && (
                    <p className="text-green-600 text-sm mt-2">
                      Standard rate for {services.find(s => s.value === selectedService)?.label}
                    </p>
                  )}
                  {isCustomAmount && !formErrors.amount && (
                    <p className="text-blue-600 text-sm mt-2">
                      Custom amount entered
                    </p>
                  )}
                  <div className="text-xs text-gray-500 mt-2">
                    <p>Standard rates:</p>
                    <ul className="list-disc list-inside">
                      <li>Individual Therapy: $120</li>
                      <li>Couples Counseling: $150</li>
                      <li>Family Therapy: $180</li>
                      <li>Child & Adolescent: $130</li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>

            {/* Additional Notes */}
            <div className="mt-8">
              <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-2">
                Additional Notes (Optional)
              </label>
              <textarea
                id="message"
                name="message"
                rows={3}
                value={values.message}
                onChange={handleChange}
                className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition-all"
                placeholder="Any specific concerns or preferences for your session..."
              ></textarea>
            </div>

            {/* Important Information */}
            <div className="mt-8 bg-blue-50 p-6 rounded-xl border border-blue-200">
              <h4 className="font-semibold text-blue-800 mb-2 flex items-center">
                <svg className="w-5 h-5 mr-2" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                  <path fillRule="evenodd" d="M18 10a8 8 0 11-16 0 8 8 0 0118 0zm-7-4a1 1 0 11-2 0 1 1 0 012 0zM9 9a1 1 0 000 2v3a1 1 0 001 1h1a1 1 0 100-2h-1V9z" clipRule="evenodd" />
                </svg>
                Important Information
              </h4>
              <ul className="text-sm text-blue-700 space-y-1">
                <li>• Your appointment will be confirmed within 24 hours</li>
                <li>• Payment is required to secure your booking</li>
                <li>• 24-hour cancellation notice required for rescheduling</li>
                <li>• Sessions are 50 minutes long</li>
                <li>• Sliding scale fees available for those with financial constraints</li>
              </ul>
            </div>

            {/* Submit Button */}
            <button
              type="submit"
              disabled={isSubmitting}
              className="w-full mt-8 py-4 bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-white font-semibold rounded-xl transition-all duration-300 transform hover:-translate-y-0.5 disabled:opacity-70 disabled:hover:transform-none flex items-center justify-center"
            >
              {isSubmitting ? (
                <>
                  <svg className="animate-spin -ml-1 mr-3 h-5 w-5 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                    <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                    <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                  </svg>
                  Processing Your Request...
                </>
              ) : (
                'Request Appointment & Proceed to Payment'
              )}
            </button>
          </form>
        </div>
      </div>

      {/* Payment Modal */}
      <PaymentModal />
    </section>
  )
}

export default BookingForm