import React from 'react'

export default function Input({ ...props }) {
  const [value, setValue] = React.useState('');

  const handleChange = (e) => {
    setValue(e.target.value);
  }

  return (
    <input className="sot-input" value={value} onChange={handleChange} {...props} />
  )
}
