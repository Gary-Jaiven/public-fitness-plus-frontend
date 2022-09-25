import Head from 'next/head'
import Header from './Header'
import Footer from './Footer'

export default function Layout({ children }) {
  return (
    <>
      <Head>
        <title>Fitness Plus</title>
        <meta name="description" content="" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0, shrink-to-fit=no" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Header></Header>
      <main>{children}</main>
      <Footer></Footer>
    </>
  )
}
