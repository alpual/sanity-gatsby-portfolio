import React from 'react'
import HamburgerIcon from './hamburger'

function Icon (symbol, showNav) {
  switch (symbol) {
    case 'hamburger':
      return <HamburgerIcon isActive={showNav} />
    default:
      return <span>Unknown icon: {symbol}</span>
  }
}

export default Icon
