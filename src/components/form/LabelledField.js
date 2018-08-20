import React from 'react'
import styled from 'styled-components'

import { SPACING_STANDARD } from '../utils/index'
import TextArea from './TextArea'
import Checkbox from './Checkbox'
import Ul, { Li } from '../layout/Ul'

const LabelledFieldInner = styled.div`
  margin-bottom: ${SPACING_STANDARD};
`

const Field = props => {
  switch (props.fieldType) {
    case 'textarea':
      return <TextArea {...props}>{props.value}</TextArea>

    case 'checkboxes':
      return (
        <Ul unstyled>
          {props.options.map((option, i) => (
            <Li>
              <Checkbox
                id={`${props.id}-${i}`}
                onChange={props.onChange(option.name)}
                checked={option.checked}
                label={option.label}
              />
            </Li>
          ))}
        </Ul>
      )

    case 'singlecheckbox':
      return <Checkbox {...props} />

    default:
      console.log('bar')
      throw new Error('Unknown field type')
  }
}

const LabelledField = props => (
  <LabelledFieldInner>
    {props.fieldType === 'singlecheckbox' ? (
      <Field {...props} />
    ) : (
      <React.Fragment>
        <label for={props.fieldType == 'checkboxes' ? null : props.id}>
          {props.label}
        </label>
        <div>
          <Field {...props} />
        </div>
      </React.Fragment>
    )}
  </LabelledFieldInner>
)

export default LabelledField
