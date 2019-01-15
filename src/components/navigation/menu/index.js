import React from 'react'
import withWidth, { MEDIUM } from 'react-width'
import styled from 'styled-components'

import { LinkedLeanJSLogo } from '../../logos/LeanJS'
import DesktopMenu from './DesktopMenu'
import PhoneMenu from './PhoneMenu'
import { WHITE, SPACING_STANDARD } from '../../../config/styles'
import { styleChildLinkColor } from '../Link'

export { DesktopMenu, PhoneMenu }

const MenuContainer = styled.nav`
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 100%;
  padding: ${SPACING_STANDARD};
  position: relative;
  z-index: 3;
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 1rem 2rem;
  ${styleChildLinkColor(WHITE)};
`

const Menu = ({ width }) => {
  const canIGuessTheScreenSizeUsingJS = typeof window !== 'undefined'

  return (
    <MenuContainer>
      <LinkedLeanJSLogo />
      {canIGuessTheScreenSizeUsingJS && width <= MEDIUM ? (
        <PhoneMenu />
      ) : (
        <DesktopMenu />
      )}
    </MenuContainer>
  )
}

export default withWidth()(Menu)
