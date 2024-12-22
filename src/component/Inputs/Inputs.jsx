import React from 'react'

function Inputs(props) {
  return (
    <div className='relative'>
        <input type="text" placeholder={`${props.place}`} className='w-full pl-8 text-sm border-[#e9e9eb] bg-[#f6f7f9] rounded-full p-3'/>
        <div className='bg-white shadow-xl w-8 h-8 rounded-full absolute p-2 right-3 top-1.5'>
                <img src={`${props.img}`} alt="no img" />
        </div>
    </div>
  )
}

export default Inputs