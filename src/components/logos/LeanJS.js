import React from 'react'
import styled from 'styled-components'
import Link from '../navigation/Link'

const SvgLogo = props => (
  <svg className="logo" width={225.639} height={212.844} {...props}>
    <path
      fill={props.color || 'white'}
      d="M114.191 100.309h28.548l-4.393-17.333h-19.764l-4.391 17.333zm-28.419 70.046c0 8.614-.342 14.228-1.023 16.84-.683 2.612-1.905 4.555-3.669 5.825-1.764 1.271-4.364 1.906-7.797 1.906-2.917 0-6.022-.446-9.315-1.341v13.203c4.94 1.176 9.197 1.766 12.772 1.766 6.962 0 12.302-1.46 16.019-4.378 3.716-2.918 6.139-6.802 7.268-11.65 1.129-4.848 1.694-12.238 1.694-22.171v-59.944H85.772v59.944zm35.282-97.238h14.823l-7.412-29.851-7.411 29.851zm51.881 27.192h24.979l-24.979-54.304v54.304zm26.001-61.123C178.185 15.192 147.45 0 113.149 0 78.972 0 48.334 15.083 27.587 38.928c0 4.726.136 51.169.136 51.169h24.431v10.133H15.676s.178-45.131 0-44.832C5.716 72.17 0 91.736 0 112.63c0 71.979 60.175 100.276 60.114 100.214.565-1.973 0-182.724 0-182.724h40.352v10.133H72.192v19.17h21.96v9.859h-21.96V90.37h28.823v9.938h1.921L122.7 30.393h13.45l18.941 69.915h7.686V30.395h14.274l21.96 48.474c.001 0-.079-39.513-.075-39.683zm26.621 60.484a111.553 111.553 0 0 0-15.687-45.519c-.483-.791-.976-1.573-.976-1.573l.549 47.731h16.195l-.081-.639zm-59.232 57.412c-3.529-2.26-8.563-4.636-15.102-7.131-7.669-2.918-12.784-5.429-15.348-7.529-2.564-2.101-3.847-4.921-3.847-8.463 0-3.21 1.141-6.055 3.423-8.533 2.281-2.478 5.516-3.718 9.703-3.718 4.516 0 8.079 1.218 10.69 3.654 2.611 2.436 4.716 6.206 6.315 11.314l13.619-4.73c-4.328-15.534-14.325-23.301-29.99-23.301-8.845 0-15.937 2.612-21.275 7.838-5.34 5.225-8.009 11.674-8.009 19.346 0 5.037 1.199 9.532 3.599 13.486 2.398 3.954 5.304 6.943 8.715 8.967 3.41 2.024 8.973 4.496 16.688 7.414 7.292 2.777 11.854 5.39 13.689 7.837 1.835 2.448 2.752 5.108 2.752 7.979 0 3.907-1.329 7.191-3.986 9.85-2.658 2.66-6.552 3.989-11.679 3.989-10.491 0-16.983-5.931-19.477-17.793l-14.254 4.024c4.234 17.981 15.242 26.973 33.024 26.973 10.303 0 18.313-2.848 24.027-8.544 5.716-5.695 8.574-12.591 8.574-20.688 0-4.989-1.094-9.379-3.281-13.168s-5.042-6.814-8.57-9.073z"
    />
  </svg>
)

const LinkLogo = styled(Link)`
  width: 160px;
  display: inline-block;
  text-decoration: none;

  svg {
    width: 100%;
  }
`

export const LeanJSLogo = ({ position }) => (
  <LinkLogo to="/">
    <SvgLogo />
  </LinkLogo>
)
