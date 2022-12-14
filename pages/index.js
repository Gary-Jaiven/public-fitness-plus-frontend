import styles from '../styles/Main.module.css'
import Layout from '../components/Layout'
import Image from 'next/image'
import TrainerCards from '../components/TrainerCards'

export const Home = ({results}) => {
  return (
    <>
        <section className={styles.hero}>
            <div className={styles.hero__content}>
                <div className={styles.hero__content__left}>
                  <h1 className={styles.hero__title}>Personal Training at its Finest</h1>
                  <h3 className={styles.hero__subtitle}>No Memberships. No Contracts. No Hassle.</h3>
                  <button className={styles.hero__button}>Schedule Your Free Consultation</button>
                </div>
                <div className={styles.hero__content__image}>
                  <Image 
                    className={styles.hero__image}
                    src="/home_hero_image.png" 
                    alt="Fitness Plus" 
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
                alt="Fitness Plus" 
                width="526" 
                height="518"
                layout="responsive"
              />
            </div>
            <div className={styles.container__content__left}>
              <div className={styles.container__content__description}>
                <h3>Personal Training Made for You</h3>
                <div>Lorem ipsum is placeholder text commonly used in the graphic, print, and publishing industries for previewing layouts and visual mockups.</div>
                <button className={styles.container__button}>Schedule Your Free Consultation</button>
              </div>
            </div>
          </div>
        </section>
        <section className={styles.container}>
          <div className={styles.container__content__one_column}>
            <div className={styles.container__content__one_column__content}>
              <h1>Strong Over 50</h1>
              <div>Lorem ipsum is placeholder text commonly used in the graphic, print, and publishing industries for previewing layouts and visual mockups.</div>
              {/* <button className={styles.container__button} style={{backgroundColor: 'white', color: '#757013'}}>Schedule Your Free Consultation</button> */}
            </div>
          </div>
        </section>
        <section className={styles.container}>
          <div className={styles.container__content}>
            <div className={styles.container__content__left}>
              <div className={styles.container__content__description}>
                  <h3>Committed to Improving Your Health</h3>
                  <div>Lorem ipsum is placeholder text commonly used in the graphic, print, and publishing industries for previewing layouts and visual mockups.</div>
                  <button className={styles.container__button}>Schedule Your Free Consultation</button>
              </div>
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
            <form className={styles.form_container}>
              <div className={styles.form_inputs}>
                  <label htmlFor="firstName">First Name*</label>
                  <input type="text" name="firstName" placeholder="First Name" required />
              </div>
              <div className={styles.form_inputs}>
                  <label htmlFor="lastName">Last Name*</label>
                  <input type="text" name="lastName" placeholder="Full Name" required />    
              </div>
              <div className={styles.form_inputs}>
                <label htmlFor='email'>Email*</label>
                <input type="email" name="email" placeholder="Email Address" required style={{width: '100%'}}/>    
              </div>
              <div className={styles.form_inputs}>
                <label htmlFor='phone'>Phone Number</label>
                <input type="phone" name="phone" placeholder="Phone Number" required style={{width: '100%'}}/>    
              </div>
              <div className={styles.form_inputs}>
                <label htmlFor='message'>I am interested in these services</label>
                <textarea placeholder="Your Message" name="message" rows="10" required style={{width: '100%'}}></textarea>
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
    <Layout>
      {page}
    </Layout>
  )
}

export default Home;