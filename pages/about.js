import Image from 'next/image'
import Layout from '../components/layout'

export default function About() {
  return (
    <>
      <div className='section_container_one_column'>
          <section className='section_content_one_column'>
            <h1 style={{textAlign: 'center'}}>
            Lorem ipsum dolor sit amet
            </h1>
          </section>
      </div>
      <div className='section_container_two_column'>
        <section className='section_content_two_column'>
          <div>
            <h3>Welcome to Fitness Plus</h3>
            <p>Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et</p>
          </div>
          <div>
            <Image src={"/aboutImage1.png"} alt="Sheila Kalas stands in front of the Fitness Plus Personal Training Studio" layout='responsive' width='500' height='365'/>
          </div>
        </section>
        <section className='section_content_two_column'>
          <div>
            <Image src={"/aboutImage2.png"} alt="A female trainer in Lexington, KY helps with a Strong Over 50 client" layout='responsive' width='500' height='365' />
          </div>
          <div>
            <h3>How it Works</h3>
            <p>Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et</p>
          </div>
        </section>
        <section className='section_content_two_column'>
          <div>
            <h3>Fitness Plus History and Philosophy</h3>
            <p>Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et</p>
          </div>
          <div>
            <Image src={"/aboutImage2.png"} alt="A male trainer encourages his client" layout='responsive' width='500' height='365' />
          </div>
        </section>
      </div>
      <div className='section_container_one_column'>
        <section className='section_content_one_column'>
          <h2 style={{textAlign: 'center'}}>Careers at Fitness Plus</h2>
          <p>Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et</p>
        </section>
      </div>
        <section >
            <h2>Get One-of-a-Kind Care</h2>
            <h4>Fitness Plus is the longest-standing facility of its Kind in Central Kentucky</h4>
        </section>
      <section>
          <h2>Lorem ipsum dolor sit amet</h2>
          <button>Schedule Your Free Consultation.</button>
      </section>
    </>
  )
}

About.getLayout = function getLayout(page){
  return (
    <Layout>
      {page}
    </Layout>
  )
}
