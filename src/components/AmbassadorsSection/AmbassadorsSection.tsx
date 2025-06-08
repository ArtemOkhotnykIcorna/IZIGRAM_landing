'use client'

import { useState } from 'react'
import Image from 'next/image'
import styles from './AmbassadorsSection.module.css'

const ambassadors = [
  {
    id: 1,
    name: "Maria",
    username: "Maverick",
    followers: "150K subs",
    image: "/img/ambassadors/portrait-woman.jpeg",
    instagram: "https://instagram.com",
  },
  {
    id: 2,
    name: "James",
    username: "James",
    followers: "420K subs",
    image: "/img/ambassadors/portrait-man.jpeg",
    instagram: "https://instagram.com",
  },
  {
    id: 3,
    name: "Sophia",
    username: "Sophia",
    followers: "1.2M subs",
    image: "/img/ambassadors/portrait-woman1.jpeg",
    instagram: "https://instagram.com",
  },
  {
    id: 4,
    name: "Michael",
    username: "Michael",
    followers: "650K subs",
    image: "/img/ambassadors/portrait-man2.jpeg",
    instagram: "https://instagram.com",
  },
  {
    id: 5,
    name: "Emma",
    username: "Emma",
    followers: "980K subs",
    image: "/img/ambassadors/portrait-woman3.jpeg",
    instagram: "https://instagram.com",
  },
  {
    id: 6,
    name: "Daniel",
    username: "Daniel",
    followers: "830K subs",
    image: "/img/ambassadors/portrait-woman4.jpeg",
    instagram: "https://instagram.com",
  },
  // ... more ambassadors
]

const AmbassadorsSection = () => {
  const [isCollapsed, setIsCollapsed] = useState(true)

  const toggleCollapsed = () => {
    setIsCollapsed(!isCollapsed)
  }

  const renderAmbassadorCard = (ambassador: any) => (
    <div key={ambassador.id} className={styles.ambassadorCard}>
      <div className={styles.hexagonBorder}>
        <div className={styles.hexagonContent}>
          <Image
            src={ambassador.image}
            alt={ambassador.name}
            fill
            style={{ objectFit: 'cover' }}
          />
        </div>
      </div>
      <div className={styles.ambassadorInfo}>
        <div className={styles.ambassadorUsername}>{ambassador.username}</div>
        <div className={styles.ambassadorFollowers}>{ambassador.followers}</div>
      </div>
      <div className={styles.linkIcon}>
        <svg viewBox="0 0 24 24" fill="currentColor">
          <path d="M13.19 8.688a4.5 4.5 0 0 1 1.242 7.244l-4.5 4.5a4.5 4.5 0 0 1-6.364-6.364l1.757-1.757m13.35-.622 1.757-1.757a4.5 4.5 0 0 0-6.364-6.364l-4.5 4.5a4.5 4.5 0 0 0 1.242 7.244" />
        </svg>
      </div>
    </div>
  )

  const row1 = ambassadors.slice(0, Math.ceil(ambassadors.length / 2))
  const row2 = ambassadors.slice(Math.ceil(ambassadors.length / 2))

  return (
    <section className={`${styles.section} ${styles.bottomSpacing}`} data-aos="fade-up">
      <div className={styles.container}>
        <div className={styles.titleWrapper}>
          <h2 className={`${styles.title} ${styles.titleAnimation} fw-700`}>
            Our Ambassadors
          </h2>
          <h2 className={`${styles.title} ${styles.titleAnimation} fw-700`}>
            Audience of 3,000,000 people
          </h2>
        </div>

        <div className={`${styles.ambassadorsSection} ${isCollapsed ? styles.collapsed : ''}`}>
          <div className={styles.ambassadorsExpanded}>
            <div className={styles.ambassadorsScrollContainer}>
              <div className={styles.ambassadorsRows}>
                <div className={`${styles.ambassadorRow} ${styles.row1}`}>
                  {row1.concat(row1).map((ambassador, index) => 
                    renderAmbassadorCard({...ambassador, id: `${ambassador.id}-${index}`})
                  )}
                </div>
                <div className={`${styles.ambassadorRow} ${styles.row2}`}>
                  {row2.concat(row2).map((ambassador, index) => 
                    renderAmbassadorCard({...ambassador, id: `${ambassador.id}-${index}`})
                  )}
                </div>
              </div>
            </div>
            <div className={styles.ambassadorsFadeLeft}></div>
            <div className={styles.ambassadorsFadeRight}></div>
          </div>
          
          <button 
            className={styles.ambassadorsToggleBtn}
            onClick={toggleCollapsed}
          >
            {isCollapsed ? 'Show All' : 'Show Less'}
            <svg 
              viewBox="0 0 20 20" 
              style={{ transform: isCollapsed ? 'rotate(0deg)' : 'rotate(180deg)' }}
            >
              <path
                d="M1.25 5.625L9.52885 14.1646C9.58928 14.231 9.66226 14.284 9.7433 14.3201C9.82433 14.3563 9.9117 14.375 10 14.375C10.0883 14.375 10.1757 14.3563 10.2567 14.3201C10.3377 14.284 10.4107 14.231 10.4712 14.1646L18.75 5.625"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>
          </button>
        </div>
      </div>
    </section>
  )
}

export default AmbassadorsSection