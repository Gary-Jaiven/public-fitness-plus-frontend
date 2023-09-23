import Layout from '../components/Layout'
import TrainerCards from '../components/TrainerCards'
import styles from '../styles/Trainers.module.css'

export const Team = ({results}) => {
  return (
    <div>
        {/* <section style={{height: '90vh'}}>
          <div style={{backgroundImage: "url(/Client_Malinda_ChrisWilliams.jpg)", backgroundSize: 'cover', height: '90vh'}}>
            <div style={{ background: "rgba(117,112,21,.9)", height: '90vh', display: 'grid', justifyContent: 'center', alignContent: 'center' }}>
              <div>
                <h1 className='title'>Meet Our Team</h1>
              </div>
            </div>
          </div>
        </section> */}
        <section className={styles.container__content__one_column} style={{backgroundColor: 'white', color: '#757013'}}>
          <div className={styles.container__content__one_column__content}>
            <h2>Fitness Plus Trainers</h2>
            <p>The personal trainers at Fitness Plus are educated and experienced in the profession of personal training. They understand that “training” is more than “working out.” They will talk to you, listen to you, assess your present condition, and develop a plan and program to help you reached your desired goals with evidence-based training techniques. Our trainers take their profession and your time and money seriously. Each of our trainers has different areas of expertise; read through the bios to see which trainer you would like to work with and begin your journey towards better health and fitness.</p>
          </div>
        </section>
        <section className={styles.container__content}>
          <TrainerCards results={results}/>  
        </section>
        <section className={styles.container__content__one_column} style={{backgroundColor: 'white', color: '#757013'}}>
          <div className={styles.container__content__one_column__content}>
            <button className='button' style={{margin: '0 auto'}}>Schedule Your Free Consultation.</button>
          </div>
        </section>
    </div>
  )
}

export const getStaticProps = async () => {

  const query = encodeURIComponent(`*[ _type == "trainer"] | order(order)`);
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

Team.getLayout = function getLayout(page){
  return (
    <Layout
      pageTitle="Fitness Plus Trainers"
      pageDescription="The personal trainers at Fitness Plus are educated and experienced in the profession of personal training."
    >
      {page}
    </Layout>
  )
}

export default Team;