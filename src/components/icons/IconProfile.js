import * as React from "react"

function SvgProfile(props) {
  return (
    <svg viewBox="0 0 57.4 57" width={28} height={28} {...props}>
      <g
        fill="none"
        stroke="#939495"
        strokeWidth={3}
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeMiterlimit={10}
      >
        <path d="M38.4 6.8c7.4 12.3-5.4 25.1-17.7 17.7-1.1-.7-2.1-1.6-2.8-2.8C10.5 9.4 23.3-3.4 35.6 4.1c1.1.6 2.1 1.6 2.8 2.7zM38.8 30.8c-2.2 3.6-6.1 6.1-10.7 6.1s-8.5-2.5-10.7-6.1c-9.4 4.1-16 13.6-16 24.5h53.5c0-10.9-6.6-20.4-16.1-24.5z" />
      </g>
    </svg>
  )
}

export default SvgProfile
