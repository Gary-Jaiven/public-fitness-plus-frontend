import styles from '../styles/Hero.module.css'
import Image from 'next/image'

export default function Hero() {
  return (
    <>
      <section className={styles.hero_container}>
        <div className={styles.hero_centered_columns}>
          <div className={styles.hero_text_container}>
            <div className={styles.hero_text_content}>
              <h1 className={styles.title}>Personal Training at its Finest</h1>
              <h1 className={styles.subtitle}>No Memberships. No Contracts. No Hassle.</h1>
              <button className={styles.hero_button}>Schedule Your Free Consultation.</button>
            </div>
          </div>
          <div className={styles.hero_image_container}>
            <Image src="/fitnes-plus-hero.png" 
              width="814"
              height="999"
              alt="Fitness Plus"
              layout="responsive"
              className={styles.heroImg} 
            />
          </div>
        </div>
      </section>
    </>
  )
}