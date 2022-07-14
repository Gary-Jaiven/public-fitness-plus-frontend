import '../styles/globals.css'
import navbar from './components/Navbar'
import CardGroup from './components/Card'
import GreySection from './components/GreySection'

function MyApp({ Component, pageProps }) {
  const getLayout = Component.getLayout || ((page) => page)

  return getLayout(<Component {...pageProps} />)
}

export default MyApp
