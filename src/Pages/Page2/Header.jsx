import React from 'react'
import bat from "../../Assets/bat.png"
import bell from "../../Assets/bell.png"
import img from "../../Assets/pic.jpg"

function Header() {
    return (
        <div>
            <div className='flex justify-between items-center'>
                <div className='flex justify-center gap-3 items-center'>
                    <img src={bat} alt="" className='w-10 ' />
                    <div className='text-xl font-semibold'>lowcer</div>
                </div>
                <div className='flex justify-center items-center gap-3 relative'>
                    <div className='bg-orange-500 w-1.5 h-1.5 rounded-full absolute top-3 left-4'></div>
                    <img src={bell} alt="noimg" className='w-6 h-6' />
                    <img src={img} alt="" className='w-10 h-10 rounded-full' />
                </div>
            </div>
        </div>
    )
}

export default Header