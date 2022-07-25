import Head from 'next/head'
import Image from 'next/image'
import Layout from '../components/layout'
import styles from '../styles/Home.module.css'
import CardGroup from '../components/Card'

export default function Team() {
  return (
    <div className={styles.container}>
      <main className={styles.main}>
        <section className={styles.teamStrongOver50}>
          <div style={{backgroundImage: "url(/Client_Malinda_ChrisWilliams.jpg)", backgroundSize: 'cover', }}>
            <div className={styles.teamStrongOver50} style={{ background: "rgba(117,112,21,.9)" }}>
              <div className={styles.teamStrongOver50Content}>
                <h1>Meet Our Team</h1>
              </div>
            </div>
          </div>
        </section>
        <section className={styles.aboutWrapper}>
            <h2>Lorem ipsum dolor sit amet</h2>
            <p>Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem </p>
        </section>
        <CardGroup />
        <section className={styles.aboutTitles}>
            <h2>Lorem ipsum dolor sit amet</h2>
            <button className={styles.button}>Schedule Your Free Consultation.</button>
        </section>
      </main>
    </div>
  )
}

Team.getLayout = function getLayout(page){
  return (
    <Layout>
      {page}
    </Layout>
  )
}