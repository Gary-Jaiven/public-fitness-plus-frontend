import styles from '../styles/Hero2.module.css'
import Image from 'next/image'
import Link from 'next/link'

export default function Hero() {
  return (
      <section className={styles.hero_container}>
        <div className={styles.hero_content}>
            <div className={styles.hero_copy}>
              <div>
                <h1 className={styles.title}>Personal Training at its Finest</h1>
                <h1 className={styles.subtitle}>No Memberships. No Contracts. No Hassle.</h1>
                <Link href="/contact"><a><button className={styles.hero_button}>Schedule Your Free Consultation.</button></a></Link>
              </div>
            </div>
            <div className={styles.hero_image_placement}>
              <div className={styles.hero_image_container}>
                
              </div>
            </div>
        </div>
      </section>
  )
}