import React from 'react'

export default function Variant1({ children, ...props }) {
  return (
    <button className="sot-button" {...props}>
      Variant 1
    </button>
  )
}
