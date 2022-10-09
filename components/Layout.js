import { useState } from 'react'
import Head from 'next/head'
import Header from './Header'
import Footer from './Footer'
import MobileNav from './MobileNav'

export default function Layout({ children }) {
  const [showMobileNav, setShowMobileNav] = useState(false) 

  if(showMobileNav){
    return (
      <>
        <MobileNav setShowMobileNav={setShowMobileNav} />
      </>
    )
  }


  return (
    <>
      <Head>
        <title>Fitness Plus</title>
        <meta name="viewport" content="initial-scale=1.0, width=device-width" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Header setShowMobileNav={setShowMobileNav}></Header>
      <main>{children}</main>
     <Footer></Footer>
    </>
  )
}
