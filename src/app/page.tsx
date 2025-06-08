'use client'

import { useEffect } from 'react'
import AOS from 'aos'
import 'aos/dist/aos.css'

import Header from '@/components/Header/Header'
import Preview from '@/components/Preview/Preview'
import BenefitsSection from '@/components/BenefitsSection/BenefitsSection'
import AboutCards from '@/components/AboutCards/AboutCards'
import MediaContent from '@/components/MediaContent/MediaContent'
import PricesSection from '@/components/PricesSection/PricesSection'
import FaqSection from '@/components/FaqSection/FaqSection'
import AmbassadorsSection from '@/components/AmbassadorsSection/AmbassadorsSection'
import PartnersSection from '@/components/PartnersSection/PartnersSection'
import Footer from '@/components/Footer/Footer'
import Modal from '@/components/Modal/Modal'

import styles from './page.module.css'

export default function Home() {
  useEffect(() => {
    AOS.init({
      duration: 1000,
      once: true,
      offset: 100,
    })

    // Add loaded class after component mounts
    document.body.classList.add('loaded')

    return () => {
      AOS.refresh()
    }
  }, [])

  return (
    <div className={styles.wrapper}>
      <Header />
      
      <main>
        <Preview />
        <BenefitsSection />
        <AboutCards />
        <MediaContent />
        <PricesSection />
        <MediaContent variant="buddies" />
        <FaqSection />
        <AmbassadorsSection />
        <PartnersSection />
      </main>

      <Footer />
      <Modal />
    </div>
  )
}
