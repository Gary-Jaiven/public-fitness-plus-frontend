import Head from 'next/head'
import Header from './Header'
import Footer from './Footer'

export default function Layout({ children }) {
  return (
    <>
      <Head>
        <title>Fitness Plus</title>
        <meta name="viewport" content="initial-scale=1.0, width=device-width" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
     <Header></Header>
      <main>{children}</main>
     <Footer></Footer>
    </>
  )
}
