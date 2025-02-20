import React from 'react'

function TakeQuizButtonComp({onClick, label}) {
    return (
        <button onClick={onClick} label={label} type="button" className='text-black flex flex-row justify-center items-center hover:text-white hover:bg-blue-700 bg-blue-400 focus:ring-4 focus:outline-none focus:ring-blue-800 font-medium rounded-lg text-sm px-5 py-2.5 text-center'>
            {label}
        </button>
      )
}

export default TakeQuizButtonComp
