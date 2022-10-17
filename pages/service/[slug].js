import { useState, useEffect } from 'react'
import Layout from '../../components/Layout'
import SanityBlockContent from "@sanity/block-content-to-react"
import imageUrlBuilder from '@sanity/image-url'
import styles from '../../styles/Services.module.css'

export const Service = ({description, title}) => {
    // const [imageUrl, setImageUrl] = useState('')
    // const youtubeEmbed = 'https://www.youtube.com/embed/' + youtube

    // useEffect(() => {
    //     const builder = imageUrlBuilder({
    //         projectId: '3tqn9fwp',
    //         dataset: 'production'
    //     });

    //     if(image !== null){
    //         setImageUrl(builder.image(image));
    //     }
    // },[image]);
    

    return (<section className={styles.container__content__one_column} style={{backgroundColor: 'white', color: '#757013'}}>
            <div className={styles.container__content__one_column__content} style={{color: 'black'}}>
                <h3>{title}</h3>
                <SanityBlockContent blocks={description}/>
            </div>
        </section>
    )
}


export const getServerSideProps = async pageContext => {
    const pageSlug = pageContext.query.slug;
    
    if (!pageSlug){
        return {
            notFound: true
        }
    }

    const query = encodeURIComponent(`*[ _type == "service" && slug.current == "${pageSlug}" ]`);
    const url = `https://3tqn9fwp.api.sanity.io/v2021-10-21/data/query/production?query=${query}`;

    const result = await fetch(url).then(res => res.json());
    const service = result.result[0]
    console.log(service)

    if (!service) {
        return {
            notFound: true
        }
    } else {
        return {
            props: {
                description: service.description || null,
                title: service.title || null,
            }
        }
    }
};

Service.getLayout = function getLayout(page) {    
    return (
      <Layout >
        {page}
      </Layout>
    )
  }


export default Service;