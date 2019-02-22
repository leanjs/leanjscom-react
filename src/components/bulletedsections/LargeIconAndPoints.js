import React from 'react'
import styled from 'styled-components'

import CaseStudyBullet from '../bullets/CaseStudyBullet'
import { Ul, Li } from '../layout/Ul'
import {
  SPACING_STANDARD,
  SPACING_MEDIUM,
  SPACING_LARGE,
} from '../../config/styles'

const Columns = styled.div`
  display: flex;
  align-items: top;

  ul {
    margin-top: 0;
    margin-bottom: 0;
    padding-left: ${SPACING_STANDARD};
  }

  li {
    color: ${props => props.color || 'black'};
  }
`

const Points = styled(Ul)`
  margin-left: ${SPACING_LARGE};
`

const PointsHeading = styled(Li)`
  list-style: none;
  padding-left: 0;
  position: relative;
  left: -${parseInt(SPACING_STANDARD) + 1.45}rem;
  font-weight: bold;
`

const LargeIconAndPoints = ({ color, ...props }) => (
  <Columns color={color}>
    <CaseStudyBullet className="case-study-bullet" image={props.image} />
    <Points className="points">
      <PointsHeading>{props.heading}</PointsHeading>
      {props.points.map((point, i) => (
        <Li key={`large-icon-and-points-${i}-${new Date().getTime()}`}>
          {point}
        </Li>
      ))}
    </Points>
  </Columns>
)

export default LargeIconAndPoints
