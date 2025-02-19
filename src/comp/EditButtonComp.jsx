import React from 'react'
import '../index.css'

function EditButtonComp({onClick}) {
  return (
    <button onClick={onClick} label="edit" type="button" className='flex flex-row items-center justify-center text-black hover:text-white hover:bg-blue-700 bg-blue-400 focus:ring-4 focus:outline-none focus:ring-blue-800 font-medium rounded-lg text-sm px-5 py-2.5 text-center'>
      <span class="material-symbols-outlined">
        edit
      </span>
    </button>
  )
}

export default EditButtonComp
