import styles from '../styles/Main.module.css'
import Layout from '../components/Layout'
import Image from 'next/image'

export default function Home() {
  return (
    <>
        <section className={styles.hero}>
            <div className={styles.hero__content}>
                <h1 className={styles.hero__title}>Personal Training at its Finest</h1>
                <h3 className={styles.hero__subtitle}>No Memberships. No Contracts. No Hassle.</h3>
                <button className={styles.hero__button}>Schedule Your Free Consultation</button>
            </div>
        </section>
        <div className={styles.contactBar}>859.269.9280</div>
        <section className={styles.container}>
          <div className={styles.container__content}>
            <div>
              <Image 
                src="/home_first_image.png" 
                alt="Fitness Plus" 
                width="526" 
                height="518"
                layout="responsive"
              />
            </div>
            <div>
                <h3>Personal Training Made for You</h3>
                <div>Lorem ipsum is placeholder text commonly used in the graphic, print, and publishing industries for previewing layouts and visual mockups.</div>
                <button className={styles.container__button}>Schedule Your Free Consultation</button>
            </div>
          </div>
        </section>
        <section className={styles.container}>
          <div className={styles.container__content__one_column}>
            <h1>Strong Over 50</h1>
            <div>Lorem ipsum is placeholder text commonly used in the graphic, print, and publishing industries for previewing layouts and visual mockups.</div>
            <button className={styles.container__button} style={{backgroundColor: 'white', color: '#757013'}}>Schedule Your Free Consultation</button>
          </div>
        </section>
        <section className={styles.container}>
          <div className={styles.container__content}>
            <div>
                <h3>Committed to Improving Your Health</h3>
                <div>Lorem ipsum is placeholder text commonly used in the graphic, print, and publishing industries for previewing layouts and visual mockups.</div>
                <button className={styles.container__button}>Schedule Your Free Consultation</button>
            </div>
            <div>
            <Image 
                src="/home_second_image.png" 
                alt="Fitness Plus" 
                width="674" 
                height="556"
                layout="responsive"
              />
            </div>
          </div>
        </section>
        <section className={styles.container}>
          <div className={styles.container__content}>
            <h1>Meet Our Team</h1>
          </div>
        </section>
        <section className={styles.container}>
          <div className={styles.container__content}>
            <h1>Contact Form</h1>
          </div>
        </section>
    </>
  )
}

Home.getLayout = function getLayout(page){
  return (
    <Layout>
      {page}
    </Layout>
  )
}
