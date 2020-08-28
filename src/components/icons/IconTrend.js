import * as React from "react"

function SvgTrend(props) {
  return (
    <svg
      viewBox="0 0 32 32"
      fill="none"
      stroke="#939495"
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={1.7}
      width={28}
      height={28}
      {...props}
    >
      <path d="M18 13l8-11L8 13l6 6-8 11 18-11z" />
    </svg>
  )
}

export default SvgTrend
