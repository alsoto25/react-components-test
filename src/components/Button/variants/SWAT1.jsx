import React from 'react'

export default function Button({ children, ...props }) {
  return (
    <button className="sot-button swat-1" {...props}>
      {children}
    </button>
  )
}
