import {Link} from 'gatsby'
import React from 'react'
import HamburgerIcon from './icon/hamburger'

import {cn, buildImageObj} from '../lib/helpers'

import styles from './header.module.css'
import { imageUrlFor } from '../lib/image-url'

const Header = ({onHideNav, onShowNav, showNav, logo}) => (
  <div className={styles.root}>
    <div className={styles.wrapper}>
      <div className={styles.hamburgerWrapper}>
        <div className={styles.branding}>
          <Link to='/' className={styles.logo}>
            {logo && (
              <img 
                src={imageUrlFor(buildImageObj(logo))
                  .width(290)
                  .height(225)
                  .url()} 
                />
              )}
          </Link>
        </div>

        <button className={styles.toggleNavButton} onClick={showNav ? onHideNav : onShowNav}>
          <HamburgerIcon isActive={showNav} />
        </button>
      </div>

      <nav className={cn(styles.nav, showNav && styles.showNav)}>
        <ul>
          <li>
            <Link to='/portfolio'>Portfolio</Link>
          </li>
          <li>
            <Link to='/artwork'>Artwork</Link>
          </li>
          <li>
            <Link to='/about' className={styles.small}>about</Link>
          </li>
        </ul>
      </nav>
    </div>
  </div>
)

export default Header
