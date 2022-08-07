// import '../styles/design_tokens.css'
import '../styles/globals.css'
import '../styles/utilities.css'

function MyApp({ Component, pageProps }) {
  const getLayout = Component.getLayout || ((page) => page)

  return getLayout(<Component {...pageProps} />)
}

export default MyApp
