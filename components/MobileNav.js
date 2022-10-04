import styles from '../styles/MobileNav.module.css'
import Link from 'next/link'

export default function MobileNav({setShowMobileNav, showMobileNav}) {

  return (
    <section className={styles.mobile__nav__container}>
        <div className={styles.mobile__nav__content}>
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

