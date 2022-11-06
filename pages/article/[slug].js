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
                <h2>No memberships. No contracts.</h2>
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


export async function getStaticPaths() {
    const query = encodeURIComponent(`*[ _type == "post"]`);
    const url = `https://3tqn9fwp.api.sanity.io/v2021-10-21/data/query/production?query=${query}`;

    const results = await fetch(url).then(res => res.json());
    const posts = results.result


    const paths = posts.map((post) => ({
      params: { slug: post.slug.current }
    }))
  
    // fallback: false means pages that don’t have the
    // correct id will 404.
    return { paths, fallback: false }
  }


export const getStaticProps = async ({ params }) => {
    
    const query = encodeURIComponent(`*[ _type == "post"]`);
    const url = `https://3tqn9fwp.api.sanity.io/v2021-10-21/data/query/production?query=${query}`;

    const result = await fetch(url).then(res => res.json());
    const posts = result.result

    const post = posts.filter((post) => {
        return post.slug.current === params.slug
    })  

    if (!post) {
        return {
            notFound: true
        }
    } else {
        return {
            props: {
                body: post[0].body || null,
                title: post[0].title || null,
                metaTags: post[0].metaTags || null,
            }
        }
    }
};

Post.getLayout = function getLayout(page) {    
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


export default Post;