import React from 'react'
import withWidth, { MEDIUM } from 'react-width'
import styled from 'styled-components'

import { LeanJSLogo } from '../../logos/LeanJS'
import DesktopMenu from './DesktopMenu'
import PhoneMenu from './PhoneMenu'
import { EXTRADARKGREY } from '../../../config/styles'

export { DesktopMenu, PhoneMenu }

const MenuContainer = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 100%;
  padding: 20px;
  position: relative;
  z-index: 1;
  background-color: ${EXTRADARKGREY};
  display: flex;
  align-items: center;
  justify-content: space-between;
`

const Menu = ({ width }) => {
  const canIGuessTheScreenSizeUsingJS = typeof window !== 'undefined'

  return (
    <MenuContainer>
      <LeanJSLogo />
      {canIGuessTheScreenSizeUsingJS && width < MEDIUM ? (
        <PhoneMenu />
      ) : (
        <DesktopMenu />
      )}
    </MenuContainer>
  )
}

export default withWidth()(Menu)
