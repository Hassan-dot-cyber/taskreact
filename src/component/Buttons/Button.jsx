import React from 'react'

function Button(props) {
  return (
    <div className='w-full'>
        <button className='w-full  bg-blue-500 rounded-full text-center text-sm text-white h-10'>{props.text}</button>
    </div>
  )
}

export default Button