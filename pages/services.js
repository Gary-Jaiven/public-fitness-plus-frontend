import { useState, useEffect } from 'react'
import imageUrlBuilder from '@sanity/image-url'
import Layout from '../components/Layout'
import styles from '../styles/Services.module.css'
import SanityBlockContent from "@sanity/block-content-to-react"


const ServiceCard = (props) => {
  console.log(props)
  const [imageUrl, setImageUrl] = useState('') 

  useEffect(() => {
      const builder = imageUrlBuilder({
          projectId: '3tqn9fwp',
          dataset: 'production'
      });

      if(props.img !== null){
          setImageUrl(builder.image(props.img));
      }
  },[props.img]);

  return(
    <div className={styles.service_card}>
      {imageUrl && <img src={imageUrl} alt='Sheila' />}   
      <div className={styles.service_content}>
        <h3>{props.title}</h3>
        <p><SanityBlockContent blocks={props.desc}/></p>
        <button className="button" style={{margin: '1rem auto'}}>Learn more.</button>
      </div>
    </div>
  )
}

export const Services = ({results}) => {
  console.log(results)

  const serviceCards = results.result.map((service, index) => {
    return <>
      <ServiceCard 
        key="index" 
        img={service.image}
        title={service.title}
        desc={service.description}
        slug={service.slug}
      />
    </>
  })

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
      <section className='section_container_one_column'>
          <div className='section_content_one_column'>
            <h2 style={{textAlign: 'center'}}>Lorem ipsum dolor sit amet</h2>
            <p>Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem </p>
          </div>
        </section>
      <section className={styles.service_grid}>
       {serviceCards}   
      </section>
      <div className='section_container_one_column' style={{margin: '4rem 0rem'}}>
        <section className='section_content_one_column'>
          <div className='sub_title_black' style={{textAlign: 'center', marginBottom: '1rem'}}>Lorem ipsum dolor sit amet</div>
          <button className='button' style={{margin: '0 auto'}}>Schedule Your Free Consultation.</button>
        </section>
      </div>
    </div>
  )
}

export const getServerSideProps = async pageContext => {

  const query = encodeURIComponent(`*[ _type == "service"]`);
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

    
Services.getLayout = function getLayout(page){
  return (
    <Layout>
      {page}
    </Layout>
  )
}

export default Services;
