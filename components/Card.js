import { useState, useEffect } from 'react'
import imageUrlBuilder from '@sanity/image-url'
import styles from '../styles/TeamCard.module.css'
import Link from 'next/link'

export default function CardGroup({results}){

    const cards = results.result.map((trainer, index) => {
        return <Card
            key="index" 
            img={trainer.image}
            memberName={trainer.firstName + ' ' + trainer.lastName}
            jobTitle={trainer.jobTitle}
            firstName={trainer.firstName}
            slug={trainer.slug}
        />
    })

    return(
        <div className={styles.team__container}>
            {cards}
        </div>
    )
}

const Card = (props) => {
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
        <div className={styles.trainer__container}>
            <div>
                {imageUrl && <img src={imageUrl} className={styles.cardImage} alt='Sheila' />}   
            </div>
            <div className={styles.trainer__content}>
                <div className={styles.trainer__content__name}>{props.memberName}</div>
                <div>{props.jobTitle}</div>
                <div className={styles.trainer__content__button}>
                    <Link href={{
                        pathname: '/trainer/[slug]',
                        query: {slug: `${props.slug.current}`}
                    }}>
                        <a><button className={styles.cardButton}>Learn more about {props.firstName}</button></a>
                    </Link>
                </div>
            </div>
        </div>
    )
}