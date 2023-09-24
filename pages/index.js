import styles from '../styles/Main.module.css'
import Layout from '../components/Layout'
import Image from 'next/image'
import Link from 'next/link'
import TrainerCards from '../components/TrainerCards'

export const Home = ({results}) => {
  return (
    <>
        <section className={styles.hero}>
            <div className={styles.hero__content}>
                <div className={styles.hero__content__left}>
                  <h1 className={styles.hero__title}>Personal Training at its Finest</h1>
                  <h3 className={styles.hero__subtitle}>No Memberships. No Contracts. No Hassle.</h3>
                  <Link href="/contact"><a><button className={styles.hero__button}>Schedule Your Free Consultation</button></a></Link>
                </div>
                <div className={styles.hero__content__image}>
                  <Image 
                    className={styles.hero__image}
                    src="/home_hero_image.png" 
                    alt="Fitness Plus personal trainer helps an over 50 year old female client" 
                    width="937" 
                    height="910"
                    layout="responsive"
                  />
                </div>
            </div>
        </section>
        <div className={styles.contactBar}>859.269.9280</div>
        <section className={styles.container}>
          <div className={styles.container__content}>
            <div>
              <Image 
                src="/home_first_image.png" 
                alt="Fitness Plus personal trainer helping an over 50 year old female do back exercises" 
                width="526" 
                height="518"
                layout="responsive"
              />
            </div>
            <div className={styles.container__content__left}>
              <div className={styles.container__content__description}>
                <h3>Personal Training Made for You</h3>
                <div>Working with a Fitness Plus personal trainer is more than a workout! It is a relationship with your personal health professional.</div>
                <Link href="/contact"><a><button className={styles.container__button}>Schedule Your Free Consultation</button></a></Link>
              </div>
            </div>
          </div>
        </section>
        <section className={styles.container}>
          <div className={styles.container__content__one_column}>
            <div className={styles.container__content__one_column__content}>
              <h1>Strong Over 50</h1>
              <div>
                <p>Strong Over 50 is a program designed to help your body build and maintain the 3 main things you lose as you age: Strength, Flexibility and Balance.</p>
                <p>The Strong Over 50 Body Weight Bar and training program provide a safer, more effective way for his older clients to use their own body weight to help them combat the loss of strength, flexibility and balance as they age.</p>
              </div>
            </div>
          </div>
        </section>
        <section className={styles.container}>
          <div className={styles.container__content}>
            <div className={styles.container__content__left}>
              <div className={styles.container__content__description}>
                  <h3>Committed to Improving Your Health</h3>
                  <div>
                    <p>A private consultation with one of our Fitness Plus professionals is how we begin our relationship with you. We take pride in matching you with the proper trainer.</p>
                    <p>There are no packages to pay for upfront. You are billed at the end of the month for your training sessions. We believe our personal trainers should focus on training and not be forced to sell a quota of packages.</p>
                    <p>Fitness Plus offers a variety of personal training and wellness services. We are committed to improving your health and fitness and our company is designed to maximize your ability to reach the goals you communicate to us.</p>  
                    <Link href="/contact"><a><button className={styles.container__button}>Schedule Your Free Consultation</button></a></Link>
                  </div>
              </div>
            </div>
            <div>
              <Image 
                  src="/home_second_image.png" 
                  alt="Fitness Plus personal trainer helping a female client in a Strong Over 50 Program exercise." 
                  width="674" 
                  height="556"
                  layout="responsive"
                />
            </div>
          </div>
        </section>
        <section className={styles.container} style={{marginBottom: '0px'}}>
          <div className={styles.container__content__one_column}>
            <h1 style={{textAlign: 'center'}}>Meet Our Team</h1>
            <TrainerCards results={results}/>
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

export const getServerSideProps = async pageContext => {

  const query = encodeURIComponent(`*[ _type == "trainer"]| order(order)`);
  const url = `https://3tqn9fwp.api.sanity.io/v2021-10-21/data/query/production?query=${query}`;

  const result = await fetch(url).then(res => res.json());

  if (!result) {
      return {
          notFound: true
      }
  } else {
      return {
          props: {
              results: result
          }
      }
  }
};

Home.getLayout = function getLayout(page){
  return (
    <Layout
      pageTitle="Fitness Plus"
      pageDescription="No membership fees. No contracts. Just individual attention, one session at a time, with your experienced and educated personal trainer."
    >
      {page}
    </Layout>
  )
}

export default Home;