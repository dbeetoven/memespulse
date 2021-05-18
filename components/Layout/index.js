import React, { useState } from 'react'
import Link from 'next/link'

const Layout = (props) => {
  const { title, children } = props
  const [toggleNav, setToggleNav] = React.useState(false)
  return (
    <div className={`site-wrapper ${toggleNav ? `site-head-open` : ``}`}>
      <header className="site-head">
        <div id="menu" className="site-head-container">
          <a
            className="nav-burger"
            href={`#menu`}
            onClick={() => setToggleNav(!toggleNav)}
          >
            <div
              className="hamburger hamburger--collapse"
              aria-label="Menu"
              role="button"
              aria-controls="navigation"
            >
              <div className="hamburger-box">
                <div className="hamburger-inner" />
              </div>{' '}
              <div className="hamburger-text-menu-text hidden">Menu</div>
            </div>
          </a>
          <nav id="swup" className="site-head-left">
            <ul className="nav" role="menu">
              <li className="nav-home nav-current" role="menuitem">
                <Link  href="/" >Home</Link>
              </li>
              {/* <li className="nav-about" role="menuitem">
                <Link href="/about">
                  <a>About Us</a>
                </Link>
              </li> */}
            </ul>
          </nav>
          <div className="site-head-center">
            <a className="site-head-logo" to={`/`}>
              {title}
            </a>
          </div>
          <div className="site-head-right">
            <div className="social-links">
              <Link href="/https://twitter.com/EnergyDoge">
                <a>Twitter</a>
              </Link>
            </div>
          </div>
        </div>
      </header>
      <main id="site-main" className="site-main">
        <div id="swup" className="transition-fade">
          {children}
        </div>
      </main>
      <footer className="site-foot">
        &copy; {new Date().getFullYear()} 
        {/* <Link to={`/`}>{title}</Link>  */}
        &mdash;
        Built by{' '}
        
    
        <Link href="/">
        <a>
          @dropper
        </a>
        </Link>
      </footer>
    </div>
  )
}

export default Layout
