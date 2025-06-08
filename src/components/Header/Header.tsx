'use client'

import { useState } from 'react'
import Link from 'next/link'
import styles from './Header.module.css'

const Header = () => {
  const [isNavOpen, setIsNavOpen] = useState(false)
  const [activeSubmenu, setActiveSubmenu] = useState<string | null>(null)

  const toggleNav = () => {
    setIsNavOpen(!isNavOpen)
  }

  const toggleSubmenu = (menu: string) => {
    setActiveSubmenu(activeSubmenu === menu ? null : menu)
  }

  return (
    <header className={styles.header}>
      <div className={styles.container}>
        <Link href="/" className={styles.logo}>
          IZIGRAM
        </Link>
        
        <button 
          className={`${styles.navButton} ${isNavOpen ? styles.active : ''}`}
          onClick={toggleNav}
        >
          <div></div>
        </button>

        <nav className={`${styles.nav} ${isNavOpen ? styles.active : ''}`}>
          <div className={styles.navCol}>
            <ul className={styles.menu}>
              <li>
                <Link href="#">What is IZIGRAM</Link>
              </li>
              <li>
                <Link href="#">Messenger</Link>
              </li>
              <li>
                <Link href="#">Social network</Link>
              </li>
              <li>
                <Link href="#">Wallet</Link>
              </li>
              <li className={`${styles.menuItemHasChildren} ${activeSubmenu === 'more' ? styles.active : ''}`}>
                <a href="#" onClick={(e) => { e.preventDefault(); toggleSubmenu('more'); }}>
                  More
                  <svg viewBox="0 0 20 20">
                    <path
                      d="M1.25 5.625L9.52885 14.1646C9.58928 14.231 9.66226 14.284 9.7433 14.3201C9.82433 14.3563 9.9117 14.375 10 14.375C10.0883 14.375 10.1757 14.3563 10.2567 14.3201C10.3377 14.284 10.4107 14.231 10.4712 14.1646L18.75 5.625"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                  </svg>
                </a>
                <ul className={activeSubmenu === 'more' ? styles.submenuOpen : ''}>
                  <li><Link href="#">Menu item 1</Link></li>
                  <li><Link href="#">Menu item 2</Link></li>
                  <li><Link href="#">Menu item 3</Link></li>
                </ul>
              </li>
            </ul>
          </div>
          
          <div className={styles.navCol}>
            <Link href="#" className={styles.link} target="_blank">
              Gain access
              <svg viewBox="0 0 20 20">
                <path
                  d="M12.5 2.5H17.5V7.5"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
                <path
                  d="M8.33301 11.6667L17.4997 2.5"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
                <path
                  d="M15 10.8333V15.8333C15 16.2754 14.8244 16.6993 14.5118 17.0118C14.1993 17.3244 13.7754 17.5 13.3333 17.5H4.16667C3.72464 17.5 3.30072 17.3244 2.98816 17.0118C2.67559 16.6993 2.5 16.2754 2.5 15.8333V6.66667C2.5 6.22464 2.67559 5.80072 2.98816 5.48816C3.30072 5.17559 3.72464 5 4.16667 5H9.16667"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
            </Link>
          </div>

          <div className={styles.navCol}>
            <ul className={styles.languageSwitcher}>
              <li className={activeSubmenu === 'language' ? styles.active : ''}>
                <a href="#" onClick={(e) => { e.preventDefault(); toggleSubmenu('language'); }}>
                  English
                  <svg viewBox="0 0 20 20">
                    <path
                      d="M1.25 5.625L9.52885 14.1646C9.58928 14.231 9.66226 14.284 9.7433 14.3201C9.82433 14.3563 9.9117 14.375 10 14.375C10.0883 14.375 10.1757 14.3563 10.2567 14.3201C10.3377 14.284 10.4107 14.231 10.4712 14.1646L18.75 5.625"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                  </svg>
                </a>
                <ul className={activeSubmenu === 'language' ? styles.submenuOpen : ''}>
                  <li><a href="#" className={styles.activeLang}>English</a></li>
                  <li><a href="#">Spanish</a></li>
                  <li><a href="#">Russian</a></li>
                  <li><a href="#">Ukrainian</a></li>
                </ul>
              </li>
            </ul>
          </div>
        </nav>
      </div>
    </header>
  )
}

export default Header
