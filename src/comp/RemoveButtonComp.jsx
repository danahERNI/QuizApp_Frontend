import React from 'react'

function RemoveButtonComp({onClick, label}) {
  return (
    <button onClick={onClick} type="button" className='text-black flex flex-row justify-center items-center hover:text-white hover:bg-red-700 bg-red-400 focus:ring-4 focus:outline-none focus:ring-red-800 font-medium rounded-lg text-sm px-5 py-2.5 text-center'>
      <span class="material-symbols-outlined">
        delete
      </span>{label}
    </button>
    
  )
}

export default RemoveButtonComp
