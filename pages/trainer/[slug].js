import { useState, useEffect } from 'react'
import Layout from '../../components/layout'
import SanityBlockContent from "@sanity/block-content-to-react"
import imageUrlBuilder from '@sanity/image-url'
import Image from 'next/image'
import styles from '../../styles/Bio.module.css'

export const Trainer = ({name, bio, image}) => {
    const [imageUrl, setImageUrl] = useState('')
    console.log(imageUrl)

    useEffect(() => {
        const builder = imageUrlBuilder({
            projectId: '3tqn9fwp',
            dataset: 'production'
        });

        if(image !== null){
            setImageUrl(builder.image(image));
        }
    },[image]);
    

    return (
        <div style={{height: '90vh'}} className={styles.profileContainer}>
            <div style={{backgroundImage: "url(/Client_Malinda_ChrisWilliams.jpg)", backgroundSize: '100% 100%'}}>
                <div className={styles.imgContainer}>
                    {imageUrl && <img src={imageUrl} className={styles.trainerImage} alt='Sheila' />}
                </div>
            </div>
            <div className={styles.bioContainer}>
                <div className={styles.bioContent}>
                    {name}
                    <SanityBlockContent blocks={bio}/>
                </div>
            </div>
        </div>
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

    if (!trainer) {
        return {
            notFound: true
        }
    } else {
        return {
            props: {
                bio: trainer.bio || null,
                name: trainer.name || null,
                image: trainer.image || null,
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