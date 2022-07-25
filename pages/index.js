import Image from 'next/image'
import styles from '../styles/Home.module.css'
import Layout from '../components/layout'
import Hero from '../components/Hero'
import OurTeam from '../components/OurTeam'

export default function Home() {
  return (
    <>
        <Hero />
        <section className={styles.grids}>
          <div>
            <Image 
              src="/homeImage1.png" 
              alt="Fitness Plus" 
              width="526" 
              height="518"
              layout="responsive"
              className={styles.image}
            />
          </div>
          <div>
            <h3>Personal Training Made for You</h3>
            <p>At Fitness Plus, we believe in individual attention. We train one session at a time, with your experienced and educated personal trainer. Your training sessions at Fitness Plus are specifically designed for you: your body, your health and fitness goals, your lifestyle, your time, your budget.</p>
            <button className={styles.button}>Schedule Your Free Consultation.</button>
          </div>
        </section>
        <section className={styles.strongOver50}>
          <div style={{backgroundImage: "url(/Rob_RoseMarie.png)", backgroundSize: 'cover', }}>
            <div className={styles.strongOver50} style={{ background: "rgba(117,112,21,.9)" }}>
              <div className={styles.strongOver50Content}>
                <h1>Strong Over 50</h1>
              </div>
              <div className={styles.strongOver50Content}>
                <p>Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et</p>
              </div>
              <div className={styles.strongOver50Content}>
              <button className={styles.button2}>Schedule Your Free Consultation.</button>
            </div>
            </div>
          </div>
        </section>
        <section className={styles.grids}>
          <div>
            <h3>Committed to Improving Your Health</h3>
            <p>We offer a variety of different ways to reach your health and fitness goals:

                Personal Training
                Strong Over 50
                Injury Rehab Services
                Therapeutic Massage</p>
            <button className={styles.button}>Schedule Your Free Consultation.</button>
          </div>
          <div>
            <Image 
              src="/homeImage2.png" 
              alt="Second Image" 
              width="448" 
              height="420"
              layout="responsive"
              className={styles.image}/>
          </div>
        </section>
        
        <OurTeam />
        {/* <section className={styles.contactTeam}>
          <div className="container">
            <h1>FormSubmit Demo</h1>
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
        </section> */}
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
