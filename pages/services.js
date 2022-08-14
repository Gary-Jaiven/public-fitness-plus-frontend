
import styles from '../styles/Home.module.css'
import Layout from '../components/Layout'

export default function Services() {
  return (
    <div className={styles.container}>
      <main className={styles.main}>
        <section className={styles.servicesStrongOver50}>
          <div style={{backgroundImage: "url(/Client_Malinda_ChrisWilliams.jpg)", backgroundSize: 'cover', }}>
            <div className={styles.servicesStrongOver50} style={{ background: "rgba(117,112,21,.9)" }}>
              <div className={styles.servicesStrongOver50Content}>
                <h1>Services</h1>
              </div>
            </div>
          </div>
        </section>
        <section className={styles.servicesWrapper}>
            <div className={styles.servicesBigCard}>
              <div className={styles.servicesBigCardBody}>
                <img src={"./aboutImage2.png"} className={styles.servicesBigCardImage}/>
                <h3 className={styles.servicesCardTitle}>Strong Over 50</h3>
                <p className={styles.servicesCardDescription}>Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et</p>
                <button className="cardButton">Learn more.</button>
              </div>
            </div>
        </section>
      </main>
    </div>
  )
}

    
Services.getLayout = function getLayout(page){
  return (
    <Layout>
      {page}
    </Layout>
  )
}
