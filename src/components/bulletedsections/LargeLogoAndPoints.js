import React from 'react'
import theme from '../../layouts/rebass-theme'
import styled from 'styled-components'

import Line from '../sections/Line'
import CaseStudyBullet from '../bullets/CaseStudyBullet'

const Columns = styled.div`
  display: flex;
  align-items: center;

  ul {
    margin-top: 0;
    margin-bottom: 0;
  }
`

const LargeLogoAndPoints = props => (
  <Line verticalCenter>
    <Columns>
      <CaseStudyBullet className="case-study-bullet" image={props.image} />
      <ul className="points">{props.points.map(point => <li>{point}</li>)}</ul>
    </Columns>
  </Line>
)

export default LargeLogoAndPoints
