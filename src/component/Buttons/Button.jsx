import React from 'react'

function Button(props) {
  return (
    <div className='w-full'>
        <button className={`w-full ${props.bg} rounded-full text-center text-xs ${props.textC} h-10`}>{props.text}</button>
    </div>
  )
}

export default Button