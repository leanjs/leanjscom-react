import React from 'react'
import styled from 'styled-components'
import Grid, { Row, Col } from '../layout/Grid'
import Image from '../elements/Image'
import { arrayChunk } from '../utils'

const photos = [
  {
    url:
      'https://firebasestorage.googleapis.com/v0/b/leanjscom-web.appspot.com/o/team%2FLJS_Horacio.png?alt=media',
    alt:
      'Rich and Alex (who is wearing a brightly coloured cycle helmet) on a remote video call',
  },
  {
    url:
      'https://firebasestorage.googleapis.com/v0/b/leanjscom-web.appspot.com/o/team%2FLJS_Will.png?alt=media',
    alt:
      'Paul, in front of a whiteboard with lots of writing and lines drawn on it, looking exasperated but having fun',
  },
  {
    url:
      'https://firebasestorage.googleapis.com/v0/b/leanjscom-web.appspot.com/o/team%2FLJS_Lena.png?alt=media',
    alt:
      'Horacio, taking a selfie, with a table-full of ReactJS Academy training students behind him eating lunch ',
  },
  {
    url:
      'https://firebasestorage.googleapis.com/v0/b/leanjscom-web.appspot.com/o/team%2FLJS_Francisco.png?alt=media',
    alt:
      'Alex, in cycle wear, looking anxiously at a fire warning sign behind him ',
  },
  {
    url:
      'https://firebasestorage.googleapis.com/v0/b/leanjscom-web.appspot.com/o/team%2FLJS_Eva.png?alt=media',
    alt:
      'Richard and Alex, looking intently at a laptop, trying to figure out a coding issue ',
  },
  {
    url:
      'https://firebasestorage.googleapis.com/v0/b/leanjscom-web.appspot.com/o/team%2FLJS_Luis.png?alt=media',
    alt:
      'Paul, usability testing on a tablet outside a pub with two men amongst',
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
