import Layout from '../components/layout'
import styles from '../styles/Index.module.css'

export default function Index() {
  return (
    <div className={styles.home_container}>
      Hello
    </div>
  )
}

Index.getLayout = function getLayout(page){
  return (
    <Layout>
      {page}
    </Layout>
  )
}
