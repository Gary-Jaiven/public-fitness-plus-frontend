import Link from 'next/link'
import Image from 'next/image'
import styles from '../styles/Header.module.css'
import { useRouter } from 'next/router'


export default function Navbar({setShowMobileNav}){
    const router = useRouter() 

    return <nav 
        className={styles.nav}  
        style={{    
            backgroundColor: router.pathname === '/' ? '#F7FAE6' : '#757013',
            color: router.pathname === '/' ? '#454D39' : 'white'
        }}
    >
        <Link href = "/" ><a><Image src={"/fitnessPlusCircleLogo-web.png"} alt="Fitness Plus Logo" width={55} height={55}/></a></Link>
        <div className={styles.link_container}>
            <Link href="/"><a>Home</a></Link>
            <Link href="/about"><a>About Us</a></Link>
            <Link href="/services"><a>Services</a></Link>
            <Link href="/trainers"><a>Meet Your Trainers</a></Link>
            <Link href="/contact"><a>Contact</a></Link>
        </div>
        <div className={styles.mobile_link_container} onClick={() => setShowMobileNav(true)}>
            <svg viewBox="0 0 24 24" width="25px" height="25px" preserveAspectRatio="xMidYMid meet" focusable="false">
                <g className="style-scope yt-icon">
                    <path d="M21,6H3V5h18V6z M21,11H3v1h18V11z M21,17H3v1h18V17z" className="style-scope yt-icon"></path>
                </g>
            </svg>
        </div>
    </nav>
}