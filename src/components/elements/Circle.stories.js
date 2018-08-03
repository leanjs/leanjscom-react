import React from 'react'
import { storiesOf } from '@storybook/react'
import Circle from './Circle'

storiesOf('Circle', module)
  .add('Basic', () => <Circle bg="white" color="blue" />)
  .add('Alternative sizes', () => <Circle bg="white" color="blue" size="60" />)
  .add('Border', () => (
    <Circle bg="white" color="blue" size="60" hasBorder={true} />
  ))
  .add('Background image', () => (
    <Circle
      bg="white"
      color="blue"
      size="60"
      hasBorder={true}
      backgroundImage="data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0iMS4wIiBzdGFuZGFsb25lPSJubyI/Pgo8c3ZnIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyIgd2lkdGg9IjI2MCIgaGVpZ2h0PSIyNDUiPgo8cGF0aCBkPSJtNTUsMjM3IDc0LTIyOCA3NCwyMjhMOSw5NmgyNDAiLz4KPC9zdmc+"
    />
  ))
