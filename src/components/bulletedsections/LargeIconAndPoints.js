import React from 'react'
import styled from 'styled-components'

import Line from '../sections/Line'
import CaseStudyBullet from '../bullets/CaseStudyBullet'
import { Ul, Li } from '../layout/Ul'

const Columns = styled.div`
  display: flex;
  align-items: center;

  ul {
    margin-top: 0;
    margin-bottom: 0;
  }

  li {
    color: ${props => props.color || 'black'};
  }
`

const LargeIconAndPoints = ({ color, ...props }) => (
  <Line verticalCenter>
    <Columns color={color}>
      <CaseStudyBullet className="case-study-bullet" image={props.image} />
      <Ul className="points">{props.points.map(point => <Li>{point}</Li>)}</Ul>
    </Columns>
  </Line>
)

export default LargeIconAndPoints
