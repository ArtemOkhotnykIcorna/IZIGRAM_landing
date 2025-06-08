'use client'

import Image from 'next/image'
import styles from './PartnersSection.module.css'

const topRowPartners = [
  {
    name: "Google",
    logo: "/img/partners/google.svg",
    url: "https://google.com",
    backgroundColor: "#4285f41a",
  },
  {
    name: "Airbnb",
    logo: "/img/partners/airbnb.svg",
    url: "https://airbnb.com",
    backgroundColor: "#ff385c1a",
  },
  {
    name: "Spotify",
    logo: "/img/partners/spotify.svg",
    url: "https://spotify.com",
    backgroundColor: "#1ed7601a",
  },
]

const bottomRowPartners = [
  {
    name: "Adobe",
    logo: "/img/partners/adobe.svg",
    url: "https://adobe.com",
    backgroundColor: "#fa0c001a",
  },
  {
    name: "Reddit",
    logo: "/img/partners/reddit.svg",
    url: "https://reddit.com",
    backgroundColor: "#ff45001a",
  },
  {
    name: "PayPal",
    logo: "/img/partners/paypal.svg",
    url: "https://paypal.com",
    backgroundColor: "#60cdff1a",
  },
  {
    name: "Snapchat",
    logo: "/img/partners/snapchat.svg",
    url: "https://snapchat.com",
    backgroundColor: "#fffc001a",
  },
]

const PartnersSection = () => {
  return (
    <section className={`${styles.section} ${styles.bottomSpacing}`} data-aos="fade-up">
      <div className={styles.container}>
        <div className={styles.partnersWrapper}>
          {/* Top row partners */}
          <div className={styles.partnersTopRow}>
            {topRowPartners.map((partner) => (
              <a
                key={partner.name}
                href={partner.url}
                target="_blank"
                rel="noopener noreferrer"
                className={styles.partnerCard}
                style={{ backgroundColor: partner.backgroundColor }}
              >
                <Image
                  src={partner.logo}
                  alt={partner.name}
                  width={100}
                  height={50}
                  style={{ objectFit: 'contain' }}
                />
              </a>
            ))}
          </div>

          {/* Bottom row partners with title */}
          <div className={styles.partnersBottomRow}>
            {bottomRowPartners.slice(0, 2).map((partner) => (
              <a
                key={partner.name}
                href={partner.url}
                target="_blank"
                rel="noopener noreferrer"
                className={styles.partnerCard}
                style={{ backgroundColor: partner.backgroundColor }}
              >
                <Image
                  src={partner.logo}
                  alt={partner.name}
                  width={100}
                  height={50}
                  style={{ objectFit: 'contain' }}
                />
              </a>
            ))}
            
            <div className={styles.partnersTitle}>
              <h3>Partners</h3>
            </div>
            
            {bottomRowPartners.slice(2).map((partner) => (
              <a
                key={partner.name}
                href={partner.url}
                target="_blank"
                rel="noopener noreferrer"
                className={styles.partnerCard}
                style={{ backgroundColor: partner.backgroundColor }}
              >
                <Image
                  src={partner.logo}
                  alt={partner.name}
                  width={100}
                  height={50}
                  style={{ objectFit: 'contain' }}
                />
              </a>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}

export default PartnersSection
