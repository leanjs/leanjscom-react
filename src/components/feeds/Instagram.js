import React from 'react'
import styled from 'styled-components'
import Grid, { Row, Col } from '../layout/Grid'
import { arrayChunk } from '../utils'

const photos = [
  {
    url:
      'https://firebasestorage.googleapis.com/v0/b/leanjscom-web.appspot.com/o/instagram%20feed%2FRichAlex_Helmet.jpg?alt=media',
  },
  {
    url:
      'https://firebasestorage.googleapis.com/v0/b/leanjscom-web.appspot.com/o/instagram%20feed%2FRichTeaching.jpg?alt=media',
  },
  {
    url:
      'https://firebasestorage.googleapis.com/v0/b/leanjscom-web.appspot.com/o/instagram%20feed%2FPaulWhiteboardCrazy.jpg?alt=media',
  },
  {
    url:
      'https://firebasestorage.googleapis.com/v0/b/leanjscom-web.appspot.com/o/instagram%20feed%2FHoracioTraining.jpg?alt=media',
  },
  {
    url:
      'https://firebasestorage.googleapis.com/v0/b/leanjscom-web.appspot.com/o/instagram%20feed%2FAlexCycling.jpg?alt=media',
  },
  {
    url:
      'https://firebasestorage.googleapis.com/v0/b/leanjscom-web.appspot.com/o/instagram%20feed%2FAlexRichThinking.jpg?alt=media',
  },
  {
    url:
      'https://firebasestorage.googleapis.com/v0/b/leanjscom-web.appspot.com/o/instagram%20feed%2FAlexLeanJSTShirt.jpg?alt=media',
  },
  {
    url:
      'https://firebasestorage.googleapis.com/v0/b/leanjscom-web.appspot.com/o/instagram%20feed%2FAlexRichCoding.jpg?alt=media',
  },
  {
    url:
      'https://firebasestorage.googleapis.com/v0/b/leanjscom-web.appspot.com/o/instagram%20feed%2FHoracioCoding.jpg?alt=media',
  },
  {
    url:
      'https://firebasestorage.googleapis.com/v0/b/leanjscom-web.appspot.com/o/instagram%20feed%2FPaulCardSort.jpg?alt=media',
  },
  {
    url:
      'https://firebasestorage.googleapis.com/v0/b/leanjscom-web.appspot.com/o/instagram%20feed%2FPaulTesting.jpg?alt=media',
  },
  {
    url:
      'https://firebasestorage.googleapis.com/v0/b/leanjscom-web.appspot.com/o/instagram%20feed%2FRicardoAlex.jpg?alt=media',
  },
  {
    url:
      'https://firebasestorage.googleapis.com/v0/b/leanjscom-web.appspot.com/o/instagram%20feed%2FRichCoding.jpg?alt=media',
  },
  {
    url:
      'https://firebasestorage.googleapis.com/v0/b/leanjscom-web.appspot.com/o/instagram%20feed%2FRichTeaching.jpg?alt=media',
  },
]

const InstagramInner = styled.div`
  background: white;
`

const Instagram = ({ numPhotos = 6, photosPerRow = 3 }) => (
  <InstagramInner>
    <Grid>
      {arrayChunk(photos.slice(0, numPhotos), photosPerRow).map((chunk, j) => (
        <Row key={`instagram-outer-${j}-${new Date().getTime()}`}>
          {chunk.map((photo, i) => (
            <Col
              xs={Math.floor(12 / photosPerRow)}
              key={`instagram-inner-${i}-${new Date().getTime()}`}
            >
              <img src={photo.url} />
            </Col>
          ))}
        </Row>
      ))}
    </Grid>
  </InstagramInner>
)

export default Instagram
