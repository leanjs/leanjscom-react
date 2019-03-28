import React from 'react'
import styled from 'styled-components'
import {
  BLACK,
  FONT_FAMILY,
  WHITE,
  UXGREEN,
  DARKGREY,
} from '../../config/styles'
import { SCREEN_XS_MAX, SCREEN_SM_MIN } from '../utils'

const Ul = styled.ul`
  margin: 0 0 32px 0;
  padding: 0;
  a {
    cursor: pointer;
  }
  > li {
    list-style-type: none;
    display: inline-block;
    span,
    a {
      display: block;
      padding: 8px;
      ${FONT_FAMILY};
    }
  }
  @media (min-width: ${SCREEN_SM_MIN}) {
    li {
      margin: 0 8px;
      :last-child {
        margin-right: 0;
      }
      :first-child {
        margin-left: 0;
      }
    }
  }
  @media (max-width: ${SCREEN_XS_MAX}) {
    li {
      display: block;
    }
  }
`

export const TabList = ({ active, setActive, onChange, children }) => {
  const compound = React.Children.map(children, child =>
    React.cloneElement(child, {
      isActive: child.props.name === active,
      onClick: child.props.name
        ? () => {
            onChange && onChange(child.props.name)
            setActive(child.props.name)
          }
        : undefined,
    })
  )
  return <Ul>{compound}</Ul>
}

TabList.displayName = 'TabList'

const Li = styled.li`
  ${props =>
    props.isActive
      ? `
      @media (min-width: ${SCREEN_SM_MIN}) {
        position:relative;
        text-align:center;
      }
      @media (max-width: ${SCREEN_XS_MAX}) {
        border: 1px solid ${UXGREEN};
      }
      background: ${DARKGREY};
      color: ${WHITE};
    `
      : ''};
`
const A = styled.a`
  border-bottom: 3px solid ${BLACK};
`

export const TabItem = ({ children, isActive, onClick, name, ...props }) => (
  <Li isActive={isActive} name={name} key={name}>
    <A isActive={isActive} name={name} {...props} onClick={onClick}>
      {children}
    </A>
  </Li>
)
TabItem.displayName = 'TabItem'

export const TabContent = ({ isActive, children }) =>
  React.Children.map(children, child => {
    return React.cloneElement(child, {
      children: isActive ? child : undefined,
    })
  })

TabContent.displayName = 'TabContent'

class Tabs extends React.Component {
  constructor(props) {
    super(props)

    this.state = {
      active: props.active,
    }
  }

  setActive = active => {
    this.setState({ active })
  }

  render() {
    const { active } = this.state
    const { setActive } = this
    const { onChange = setActive } = this.props

    return React.Children.map(this.props.children, child => {
      const { name } = child.props

      return React.cloneElement(child, {
        active: name ? undefined : active,
        isActive: name ? name === active : undefined,
        setActive,
        onChange,
      })
    })
  }
}

export default Tabs
