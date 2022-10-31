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
            <h2>Lorem ipsum dolor sit amet</h2>
            <p>Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem </p>
          </div>
        </section>
        <section className={styles.container__content}>
          <TrainerCards results={results}/>  
        </section>
        <section className={styles.container__content__one_column} style={{backgroundColor: 'white', color: '#757013'}}>
          <div className={styles.container__content__one_column__content}>
            <h2>Lorem ipsum dolor sit amet</h2>
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
    <Layout>
      {page}
    </Layout>
  )
}

export default Team;