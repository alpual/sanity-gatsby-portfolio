import React from 'react'
import Header from './header'

import '../styles/layout.css'
import styles from './layout.module.css'

const Layout = ({children, onHideNav, onShowNav, showNav, siteTitle, logo}) => (
  <div className={styles.pageWrapper}>
    <Header siteTitle={siteTitle} logo={logo} onHideNav={onHideNav} onShowNav={onShowNav} showNav={showNav} />
    <div className={styles.content}>{children}</div>
    <footer className={styles.footer}>
      <div className={styles.footerWrapper}>
        <div className={styles.siteInfo}>
          © {new Date().getFullYear()} Neil Nelson. Website built by <a href="http://paulweekswright.com" target="_blank">Paul Wright</a>
        </div>
      </div>
    </footer>
  </div>
)

export default Layout
