import Image from 'next/image'
import Layout from '../components/Layout'

export default function About() {
  return (
    <>
      <div className='section_container_one_column'>
          <section className='section_content_one_column'>
            <h1 className='title' style={{textAlign: 'center', color: '#757015', fontWeight: 'normal'}}>
            Lorem ipsum dolor sit amet
            </h1>
          </section>
      </div>
      <div className='section_container_two_column'>
        <section className='section_content_two_column'>
          <div style={{display: 'grid', alignContent: 'center'}}>
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
          <div style={{display: 'grid', alignContent: 'center'}}>
            <h3>How it Works</h3>
            <p>Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et</p>
          </div>
        </section>
        <section className='section_content_two_column'>
          <div style={{display: 'grid', alignContent: 'center'}}>
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
      <div className='section_container_one_column' style={{backgroundColor: '#797A71', color: 'white'}}>
        <section className='section_content_one_column'>
            <div className='sub_title_white' style={{textAlign: 'center', marginBottom: '1rem'}}>Get One-of-a-Kind Care</div>
            <div style={{textAlign: 'center', fontSize: '1.5rem'}}>Fitness Plus is the longest-standing facility of its Kind in Central Kentucky</div>
        </section>
      </div>
      <div className='section_container_one_column' style={{margin: '4rem 0rem'}}>
        <section className='section_content_one_column'>
          <div className='sub_title_black' style={{textAlign: 'center', marginBottom: '1rem'}}>Lorem ipsum dolor sit amet</div>
          <button className='button' style={{margin: '0 auto'}}>Schedule Your Free Consultation.</button>
        </section>
      </div>
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
