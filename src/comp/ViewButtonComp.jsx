import React from 'react'

function ViewButtonComp({onClick}) {
  return (
    <button onClick={onClick} label="delete" type="button" className='text-black flex flex-row justify-center items-center hover:text-white hover:bg-green-700 bg-green-400 focus:ring-4 focus:outline-none focus:ring-green-800 font-medium rounded-lg text-sm px-5 py-2.5 text-center'>
      <span class="material-symbols-outlined">
        preview
      </span>
    </button>
  )
}

export default ViewButtonComp
