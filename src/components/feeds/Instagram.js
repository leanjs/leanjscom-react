import React from 'react'
import styled from 'styled-components'
import Grid, { Row, Col } from '../layout/Grid'
import Image from '../elements/Image'
import { arrayChunk } from '../utils'

const photos = [
  {
    url:
      'https://firebasestorage.googleapis.com/v0/b/leanjscom-web.appspot.com/o/team%2FLJS_Horacio.png?alt=media',
    alt: 'Horacio Hererra',
  },
  {
    url:
      'https://firebasestorage.googleapis.com/v0/b/leanjscom-web.appspot.com/o/team%2FLJS_Will.png?alt=media',
    alt: 'Will Voelcker',
  },
  {
    url:
      'https://firebasestorage.googleapis.com/v0/b/leanjscom-web.appspot.com/o/team%2FLJS_Lena.png?alt=media',
    alt: 'Lena Tregub',
  },
  {
    url:
      'https://firebasestorage.googleapis.com/v0/b/leanjscom-web.appspot.com/o/team%2FLJS_Francisco.png?alt=media',
    alt: 'Francisco Gomes',
  },
  {
    url:
      'https://firebasestorage.googleapis.com/v0/b/leanjscom-web.appspot.com/o/team%2FLJS_Luis.png?alt=media',
    alt: 'Luis Novella',
  },
]

const InstagramInner = styled(Grid)`
  background: none;
  width: 100%;
`
const InstagramRow = styled(Row)`
  ${props => (props.firstRow ? `margin-top:0` : null)};
`

const InstagramImage = styled(Image)`
  margin-top: ${props => (props.firstRow ? `2rem` : `0`)};
  padding-bottom: ${props => (props.lastRow ? `2rem` : `0`)};
`

const Instagram = ({ numPhotos = 6, photosPerRow = 3 }) => (
  <InstagramInner>
    {arrayChunk(photos.slice(0, numPhotos), photosPerRow).map((chunk, j) => (
      <InstagramRow
        firstRow={j === 0}
        key={`instagram-outer-${j}-${new Date().getTime()}`}
      >
        {chunk.map((photo, i) => (
          <Col
            xs={Math.floor(12 / photosPerRow)}
            key={`instagram-inner-${i}-${new Date().getTime()}`}
          >
            <InstagramImage
              firstRow={j === 0}
              lastRow={j === numPhotos / photosPerRow - 1}
              src={photo.url}
              alt={photo.alt}
            />
          </Col>
        ))}
      </InstagramRow>
    ))}
  </InstagramInner>
)

export default Instagram
