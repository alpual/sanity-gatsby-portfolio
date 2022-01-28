import React from 'react'
import Header from './header'

import '../styles/layout.css'
import styles from './layout.module.css'

const Layout = ({
  children, onHideNav, onShowNav, showNav, siteTitle, logo, location
}) => {
  const pathName = location ? location.pathname : ''
  return (
    <div className={styles.pageWrapper} data-pathname={pathName}>
      <Header siteTitle={siteTitle} logo={logo} onHideNav={onHideNav} onShowNav={onShowNav} showNav={showNav} />
      <div className={styles.content}>{children}</div>
      <footer className={styles.footer}>
        <div className={styles.footerWrapper}>
          <div className={styles.siteInfo}>
            © {new Date().getFullYear()} Neil Nelson. Website built by <a href='http://paulweekswright.com' target='_blank'>Paul Wright</a>
          </div>
        </div>
      </footer>
    </div>
  )
}

export default Layout
