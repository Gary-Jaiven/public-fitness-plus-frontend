import Link from 'next/link'
import Image from 'next/image'
import Cards from '../components/Card'
import styles from '../styles/OurTeam.module.css'

export default function OurTeam() {
  return (
    <div className={styles.our_team_container}>
        <h1>Our Team</h1>
        <Cards />
    </div>
  )
}