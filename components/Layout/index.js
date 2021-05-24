import React, { useState } from 'react'
import Link from 'next/link'
import Navbar from '../Navbar'
import { Footer } from './Footer/Footer'

const Layout = (props) => {
  const { title, children } = props
  const [toggleNav, setToggleNav] = React.useState(false)
  return (
    <div className={`site-wrapper ${toggleNav ? `site-head-open` : ``}`}>
      <Navbar title={title} toggleNav={toggleNav} setToggleNav={setToggleNav}/>
      <main id="site-main" className="site-main">
        <div id="swup" className="transition-fade">
          {children}
        </div>
      </main>
      <Footer title={title}/>
    </div>
  )
}

export default Layout
