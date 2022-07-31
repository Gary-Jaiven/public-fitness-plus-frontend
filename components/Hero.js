import styles from '../styles/Hero2.module.css'
import Image from 'next/image'

export default function Hero() {
  return (
      <section className={styles.hero_container}>
        <div className={styles.hero_content}>
            <div className={styles.hero_copy}>
              <div>
                <h1 className={styles.title}>Personal Training at its Finest</h1>
                <h1 className={styles.subtitle}>No Memberships. No Contracts. No Hassle.</h1>
                <button className={styles.hero_button}>Schedule Your Free Consultation.</button>
              </div>
            </div>
            <div className={styles.hero_image_container}>
              {/* <Image src="/fitnes-plus-hero.png" 
                width="814"
                height="999"
                alt="Fitness Plus"
                className={styles.hero_image}
                layout="responsive"
              />  */}
            </div>
        </div>
      </section>
  )
}