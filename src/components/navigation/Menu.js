import React from 'react'
import SideMenu from 'react-burger-menu'

// import FloatingMenuBtn from '../../../FloatingMenuBtn'

const Menu = ({ isOpen, children, pageWrapId, width, toggleMenu}) => (
  <div>
    {/* { width === LARGE ? '' :
      <FloatingMenuBtn toggleMenu={ toggleMenu } />
    } */}
    <SideMenu.slide
       isOpen={ isOpen }
       pageWrapId={ pageWrapId || 'page-wrap' }
    >
      { children }
    </SideMenu.slide>
  </div>
)

export default Menu
