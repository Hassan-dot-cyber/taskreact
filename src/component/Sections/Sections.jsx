import React from 'react'
import Boxs from '../Boxs/Boxs'
import leaf from "../../Assets/leaf.png"
import Button from '../Buttons/Button'
import check from "../../Assets/check.png"
import star from "../../Assets/star.png"
import heart from "../../Assets/heart.png"
import save from "../../Assets/save.png"
function Sections(props) {
    return (
        <div className='bg-white pt-4 pb-4 p-2 rounded-md'>
            <div className='relative flex flex-col gap-6'>
                <Boxs img={leaf} color={props.col} w='w-12' h='h-12' pw='w-5' shadow={props.cswaol} />
                <div>
                    <div className=' relative left-16 text-md font-bold'>{props.h}</div>
                    <div className='relative left-16 text-sm text-gray-500'>{props.D}</div>
                    
                    
                    <div className='flex gap-2'>
                        <img src={check} alt="noimg" className='w-5 h-5' />
                        <div className='text-sm text-gray-500'>Payment Verified</div>
                    </div>
                    <div className='flex gap-1'>
                        <img src={star} alt="noimg" className='w-4 h-4' />
                        <img src={star} alt="noimg" className='w-4 h-4' />
                        <img src={star} alt="noimg" className='w-4 h-4' />
                        <img src={star} alt="noimg" className='w-4 h-4' />
                        <img src={star} alt="noimg" className='w-4 h-4' />
                    </div>
                </div>
                <div className='flex justify-between'>
                    <div className='flex gap-2 items-center'>
                        <img src={heart} alt="noimg" className='w-6 h-6' />
                        <img src={save} alt="noimg" className='w-8 h-8 border border-gray-300 rounded-md' />
                    </div>
                    <div className='flex gap-2 items-center'>
                        <div className='text-sm text-gray-400'>1 Hour Ago</div>
                        <div className='text-md text-blue-500 font bold'>View Details</div>
                    </div>

                </div>
            </div>
        </div>
    )
}

export default Sections