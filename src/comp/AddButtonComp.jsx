import React from 'react'

function AddButtonComp({onClick, label}) {
    return (
      <button onClick={onClick} label={label} type="button" className='w-full flex flex-row items-center justify-center text-black hover:text-white hover:bg-green-700 bg-green-400 focus:ring-4 focus:outline-none focus:ring-green-800 font-medium rounded-lg text-sm px-5 py-2.5 text-center'>
        <span class="material-symbols-outlined">
          add_box
        </span>{label}
      </button>
    )
  }

export default AddButtonComp
