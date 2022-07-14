import '../styles/globals.css'
import navbar from './components/Navbar'
import CardGroup from './components/Card'
import GreySection from './components/GreySection'



function MyApp({ Component, pageProps, cardGroup }) {
  return <Component {...pageProps} navbar CardGroup GreySection/>
}

export default MyApp
