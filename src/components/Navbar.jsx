import { useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import { AnimatePresence, motion } from 'framer-motion'
import {
  Menu,
  ShoppingBag,
  X,
} from 'lucide-react'

function Navbar({ active = '' }) {
  const [menuOpen, setMenuOpen] = useState(false)
  const navigate = useNavigate()

  const goHomeSection = (id) => {
    setMenuOpen(false)

    navigate('/')

    setTimeout(() => {
      const element = document.getElementById(id)

      if (element) {
        element.scrollIntoView({
          behavior: 'smooth',
          block: 'start',
        })
      }
    }, 100)
  }

  const navItemClass = (name) =>
    active === name ? 'shared-nav-active' : ''

  return (
    <header className="shared-navbar">
      <div className="shared-navbar-top">
        <Link
          className="shared-logo"
          to="/"
          onClick={() => setMenuOpen(false)}
        >
          <strong>MOJOY</strong>
          <span>RECORDS</span>
        </Link>

        <div className="shared-navbar-tagline">
          INDEPENDENT MUSIC / DETROIT, MICHIGAN
        </div>

        <div className="shared-navbar-actions">
          <Link
            className="shared-order-link"
            to="/booking"
          >
            <ShoppingBag size={18} />
            ORDER CDS
          </Link>

          <button
            className="shared-menu-toggle"
            onClick={() => setMenuOpen((current) => !current)}
            aria-label="Toggle navigation"
          >
            {menuOpen ? (
              <X size={24} />
            ) : (
              <Menu size={24} />
            )}
          </button>
        </div>
      </div>

      <nav className="shared-desktop-nav">
        <button
          className={navItemClass('music')}
          onClick={() => goHomeSection('releases')}
        >
          [ MUSIC ]
        </button>

        <button
          className={navItemClass('catalog')}
          onClick={() => goHomeSection('catalog')}
        >
          [ CATALOG ]
        </button>

        <button
          className={navItemClass('physical')}
          onClick={() => goHomeSection('physical')}
        >
          [ PHYSICAL ]
        </button>

        <Link
          className={navItemClass('about')}
          to="/about"
        >
          [ ABOUT ]
        </Link>

        <Link
          className={navItemClass('booking')}
          to="/booking"
        >
          [ BOOKING ]
        </Link>
      </nav>

      <AnimatePresence>
        {menuOpen && (
          <motion.nav
            className="shared-mobile-nav"
            initial={{
              opacity: 0,
              height: 0,
            }}
            animate={{
              opacity: 1,
              height: 'auto',
            }}
            exit={{
              opacity: 0,
              height: 0,
            }}
          >
            <button
              onClick={() => goHomeSection('releases')}
            >
              Music
            </button>

            <button
              onClick={() => goHomeSection('catalog')}
            >
              Catalog
            </button>

            <button
              onClick={() => goHomeSection('physical')}
            >
              Physical
            </button>

            <Link
              to="/about"
              onClick={() => setMenuOpen(false)}
            >
              About
            </Link>

            <Link
              to="/booking"
              onClick={() => setMenuOpen(false)}
            >
              Booking
            </Link>
          </motion.nav>
        )}
      </AnimatePresence>
    </header>
  )
}

export default Navbar