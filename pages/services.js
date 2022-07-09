import Layout from '../components/layout'
import styles from '../styles/Services.module.css'

export default function Services() {
  return (
    <div className={styles.services_container}>
      Hello
    </div>
  )
}

Services.getLayout = function getLayout(page){
  return (
    <Layout>
      {page}
    </Layout>
  )
}
