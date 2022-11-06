import { useState, useEffect } from 'react'
import imageUrlBuilder from '@sanity/image-url'
import styles from '../styles/ServiceCard.module.css'
import SanityBlockContent from "@sanity/block-content-to-react"
import Link from 'next/link'

const StrongCard = (props) => {
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
      <section className={styles.strong__card}>
        {imageUrl && <img src={imageUrl} className={styles.strongImage} alt='Sheila' />}   
        <div className={styles.service__card__content}>
          <h3 style={{margin: '1rem 0'}}>{props.title}</h3>
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


  export default function StrongOverCard({strong}){
    const cards = strong.map((service, index) => {
        return <StrongCard 
            key={index}
            img={service.image}
            title={service.title}
            summary={service.summary}
            slug={service.slug}
        />
    })

    return(
        <div className={styles.strong__container}>
            {cards}
        </div>
    )
  }