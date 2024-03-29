import styles from '../styles/Contact.module.css'
import Layout from '../components/Layout'

export default function Contact(){
    return(<>
        <section className={styles.container__content__one_column} style={{backgroundColor: 'white', color: '#757013'}}>
            <div className={styles.container__content__one_column__content}>
                <h2>Contact Us</h2>
                <div>A private consultation with one of our professionals is how we begin our relationship with you. We take pride in matching you with the proper trainer. After you have met with your trainer and been briefed on our business policies and have discussed any and all pertinent medical history, it is time to begin the design of your fitness program.</div>
            </div>
        </section> 
        <section className={styles.contact__container}>
          <div style={{padding: '1rem 0rem'}}>
            <h1>Do Not Wait!</h1>
            <p>Send us a message to get started.</p>
          </div>
          <form name="contact" action="/success" method="POST" data-netlify="true" className={styles.form_container}>
          <input type="hidden" name="form-name" value="contact" />
            <div className={styles.form_inputs}>
                <label htmlFor="firstName">First Name*</label>
                <input type="text" name="firstName" id="firstName" placeholder="First Name" required />
            </div>
            <div className={styles.form_inputs}>
                <label htmlFor="lastName">Last Name*</label>
                <input type="text" name="lastName" id="lastName" placeholder="Full Name" required />    
            </div>
            <div className={styles.form_inputs}>
              <label htmlFor='email'>Email*</label>
              <input type="email" name="email" id="email" placeholder="Email Address" required style={{width: '100%'}}/>    
            </div>
            <div className={styles.form_inputs}>
              <label htmlFor='phone'>Phone Number*</label>
              <input type="phone" name="phone" id="phone" placeholder="Phone Number" required style={{width: '100%'}}/>    
            </div>
            <div className={styles.form_inputs}>
              <label htmlFor='message'>I am interested in these services</label>
              <textarea placeholder="Your Message" name="message" id="message" rows="10" required style={{width: '100%'}}></textarea>
            </div>
            <div>
              <button className={styles.container__button} type="submit">Submit Form</button>
            </div>
          </form>
      </section>
    </>
    )
}


Contact.getLayout = function getLayout(page){
  return (
    <Layout
      pageTitle="Contact Fitness Plus"
      pageDescription="Contact us to get started. A private consultation with one of our Fitness Plus professionals is how we begin our relationship with you."
    >
      {page}
    </Layout>
  )
}
