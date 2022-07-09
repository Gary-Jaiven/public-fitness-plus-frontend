import Head from 'next/head'
import styles from '../styles/Header.module.css'

export default function Navigation() {
  return (
    <>
      <section className={styles.nav_container}>
        <div>LOGO</div>
        <ul>
            <li>Home</li>
            <li>About Us</li>
            <li>Services</li>
            <li>Meet Your Trainers</li>
            <li>Contact</li>
        </ul>
      </section>
    </>
  )
}