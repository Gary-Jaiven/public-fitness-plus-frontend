import styles from '../styles/Footer.module.css'

export default function Footer() {
  return (
    <>
      <section className={styles.footer_container}>
        <ul>
            <li>LOGO</li>
            <li>859.269.9280</li>
            <li>info@fitplusinc.com</li>
            <li>831 National Ave</li>
            <li>Lexington, Kentucky 40502</li>
        </ul>
      </section>
    </>
  )
}