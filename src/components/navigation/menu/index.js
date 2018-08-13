import React from 'react'
import withWidth, { MEDIUM } from 'react-width'
import styled from 'styled-components'

import { LinkedLeanJSLogo } from '../../logos/LeanJS'
import DesktopMenu from './DesktopMenu'
import PhoneMenu from './PhoneMenu'
import { WHITE } from '../../../config/styles'
import { styleChildLinkColor } from '../Link'

export { DesktopMenu, PhoneMenu }

const MenuContainer = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 100%;
  padding: 20px;
  position: relative;
  z-index: 3;
  display: flex;
  align-items: center;
  justify-content: space-between;
  ${styleChildLinkColor(WHITE)};
`

const Menu = ({ width }) => {
  const canIGuessTheScreenSizeUsingJS = typeof window !== 'undefined'

  return (
    <MenuContainer>
      <LinkedLeanJSLogo />
      {canIGuessTheScreenSizeUsingJS && width < MEDIUM ? (
        <PhoneMenu />
      ) : (
        <DesktopMenu />
      )}
    </MenuContainer>
  )
}

export default withWidth()(Menu)
