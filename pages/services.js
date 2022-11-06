import Layout from '../components/Layout'
import Link from 'next/link'
import ServiceCards from '../components/ServiceCards'
import StrongOverCard from '../components/StrongOver50Card'
import styles from '../styles/Services.module.css'


export const Services = ({results}) => {
  const allServices = results.result.slice(1,)
  const strong = results.result.slice(0,1)
  
  
  return (
    <div>
      <section style={{height: '90vh'}}>
          <div style={{backgroundImage: "url(/Client_Malinda_ChrisWilliams.jpg)", backgroundSize: 'cover', height: '90vh'}}>
            <div style={{ background: "rgba(117,112,21,.9)", height: '90vh', display: 'grid', justifyContent: 'center', alignContent: 'center' }}>
              <div>
                <h1 className='title'>Services</h1>
              </div>
            </div>
          </div>
      </section>
      <section className={styles.container__content__one_column} style={{backgroundColor: 'white', color: '#757013'}}>
          <div className={styles.container__content__one_column__content}>
            <h2 style={{textAlign: 'center'}}>No memberships. No contracts.</h2>
            <p style={{textAlign: 'center'}}>At Fitness Plus, each and every client gets one-on-one personal training. One training session at a time, at the frequency of your choosing. Some clients train once a week and others once a day.</p>
          </div>
        </section>
      <section className={styles.container__content__one_column} style={{backgroundColor: 'white', color: '#757013'}}>
        <div className={styles.container__content__one_column__content}>
          <StrongOverCard strong={strong} />
        </div>
      </section>
      <section className={styles.container__content}>
          <ServiceCards allServices={allServices} />
      </section>
      <section className={styles.container__content__one_column} style={{backgroundColor: 'white', color: '#757013'}}>
        <div className={styles.container__content__one_column__content}>
          <div className='sub_title_black' style={{textAlign: 'center', marginBottom: '1rem'}}>Lorem ipsum dolor sit amet</div>
          <div style={{display: 'grid', justifyContent: 'center'}}>
            <Link href="/contact"><a><button className='button' style={{cursor: 'pointer'}}>Schedule Your Free Consultation</button></a></Link>
          </div>
        </div>
      </section>
    </div>
  )
}

export const getServerSideProps = async pageContext => {

  const query = encodeURIComponent(`*[ _type == "service"] | order(order)`);
  const url = `https://3tqn9fwp.api.sanity.io/v2021-10-21/data/query/production?query=${query}`;

  const result = await fetch(url).then(res => res.json());

  if (!result) {
      return {
          notFound: true
      }
  } else {
      return {
          props: {
              results: result,
          }
      }
  }
};

    
Services.getLayout = function getLayout(page){
  return (
    <Layout>
      {page}
    </Layout>
  )
}

export default Services;
