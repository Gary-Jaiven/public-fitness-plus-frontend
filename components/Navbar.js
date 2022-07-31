import Link from 'next/link'
import Image from 'next/image'
import styles from '../styles/Header.module.css'
import { useRouter } from 'next/router'


export default function Navbar(){
    const router = useRouter() 

    return <nav 
        className={styles.nav}  
        style={{    
            backgroundColor: router.pathname === '/' ? '#F7FAE6' : '#757013',
            color: router.pathname === '/' ? '#454D39' : 'white'
        }}
    >
        <Link href = "/" ><a><Image src={"/fitnessPlusCircleLogo-web.png"} alt="Fitness Plus Logo" width={75} height={75}/></a></Link>
        <div className={styles.link_container}>
            <Link href="/"><a>Home</a></Link>
            <Link href="/about"><a>About Us</a></Link>
            <Link href="/services"><a>Services</a></Link>
            <Link href="/trainers"><a>Meet Your Trainers</a></Link>
            <Link href="/contact"><a>Contact</a></Link>
        </div>
        <div className={styles.mobile_link_container}>
            Image
        </div>
    </nav>
}