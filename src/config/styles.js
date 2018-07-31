export const FONT_FAMILY = `font-family: 'Barlow', sans-serif;`

export const BOX_SHADOW =
  'box-shadow: 0 -2px 24px 0 rgba(0, 0, 0, 0.24), 0 2px 24px 0 rgba(0, 0, 0, 0.12);'

export const LIGHTGREY = '#d8d8d8'
export const MEDIUMGREY = '#9b9b9b'
export const DARKGREY = '#4a4a4a'
export const EXTRADARKGREY = '#2b2b2b'
export const WHITE = '#ffffff'

export const TEXT_SIZE = ({ sm = false, lg = false }) => {
  if (sm) return `font-size: 12px;`
  if (lg) return `font-size: 18px;`

  return `font-size: 16px;`
}
