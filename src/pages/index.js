import React from 'react'
import Link from 'gatsby-link'

import {
  Card,
  Box,
  BackgroundImage,
  Subhead,
  Small
} from 'rebass'

const IndexPage = () => (
  <div>
    <h1>Hi people</h1>
    <p>Welcome to your new Gatsby site.</p>
    <p>Now go build something great.</p>

	<Box width={256}>
	  <Card>
	    <BackgroundImage src="https://images.unsplash.com/photo-1462331940025-496dfbfc7564?w=2048&q=20" />
	    <Box p={2}>
	      <Subhead>Rebass Test Card</Subhead>
	      <Small>Small meta text</Small>
	    </Box>
	  </Card>
	</Box>

    <Link to="/page-2/">Go to page 2</Link>
  </div>
)

export default IndexPage
