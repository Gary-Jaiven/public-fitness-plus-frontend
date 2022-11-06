import { useState } from 'react'
import Head from 'next/head'
import Header from './Header'
import Footer from './Footer'
import MobileNav from './MobileNav'

export default function Layout({ children, pageTitle, pageDescription }) {
  const [showMobileNav, setShowMobileNav] = useState(false) 
  const title = pageTitle ?? 'NO TITLE'
  const description = pageDescription ?? 'NO DESCRIPTION'

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
        <title>{title}</title>
        <meta name="viewport" content="initial-scale=1.0, width=device-width" />
        <meta name={description} />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Header setShowMobileNav={setShowMobileNav}></Header>
      <main>{children}</main>
     <Footer></Footer>
    </>
  )
}
