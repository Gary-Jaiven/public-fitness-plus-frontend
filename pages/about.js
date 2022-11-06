import Image from 'next/image'
import Link from 'next/link'
import styles from '../styles/Main.module.css'
import Layout from '../components/Layout'

export default function About() {
  return (
    <>
      <div className='section_container_one_column'>
          <section className='section_content_one_column'>
            <h1 className='title' style={{textAlign: 'center', color: '#757015', fontWeight: 'normal'}}>
            The Fitness Plus Story
            </h1>
          </section>
      </div>
      <div className='section_container_two_column'>
        <section className='section_content_two_column'>
          <div style={{display: 'grid', alignContent: 'center'}}>
            <h3>Welcome to Fitness Plus</h3>
            <p>Fitness Plus is a personal training and wellness company in Lexington, Kentucky, founded in 1995 by Sheila Kalas.</p>
            <p>Yes, there is a gym on National Avenue in Lexington, in the very cool Warehouse Block area of town, but it is not a typical gym. Fitness Plus is all about one-on-one sessions.</p>
            <p>Fitness Plus is the longest-standing facility of its kind in Central Kentucky. Come see why trainers and clients alike appreciate the attention to safety, cleanliness, professionalism, health and wellness.</p>
            <Link href="/contact"><a><button className={styles.container__button}>Schedule Your Free Consultation</button></a></Link>
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
            <p>No memberships. No contracts. We do not sell packages.</p>
            <p>Fitness Plus offers a variety of personal training and wellness services. We are committed to improving your health and fitness.</p>
            <p> Our company is designed to maximize your ability to reach the goals you communicate to us.</p>
            <p>As part of this design, Fitness Plus does not make you pay in advance for packages of training sessions. Research in the fitness industry shows that more than 50 percent of prepaid sessions are never used, which creates easy profits for those businesses but does not create results for the clients who purchase them. At Fitness Plus, you are billed monthly, only for the sessions you have completed. We believe our trainers should focus on training and not be forced to sell a quota of packages.</p>
            <p>A private consultation with one of our professionals is how we begin our relationship with you. We take pride in matching you with the proper trainer. After you have met with your trainer, been briefed on our business policies and have discussed all pertinent medical history, it is time to begin the design of your fitness program.</p>
          </div>
        </section>
        <section className='section_content_two_column'>
          <div style={{display: 'grid', alignContent: 'center'}}>
            <h3>Fitness Plus History and Philosophy</h3>
            <p>Fitness Plus was found in 1993 by Sheila Kalas, who had two specific and ambitious goals in mind. First and foremost, to provide easy access to the best in professional personal wellness services. If this was to be accomplished, Sheila knew the second goal had to be to provide highly educated wellness professionals with the very best environment possible for them to develop their careers.</p>
            <p>Fitness Plus is a company that understands what a “personal” wellness professional is. Our team of educated and degreed wellness professionals are dedicated to teaching our clients about wellness and guiding them toward a happier and healthier lifestyle. We give our clients our personal attention and develop programs geared toward their personal needs.</p>
            <p>Fitness Plus also believes in the intrinsic value of being a part of our community, in every aspect. Fitness Plus has actively developed positive and progressive relationships with area doctors, schools, rehab professionals, and educators. We have also developed a strong involvement in the community. Maintaining this open dialog and exchange of ideas strengthens our value to our clients and promotes awareness of wellness to the entire community.</p>
            <p>If you are searching for a solution and need clarity, we explain it this way: Fitness Plus is a fitness and wellness company that will listen to you.</p>
          </div>
          <div>
            <Image src={"/aboutImage2.png"} alt="A male trainer encourages his client" layout='responsive' width='500' height='365' />
          </div>
        </section>
      </div>
      <div className='section_container_one_column'>
        <section className='section_content_one_column'>
          <h2 style={{textAlign: 'center'}}>Careers at Fitness Plus</h2>
          <p>Fitness Plus is always willing to talk to dedicated and experienced personal trainers about a great career at Fitness Plus. If you have a degree in any of the exercise sciences or have graduated from an accredited personal training education program, and you believe in good business practices and helping people achieve their individual fitness goals, contact us to talk about a career at Fitness Plus.</p>
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
          <div style={{display: 'grid', justifyContent: 'center'}}>
            <Link href="/contact"><a><button className='button' style={{cursor: 'pointer'}}>Schedule Your Free Consultation</button></a></Link>
          </div>
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
