import * as React from "react"

function SvgCollection(props) {
  return (
    <svg width={28} height={28} viewBox="0 0 104 94" {...props}>
      <g
        stroke="#939495"
        strokeWidth={4}
        fill="none"
        fillRule="evenodd"
        strokeLinecap="round"
        strokeLinejoin="round"
      >
        <path d="M82 22H2v70h80z" />
        <path d="M32 42.826c0-1.653 1.152-2.302 2.568-1.452L57.263 54.99c1.419.852 1.417 2.232 0 3.083L34.568 71.689C33.15 72.54 32 71.88 32 70.237V42.826z" />
        <path d="M92 17v-5H12v10h70v60h10z" />
        <path d="M102 7V2H22v10h70v60h10z" />
      </g>
    </svg>
  )
}

export default SvgCollection
