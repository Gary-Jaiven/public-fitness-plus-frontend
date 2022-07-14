import styles from '../../styles/Home.module.css'

export default function Navbar(){
    

    return <nav className={styles.nav}>
        <a href = "/" className="siteLogo"><img src={"./fitnessPlusCircleLogo-web.png"} width={40} height={40}/></a>
        <ul>
            <li>
                <a href="/">Home</a>
            </li>
            <li>
                <a href="/about">About Us</a>
            </li>
            <li>
                <a href="/services">Services</a>
            </li>
            <li>
                <a href="/team">Meet Your Trainers</a>
            </li>
            <li>
                <a href="/contact">Contact</a>
            </li>
        </ul>
    </nav>
}