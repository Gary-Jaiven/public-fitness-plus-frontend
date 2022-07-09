import Layout from '../components/layout'
import styles from '../styles/About.module.css'

export default function About() {
  return (
    <div className={styles.about_container}>
      Hello
    </div>
  )
}

About.getLayout = function getLayout(page){
  return (
    <Layout>
      {page}
    </Layout>
  )
}
