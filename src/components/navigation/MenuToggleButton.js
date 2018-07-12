import React from 'react'
import styled from 'styled-components'

const defaultWidth = 37.6

const getWidth = (proportion = 1) => props =>
  `${(props.width || defaultWidth) * proportion}px`

const Section = styled.div`
  width: ${getWidth(0.64)};
  height: ${getWidth(0.09)};
  margin: 0 auto ${getWidth(0.09)} auto;
  background-color: #ffffff;
`

const MenuText = styled.div`
  height: ${getWidth(0.48)};
  font-family: Barlow, sans;
  font-size: ${getWidth(0.3)};
  font-weight: 500;
  font-style: normal;
  font-stretch: normal;
  line-height: normal;
  letter-spacing: ${getWidth(0.016)};
  text-align: center;
  color: #ffffff;
  margin-top: ${getWidth(0.18)};
`

const MenuButtonOuter = styled.button`
  text-align: right;
  width: ${getWidth()};
  background: none;
  padding: 0;
  border: none;
  cursor: pointer;
  outline: none;
`

const MenuToggleButton = props => (
  <MenuButtonOuter>
    <Section />
    <Section />
    <Section />
    <MenuText>Menu</MenuText>
  </MenuButtonOuter>
)

export default MenuToggleButton
