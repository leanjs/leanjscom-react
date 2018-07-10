import React from 'react'

import {
  Card,
  Box,
  BackgroundImage,
  Subhead,
  Small
} from 'rebass'

const RebassTestCard = () => (
  <Box width={256}>
    <Card>
      <BackgroundImage src="https://images.unsplash.com/photo-1462331940025-496dfbfc7564?w=2048&q=20" />
      <Box p={2}>
        <Subhead>Rebass Test Card</Subhead>
        <Small>Small meta text</Small>
      </Box>
    </Card>
  </Box>
)

export default RebassTestCard
