import React from 'react'

export default function NumberInput({ ...props }) {
  const [value, setValue] = React.useState('');

  const handleChange = (e) => {
    setValue(e.target.value);
  }

  return (
    <input className="sot-input" type="number" value={value} onChange={handleChange} {...props} />
  )
}
