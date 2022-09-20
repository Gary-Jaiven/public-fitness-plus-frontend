import Image from 'next/image'
import styles from '../styles/Home.module.css'
import Layout from '../components/Layout'
import Hero from '../components/Hero'
import OurTeam from '../components/OurTeam'

export default function Home() {
  return (
    <>
        {/* HERO */}
        <Hero />
        {/* CONTACT BAR */}
        <section className={styles.contactBar}>
          <div style={{width: '80vw', textAlign: 'right'}}> 859.269.9280</div>
        </section>
        {/* PERSONAL TRAINING MADE FOR YOU */}
        <section className="section_container_two_column">
          <div className="section_content_two_column">
            <div className={styles.home_section_one_image_container}>
              <Image 
                src="/homeImage1.png" 
                alt="Fitness Plus" 
                width="526" 
                height="518"
                layout="responsive"
              />
            </div>
            <div style={{display: 'grid', alignContent: 'center'}}>
              <h3>Personal Training Made for You</h3>
              <p>At Fitness Plus, we believe in individual attention. We train one session at a time, with your experienced and educated personal trainer. Your training sessions at Fitness Plus are specifically designed for you: your body, your health and fitness goals, your lifestyle, your time, your budget.</p>
              <button className={styles.button}>Schedule Your Free Consultation.</button>
            </div>
          </div>
        </section>
        {/* STRONG OVER 50 */}
        <section 
          className="section_container_one_column" 
          style={{backgroundImage: "url(/Rob_RoseMarie.png)", backgroundSize: 'cover', }}
        >
          <div className="overlay_container">
            <div className="section_content_one_column">
              <div className={styles.strongOver50}>
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
          </div>
        </section>
        {/* SERVICES */}
        <section className="section_container_two_column">
          <div className="section_content_two_column">
            <div style={{display: 'grid', alignContent: 'center'}}>
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
            </div>
        </section>
        {/* OUR TEAM */}
        {/* <OurTeam /> */}
        <section className="section_container_one_column" style={{backgroundColor: '#F7FAE6', paddingTop: '2rem', paddingBottom: '2rem'}}>
          <h1>FormSubmit Demo</h1>
          <form>
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
