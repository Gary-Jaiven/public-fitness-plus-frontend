import { useState, useEffect } from 'react'
import imageUrlBuilder from '@sanity/image-url'
import styles from '../styles/ServiceCard.module.css'
import SanityBlockContent from "@sanity/block-content-to-react"
import Link from 'next/link'

const ServiceCard = (props) => {
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
      <section className={styles.service__card}>
        {imageUrl && <img src={imageUrl} className={styles.servicesImage} alt='Sheila' />}   
        <div className={styles.service__card__content}>
          <h3>{props.title}</h3>
          <div><SanityBlockContent blocks={props.summary}/></div>
            <Link href={{
                pathname: '/service/[slug]',
                query: {slug: `${props.slug.current}`}
            }}>
                <a><button className={styles.service__card__button} style={{margin: '1rem auto', cursor: 'pointer'}}>Learn more.</button></a>
            </Link>
        </div>
      </section>
    )
  }


  export default function ServiceCards({allServices}){
    const cards = allServices.map((service, index) => {
        return <ServiceCard 
            key={index}
            img={service.image}
            title={service.title}
            summary={service.summary}
            slug={service.slug}
        />
    })

    return(
        <div className={styles.services__container}>
            {cards}
        </div>
    )
  }