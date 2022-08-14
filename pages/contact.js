import styles from '../styles/Home.module.css'
import Layout from '../components/Layout'

export default function Contact(){
    return(
        <div className={styles.container}>
      <main className={styles.contactMain}>
        <section className={styles.contactHero}>
          <div style={{backgroundImage: "url(/Sheila_Kalas_main.jpg)", backgroundSize: 'cover', }}>
            <div className={styles.contactHeros} style={{ background: "rgba(117,112,21,.9)" }}>
              <div className={styles.contactStrongOver50Content}>
                <h1>Contact Us</h1>
                <p>Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et</p>
              </div>
            </div>
          </div>
          <div className="contactPageForm">
          <h1>Contact Us</h1>
            <form target="_blank" action="https://formsubmit.co/your@email.com" method="POST">
              <div className="form-group">
                <div className="form-row">
                  <div className="col">
                    <input type="text" name="name" className="form-control" placeholder="Full Name" required />
                  </div>
                  <div className="col">
                    <input type="email" name="email" className="form-control" placeholder="Email Address" required />
                  </div>
                </div>
              </div>
              <div className="form-group">
                <textarea placeholder="Your Message" className="form-control" name="message" rows="10" required></textarea>
              </div>
              <button type="submit" className="btn btn-lg btn-dark btn-block">Submit Form</button>
            </form>
          </div>
        </section>
      </main>
    </div>
    )
}


Contact.getLayout = function getLayout(page){
  return (
    <Layout>
      {page}
    </Layout>
  )
}
