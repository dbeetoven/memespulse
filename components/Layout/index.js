import React, { useState } from 'react'
import Head from 'next/head'
import Link from 'next/link'
import Navbar from '../Navbar'
import { Footer } from './Footer/Footer'
const Layout = ({ children }) => {
  const siteTitle = 'Memes Pulse'

  const [toggleNav, setToggleNav] = React.useState(false)
  return (
    <div className={`site-wrapper ${toggleNav ? `site-head-open` : ``}`}>
      <Head>
        <title>Memes Pulse</title>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
      </Head>
      <Navbar
        title={siteTitle}
        toggleNav={toggleNav}
        setToggleNav={setToggleNav}
      />
      <main id="site-main" className="site-main">
        <div id="swup" className="transition-fade">
          {children}
        </div>
      </main>
      <Footer title={siteTitle} />
    </div>
  )
}

export default Layout
