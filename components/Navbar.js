import Link from 'next/link'
import Image from 'next/image'
import styles from '../styles/Header.module.css'
import { useRouter } from 'next/router'


export default function Navbar({setShowMobileNav}){
    const router = useRouter() 

    const strokeColor = router.pathname === '/' ? '#757013' : '#F7FAE6'

    return <nav 
        className={styles.nav}  
        style={{    
            color: router.pathname === '/' ? '#454D39' : 'white'
        }}
    >
        <div className={styles.logo_container}>
            <Link href = "/" ><a><Image src={"/fitnessPlusCircleLogo-web.png"} alt="Fitness Plus Logo" width={75} height={75}/></a></Link>
            <div style={{textAlign: 'left'}}>“Strength For Life”</div>
        </div>
        <div className={styles.link_container}>
            <Link href="/"><a>Home</a></Link>
            <Link href="/about"><a>About Us</a></Link>
            <Link href="/services"><a>Services</a></Link>
            <Link href="/trainers"><a>Meet Your Trainers</a></Link>
            <Link href="/articles"><a>Articles</a></Link>
            <Link href="/contact"><a>Contact</a></Link>
        </div>
        <div className={styles.mobile_link_container} onClick={() => setShowMobileNav(true)}>
            <svg width="20" height="20" viewBox="0 0 24 30" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M1 3.47239L24.9984 3.06824" stroke={strokeColor} strokeWidth="2"/>
                <path d="M1 27.0682L24.9984 26.6641" stroke={strokeColor} strokeWidth="2"/>
                <path d="M1 14.8156H25" stroke={strokeColor} strokeWidth="2"/>
            </svg>
        </div>
    </nav>
}


