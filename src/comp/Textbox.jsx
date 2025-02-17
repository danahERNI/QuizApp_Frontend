import React from 'react'

export default function Textbox({name, type, id, placeholder, value,  onChange}) {
  return (
    <input type={type} name={name} id={id} 
    placeholder={
        type === 'password' ? '**********************' :
        type === 'email' ? 'em.ail@emailprovider.com' :
        placeholder || ''
      }
      value={value}
      onChange={onChange}
      className='bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5'/>
  )
}
