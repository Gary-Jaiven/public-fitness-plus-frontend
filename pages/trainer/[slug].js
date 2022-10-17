import { useState, useEffect } from 'react'
import Layout from '../../components/Layout'
import SanityBlockContent from "@sanity/block-content-to-react"
import imageUrlBuilder from '@sanity/image-url'
import Image from 'next/image'
import styles from '../../styles/Bio.module.css'

export const Trainer = ({firstName, lastName, bio, image, youtube, quote}) => {
    console.log(quote)
    const [imageUrl, setImageUrl] = useState('')
    const youtubeEmbed = 'https://www.youtube.com/embed/' + youtube

    useEffect(() => {
        const builder = imageUrlBuilder({
            projectId: '3tqn9fwp',
            dataset: 'production'
        });

        if(image !== null){
            setImageUrl(builder.image(image));
        }
    },[image]);
    

    return (<>
        <div className={styles.bio__header}>
            <div className={styles.bio__image__container}>
            {imageUrl && <img src={imageUrl} className={styles.trainerImage} alt='Sheila' />}
            </div>
            <div className={styles.bio__content__container}>    
                <SanityBlockContent blocks={bio}/>
                <div className={styles.quote__container }>
                    {quote}
                </div>
            </div>
        </div>
        <section className={styles.videoContainer}>
            <div></div>
            <iframe className={styles.youtubeVideo} src={youtubeEmbed} title="YouTube video player" frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowFullScreen></iframe>
        </section>
    </>
    )
}


export const getServerSideProps = async pageContext => {
    const pageSlug = pageContext.query.slug;
    
    if (!pageSlug){
        return {
            notFound: true
        }
    }

    const query = encodeURIComponent(`*[ _type == "trainer" && slug.current == "${pageSlug}" ]`);
    const url = `https://3tqn9fwp.api.sanity.io/v2021-10-21/data/query/production?query=${query}`;

    const result = await fetch(url).then(res => res.json());
    const trainer = result.result[0]
    console.log(trainer)

    if (!trainer) {
        return {
            notFound: true
        }
    } else {
        return {
            props: {
                bio: trainer.bio || null,
                lastName: trainer.lastName || null,
                firstName: trainer.firstName || null,
                image: trainer.image || null,
                youtube: trainer.youtube || null,
                quote: trainer.quote || null
            }
        }
    }
};

Trainer.getLayout = function getLayout(page) {
    // const theMeta = page.props.children[2].props.metaTags ?? {title: 'no title', description: 'no description'}
    
    return (
      <Layout 
        // pageTitle={theMeta.title}
        // pageDescription={theMeta.description}
      >
        {page}
      </Layout>
    )
  }


export default Trainer;