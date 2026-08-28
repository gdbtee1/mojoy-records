import { ArrowUpRight } from 'lucide-react'
import {
  AnimatePresence,
  motion,
} from 'framer-motion'
import { Link } from 'react-router-dom'
import { useEffect, useState } from 'react'
import Navbar from '../components/Navbar'
import '../about.css'

const artists = [
  {
    name: 'Phillip Brooks',
    role: 'Mojoy Records Artist',
    release: 'Sunrise Lake View',
    link: 'https://unitedmasters.com/m/sunrise-lake-view',
    image:
      'https://images.unsplash.com/photo-1501386761578-eac5c94b800a?auto=format&fit=crop&w=1200&q=90',
  },
]

const introWords = [
  'FOUR DECADES',
  'STILL INDEPENDENT',
  'DETROIT ROOTED',
]

function About() {
  const [wordIndex, setWordIndex] = useState(0)

  useEffect(() => {
    const interval = setInterval(() => {
      setWordIndex(
        (current) =>
          (current + 1) % introWords.length
      )
    }, 2600)

    return () => clearInterval(interval)
  }, [])

  return (
    <main className="about-page">
      <Navbar active="about" />

      <section className="about-identity-strip">
        <div className="identity-fixed">
          MOJOY RECORDS / DETROIT, MICHIGAN
        </div>

        <div className="identity-changing">
          <AnimatePresence mode="wait">
            <motion.span
              key={introWords[wordIndex]}
              initial={{
                opacity: 0,
                y: 18,
              }}
              animate={{
                opacity: 1,
                y: 0,
              }}
              exit={{
                opacity: 0,
                y: -18,
              }}
              transition={{
                duration: 0.45,
                ease: [0.22, 1, 0.36, 1],
              }}
            >
              {introWords[wordIndex]}
            </motion.span>
          </AnimatePresence>
        </div>

        <div className="identity-side">
          40 YEARS / INDEPENDENT
        </div>
      </section>

      <section className="about-hero">
        <div className="about-hero-topline">
          <span>
            01 / ABOUT MOJOY
          </span>

          <span>
            DETROIT, MICHIGAN
          </span>
        </div>

        <div className="about-hero-layout">
          <motion.h1
            initial={{
              opacity: 0,
              y: 28,
            }}
            animate={{
              opacity: 1,
              y: 0,
            }}
            transition={{
              duration: 0.75,
              ease: [0.22, 1, 0.36, 1],
            }}
          >
            <span>
              INDEPENDENT
            </span>

            <span>
              FOR FOUR
            </span>

            <span>
              DECADES.
            </span>
          </motion.h1>

          <motion.div
            className="about-hero-copy"
            initial={{
              opacity: 0,
              y: 18,
            }}
            animate={{
              opacity: 1,
              y: 0,
            }}
            transition={{
              delay: 0.2,
              duration: 0.6,
            }}
          >
            <p>
              Mojoy Records is an independent record label based in
              Detroit, Michigan, with approximately four decades of
              history in music.
            </p>

            <p>
              The label continues to preserve its catalog, connect
              listeners with its releases and make music available
              through digital streaming and physical editions.
            </p>

            <span>
              INDEPENDENT MUSIC / DETROIT
            </span>
          </motion.div>
        </div>
      </section>

      <section className="about-history">
        <div className="history-number">
          <span>
            40
          </span>
        </div>

        <div className="history-content">
          <span className="about-kicker">
            02 / THE LEGACY
          </span>

          <h2>
            MUSIC BUILT
            <br />
            TO LAST.
          </h2>

          <p>
            Mojoy Records has remained part of Detroit&apos;s
            independent music landscape for decades. Today, the label
            is bringing that history forward by making its catalog
            easier to discover, stream and own.
          </p>
        </div>
      </section>

      <section className="ceo-section">
        <div className="about-section-heading">
          <div>
            <span>
              03 / LEADERSHIP
            </span>

            <h2>
              THE CEO
            </h2>
          </div>

          <p>
            MOJOY RECORDS / DETROIT
          </p>
        </div>

        <div className="ceo-layout">
          <div className="ceo-photo-placeholder">
            <div className="ceo-placeholder-inner">
              <span>
                MOJOY RECORDS
              </span>

              <strong>
                CEO
              </strong>

              <p>
                OFFICIAL PORTRAIT COMING SOON
              </p>
            </div>
          </div>

          <div className="ceo-information">
            <span className="about-kicker">
              FOUNDER / CEO
            </span>

            <h3>
              LEADING THE
              <br />
              NEXT CHAPTER.
            </h3>

            <div className="ceo-biography">
              <p>
                Mojoy Records has operated as an independent Detroit
                record label for roughly forty years, building a
                catalog intended to continue reaching listeners across
                generations.
              </p>

              <p>
                This section will introduce the background, leadership
                and vision of Mojoy Records&apos; CEO once the official
                biography and portrait are provided by the label.
              </p>
            </div>

            <div className="ceo-note">
              OFFICIAL BIOGRAPHY IN DEVELOPMENT
            </div>
          </div>
        </div>
      </section>

      <section className="artists-section">
        <div className="about-section-heading">
          <div>
            <span>
              04 / ROSTER
            </span>

            <h2>
              OUR ARTISTS
            </h2>
          </div>

          <p>
            CURRENT MOJOY RECORDS ROSTER
          </p>
        </div>

        <div className="artist-roster">
          {artists.map((artist) => (
            <motion.a
              key={artist.name}
              href={artist.link}
              target="_blank"
              rel="noreferrer"
              className="artist-profile"
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
              }}
            >
              <div className="artist-image">
                <img
                  src={artist.image}
                  alt={artist.name}
                />

                <div className="artist-arrow">
                  <ArrowUpRight size={22} />
                </div>
              </div>

              <div className="artist-nameplate">
                <strong>
                  {artist.name}
                </strong>

                <span>
                  {artist.role}
                </span>

                <small>
                  {artist.release}
                </small>
              </div>
            </motion.a>
          ))}

          <div className="artist-coming-soon">
            <span>
              MOJOY RECORDS
            </span>

            <div>
              <strong>
                ROSTER
              </strong>

              <strong>
                COMING
              </strong>

              <strong>
                SOON.
              </strong>
            </div>

            <p>
              Additional Mojoy Records artists and catalog
              information will be added as the official roster is
              finalized.
            </p>
          </div>
        </div>
      </section>

      <section className="about-contact">
        <span>
          05 / CONTACT
        </span>

        <h2>
          CONNECT WITH
          <br />
          MOJOY RECORDS.
        </h2>

        <div className="about-contact-bottom">
          <p>
            Management, artist bookings, partnerships, media
            inquiries and physical music orders.
          </p>

          <Link to="/booking">
            CONTACT THE LABEL
            <ArrowUpRight size={19} />
          </Link>
        </div>
      </section>

      <footer className="about-footer">
        <Link
          to="/"
          className="about-footer-logo"
        >
          MOJOY

          <span>
            RECORDS
          </span>
        </Link>

        <div className="about-footer-meta">
          <span>
            DETROIT / MICHIGAN
          </span>

          <span>
            40 YEARS INDEPENDENT
          </span>

          <span>
            © 2026 MOJOY RECORDS
          </span>
        </div>
      </footer>
    </main>
  )
}

export default About