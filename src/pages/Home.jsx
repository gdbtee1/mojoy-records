import { Link } from 'react-router-dom'
import { motion } from 'framer-motion'
import {
  ArrowRight,
  ArrowUpRight,
} from 'lucide-react'
import Navbar from '../components/Navbar'
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

function scrollToSection(id) {
  const element = document.getElementById(id)

  if (element) {
    element.scrollIntoView({
      behavior: 'smooth',
      block: 'start',
    })
  }
}

function ScrollLink({
  target,
  children,
  className = '',
}) {
  return (
    <button
      type="button"
      className={`page-scroll-link ${className}`.trim()}
      onClick={() => scrollToSection(target)}
    >
      {children}
    </button>
  )
}

function SectionHeader({
  kicker,
  title,
  target = 'catalog',
  linkLabel = 'View all',
}) {
  return (
    <div className="section-heading">
      <div>
        <span className="section-kicker">
          {kicker}
        </span>

        <h2>{title}</h2>
      </div>

      <ScrollLink
        className="section-view-link"
        target={target}
      >
        {linkLabel}
        <ArrowUpRight size={17} />
      </ScrollLink>
    </div>
  )
}

function ReleaseCard({ release }) {
  return (
    <motion.article
      className="release-card"
      initial={{
        opacity: 0,
        y: 30,
      }}
      whileInView={{
        opacity: 1,
        y: 0,
      }}
      viewport={{
        once: true,
        margin: '-70px',
      }}
      transition={{
        duration: 0.45,
      }}
    >
      <a
        className="release-card-image"
        href={release.link}
        target="_blank"
        rel="noreferrer"
      >
        <img
          src={release.image}
          alt={release.title}
        />

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
            {release.year
              ? ` / ${release.year}`
              : ''}
          </p>
        </div>
      </div>
    </motion.article>
  )
}

function Home() {
  return (
    <main className="site-shell">
      <Navbar />

      <section className="campaign-hero">
        <div className="campaign-image">
          <img
            src="https://images.unsplash.com/photo-1501386761578-eac5c94b800a?auto=format&fit=crop&w=1800&q=90"
            alt="Live music performance"
          />

          <div className="campaign-shade" />
        </div>

        <div className="campaign-content">
          <span>
            MOJOY RECORDS / DETROIT
          </span>

          <h1>
            FOUR DECADES
            <br />
            OF INDEPENDENT
            <br />
            MUSIC.
          </h1>

          <p>
            A Detroit-rooted record label carrying its catalog,
            physical releases and independent legacy forward.
          </p>

          <ScrollLink
            target="releases"
            className="campaign-button"
          >
            Listen to the catalog
            <ArrowRight size={20} />
          </ScrollLink>
        </div>

        <div className="campaign-stamp">
          <strong>40</strong>
          <span>YEARS</span>
          <small>INDEPENDENT</small>
        </div>
      </section>

      <section
        className="release-section"
        id="releases"
      >
        <SectionHeader
          kicker="01 / CURRENT"
          title="LATEST RELEASES"
          target="catalog"
        />

        <div className="release-grid">
          {releases
            .slice(0, 4)
            .map((release) => (
              <ReleaseCard
                key={release.id}
                release={release}
              />
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
            <span>
              FEATURED RELEASE
            </span>

            <h2>
              SUNRISE
              <br />
              LAKE VIEW
            </h2>

            <p>
              PHILLIP BROOKS
            </p>

            <div className="promo-cta">
              Listen now
              <ArrowUpRight />
            </div>
          </div>
        </a>

        <Link
          className="promo-panel promo-physical"
          to="/booking"
        >
          <img
            src="https://images.unsplash.com/photo-1539375665275-f9de415ef9ac?auto=format&fit=crop&w=1400&q=90"
            alt="Physical music"
          />

          <div className="promo-overlay" />

          <div className="promo-content">
            <span>
              PHYSICAL EDITIONS
            </span>

            <h2>
              THE CD
              <br />
              SHOP
            </h2>

            <p>
              SELECT RELEASES AVAILABLE
            </p>

            <div className="promo-cta">
              Order now
              <ArrowUpRight />
            </div>
          </div>
        </Link>
      </section>

      <section
        className="catalog-section"
        id="catalog"
      >
        <SectionHeader
          kicker="02 / ARCHIVE"
          title="THE MOJOY CATALOG"
          target="releases"
          linkLabel="Back to latest"
        />

        <div className="catalog-grid">
          {releases.map((release) => (
            <ReleaseCard
              key={release.id}
              release={release}
            />
          ))}
        </div>
      </section>

      <section className="legacy-banner">
        <div className="legacy-number">
          40
        </div>

        <div className="legacy-copy">
          <span>
            DETROIT / MICHIGAN
          </span>

          <h2>
            FOUR DECADES.
            <br />
            STILL INDEPENDENT.
          </h2>

          <p>
            Mojoy Records has spent decades creating,
            preserving and sharing music while remaining
            rooted in independent ownership and Detroit
            culture.
          </p>

          <Link to="/about">
            DISCOVER OUR STORY
            <ArrowUpRight size={18} />
          </Link>
        </div>
      </section>

      <section
        className="physical-store"
        id="physical"
      >
        <div className="physical-store-copy">
          <span>
            03 / PHYSICAL MUSIC
          </span>

          <h2>
            KEEP
            <br />
            THE MUSIC.
          </h2>

          <p>
            Select Mojoy releases remain available as
            physical CD copies. Request a release directly
            from the label.
          </p>

          <Link
            to="/booking"
            className="outlined-button"
          >
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
          <span>
            04 / MANAGEMENT
          </span>

          <h2>
            WORK WITH MOJOY.
          </h2>
        </div>

        <p>
          Bookings, appearances, media opportunities and
          professional partnerships.
        </p>

        <Link to="/booking">
          CONTACT MANAGEMENT
          <ArrowUpRight size={19} />
        </Link>
      </section>

      <footer className="site-footer">
        <div className="footer-logo">
          <strong>
            MOJOY
          </strong>

          <span>
            RECORDS
          </span>
        </div>

        <div className="footer-columns">
          <div>
            <span>
              EXPLORE
            </span>

            <ScrollLink target="releases">
              Music
            </ScrollLink>

            <ScrollLink target="catalog">
              Catalog
            </ScrollLink>

            <ScrollLink target="physical">
              Physical
            </ScrollLink>
          </div>

          <div>
            <span>
              COMPANY
            </span>

            <Link to="/about">
              About
            </Link>

            <Link to="/booking">
              Management
            </Link>

            <Link to="/booking">
              CD Orders
            </Link>
          </div>
        </div>

        <div className="footer-bottom">
          <span>
            DETROIT, MICHIGAN
          </span>

          <span>
            © 2026 MOJOY RECORDS
          </span>
        </div>
      </footer>
    </main>
  )
}

export default Home