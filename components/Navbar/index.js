import Link from 'next/link';

const Navbar =({title, setToggleNav, toggleNav})=>{
    return(
        <>
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
                <Link  href="/" ><a className="text-title">Home</a></Link>
              </li>
              <li className="nav-about" role="menuitem">
                <Link href="/about">
                  <a className="text-title">About</a>
                </Link>
              </li>
            </ul>
          </nav>
          <div className="site-head-center">
            <a className="site-head-logo text-title" to={`/`}>
              {title}
            </a>
          </div>
          <div className="site-head-right">
            <div className="social-links">
              <Link href="https://twitter.com/EnergyDoge" >
                <a className="text-title">Twitter</a>
              </Link>
            </div>
          </div>
        </div>
      </header>
        </>
    )
}

export default Navbar;
