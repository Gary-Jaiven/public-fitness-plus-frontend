import Layout from '../components/layout'
import styles from '../styles/Trainers.module.css'

export default function Trainers() {
  return (
    <div className={styles.trainers_container}>
      Hello
    </div>
  )
}

Trainers.getLayout = function getLayout(page){
  return (
    <Layout>
      {page}
    </Layout>
  )
}
