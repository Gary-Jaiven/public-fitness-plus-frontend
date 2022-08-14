import Layout from '../components/Layout'
import CardGroup from '../components/Card'

export default function Team() {
  return (
    <div>
        <section style={{height: '90vh'}}>
          <div style={{backgroundImage: "url(/Client_Malinda_ChrisWilliams.jpg)", backgroundSize: 'cover', height: '90vh'}}>
            <div style={{ background: "rgba(117,112,21,.9)", height: '90vh', display: 'grid', justifyContent: 'center', alignContent: 'center' }}>
              <div>
                <h1 className='title'>Meet Our Team</h1>
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
        <CardGroup />
        <section>
            <h2>Lorem ipsum dolor sit amet</h2>
            <button>Schedule Your Free Consultation.</button>
        </section>
    </div>
  )
}

Team.getLayout = function getLayout(page){
  return (
    <Layout>
      {page}
    </Layout>
  )
}