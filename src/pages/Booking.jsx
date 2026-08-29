import { useState } from 'react'
import { ArrowRight, Mail, Phone } from 'lucide-react'
import Navbar from '../components/Navbar'
import '../styles.css'

function Booking() {
  const [inquiryType, setInquiryType] = useState('Management')

  return (
    <main className="simple-contact-page">
      <Navbar active="booking" />

      <section className="simple-contact">
        <div className="simple-contact-header">
          <span>CONTACT / MOJOY RECORDS</span>

          <h1>CONTACT MOJOY RECORDS</h1>

          <p>
            For management, bookings, appearances, A&R,
            media inquiries and physical music orders.
          </p>
        </div>

        <div className="simple-contact-layout">
          <aside className="simple-contact-info">
            <div>
              <span>EMAIL</span>

              <a href="mailto:mojoyrecords@gmail.com">
                <Mail size={17} />
                mojoyrecords@gmail.com
              </a>
            </div>

            <div>
              <span>PHONE</span>

              <a href="tel:2488362668">
                <Phone size={17} />
                (248) 836-2668
              </a>
            </div>

            <div className="simple-contact-location">
              <span>LOCATION</span>

              <p>Detroit, Michigan</p>
            </div>
          </aside>

          <form
            className="simple-contact-form"
            onSubmit={(event) => event.preventDefault()}
          >
            <div className="simple-form-row">
              <label>
                Name

                <input
                  type="text"
                  placeholder="Your full name"
                  required
                />
              </label>

              <label>
                Email

                <input
                  type="email"
                  placeholder="name@email.com"
                  required
                />
              </label>
            </div>

            <div className="simple-form-row">
              <label>
                Phone

                <input
                  type="tel"
                  placeholder="(000) 000-0000"
                />
              </label>

              <label>
                Inquiry Type

                <select
                  value={inquiryType}
                  onChange={(event) =>
                    setInquiryType(event.target.value)
                  }
                >
                  <option>Management</option>
                  <option>Artist Booking</option>
                  <option>Event / Appearance</option>
                  <option>CD Order</option>
                  <option>Media / Interview</option>
                  <option>A&R</option>
                  <option>General Inquiry</option>
                </select>
              </label>
            </div>

            <label className="simple-message-field">
              Message

              <textarea
                rows="7"
                placeholder={
                  inquiryType === 'CD Order'
                    ? 'Include the release title, quantity and any other order details...'
                    : 'Tell us about your inquiry...'
                }
                required
              />
            </label>

            <button
              type="submit"
              className="simple-contact-submit"
            >
              SEND INQUIRY
              <ArrowRight size={19} />
            </button>

            <p className="simple-contact-note">
              For CD orders, select “CD Order” and include the
              release title and desired quantity.
            </p>
          </form>
        </div>
      </section>
    </main>
  )
}

export default Booking