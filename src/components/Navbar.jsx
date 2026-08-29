import { useEffect, useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import {
  AnimatePresence,
  motion,
} from 'framer-motion'
import {
  Menu,
  X,
} from 'lucide-react'

const logoSrc =
  `${import.meta.env.BASE_URL}images/branding/mojoy-logo.png`

function Navbar({ active = '' }) {
  const [menuOpen, setMenuOpen] = useState(false)
  const navigate = useNavigate()

  useEffect(() => {
    if (menuOpen) {
      document.body.style.overflow = 'hidden'
    } else {
      document.body.style.overflow = ''
    }

    return () => {
      document.body.style.overflow = ''
    }
  }, [menuOpen])

  const closeMenu = () => {
    setMenuOpen(false)
  }

  const goHomeSection = (id) => {
    closeMenu()
    navigate('/')

    setTimeout(() => {
      const element = document.getElementById(id)

      if (element) {
        element.scrollIntoView({
          behavior: 'smooth',
          block: 'start',
        })
      }
    }, 180)
  }

  const navItemClass = (name) =>
    active === name
      ? 'shared-nav-active'
      : ''

  return (
    <>
      <header className="shared-navbar">
        <div className="shared-navbar-top">
          <Link
            className="shared-logo"
            to="/"
            onClick={closeMenu}
            aria-label="Mojoy Records home"
          >
            <img
              src={logoSrc}
              alt="Mojoy Records"
              className="shared-logo-image"
            />
          </Link>

          <div className="shared-navbar-tagline">
            INDEPENDENT MUSIC / DETROIT, MICHIGAN
          </div>

          <div className="shared-navbar-actions">
            <Link
              className="shared-order-link"
              to="/booking"
            >
              ORDER CDS
            </Link>

            <button
              type="button"
              className="shared-menu-toggle"
              onClick={() => setMenuOpen(true)}
              aria-label="Open navigation"
              aria-expanded={menuOpen}
            >
              <Menu size={25} />
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
      </header>

      <AnimatePresence>
        {menuOpen && (
          <>
            <motion.button
              type="button"
              className="mobile-menu-backdrop"
              aria-label="Close navigation"
              onClick={closeMenu}
              initial={{
                opacity: 0,
              }}
              animate={{
                opacity: 1,
              }}
              exit={{
                opacity: 0,
              }}
              transition={{
                duration: 0.25,
              }}
            />

            <motion.aside
              className="mobile-menu-drawer"
              initial={{
                x: '100%',
              }}
              animate={{
                x: 0,
              }}
              exit={{
                x: '100%',
              }}
              transition={{
                duration: 0.42,
                ease: [0.22, 1, 0.36, 1],
              }}
            >
              <div className="mobile-menu-header">
                <div className="mobile-menu-brand">
                  <span>MOJOY RECORDS</span>
                  <small>DETROIT / MICHIGAN</small>
                </div>

                <button
                  type="button"
                  className="mobile-menu-close"
                  onClick={closeMenu}
                  aria-label="Close navigation"
                >
                  <X size={25} />
                </button>
              </div>

              <div className="mobile-menu-links">
                <button
                  type="button"
                  onClick={() => goHomeSection('releases')}
                >
                  <span>01</span>
                  MUSIC
                </button>

                <button
                  type="button"
                  onClick={() => goHomeSection('catalog')}
                >
                  <span>02</span>
                  CATALOG
                </button>

                <button
                  type="button"
                  onClick={() => goHomeSection('physical')}
                >
                  <span>03</span>
                  PHYSICAL
                </button>

                <Link
                  to="/about"
                  onClick={closeMenu}
                >
                  <span>04</span>
                  ABOUT
                </Link>

                <Link
                  to="/booking"
                  onClick={closeMenu}
                >
                  <span>05</span>
                  BOOKING
                </Link>
              </div>

              <div className="mobile-menu-bottom">
                <p>
                  MUSIC / PHYSICAL RELEASES /
                  MANAGEMENT
                </p>

                <Link
                  to="/booking"
                  onClick={closeMenu}
                  className="mobile-order-button"
                >
                  ORDER CDS
                </Link>

                <div className="mobile-menu-location">
                  DETROIT, MICHIGAN
                </div>
              </div>
            </motion.aside>
          </>
        )}
      </AnimatePresence>
    </>
  )
}

export default Navbar