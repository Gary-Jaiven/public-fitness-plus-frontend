import Layout from '../components/layout'
import styles from '../styles/Contact.module.css'

export default function Contact() {
  return (
    <div className={styles.contact_container}>
      Hello
    </div>
  )
}

Contact.getLayout = function getLayout(page){
  return (
    <Layout>
      {page}
    </Layout>
  )
}
