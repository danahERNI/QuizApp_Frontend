import React from 'react'

function ButtonComponent({type, onClick, label, className}) {
  return (
    <button type={type} onClick={onClick} label={label} className={className}>
        {label}
    </button>
  )
}

export default ButtonComponent
