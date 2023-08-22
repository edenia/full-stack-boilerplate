import React from 'react'

type MenuIconProps = {
  width?: number
  height?: number
}

const MenuIcon: React.FC<MenuIconProps> = ({ width = 24, height = 24 }) => (
  <svg width={width} height={height} viewBox='0 0 24 24'>
    <path
      fillRule='evenodd'
      clipRule='evenodd'
      d='M3 18H21V16H3V18ZM3 13H21V11H3V13ZM3 6V8H21V6H3Z'
      fill='white'
    />
  </svg>
)

export default MenuIcon
