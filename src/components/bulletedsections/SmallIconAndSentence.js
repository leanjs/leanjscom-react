import React from 'react'
import styled from 'styled-components'

const Columns = styled.div`
  display: flex;
  align-items: center;

  div.small-icon-sentence {
    padding-left: 15px;
  }
`

const SmallIconAndSentence = ({ icon, ...props }) => (
  <Columns>
    {icon}
    <div className="small-icon-sentence">{props.sentence}</div>
  </Columns>
)

export default SmallIconAndSentence
