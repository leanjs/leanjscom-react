import React from 'react'
import Ul, { Li } from '../layout/Ul'
import SmallIconAndSentence from '../bulletedsections/SmallIconAndSentence'
import Circle from '../elements/Circle'
import { LIGHTGREY } from '../../config/styles'

const CaseStudyExpoBullets = ({ content }) => (
  <Ul unstyled>
    {content.map(item => (
      <Li>
        <SmallIconAndSentence
          icon={
            <Circle size={60} bg={LIGHTGREY}>
              {item.point}
            </Circle>
          }
          sentence={item.description}
        />
      </Li>
    ))}
  </Ul>
)

export default CaseStudyExpoBullets
