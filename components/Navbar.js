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
            color: router.pathname === '/' ? 'black' : 'white'
        }}
    >
        <Link href = "/" className="siteLogo"><a><Image src={"/fitnessPlusCircleLogo-web.png"} alt="Fitness Plus Logo" width={75} height={75}/></a></Link>
        <ul>
            <li>
                <Link href="/"><a>Home</a></Link>
            </li>
            <li>
                <Link href="/about"><a>About Us</a></Link>
            </li>
            <li>
                <Link href="/services"><a>Services</a></Link>
            </li>
            <li>
                <Link href="/trainers"><a>Meet Your Trainers</a></Link>
            </li>
            <li>
                <Link href="/contact"><a>Contact</a></Link>
            </li>
        </ul>
    </nav>
}