import { Link } from 'react-router-dom'
import {
  AnimatePresence,
  motion,
} from 'framer-motion'
import {
  useEffect,
  useState,
} from 'react'
import {
  ArrowRight,
  ArrowUpRight,
} from 'lucide-react'
import Navbar from '../components/Navbar'
import '../styles.css'

const releaseImage = (filename) =>
  `${import.meta.env.BASE_URL}images/releases/${filename}`

const galleryImage = (filename) =>
  `${import.meta.env.BASE_URL}images/gallery/${filename}`

const releases = [
  {
    id: '01',
    title: 'Sunrise Lake View',
    artist: 'Phillip Brooks',
    type: 'Album',
    year: '2026',
    link: 'https://unitedmasters.com/m/sunrise-lake-view',
    image: releaseImage('sunrise-lake-view.jpg'),
  },
  {
    id: '02',
    title: 'Old School',
    artist: 'Phillip Brooks',
    type: 'Album',
    year: '',
    link: 'https://unitedmasters.com/m/61d345766ac7de52bcafa8a0',
    image: releaseImage('old-school.jpg'),
  },
  {
    id: '03',
    title: 'Table For 2',
    artist: 'Phillip Brooks',
    type: 'Album',
    year: '',
    link: 'https://unitedmasters.com/m/616deb8383332608d2f4ceca',
    image: releaseImage('table-for-2.jpg'),
  },
  {
    id: '04',
    title: 'Last Flight Out',
    artist: 'Phillip Brooks',
    type: 'Album',
    year: '',
    link: 'https://unitedmasters.com/m/6138fa516b55ac78412c4c34',
    image: releaseImage('last-flight-out.jpg'),
  },
  {
    id: '05',
    title: 'Alive in Praise 2',
    artist: 'Bishop P.A. Brooks & The New St. Paul Tabernacle',
    type: 'Album',
    year: '',
    link: 'https://unitedmasters.com/m/6138dd0799d5e617f836ffea',
    image: releaseImage('alive-in-praise-2.jpg'),
  },
  {
    id: '06',
    title: 'Live in Praise',
    artist: 'Phillip Brooks',
    type: 'Album',
    year: '',
    link: 'https://unitedmasters.com/m/61b8bfd286f548540905db4c',
    image: releaseImage('live-in-praise.jpg'),
  },
]

const galleryImages = [
  galleryImage('gallery-01.jpg'),
  galleryImage('gallery-02.jpg'),
  galleryImage('gallery-03.jpg'),
  galleryImage('gallery-04.jpg'),
  galleryImage('gallery-05.jpg'),
  galleryImage('gallery-06.jpg'),
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

        <h2>
          {title}
        </h2>
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
          alt={`${release.title} by ${release.artist}`}
        />

        <span className="release-card-action">
          Listen
          <ArrowUpRight size={19} />
        </span>
      </a>

      <div className="release-card-meta">
        <span>
          {release.id}
        </span>

        <div>
          <strong>
            {release.artist}
          </strong>

          <h3>
            {release.title}
          </h3>

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

/* ========================================
   ANIMATED 6-PHOTO WALL
======================================== */

function AnimatedPhotoWall({ images }) {
  const [rotation, setRotation] = useState(0)

  useEffect(() => {
    const interval = setInterval(() => {
      setRotation((current) =>
        (current + 1) % images.length
      )
    }, 3500)

    return () => clearInterval(interval)
  }, [images.length])

  const imagesForWall = images.map(
    (_, index) =>
      images[
        (index + rotation) %
          images.length
      ]
  )

  return (
    <div className="mojoy-photo-wall">
      {imagesForWall.map((image, index) => (
        <motion.div
          key={`gallery-cell-${index}`}
          className={`mojoy-photo-cell mojoy-photo-cell-${index + 1}`}
          initial={{
            opacity: 0,
            y: 25,
          }}
          whileInView={{
            opacity: 1,
            y: 0,
          }}
          viewport={{
            once: true,
            margin: '-60px',
          }}
          transition={{
            duration: 0.5,
            delay: index * 0.05,
          }}
        >
          <AnimatePresence mode="wait">
            <motion.img
              key={image}
              src={image}
              alt={`Mojoy Records archive ${index + 1}`}
              initial={{
                opacity: 0,
                scale: 1.035,
              }}
              animate={{
                opacity: 1,
                scale: 1,
              }}
              exit={{
                opacity: 0,
                scale: 0.985,
              }}
              transition={{
                duration: 0.75,
                ease: [0.22, 1, 0.36, 1],
              }}
            />
          </AnimatePresence>

          <div className="mojoy-photo-overlay" />

          <div className="mojoy-photo-index">
            0{index + 1}
          </div>
        </motion.div>
      ))}
    </div>
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
          <strong>
            40
          </strong>

          <span>
            YEARS
          </span>

          <small>
            INDEPENDENT
          </small>
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
            alt={`${featured.title} by ${featured.artist}`}
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

      <section
        className="gallery-section"
        id="gallery"
      >
        <div className="gallery-heading">
          <div>
            <span>
              03 / GALLERY
            </span>

            <h2>
              INSIDE
              <br />
              MOJOY.
            </h2>
          </div>

          <p>
            Moments, performances and images from the Mojoy Records
            story.
          </p>
        </div>

        <AnimatedPhotoWall
          images={galleryImages}
        />
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
            04 / PHYSICAL MUSIC
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
            05 / MANAGEMENT
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

            <ScrollLink target="gallery">
              Gallery
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