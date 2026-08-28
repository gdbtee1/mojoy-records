import { useState } from 'react'
import { Link } from 'react-router-dom'
import { AnimatePresence, motion } from 'framer-motion'
import {
  ArrowRight,
  ArrowUpRight,
  Menu,
  ShoppingBag,
  X,
} from 'lucide-react'
import '../styles.css'

const releases = [
  {
    id: '01',
    title: 'Sunrise Lake View',
    artist: 'Phillip Brooks',
    type: 'Album',
    year: '2026',
    link: 'https://unitedmasters.com/m/sunrise-lake-view',
    image:
      'https://images.unsplash.com/photo-1493225457124-a3eb161ffa5f?auto=format&fit=crop&w=1200&q=90',
  },
  {
    id: '02',
    title: 'Catalog Release II',
    artist: 'Mojoy Records',
    type: 'Release',
    year: '',
    link: 'https://unitedmasters.com/m/61d345766ac7de52bcafa8a0',
    image:
      'https://images.unsplash.com/photo-1619983081563-430f63602796?auto=format&fit=crop&w=1200&q=90',
  },
  {
    id: '03',
    title: 'Catalog Release III',
    artist: 'Mojoy Records',
    type: 'Release',
    year: '',
    link: 'https://unitedmasters.com/m/616deb8383332608d2f4ceca',
    image:
      'https://images.unsplash.com/photo-1483412033650-1015ddeb83d1?auto=format&fit=crop&w=1200&q=90',
  },
  {
    id: '04',
    title: 'Catalog Release IV',
    artist: 'Mojoy Records',
    type: 'Release',
    year: '',
    link: 'https://unitedmasters.com/m/6138fa516b55ac78412c4c34',
    image:
      'https://images.unsplash.com/photo-1524368535928-5b5e00ddc76b?auto=format&fit=crop&w=1200&q=90',
  },
  {
    id: '05',
    title: 'Catalog Release V',
    artist: 'Mojoy Records',
    type: 'Release',
    year: '',
    link: 'https://unitedmasters.com/m/6138dd0799d5e617f836ffea',
    image:
      'https://images.unsplash.com/photo-1524650359799-842906ca1c06?auto=format&fit=crop&w=1200&q=90',
  },
  {
    id: '06',
    title: 'Catalog Release VI',
    artist: 'Mojoy Records',
    type: 'Release',
    year: '',
    link: 'https://unitedmasters.com/m/61b8bfd286f548540905db4c',
    image:
      'https://images.unsplash.com/photo-1516280440614-37939bbacd81?auto=format&fit=crop&w=1200&q=90',
  },
]

const featured = releases[0]

function SectionHeader({ kicker, title, linkLabel = 'View all' }) {
  return (
    <div className="section-heading">
      <div>
        <span className="section-kicker">{kicker}</span>
        <h2>{title}</h2>
      </div>

      <a className="section-view-link" href="#catalog">
        {linkLabel}
        <ArrowUpRight size={17} />
      </a>
    </div>
  )
}

function ReleaseCard({ release }) {
  return (
    <motion.article
      className="release-card"
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: '-70px' }}
      transition={{ duration: 0.45 }}
    >
      <a
        className="release-card-image"
        href={release.link}
        target="_blank"
        rel="noreferrer"
      >
        <img src={release.image} alt={release.title} />

        <span className="release-card-action">
          Listen
          <ArrowUpRight size={19} />
        </span>
      </a>

      <div className="release-card-meta">
        <span>{release.id}</span>

        <div>
          <strong>{release.artist}</strong>
          <h3>{release.title}</h3>
          <p>
            {release.type}
            {release.year ? ` / ${release.year}` : ''}
          </p>
        </div>
      </div>
    </motion.article>
  )
}

function Home() {
  const [menuOpen, setMenuOpen] = useState(false)

  return (
    <main className="site-shell">
      <header className="site-header">
        <div className="header-top">
          <Link className="mojoy-logo" to="/">
            <strong>MOJOY</strong>
            <span>RECORDS</span>
          </Link>

          <p className="header-center-copy">
            INDEPENDENT MUSIC / DETROIT, MICHIGAN
          </p>

          <div className="header-actions">
            <Link className="order-link" to="/booking">
              <ShoppingBag size={18} />
              ORDER CDS
            </Link>

            <button
              className="menu-toggle"
              onClick={() => setMenuOpen((value) => !value)}
              aria-label="Toggle navigation"
            >
              {menuOpen ? <X /> : <Menu />}
            </button>
          </div>
        </div>

        <nav className="desktop-nav">
          <a href="#releases">[ MUSIC ]</a>
          <a href="#catalog">[ CATALOG ]</a>
          <a href="#physical">[ PHYSICAL ]</a>
          <a href="#legacy">[ ABOUT ]</a>
          <Link to="/booking">[ BOOKING ]</Link>
        </nav>

        <AnimatePresence>
          {menuOpen && (
            <motion.nav
              className="mobile-nav"
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: 'auto' }}
              exit={{ opacity: 0, height: 0 }}
            >
              <a href="#releases" onClick={() => setMenuOpen(false)}>
                Music
              </a>
              <a href="#catalog" onClick={() => setMenuOpen(false)}>
                Catalog
              </a>
              <a href="#physical" onClick={() => setMenuOpen(false)}>
                Physical
              </a>
              <a href="#legacy" onClick={() => setMenuOpen(false)}>
                About
              </a>
              <Link to="/booking" onClick={() => setMenuOpen(false)}>
                Booking
              </Link>
            </motion.nav>
          )}
        </AnimatePresence>
      </header>

      <section className="campaign-hero">
        <div className="campaign-image">
          <img
            src="https://images.unsplash.com/photo-1501386761578-eac5c94b800a?auto=format&fit=crop&w=1800&q=90"
            alt="Live music performance"
          />

          <div className="campaign-shade" />
        </div>

        <div className="campaign-content">
          <span>MOJOY RECORDS / DETROIT</span>

          <h1>
            FOUR DECADES
            <br />
            OF INDEPENDENT
            <br />
            MUSIC.
          </h1>

          <p>
            A Detroit-rooted record label carrying its catalog, physical
            releases and independent legacy forward.
          </p>

          <a
            href={featured.link}
            target="_blank"
            rel="noreferrer"
            className="campaign-button"
          >
            Listen to the catalog
            <ArrowRight size={20} />
          </a>
        </div>

        <div className="campaign-stamp">
          <strong>40</strong>
          <span>YEARS</span>
          <small>INDEPENDENT</small>
        </div>
      </section>

      <section className="release-section" id="releases">
        <SectionHeader kicker="01 / CURRENT" title="LATEST RELEASES" />

        <div className="release-grid">
          {releases.slice(0, 4).map((release) => (
            <ReleaseCard key={release.id} release={release} />
          ))}
        </div>
      </section>

      <section className="promo-grid">
        <a
          href={featured.link}
          target="_blank"
          rel="noreferrer"
          className="promo-panel promo-featured"
        >
          <img
            src={featured.image}
            alt={featured.title}
          />

          <div className="promo-overlay" />

          <div className="promo-content">
            <span>FEATURED RELEASE</span>
            <h2>SUNRISE<br />LAKE VIEW</h2>
            <p>PHILLIP BROOKS</p>

            <div className="promo-cta">
              Listen now
              <ArrowUpRight />
            </div>
          </div>
        </a>

        <Link className="promo-panel promo-physical" to="/booking">
          <img
            src="https://images.unsplash.com/photo-1539375665275-f9de415ef9ac?auto=format&fit=crop&w=1400&q=90"
            alt="Physical music"
          />

          <div className="promo-overlay" />

          <div className="promo-content">
            <span>PHYSICAL EDITIONS</span>
            <h2>THE CD<br />SHOP</h2>
            <p>SELECT RELEASES AVAILABLE</p>

            <div className="promo-cta">
              Order now
              <ArrowUpRight />
            </div>
          </div>
        </Link>
      </section>

      <section className="catalog-section" id="catalog">
        <SectionHeader
          kicker="02 / ARCHIVE"
          title="THE MOJOY CATALOG"
          linkLabel="Listen all"
        />

        <div className="catalog-grid">
          {releases.map((release) => (
            <ReleaseCard key={release.id} release={release} />
          ))}
        </div>
      </section>

      <section className="legacy-banner" id="legacy">
        <div className="legacy-number">40</div>

        <div className="legacy-copy">
          <span>DETROIT / MICHIGAN</span>

          <h2>
            FOUR DECADES.
            <br />
            STILL INDEPENDENT.
          </h2>

          <p>
            Mojoy Records has spent decades creating, preserving and sharing
            music while remaining rooted in independent ownership and
            Detroit culture.
          </p>

          <Link to="/booking">
            Connect with Mojoy
            <ArrowUpRight size={18} />
          </Link>
        </div>
      </section>

      <section className="physical-store" id="physical">
        <div className="physical-store-copy">
          <span>03 / PHYSICAL MUSIC</span>

          <h2>
            KEEP
            <br />
            THE MUSIC.
          </h2>

          <p>
            Select Mojoy releases remain available as physical CD copies.
            Request a release directly from the label.
          </p>

          <Link to="/booking" className="outlined-button">
            ORDER A CD
            <ArrowRight size={18} />
          </Link>
        </div>

        <div className="physical-store-image">
          <img
            src="https://images.unsplash.com/photo-1461360228754-6e81c478b882?auto=format&fit=crop&w=1500&q=90"
            alt="Music collection"
          />
        </div>
      </section>

      <section className="booking-strip">
        <div>
          <span>04 / MANAGEMENT</span>
          <h2>WORK WITH MOJOY.</h2>
        </div>

        <p>
          Bookings, appearances, media opportunities and professional
          partnerships.
        </p>

        <Link to="/booking">
          CONTACT MANAGEMENT
          <ArrowUpRight size={19} />
        </Link>
      </section>

      <footer className="site-footer">
        <div className="footer-logo">
          <strong>MOJOY</strong>
          <span>RECORDS</span>
        </div>

        <div className="footer-columns">
          <div>
            <span>EXPLORE</span>
            <a href="#releases">Music</a>
            <a href="#catalog">Catalog</a>
            <a href="#physical">Physical</a>
          </div>

          <div>
            <span>CONTACT</span>
            <Link to="/booking">Management</Link>
            <Link to="/booking">Bookings</Link>
            <Link to="/booking">CD Orders</Link>
          </div>
        </div>

        <div className="footer-bottom">
          <span>DETROIT, MICHIGAN</span>
          <span>© 2026 MOJOY RECORDS</span>
        </div>
      </footer>
    </main>
  )
}

export default Home