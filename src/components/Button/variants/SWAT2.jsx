import React from 'react'

export default function Button({ children, ...props }) {
  return (
    <button className="sot-button swat-2" {...props}>
      {children}
    </button>
  )
}
