import Navbar from './Navbar'
import styles from '../styles/Header.module.css'
import { useRouter } from 'next/router'


export default function Navigation() {
  const router = useRouter()

  return (
    <div 
    className={ 
      styles.header
    }
    style={{    
      backgroundColor: router.pathname === '/' ? '#F7FAE6' : '#757013'
    }}>
      <Navbar />
    </div>
  )
}
