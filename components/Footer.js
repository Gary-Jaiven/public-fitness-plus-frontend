import styles from '../styles/Footer.module.css'
import Link from 'next/link'
import Image from 'next/image'

export default function Footer() {
  return (
    <footer className={styles.footer}>
      <div className={styles.footer_container}>
        <Link href = "/" className="siteLogo"><a><Image src={"/fitnessPlusCircleLogo-web.png"} alt="Fitness Plus Logo" width={75} height={75}/></a></Link>
        <ul>
          <li>859.269.9280</li>
          <li>info@fitplusinc.com</li>
          <li>831 National Ave</li>
          <li>Lexington, Kentucky 40502</li>
        </ul>
      </div>
    </footer>
  )
}
