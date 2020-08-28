import * as React from "react"

function SvgVerified(props) {
  return (
    <svg width={28} height={28} viewBox="0 0 50 37" fill="none" {...props}>
      <path
        d="M49 1H1v35h48V1z"
        stroke="#939495"
        strokeWidth={2.5}
        strokeMiterlimit={10}
      />
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M36.704 10.397a1.016 1.016 0 00-1.428 0L20.988 24.59l-6.282-6.193a1.016 1.016 0 00-1.428 0 .994.994 0 000 1.414l6.999 6.899c.39.386 1.039.386 1.429 0l14.998-14.899a.992.992 0 000-1.414c.395.39-.394-.391 0 0z"
        fill="#939495"
      />
    </svg>
  )
}

export default SvgVerified
