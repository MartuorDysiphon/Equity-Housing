import React from 'react';
import { useForm } from 'react-hook-form';
import './contact.css';

const Contact = () => {
  const { register, handleSubmit, formState: { errors }, reset } = useForm();

  const onSubmit = async (data) => {
    try {
      const response = await fetch('https://formspree.io/f/xeordaly', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          ...data,
          _subject: `New Accommodation Request from ${data.fullName}`,
        }),
      });

      if (response.ok) {
        alert('Thank you! Your accommodation request has been submitted. We will contact you shortly.');
        reset();
      } else {
        alert('There was an error submitting your request. Please try again.');
      }
    } catch (error) {
      console.error('Form submission error:', error);
      alert('There was an error submitting your request. Please try again.');
    }
  };

  const universities = [
    'University of Free State',
    'Central University of Technology', 
    'Private Universities'
  ];

  return (
    <div className="compact-contact">
      <div className="compact-container">
        <div className="compact-header">
          <h1>Contact Us</h1>
          <p>Your Partner in Quality Accommodation</p>
        </div>

        <div className="compact-content">
          <div className="compact-form-section">
            <form className="compact-form" onSubmit={handleSubmit(onSubmit)}>
              <div className="form-row">
                <div className="form-group compact">
                  <label htmlFor="fullName">Full Name *</label>
                  <input
                    id="fullName"
                    type="text"
                    {...register("fullName", { 
                      required: "Full name is required",
                      minLength: {
                        value: 2,
                        message: "Name must be at least 2 characters"
                      }
                    })}
                  />
                  {errors.fullName && (
                    <span className="error-message">{errors.fullName.message}</span>
                  )}
                </div>

                <div className="form-group compact">
                  <label htmlFor="email">Email *</label>
                  <input
                    id="email"
                    type="email"
                    {...register("email", { 
                      required: "Email is required",
                      pattern: {
                        value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
                        message: "Invalid email address"
                      }
                    })}
                  />
                  {errors.email && (
                    <span className="error-message">{errors.email.message}</span>
                  )}
                </div>
              </div>

              <div className="form-row">
                <div className="form-group compact">
                  <label htmlFor="phone">Phone *</label>
                  <input
                    id="phone"
                    type="tel"
                    {...register("phone", { 
                      required: "Phone number is required",
                      pattern: {
                        value: /^[+]?[0-9\s\-()]{10,}$/,
                        message: "Invalid phone number"
                      }
                    })}
                  />
                  {errors.phone && (
                    <span className="error-message">{errors.phone.message}</span>
                  )}
                </div>

                <div className="form-group compact">
                  <label htmlFor="university">University *</label>
                  <select
                    id="university"
                    {...register("university", { 
                      required: "Please select your university" 
                    })}
                  >
                    <option value="">Select University</option>
                    {universities.map(uni => (
                      <option key={uni} value={uni}>{uni}</option>
                    ))}
                  </select>
                  {errors.university && (
                    <span className="error-message">{errors.university.message}</span>
                  )}
                </div>
              </div>

              <div className="form-row">
                <div className="form-group compact">
                  <label htmlFor="moveInDate">Move-in Date *</label>
                  <input
                    id="moveInDate"
                    type="date"
                    {...register("moveInDate", { 
                      required: "Move-in date is required" 
                    })}
                  />
                  {errors.moveInDate && (
                    <span className="error-message">{errors.moveInDate.message}</span>
                  )}
                </div>

                <div className="form-group compact">
                  <label htmlFor="budget">Budget *</label>
                  <select
                    id="budget"
                    {...register("budget", { 
                      required: "Please select your budget" 
                    })}
                  >
                    <option value="">Select Budget</option>
                    <option value="4800-5500">Bursary Allocation</option>
                    <option value="4000-6000">R4,000 - R6,000</option>
                    <option value="6000-8000">R6,000 - R8,000</option>
                    <option value="8000+">R8,000+</option>
                  </select>
                  {errors.budget && (
                    <span className="error-message">{errors.budget.message}</span>
                  )}
                </div>
              </div>

              <div className="accommodation-compact">
                <label className="compact-label">Accommodation Type *</label>
                <div className="option-row">
                  <label className="compact-option">
                    <input
                      type="radio"
                      value="single-room"
                      {...register("accommodationType", { 
                        required: "Please select accommodation type" 
                      })}
                    />
                    <div className="option-box">
                      <span className="option-icon">🛏️</span>
                      <span className="option-text">Single Room</span>
                    </div>
                  </label>

                  <label className="compact-option">
                    <input
                      type="radio"
                      value="sharing"
                      {...register("accommodationType")}
                    />
                    <div className="option-box">
                      <span className="option-icon">👥</span>
                      <span className="option-text">Sharing</span>
                    </div>
                  </label>
                </div>
                {errors.accommodationType && (
                  <span className="error-message">{errors.accommodationType.message}</span>
                )}
              </div>

              <div className="form-row">
                <div className="form-group compact full">
                  <label htmlFor="duration">Lease Duration *</label>
                  <select
                    id="duration"
                    {...register("duration", { 
                      required: "Please select lease duration" 
                    })}
                  >
                    <option value="">Select Duration</option>
                    <option value="6-months">6 Months</option>
                    <option value="12-months">12 Months</option>
                  </select>
                  {errors.duration && (
                    <span className="error-message">{errors.duration.message}</span>
                  )}
                </div>
              </div>

              <div className="form-group compact full">
                <label htmlFor="message">Additional Requirements</label>
                <textarea
                  id="message"
                  rows="3"
                  {...register("message")}
                  placeholder="Any specific requirements? (WiFi, parking, study desk, etc.)"
                ></textarea>
              </div>

              <button type="submit" className="compact-submit">
                Submit Request
              </button>
            </form>
          </div>

          <div className="compact-sidebar">
            <div className="sidebar-header">
              <h3>Quick Contact</h3>
            </div>
            
            <div className="contact-info-compact">
              <div className="contact-item">
                <span className="contact-icon">📞</span>
                <div>
                  <div className="contact-main">+27 82 580 8046</div>
                  <div className="contact-note">Mon-Fri, 8AM-5PM</div>
                </div>
              </div>

              <div className="contact-item">
                <span className="contact-icon">✉️</span>
                <div>
                  <div className="contact-main">info@equityhousing.co.za</div>
                  <div className="contact-note">Fast response</div>
                </div>
              </div>

              <div className="contact-item">
                <span className="contact-icon">💬</span>
                <div>
                  <div className="contact-main">WhatsApp</div>
                  <div className="contact-note">Instant help</div>
                </div>
              </div>
            </div>

            <div className="features-list">
              <h4>What's Included</h4>
              <div className="feature-item">✓ WiFi & Utilities</div>
              <div className="feature-item">✓ 24/7 Security</div>
              <div className="feature-item">✓ Furnished Rooms</div>
              <div className="feature-item">✓ Maintenance</div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;