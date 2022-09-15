import Layout from '../components/Layout'
import styles from '../styles/Services.module.css'
import Image from 'next/image'

export default function Services() {
  return (
    <div>
      <section style={{height: '90vh'}}>
          <div style={{backgroundImage: "url(/Client_Malinda_ChrisWilliams.jpg)", backgroundSize: 'cover', height: '90vh'}}>
            <div style={{ background: "rgba(117,112,21,.9)", height: '90vh', display: 'grid', justifyContent: 'center', alignContent: 'center' }}>
              <div>
                <h1 className='title'>Services</h1>
              </div>
            </div>
          </div>
      </section>
      <section className='section_container_one_column'>
          <div className='section_content_one_column'>
            <h2 style={{textAlign: 'center'}}>Lorem ipsum dolor sit amet</h2>
            <p>Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem </p>
          </div>
        </section>
      <section className='section_container_two_column'>
        <div className='section_content_two_column'>
          <div className={styles.servicesBigCard}>
            <Image src={"/aboutImage2.png"} alt="Sheila Kalas stands in front of the Fitness Plus Personal Training Studio" layout='responsive' width='2685' height='1984'/>
            <h3 className={styles.servicesCardTitle}>Strong Over 50</h3>
            <p className={styles.servicesBigCardBody}>Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et</p>
            <button className="button" style={{margin: '1rem auto'}}>Learn more.</button>
          </div>
          <div className={styles.servicesBigCard}>
            <Image src={"/aboutImage2.png"} alt="Sheila Kalas stands in front of the Fitness Plus Personal Training Studio" layout='responsive' width='2685' height='1984'/>
            <h3 className={styles.servicesCardTitle}>Personal Training</h3>
            <p className={styles.servicesBigCardBody}>Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et</p>
            <button className="button" style={{margin: '1rem auto'}}>Learn more.</button>
          </div>
          <div className={styles.servicesBigCard}>
            <Image src={"/aboutImage2.png"} alt="Sheila Kalas stands in front of the Fitness Plus Personal Training Studio" layout='responsive' width='2685' height='1984'/>
            <h3 className={styles.servicesCardTitle}>Therapeutic Massage</h3>
            <p className={styles.servicesBigCardBody}>Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et</p>
            <button className="button" style={{margin: '1rem auto'}}>Learn more.</button>
          </div>
          <div className={styles.servicesBigCard}>
            <Image src={"/aboutImage2.png"} alt="Sheila Kalas stands in front of the Fitness Plus Personal Training Studio" layout='responsive' width='2685' height='1984'/>
            <h3 className={styles.servicesCardTitle}>Injury Rehab Services</h3>
            <p className={styles.servicesBigCardBody}>Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et</p>
            <button className="button" style={{margin: '1rem auto'}}>Learn more.</button>
          </div>
          <div className={styles.servicesBigCard}>
            <Image src={"/aboutImage2.png"} alt="Sheila Kalas stands in front of the Fitness Plus Personal Training Studio" layout='responsive' width='2685' height='1984'/>
            <h3 className={styles.servicesCardTitle}>For Fitness Professionals</h3>
            <p className={styles.servicesBigCardBody}>Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et</p>
            <button className="button" style={{margin: '1rem auto'}}>Learn more.</button>
          </div>
        </div>
      </section>
      <div className='section_container_one_column' style={{margin: '4rem 0rem'}}>
        <section className='section_content_one_column'>
          <div className='sub_title_black' style={{textAlign: 'center', marginBottom: '1rem'}}>Lorem ipsum dolor sit amet</div>
          <button className='button' style={{margin: '0 auto'}}>Schedule Your Free Consultation.</button>
        </section>
      </div>
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
