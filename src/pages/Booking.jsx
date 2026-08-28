import { ArrowLeft, ArrowUpRight, Disc3 } from 'lucide-react'
import { Link } from 'react-router-dom'
import { motion } from 'framer-motion'
import '../styles.css'

function Booking() {
  return (
    <main className="inquiry-page">
      <header className="inquiry-nav">
        <Link className="brand" to="/">
          MOJOY
          <span>RECORDS</span>
        </Link>

        <Link className="return-link" to="/">
          <ArrowLeft size={16} />
          Return Home
        </Link>
      </header>

      <section className="inquiry-hero">
        <div className="inquiry-index">
          05 / CONTACT
        </div>

        <motion.div
          className="inquiry-heading"
          initial={{ opacity: 0, y: 45 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{
            duration: 0.8,
            ease: [0.22, 1, 0.36, 1],
          }}
        >
          <span className="small-label">
            Mojoy Records / Detroit
          </span>

          <h1>
            Let’s make
            <em>something</em>
            happen.
          </h1>
        </motion.div>

        <div className="inquiry-side-copy">
          <p>
            Management inquiries, bookings, appearances,
            partnerships and physical music orders.
          </p>

          <span>
            DETROIT, MICHIGAN
          </span>
        </div>
      </section>

      <section className="inquiry-body">
        <div className="inquiry-selector">
          <span>SELECT YOUR INQUIRY</span>

          <div className="selector-options">
            <button className="active">
              Management
            </button>

            <button>
              Booking
            </button>

            <button>
              CD Order
            </button>

            <button>
              Partnership
            </button>
          </div>
        </div>

        <form
          className="mojoy-form"
          onSubmit={(e) => e.preventDefault()}
        >
          <div className="form-row">
            <label>
              <span>01</span>
              Your Name
              <input
                type="text"
                placeholder="Enter your full name"
              />
            </label>

            <label>
              <span>02</span>
              Email Address
              <input
                type="email"
                placeholder="name@email.com"
              />
            </label>
          </div>

          <div className="form-row">
            <label>
              <span>03</span>
              Phone
              <input
                type="tel"
                placeholder="(000) 000-0000"
              />
            </label>

            <label>
              <span>04</span>
              Inquiry Type
              <select defaultValue="">
                <option value="" disabled>
                  Select inquiry
                </option>

                <option>Artist Booking</option>
                <option>Management</option>
                <option>Event / Appearance</option>
                <option>CD Order</option>
                <option>Media / Interview</option>
                <option>Business Partnership</option>
                <option>General Inquiry</option>
              </select>
            </label>
          </div>

          <label className="message-field">
            <span>05</span>
            Tell Us More

            <textarea
              rows="5"
              placeholder="Tell the Mojoy Records team about your inquiry..."
            />
          </label>

          <button className="submit-inquiry" type="submit">
            <span>Send Inquiry</span>
            <ArrowUpRight size={22} />
          </button>
        </form>

        <aside className="physical-order-note">
          <Disc3 size={31} strokeWidth={1.3} />

          <div>
            <span className="small-label">
              Physical Editions
            </span>

            <h2>
              Looking for
              <br />
              a CD?
            </h2>

            <p>
              Select releases from the Mojoy Records catalog
              remain available as physical copies.
            </p>

            <p className="order-instruction">
              Choose <strong>CD Order</strong> in the inquiry
              form and include the release name and desired
              quantity.
            </p>
          </div>
        </aside>
      </section>

      <footer className="inquiry-footer">
        <div>
          <span>MOJOY RECORDS</span>
          <span>DETROIT / MICHIGAN</span>
        </div>

        <div>
          <span>INDEPENDENT MUSIC</span>
          <span>© 2026</span>
        </div>
      </footer>
    </main>
  )
}

export default Booking