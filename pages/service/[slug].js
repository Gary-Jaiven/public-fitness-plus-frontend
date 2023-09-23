import { useState, useEffect } from 'react'
import Link from 'next/link'
import Layout from '../../components/Layout'
import SanityBlockContent from "@sanity/block-content-to-react"
import imageUrlBuilder from '@sanity/image-url'
import styles from '../../styles/Services.module.css'

export const Service = ({description, title}) => {
    
    return (<section className={styles.container__content__one_column} style={{backgroundColor: 'white', color: '#757013'}}>
            <div className={styles.container__content__one_column__content} style={{color: 'black', textAlign: 'right'}}>
                <Link href="/contact"><a><button className='button' style={{cursor: 'pointer'}}>Schedule Your Free Consultation</button></a></Link>
            </div>
            <div className={styles.container__content__one_column__content} style={{color: 'black'}}>
                <h3>{title}</h3>
                <SanityBlockContent blocks={description}/>
            </div>                
            <div style={{display: 'grid', justifyContent: 'center'}}>
                <Link href="/services"><a><button className='button' style={{cursor: 'pointer'}}>Back to Services</button></a></Link>
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

    if (!service) {
        return {
            notFound: true
        }
    } else {
        return {
            props: {
                description: service.description || null,
                title: service.title || null,
                metaTags: service.metaTags || null,
            }
        }
    }
};

Service.getLayout = function getLayout(page) {    
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


export default Service;