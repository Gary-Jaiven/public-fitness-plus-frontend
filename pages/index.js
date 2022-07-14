import Head from 'next/head'
import Image from 'next/image'
import styles from '../styles/Home.module.css'
import Layout from '../components/layout'
import Navbar from './components/Navbar'
import CardGroup from './components/Card'

export default function Home() {
  return (
    <div className={styles.container}>
      <Head>
        <title>Fitness Plus</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
        <link rel="stylesheet" href="https://stackpath.bootstrapcdn.com/bootstrap/4.2.1/css/bootstrap.min.css" />
      </Head>
      <main className={styles.main}>
      <Navbar />
        <section className={styles.hero}>
          <div className={styles.heroText}>
            <h1 className={styles.title}>Personal Training at its Finest</h1>
            <h1 className={styles.subtitle}>No Memberships. No Contracts. No Hassle.</h1>
            <button className={styles.button}>Schedule Your Free Consultation.</button>
          </div>
          <div>
            <img src={"./fitnes-plus-hero.png"} className={styles.heroImg}/>
          </div>
          {/* <div className={styles.phoneNumberBar}></div> */}
        </section>

        <section className={styles.grids}>
          <div>
            <img src={"./homeImage1.png"} className={styles.image}/>
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
            <img src={"./homeImage2.png"} className={styles.image}/>
          </div>
        </section>
        <h1>Our Team</h1>
        <CardGroup />
        <section classname={styles.contactTeam}>
          <div class="container">
            <h1>FormSubmit Demo</h1>
            <form target="_blank" action="https://formsubmit.co/your@email.com" method="POST">
              <div class="form-group">
                <div class="form-row">
                  <div class="col">
                    <input type="text" name="name" class="form-control" placeholder="Full Name" required />
                  </div>
                  <div class="col">
                    <input type="email" name="email" class="form-control" placeholder="Email Address" required />
                  </div>
                </div>
              </div>
              <div class="form-group">
                <textarea placeholder="Your Message" class="form-control" name="message" rows="10" required></textarea>
              </div>
              <button type="submit" class="btn btn-lg btn-dark btn-block">Submit Form</button>
            </form>
          </div>
        </section>

      </main>

      <footer className={styles.footer}>
        <Image src="/fitnessPlusCircleLogo-web.png" alt="Fitness Plus Logo" width={40} height={40} />
          <ul>
            <li>859.269.9280</li>
            <li>info@fitplusinc.com</li>
            <li>831 National Ave</li>
            <li>Lexington, Kentucky 40502</li>
        </ul>
      </footer>
    </div>
  )
}

Home.getLayout = function getLayout(page){
  return (
    <Layout>
      {page}
    </Layout>
  )
}
