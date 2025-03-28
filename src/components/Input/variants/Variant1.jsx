import React from 'react'

export default function Variant1({ ...props }) {
  const [value, setValue] = React.useState('');

  const handleChange = (e) => {
    setValue(e.target.value);
  }

  return (
    <input className="sot-input" type="text" style={{ padding: '15px 30px' }} value={value} onChange={handleChange} {...props} />
  )
}
