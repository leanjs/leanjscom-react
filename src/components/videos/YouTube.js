import React from 'react'
import styled from 'styled-components'

// Responsive width youtube embed, from
// https://css-tricks.com/NetMag/FluidWidthVideo/Article-FluidWidthVideo.php
const YouTubeInner = styled.div`
  position: relative;
  padding-bottom: 56.25%; /* 16:9 */
  padding-top: 25px;
  height: 0;

  iframe {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
  }
`

const YouTube = ({ url }) => (
  <YouTubeInner>
    <iframe
      width="560"
      height="315"
      src={url}
      frameborder="0"
      allow="autoplay; encrypted-media"
      allowfullscreen
    />
  </YouTubeInner>
)

export default YouTube
