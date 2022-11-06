import styles from '../styles/Contact.module.css'
import Layout from '../components/Layout'

export default function Contact(){
    return(<>
        <section className={styles.container__content__one_column} style={{backgroundColor: 'white', color: '#757013', height: '70vh'}}>
            <div className={styles.container__content__one_column__content}>
                <h2>Message successfully submitted</h2>
            </div>
        </section> 
    </>
    )
}


Contact.getLayout = function getLayout(page){
  return (
    <Layout
      pageTitle="Thank You"
      pageDescription="Thank you for contacting Fitness Plus in Lexington, Kentucky"
    >
      {page}
    </Layout>
  )
}
