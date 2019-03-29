import { slide as Menu } from 'react-burger-menu'
import styled from 'styled-components'
import Link, { ScrollingLink } from '../Link'
import React from 'react'
import MenuData from './Menu.json'
import { LinkedLeanJSLogo } from '../../logos/LeanJS'
import ContactButton from '../../buttons/ContactButton'
import './PhoneMenu.css'
import { SPACING_SMALL, MUSTARD } from '../../../config/styles'

const Item = ({ children, scroll, ...rest }) => {
  const LinkType = scroll ? ScrollingLink : Link
  const props = scroll ? { smooth: true, duration: 500, ...rest } : rest
  return <LinkType {...props}>{children}</LinkType>
}

const PhoneMenuItem = styled(Item)`
  display: block;
  padding-top: ${SPACING_SMALL};
  padding-bottom: ${SPACING_SMALL};
  color: white;
`

const BurgerBar = styled.span`
  position: absolute;
  height: 20%;
  left: 0px;
  right: 0px;

  opacity: 1;
  background: white;
  &.first {
    top: 0%;
  }
  &.second {
    top: 40%;
  }
  &.third {
    top: 80%;
  }
`

const BurgerLabel = styled.span`
  margin-top: 36px;
  display: inline-block;
  color: white;
  font-size: 0.9rem;
  text-align: center;
`

PhoneMenuItem.displayName = 'PhoneMenuItem'

class PhoneMenu extends React.Component {
  state = {
    isOpen: false,
  }

  closeMenu = () => {
    this.setState({ isOpen: false })
  }

  render() {
    const { isOpen } = this.state
    const { closeMenu } = this

    return (
      <Menu
        isOpen={isOpen}
        customBurgerIcon={
          <span>
            <BurgerBar className="bm-burger-bars first" />
            <BurgerBar className="bm-burger-bars second" />
            <BurgerBar className="bm-burger-bars third" />
            <BurgerLabel>Menu</BurgerLabel>
          </span>
        }
      >
        <LinkedLeanJSLogo />
        {MenuData.map((item, i) => (
          <PhoneMenuItem onClick={closeMenu} key={i} to={item.to}>
            {item.text}
          </PhoneMenuItem>
        ))}
        <PhoneMenuItem
          onClick={closeMenu}
          key="phonemenu-contact"
          to="contact"
          scroll
        >
          Contact us
        </PhoneMenuItem>
      </Menu>
    )
  }
}

export default PhoneMenu
