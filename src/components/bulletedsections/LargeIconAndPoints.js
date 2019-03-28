import React from 'react'
import styled from 'styled-components'

import CaseStudyBullet from '../bullets/CaseStudyBullet'
import { Ul, Li } from '../layout/Ul'
import {
  SPACING_STANDARD,
  SPACING_MEDIUM,
  SPACING_LARGE,
  LIGHTGREY,
} from '../../config/styles'

const Columns = styled.div`
  display: flex;
  flex-direction: column;
  border: 1px solid ${LIGHTGREY}
  // align-items: top; ul {
    margin-top: 0;
    margin-bottom: 0;
    padding-left: ${SPACING_STANDARD};
  }

  li {
    color: ${props => props.color || 'black'};
  }
`

const Points = styled(Ul)``

const PointsHeading = styled(Li)`
  list-style: none;
  padding-left: 0;
  position: relative;
  ${props =>
    props.flushLeft
      ? `
    left: -${parseInt(SPACING_STANDARD)}rem;
  `
      : `
    left: -${parseInt(SPACING_STANDARD) + 1.45}rem;
  `};
  font-weight: bold;
`

const LargeIconAndPoints = ({ color, ...props }) => (
  <Columns color={color}>
    {props.image && (
      <CaseStudyBullet className="case-study-bullet" image={props.image} />
    )}
    <Points className="points" flushLeft={props.flushLeft}>
      <PointsHeading flushLeft={props.flushLeft}>{props.heading}</PointsHeading>
      {props.points.map((point, i) => (
        <Li key={`large-icon-and-points-${i}-${new Date().getTime()}`}>
          {point}
        </Li>
      ))}
    </Points>
  </Columns>
)

export default LargeIconAndPoints
