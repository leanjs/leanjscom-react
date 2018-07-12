import React from 'react'
import { elastic as SideMenu } from 'react-burger-menu'
import MenuToggleButton from './MenuToggleButton'
import styled from 'styled-components'
import Grid from '../layout/Grid'

// import FloatingMenuBtn from '../../../FloatingMenuBtn'
const Background = styled.div`
  background-color: black;
  display: flex;
  justify-content: flex-end;
`

const Menu = ({ isOpen, children, pageWrapId, width, toggleMenu }) => (
  <Background>
    <MenuToggleButton />
    <SideMenu right isOpen={isOpen} pageWrapId={pageWrapId || 'page-wrap'}>
      <a id="home" className="menu-item" href="/">
        Home
      </a>
      <a id="about" className="menu-item" href="/about">
        About
      </a>
      <a id="contact" className="menu-item" href="/contact">
        Contact
      </a>
    </SideMenu>
  </Background>
)

export default Menu
