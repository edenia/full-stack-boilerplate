import React from 'react'

type LogoProps = {
  width?: string | number
  height?: string | number
}

const LogoIcon: React.FC<LogoProps> = ({ width = 426, height = 150 }) => (
  <svg
    xmlns='http://www.w3.org/2000/svg'
    width={width}
    height={height}
    viewBox='0 0 426 151'
    preserveAspectRatio='xMidYMid meet'
  >
    <g
      transform='translate(0.000000,151.000000) scale(0.100000,-0.100000)'
      fill='#ffffff'
      stroke='none'
    >
      <path d='M3 1488 c3 -13 24 -115 46 -228 57 -287 98 -472 108 -480 4 -5 112 -20 238 -35 127 -15 233 -31 238 -34 4 -4 -65 -72 -153 -152 -88 -79 -160 -150 -160 -157 0 -19 139 -345 153 -358 12 -11 383 -48 396 -39 4 2 47 94 96 204 49 110 92 198 96 196 3 -3 46 -94 94 -202 48 -109 89 -199 90 -201 6 -8 392 32 401 42 16 15 155 348 152 361 -2 6 -74 76 -161 155 -87 79 -154 146 -150 150 4 4 112 19 238 35 127 15 235 32 241 37 7 5 14 21 16 36 3 15 35 175 72 355 37 181 66 330 64 333 -2 2 -90 -7 -196 -20 l-191 -23 -208 -123 c-114 -68 -216 -130 -227 -139 -10 -9 -66 -85 -123 -168 -58 -84 -108 -153 -112 -153 -4 0 -56 72 -116 159 l-110 159 -219 132 -220 131 -190 24 c-105 14 -195 25 -200 25 -4 0 -6 -10 -3 -22z m211 -33 c66 -8 121 -17 123 -19 4 -3 -232 -209 -246 -214 -6 -2 -51 211 -51 245 0 8 10 11 28 8 15 -3 81 -12 146 -20z m1846 -120 c-12 -63 -24 -115 -27 -115 -4 0 -180 149 -232 196 -8 8 -12 16 -8 20 3 4 68 14 144 23 111 14 139 14 141 4 2 -7 -6 -64 -18 -128z m-1479 -17 c104 -62 189 -117 189 -122 0 -5 -51 -6 -122 -3 -66 4 -211 7 -320 7 -128 0 -198 4 -196 10 4 13 240 218 252 219 4 1 93 -50 197 -111z m1295 -3 l127 -110 -324 -7 c-292 -5 -355 -4 -324 9 6 2 91 53 190 113 99 60 185 109 192 107 7 -1 69 -51 139 -112z m-1064 -153 c16 -7 218 -287 218 -302 0 -7 -327 -110 -348 -110 -8 0 -517 382 -546 411 -12 11 650 11 676 1z m1168 -6 c-41 -37 -532 -406 -541 -406 -19 0 -349 103 -349 109 0 16 202 297 217 303 10 3 169 7 353 7 281 1 332 -1 320 -13z m-1610 -211 c164 -125 244 -191 232 -193 -17 -3 -423 45 -428 51 -1 1 -16 70 -33 152 -18 83 -35 158 -38 169 -3 10 -1 17 5 15 6 -2 124 -89 262 -194z m1647 173 c-4 -13 -20 -88 -37 -168 -17 -79 -32 -145 -34 -147 -5 -5 -410 -54 -427 -51 -11 2 77 75 234 195 139 106 256 192 261 193 4 0 6 -10 3 -22z m-967 -468 c0 -150 -2 -172 -17 -185 -35 -30 -518 -374 -521 -371 -1 2 17 66 42 142 24 76 68 216 98 309 l53 170 155 52 c85 28 163 52 173 52 16 1 17 -13 17 -169z m201 119 l159 -50 65 -207 c37 -114 82 -254 101 -311 18 -58 33 -106 31 -107 -3 -3 -44 26 -322 225 -103 74 -193 140 -201 148 -11 11 -14 50 -14 177 0 146 3 176 18 176 2 0 75 -23 163 -51z m-599 -131 c-12 -41 -160 -507 -168 -528 -4 -13 -7 -12 -15 3 -20 35 -119 281 -117 288 5 11 302 279 306 274 2 -1 -1 -18 -6 -37z m1095 -220 l22 -24 -61 -147 c-34 -81 -65 -143 -69 -139 -9 9 -179 543 -179 561 0 11 231 -190 287 -251z m-379 -193 c166 -119 218 -161 205 -166 -10 -3 -58 -9 -108 -13 -49 -4 -115 -9 -146 -12 l-56 -6 -73 163 c-40 90 -79 179 -87 198 l-14 34 28 -19 c16 -10 129 -91 251 -179z m-348 181 c0 -5 -161 -370 -165 -374 -4 -5 -278 19 -304 27 -20 6 7 28 215 178 220 158 254 181 254 169z' />
      <path d='M2330 895 l0 -345 243 2 c155 2 241 7 240 13 -2 6 -89 11 -228 13 l-225 2 0 150 0 150 205 0 c176 0 205 2 205 15 0 13 -29 15 -205 15 l-205 0 0 150 0 150 225 0 c193 0 225 2 225 15 0 13 -33 15 -240 15 l-240 0 0 -345z' />
      <path d='M3214 1230 c-104 -22 -194 -92 -241 -189 -25 -50 -28 -67 -28 -161 0 -96 3 -110 28 -160 36 -70 88 -124 152 -158 45 -24 60 -27 155 -27 94 0 110 3 155 27 62 32 129 103 158 166 18 39 22 65 22 152 0 95 -3 111 -28 162 -68 138 -228 219 -373 188z m203 -55 c60 -30 102 -74 140 -148 24 -46 27 -64 28 -147 0 -86 -3 -101 -29 -153 -56 -111 -150 -170 -272 -171 -258 -2 -402 296 -252 520 84 124 247 166 385 99z' />
      <path d='M3927 1226 c-94 -26 -147 -87 -147 -169 0 -98 51 -141 222 -183 117 -29 191 -65 207 -100 6 -14 11 -45 11 -69 0 -149 -238 -196 -402 -79 -29 20 -50 29 -54 23 -10 -17 34 -55 99 -85 55 -26 74 -29 158 -29 89 0 99 2 144 30 59 37 85 83 85 150 0 97 -60 146 -224 185 -165 38 -216 74 -216 154 0 135 173 196 333 117 37 -17 72 -29 77 -26 18 11 -5 30 -68 58 -71 32 -161 41 -225 23z' />
      <path d='M2399 426 c-75 -43 -88 -156 -24 -216 36 -34 130 -40 165 -12 33 26 20 38 -19 18 -59 -31 -120 -14 -146 39 -8 18 -15 43 -15 55 0 38 30 81 67 97 33 13 40 13 80 -2 49 -19 66 -14 40 12 -22 22 -114 28 -148 9z' />
      <path d='M3530 311 c0 -75 4 -131 9 -131 6 0 11 21 13 48 3 46 4 47 39 50 34 3 40 -1 74 -47 20 -28 43 -51 51 -51 20 0 18 7 -16 50 -31 39 -38 60 -20 60 20 0 50 41 50 69 0 16 -8 39 -18 51 -16 20 -31 24 -100 28 l-82 5 0 -132z m151 89 c24 -13 26 -62 3 -81 -10 -8 -41 -14 -73 -14 l-56 0 -3 53 -3 52 56 0 c31 0 65 -5 76 -10z' />
      <path d='M3792 428 c6 -18 28 -21 28 -4 0 9 -7 16 -16 16 -9 0 -14 -5 -12 -12z' />
      <path d='M3050 401 c0 -21 -5 -31 -15 -31 -8 0 -15 -5 -15 -10 0 -6 7 -13 15 -16 11 -5 15 -23 15 -73 0 -74 10 -91 52 -91 33 0 38 17 6 22 -21 3 -23 8 -23 73 0 69 0 70 28 73 33 4 26 22 -8 22 -18 0 -24 6 -27 27 -4 39 -28 42 -28 4z' />
      <path d='M2647 359 c-23 -13 -47 -62 -47 -94 0 -16 12 -38 29 -56 42 -41 101 -41 143 1 27 28 30 36 25 73 -7 54 -44 87 -95 87 -20 0 -45 -5 -55 -11z m97 -30 c52 -41 23 -129 -44 -129 -67 0 -96 88 -44 129 15 12 34 21 44 21 10 0 29 -9 44 -21z' />
      <path d='M2866 354 c-9 -8 -16 -26 -16 -40 0 -19 9 -28 38 -40 63 -27 67 -31 67 -50 0 -23 -52 -32 -84 -15 -12 7 -22 7 -26 2 -15 -25 77 -41 114 -21 47 25 32 69 -31 95 -49 19 -62 34 -46 52 13 16 42 17 68 3 12 -6 21 -7 25 -1 17 28 -83 42 -109 15z' />
      <path d='M3213 363 c-29 -11 -11 -23 26 -17 31 5 43 2 60 -15 32 -32 26 -41 -30 -41 -69 0 -89 -12 -89 -55 0 -45 22 -56 100 -53 l60 3 0 73 c0 59 -4 76 -20 92 -19 19 -76 26 -107 13z m102 -103 c12 -19 -5 -48 -35 -60 -25 -10 -34 -10 -55 4 -28 19 -29 20 -15 47 8 14 21 19 55 19 24 0 47 -5 50 -10z' />
      <path d='M3794 357 c-10 -27 1 -170 14 -175 9 -3 12 20 12 92 0 59 -4 96 -10 96 -6 0 -13 -6 -16 -13z' />
      <path d='M3909 341 c-21 -22 -29 -39 -29 -66 0 -74 97 -124 156 -81 24 18 13 31 -14 17 -35 -19 -79 -13 -96 11 -23 33 -20 81 7 106 27 26 54 28 84 7 28 -20 45 2 18 22 -34 24 -93 16 -126 -16z' />
      <path d='M4123 363 c-7 -2 -13 -9 -13 -15 0 -6 16 -7 41 -3 31 5 45 3 60 -11 33 -30 24 -44 -29 -44 -56 0 -92 -21 -92 -54 0 -47 70 -73 121 -46 13 7 19 7 19 0 0 -5 7 -10 15 -10 12 0 15 15 15 74 0 69 -2 76 -26 95 -25 20 -81 27 -111 14z m107 -118 c0 -57 -100 -72 -108 -16 -5 30 12 41 66 41 38 0 42 -2 42 -25z' />
    </g>
  </svg>
)

export default LogoIcon
