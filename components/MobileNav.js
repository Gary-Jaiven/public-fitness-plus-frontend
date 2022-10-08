import styles from '../styles/MobileNav.module.css'
import Link from 'next/link'

export default function MobileNav({setShowMobileNav, showMobileNav}) {

  return (
    <section className={styles.mobile__nav__container}>
        <div className={styles.mobile__nav__content}>
            <div className={styles.mobile__nav__close__icon} onClick={() => setShowMobileNav(false)}>
            <svg width="20" height="20" viewBox="0 0 24 30" fill="none" xmlns="http://www.w3.org/2000/svg">
                <line y1="-2.5" x2="30.4911" y2="-2.5" transform="matrix(0.643429 -0.765506 0.653723 0.756734 4.38113 27.3412)" stroke="#F7FAE6" strokeWidth="2"/>
                <line y1="-2.5" x2="30.6596" y2="-2.5" transform="matrix(0.622287 0.782789 -0.674409 0.738358 0 4)" stroke="#F7FAE6" strokeWidth="2"/>
              </svg>   
            </div>
            <ul onClick={() => setShowMobileNav(false)} >
                <Link href="/"><a><li>Home</li></a></Link>
                <Link href="/about"><a><li>About US</li></a></Link>
                <Link href="/services"><a><li>Services</li></a></Link>
                <Link href="/trainers"><a><li>Meet Your Trainers</li></a></Link>
                <Link href="/contact"><a><li>Contact</li></a></Link>
            </ul>
        </div>
    </section>    
  )
}

