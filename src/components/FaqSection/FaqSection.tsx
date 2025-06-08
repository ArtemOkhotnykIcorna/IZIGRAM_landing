'use client'

import { useState } from 'react'
import styles from './FaqSection.module.css'

const faqData = [
  {
    id: 'messenger',
    title: 'Messenger and personal profile',
    resultTitle: 'Communicate and express yourself without boundaries',
    content: 'In the next update of IZIGRAM we will introduce an updated messenger and personal profile. Fast and secure communication, convenient contact management and advanced privacy settings. Create your unique profile, share your moments, find like-minded people and be in the centre of events'
  },
  {
    id: 'ai',
    title: 'AI assistant Jasper',
    resultTitle: 'Smart AI assistance for better communication',
    content: 'Our AI assistant Jasper will help you with writing messages, creating content, and managing your daily tasks. Advanced natural language processing and personalized recommendations.'
  },
  {
    id: 'buddies',
    title: 'IZI Buddies',
    resultTitle: 'Dating and connections made easy',
    content: 'IZI Buddies is our revolutionary dating feature that connects you with like-minded people based on your interests, location, and preferences. Safe, secure, and meaningful connections.'
  }
]

const FaqSection = () => {
  const [activeTab, setActiveTab] = useState('messenger')

  const activeFaq = faqData.find(faq => faq.id === activeTab) || faqData[0]

  return (
    <section className={`${styles.section} ${styles.topSpacing} ${styles.bottomSpacing} ${styles.faqSection}`}>
      <div className={styles.container}>
        <h3 className={`${styles.smText} fw-500 text-color-gray-300 text-center-md`} data-aos="fade-up">
          updates
        </h3>
        <h2 className={`${styles.title} fw-700 text-center-md ${styles.faqSectionTitle}`} data-aos="fade-up">
          What the future holds
        </h2>
        
        <div className={styles.faq}>
          <div className={styles.faqResult} data-aos="fade-right">
            <div className={styles.faqResultCol}>
              <h3 className={`${styles.smText} fw-500 text-color-gray-300 ${styles.faqResultName}`}>
                {'{Update schedule}'}
              </h3>
              <h2 className={`${styles.title} fw-700 text-color-light ${styles.faqResultTitle}`}>
                Hover over <span className="text-color-blue-200">hexagen</span> to see more
              </h2>
            </div>
            <div className={styles.faqResultCol}>
              <p className={`${styles.faqResultText} fw-500 text-color-gray-300`}>
                {activeFaq.content}
              </p>
            </div>
          </div>
          
          <div className={styles.faqNav}>
            {faqData.map((faq, index) => (
              <div 
                key={faq.id}
                className={`${styles.accordion} ${activeTab === faq.id ? styles.active : ''}`}
                data-aos="fade-up"
                onMouseEnter={() => setActiveTab(faq.id)}
              >
                <div className={styles.accordionHeader}>
                  <h3 className={styles.accordionTitle} data-title={faq.resultTitle}>
                    {faq.title}
                  </h3>
                  <input 
                    type="radio" 
                    name="faq-nav" 
                    checked={activeTab === faq.id}
                    onChange={() => setActiveTab(faq.id)}
                  />
                </div>
                <div className={styles.accordionContent}>
                  <div className={styles.accordionContentBody}>
                    <div className={`${styles.accordionContentContainer} fw-500 text-color-gray-300`}>
                      <p>{faq.content}</p>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}

export default FaqSection
