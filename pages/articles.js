import Layout from '../components/Layout'
import styles from '../styles/Articles.module.css'
import Link from 'next/link'


export const Articles = ({results}) => {

  const articleList = results.result.map((item, index) => {
    return (
       <div key={index} className={styles.articleItem}>
        <Link href={`/article/${item.slug.current}`}><a className={styles.articleTitle}>{item.title}</a></Link>
      </div>
    )
  })

  
  return (
    <div>
      <section className={styles.container__content__one_column} style={{backgroundColor: 'white', color: '#757013'}}>
          <div className={styles.container__content__one_column__content}>
            <h2 style={{textAlign: 'center'}}>Articles</h2>
            <div className={styles.list}>
              {articleList}
            </div>
          </div>
        </section>
    </div>
  )
}

export const getStaticProps = async pageContext => {

  const query = encodeURIComponent(`*[ _type == "post"]`);
  const url = `https://3tqn9fwp.api.sanity.io/v2021-10-21/data/query/production?query=${query}`;

  const result = await fetch(url).then(res => res.json());

  if (!result) {
      return {
          notFound: true
      }
  } else {
      return {
          props: {
              results: result
          }
      }
  }
};

    
Articles.getLayout = function getLayout(page){
  return (
    <Layout
      pageTitle="Articles"
      pageDescription="Learn from Fitness Plus trainers on how to live healthy and stay fit"
    >
      {page}
    </Layout>
  )
}

export default Articles;
