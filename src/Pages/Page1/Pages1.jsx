import React from 'react'
import Boxs from '../../component/Boxs/Boxs'
import leaf from '../../Assets/leaf.png'
import Button from '../../component/Buttons/Button'
import Borders from '../../component/Borders/Borders'
function Pages1() {
    
    return (
        <div className='flex font-[calbiri] relative flex-col items-center h-screen gap-20 pl-4 pr-4 overflow-y-hidden'>
            <div className='relative  w-full h-60 flex justify-center items-center absolute top-44'>
                <div className='shadow-lg rounded-full absolute -top-12  bg-white z-10 flex items-center p-1 pl-1.5 pr-1.5 gap-2 border-2 border-gray-100'>
                    <div className='border-2 border-orange-500 w-4 h-4 rounded-full flex justify-center items-center '>
                        <div className='w-2 h-2 bg-orange-500 rounded-full'></div>
                    </div>
                    <div>Fireart Studio</div>
                </div>
                <Boxs img={leaf} color='bg-blue-500' w='w-16' h='h-16' pw='w-8' shadow="shadow-blue-500" ro="rounded-xl" />
                <div className='absolute'>
                    <Borders w="w-28" h="h-28" opaicity="opacity-50" />
                </div>
                <div className='absolute'>
                    <Borders w="w-44" h="h-44" opaicity="opacity-50" />
                    <Boxs img={leaf} color='bg-purple-800' w='w-12' h='h-12' pw='w-5' shadow="shadow-purple-500" bo="-bottom-0" ri=" right-0" ro="rounded-xl" />
                </div>
                <div className='absolute'>
                    <Borders w="w-60" h="h-60" opaicity="opacity-30" />
                    <Boxs img={leaf} color='bg-blue-400' w='w-12' h='h-12' pw='w-5' shadow="shadow-blue-400" bo="bottom-8" ri=" right-0" ro="rounded-xl" />
                </div>
                <div className='absolute'>
                    <Borders w="w-[300px]" h="h-[300px]" opaicity="opacity-10" />
                    <Boxs img={leaf} color='bg-orange-500' w='w-12' h='h-12' pw='w-5' shadow="shadow-orange-500" bo="bottom-56" ri=" right-44" ro="rounded-xl" />
                    <Boxs img={leaf} color='bg-green-500' w='w-12' h='h-12' pw='w-5' shadow="shadow-green-500" bo="bottom-48" ri=" right-5" ro="rounded-xl" />
                </div>
            </div>
            <div className='flex flex-col gap-4 justify-center items-center text-center absolute bottom-20'>
                <div className='font-bold text-2xl text-center '>Find a suitbale job in seconds with our advanced search features</div>
                <div className='text-[10px] text-gray-500'>Explore thousands of excitong jobs from leading companies around the world. Lowceris your trusted partner in finding jobs.</div>
                <Button text="Submit a Proposal" bg="bg-blue-500" textC="text-white" w="w-full" h="h-10" r="rounded-full"/>

            </div>
        </div>
    )
}

export default Pages1