import React from 'react'
import SideMenu from 'react-burger-menu'
import MenuToggleButton from './MenuToggleButton'
import styled from 'styled-components'
import Grid from '../layout/Grid'

// import FloatingMenuBtn from '../../../FloatingMenuBtn'
const Background = styled.div`
  background-color: black;
`


const Menu = ({ isOpen, children, pageWrapId, width, toggleMenu}) => (
  <Grid>
    <Background>
      {/* { width === LARGE ? '' :
        <FloatingMenuBtn toggleMenu={ toggleMenu } />
      } */}
      <MenuToggleButton />
      <SideMenu.slide
         isOpen={ isOpen }
         pageWrapId={ pageWrapId || 'page-wrap' }
      >
        { children }
      </SideMenu.slide>
    </Background>
  </Grid>

)

export default Menu
