import React from 'react'
import styled from 'styled-components'
import {
  MEDIUMGREY,
  SPACING_MEDIUM,
  SPACING_XXLARGE,
} from '../../config/styles'
import { H3 } from '../text'

const getLineWidth = props => (props.wide ? SPACING_XXLARGE : SPACING_MEDIUM)

const getLeftPadding = props => `${parseFloat(getLineWidth(props)) + 1}rem`

const LineOuter = styled.div`
  padding-bottom: ${SPACING_MEDIUM};
`

const LineInner = styled.div`
  padding-left: ${props => getLeftPadding(props)};
  position: relative;

  h3 {
    display: inline-block;
  }
`

const LineHeading = styled(H3)`
  vertical-align: middle;
`

const LineActualLine = styled.div`
  ${props =>
    props.verticalCenter
      ? `
    position: absolute;
    left: 0;
    top: 50%;
  `
      : `
    margin-left: -${getLeftPadding(props)};
    margin-right: 1rem;
    display:inline-block;
    vertical-align:middle;
  `}

  width: ${props => getLineWidth(props)};
  height: 0.17rem;
  background: ${MEDIUMGREY};
`

const Line = ({ wide = false, verticalCenter = false, children, heading }) => {
  const ActualLine = props => (
    <LineActualLine verticalCenter={verticalCenter} wide={wide} />
  )
  return (
    <LineOuter>
      <LineInner wide={wide}>
        {heading ? (
          <LineHeading>
            <ActualLine />
            {heading}
          </LineHeading>
        ) : (
          <ActualLine />
        )}
        {children}
      </LineInner>
    </LineOuter>
  )
}

export default Line
