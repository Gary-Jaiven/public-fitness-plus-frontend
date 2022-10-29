import { useState, useEffect } from 'react'
import Layout from '../../components/Layout'
import SanityBlockContent from "@sanity/block-content-to-react"
import imageUrlBuilder from '@sanity/image-url'
import styles from '../../styles/Articles.module.css'
import Link from 'next/link'

export const Post = ({body, title}) => {
    
    return (<>
        <section className={styles.container__content__one_column} style={{backgroundColor: 'white', color: '#757013'}}>
            <div className={styles.container__content__one_column__content}>
                <h2>Lorem ipsum dolor sit amet</h2>
                <Link href='/contact'><button className='button' style={{margin: '0 auto'}}>Schedule Your Free Consultation.</button></Link>
            </div>
        </section>
        <section className={styles.container__content__one_column}>
            <div className={styles.container__content__one_column__content}>
                <h3>{title}</h3>
                <SanityBlockContent blocks={body}/>
            </div>
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

    const query = encodeURIComponent(`*[ _type == "post" && slug.current == "${pageSlug}" ]`);
    const url = `https://3tqn9fwp.api.sanity.io/v2021-10-21/data/query/production?query=${query}`;

    const result = await fetch(url).then(res => res.json());
    const post = result.result[0]
  

    if (!post) {
        return {
            notFound: true
        }
    } else {
        return {
            props: {
                body: post.body || null,
                title: post.title || null,
            }
        }
    }
};

Post.getLayout = function getLayout(page) {    
    return (
      <Layout >
        {page}
      </Layout>
    )
  }


export default Post;