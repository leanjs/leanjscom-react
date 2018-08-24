import React from 'react'
import styled from 'styled-components'
import Grid, { Row, Col } from '../layout/Grid'
import { arrayChunk } from '../utils'

const photos = [
  {
    url:
      'https://scontent-lhr3-1.cdninstagram.com/vp/00abce8eb6782fcd2891a2fe27dbffcd/5C084A5B/t51.2885-15/e35/s320x320/29738236_457723861297539_5595120386887909376_n.jpg',
  },
  {
    url:
      'https://scontent-lhr3-1.cdninstagram.com/vp/066aecef1a9df805bd00fcdd21cb7e8f/5C0E77F1/t51.2885-15/e35/s320x320/38016803_245346089634557_3961746639206481920_n.jpg',
  },
  {
    url:
      'https://scontent-lhr3-1.cdninstagram.com/vp/070fb18b5b34921c631a5c7bf046615e/5C0498A0/t51.2885-15/e35/s320x320/37973298_222617178457316_2658193050911637504_n.jpg',
  },
  {
    url:
      'https://scontent-lhr3-1.cdninstagram.com/vp/14e892c7be267bc3d05afebb2159be6e/5C02D6E4/t51.2885-15/e35/s320x320/37614632_1948487915449902_5441839721422520320_n.jpg',
  },
  {
    url:
      'https://scontent-lhr3-1.cdninstagram.com/vp/2501669dd9d43eb07c1dd2d4dda4f912/5BEFBDB9/t51.2885-15/e35/s320x320/37984976_265764874027857_4501463198968315904_n.jpg',
  },
  {
    url:
      'https://scontent-lhr3-1.cdninstagram.com/vp/3d289944a09443aeb4d16a4b4bcb3276/5B73BB47/t51.2885-15/e15/s320x320/37717447_710049096001102_5287134303635898368_n.jpg',
  },
  {
    url:
      'https://scontent-lhr3-1.cdninstagram.com/vp/50c32813802fc181955d2303ebf9a9cb/5C10C035/t51.2885-15/e35/s320x320/36149293_486914738396522_7120285903880192000_n.jpg',
  },
  {
    url:
      'https://scontent-lhr3-1.cdninstagram.com/vp/5bb5c9fda762be93ab36c1ba3ae1ff6d/5C01C013/t51.2885-15/e35/s320x320/37715992_2135225263427184_7512387736213389312_n.jpg',
  },
  {
    url:
      'https://scontent-lhr3-1.cdninstagram.com/vp/63a7a62c09885511ae2a3b07986b4113/5BEF607B/t51.2885-15/e35/s320x320/38842836_294130388011500_4639737639543504896_n.jpg',
  },
  {
    url:
      'https://scontent-lhr3-1.cdninstagram.com/vp/6bee9151cd46f9f49b391cebde03d534/5BFD6351/t51.2885-15/e35/s320x320/38097141_292419898208621_3791274035698991104_n.jpg',
  },
  {
    url:
      'https://scontent-lhr3-1.cdninstagram.com/vp/6c9a6308290744733dee29f4d49a0283/5B7393C3/t51.2885-15/e15/s320x320/37969416_242555003044139_2037969107302744064_n.jpg',
  },
  {
    url:
      'https://scontent-lhr3-1.cdninstagram.com/vp/79aa9d7c01867b5bdd4f663bbbd2e908/5BEF12D9/t51.2885-15/e35/s320x320/37520543_1205345362956531_7510931617745993728_n.jpg',
  },
  {
    url:
      'https://scontent-lhr3-1.cdninstagram.com/vp/8d6117b5f7cd20fdb5111d72d0aede44/5BF46B66/t51.2885-15/e35/s320x320/32593900_187210128597532_8145971815546617856_n.jpg',
  },
  {
    url:
      'https://scontent-lhr3-1.cdninstagram.com/vp/bcbac68bb3e83a27dcb857b22709e3ce/5C04A7EC/t51.2885-15/e35/s320x320/37714313_271167843698134_8706659841621360640_n.jpg',
  },
  {
    url:
      'https://scontent-lhr3-1.cdninstagram.com/vp/c59fc5dbaade3da3a6657f998464eed6/5C07478F/t51.2885-15/e35/s320x320/37360893_1966598523632024_6422270838296281088_n.jpg',
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
