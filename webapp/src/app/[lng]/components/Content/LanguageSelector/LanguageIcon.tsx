import React from 'react'

type LanguageIconProps = {
  width?: number
  height?: number
}

const LanguageIcon: React.FC<LanguageIconProps> = ({
  width = 30,
  height = 31
}) => (
  <svg width={width} height={height} viewBox='0 0 31 30' fill='none'>
    <path
      fillRule='evenodd'
      clipRule='evenodd'
      d='M2.65356 15C2.65356 8.1 8.24106 2.5 15.1411 2.5C22.0536 2.5 27.6536 8.1 27.6536 15C27.6536 21.9 22.0536 27.5 15.1411 27.5C8.24106 27.5 2.65356 21.9 2.65356 15ZM20.1161 10H23.8036C22.6036 7.9375 20.6911 6.3375 18.3911 5.55C19.1411 6.9375 19.7161 8.4375 20.1161 10ZM15.1536 5.05C16.1911 6.55 17.0036 8.2125 17.5411 10H12.7661C13.3036 8.2125 14.1161 6.55 15.1536 5.05ZM5.15356 15C5.15356 15.8625 5.27856 16.7 5.47856 17.5H9.70356C9.60356 16.675 9.52856 15.85 9.52856 15C9.52856 14.15 9.60356 13.325 9.70356 12.5H5.47856C5.27856 13.3 5.15356 14.1375 5.15356 15ZM6.50356 20H10.1911C10.5911 21.5625 11.1661 23.0625 11.9161 24.45C9.61606 23.6625 7.70356 22.075 6.50356 20ZM6.50356 10H10.1911C10.5911 8.4375 11.1661 6.9375 11.9161 5.55C9.61606 6.3375 7.70356 7.925 6.50356 10ZM15.1536 24.95C14.1161 23.45 13.3036 21.7875 12.7661 20H17.5411C17.0036 21.7875 16.1911 23.45 15.1536 24.95ZM12.0286 15C12.0286 15.85 12.1161 16.675 12.2286 17.5H18.0786C18.1911 16.675 18.2786 15.85 18.2786 15C18.2786 14.15 18.1911 13.3125 18.0786 12.5H12.2286C12.1161 13.3125 12.0286 14.15 12.0286 15ZM18.3911 24.45C19.1411 23.0625 19.7161 21.5625 20.1161 20H23.8036C22.6036 22.0625 20.6911 23.6625 18.3911 24.45ZM20.7786 15C20.7786 15.85 20.7036 16.675 20.6036 17.5H24.8286C25.0286 16.7 25.1536 15.8625 25.1536 15C25.1536 14.1375 25.0286 13.3 24.8286 12.5H20.6036C20.7036 13.325 20.7786 14.15 20.7786 15Z'
      fill='#EEEEEE'
    />
  </svg>
)
export default LanguageIcon