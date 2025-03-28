import React from 'react'

export default function Button({ children, ...props }) {
  return (
    <button className="sot-button" {...props}>
      {children}
    </button>
  )
}
