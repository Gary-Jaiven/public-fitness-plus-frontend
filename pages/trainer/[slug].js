import { useState, useEffect } from 'react'
import Layout from '../../components/Layout'
import SanityBlockContent from "@sanity/block-content-to-react"
import imageUrlBuilder from '@sanity/image-url'
import Image from 'next/image'
import Link from 'next/link'
import styles from '../../styles/Bio.module.css'

export const Trainer = ({firstName, lastName, youtube, quote, bio, image}) => {
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
                <div style={{display: 'grid', justifyContent: 'center'}}>
                    <Link href="/contact"><a><button className='button' style={{cursor: 'pointer'}}>Schedule Your Free Consultation</button></a></Link>
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



export async function getStaticPaths() {
    const query = encodeURIComponent(`*[ _type == "trainer"]`);
    const url = `https://3tqn9fwp.api.sanity.io/v2021-10-21/data/query/production?query=${query}`;

    const results = await fetch(url).then(res => res.json());
    const trainers = results.result


    const paths = trainers.map((trainer) => ({
      params: { slug: trainer.slug.current }
    }))
  
    // fallback: false means pages that don’t have the
    // correct id will 404.
    return { paths, fallback: false }
  }

export const getStaticProps = async ({ params }) => {

    const query = encodeURIComponent(`*[ _type == "trainer"]`);
    const url = `https://3tqn9fwp.api.sanity.io/v2021-10-21/data/query/production?query=${query}`;

    const result = await fetch(url).then(res => res.json());
    const trainers = result.result

    const trainer = trainers.filter((trainer) => {
        return trainer.slug.current === params.slug
    })

    if (!trainer) {
        return {
            notFound: true
        }
    } else {
        return {
            props: {
                bio: trainer[0].bio || null,
                lastName: trainer[0].lastName || null,
                firstName: trainer[0].firstName || null,
                image: trainer[0].image || null,
                youtube: trainer[0].youtube || null,
                quote: trainer[0].quote || null,
                metaTags: trainer[0].metaTags || null
            }
        }
    }
};

Trainer.getLayout = function getLayout(page) {
    const theMeta = page.props.metaTags ?? {title: 'no title', description: 'no description'}
    
    return (
      <Layout 
        pageTitle={theMeta.title}
        pageDescription={theMeta.description}
      >
        {page}
      </Layout>
    )
  }


export default Trainer;