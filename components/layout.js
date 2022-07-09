import Head from 'next/head'
import Header from '../components/header'
import Footer from '../components/footer'

export default function Layout({ children }) {
  return (
    <>
      <Head>
        <title>Fitness Plus</title>
        <meta name="description" content="" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Header></Header>
      <main>{children}</main>
      <Footer></Footer>
    </>
  )
}