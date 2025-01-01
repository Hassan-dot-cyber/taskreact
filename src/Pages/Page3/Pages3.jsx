import React from 'react';
import bag from '../../Assets/bag.png'
import office from '../../Assets/office.jpg'
import Boxs from '../../component/Boxs/Boxs';
import leaf from '../../Assets/leaf.png'
import star from '../../Assets/star.png'
import check from '../../Assets/check.png'
import location from '../../Assets/location.png'
import save from '../../Assets/save.png'
import Button from '../../component/Buttons/Button';
import pic from '../../Assets/pic.jpg'
const Pages3 = () => {
    return (
        <div className='p-4 flex flex-col gap-8'>
            <div className='flex flex-col gap-5'>
                <div className='flex items-center justify-between gap-2'>
                    <img src={bag} alt="no img" className='w-7 h-7' />
                    <div className='text-2xl font-bold'>Bluemoon Studio</div>
                    <img src={bag} alt="no img" className='w-7 h-7' />
                </div>
                <div className='relative'>
                    <img src={office} alt="no img" className='rounded-xl' />
                    <div className='absolute bottom-16 left-10'>
                        <Boxs img={leaf} color='bg-[#5abef8]' w='w-28' h='h-28' pw='w-8' shadow="shadow-[#5abef8]" ro="rounded-full" />
                    </div>
                    <div className='absolute -bottom-6 right-5 text-md text-gray-500'>3 days ago</div>
                </div>
            </div>
            <div className='flex flex-col gap-4 mt-12'>
                <div className='flex flex-col gap-2'>
                    <div className='text-2xl font-bold'>Looking for Backend Developer for Crypto Dashboard</div>
                    <div className='text-md text-gray-500'>Bluemoon Studio</div>
                </div>
                <div className='flex gap-2 items-center'>
                    <div className='flex gap-0 justify-center w-24'>
                        {
                            (() => {
                                const imgs = [
                                    { index: 'z-10', right: "" },
                                    { index: 'z-20', right: "right-2" },
                                    { index: 'z-30', right: "right-4" },
                                    { index: 'z-40', right: "right-6" }
                                ];
                                return imgs.map((item, index) => (
                                    <img key={index} src={pic} alt="no img" className={`w-7 h-7 relative ${item.index} rounded-full ${item.right} border-white border-2`} />
                                ))
                            })()
                        }
                    </div>
                    <div className='text-sm'>36+ Applied</div>
                    <div className='flex gap-1 relative left-3'>
                        <img src={star} alt="no img" className='w-5 h-5' />
                        <div className='text-sm text-gray-500'>100% of 29k Reviews</div>
                    </div>
                </div>
                <hr/>
                <div className='flex items-center justify-between'>
                    <div className='flex gap-1 items-center'>
                        <img src={check} alt="no img" className='w-5 h-5' />
                        <div className='text-md'>Payment Verified</div>
                    </div>
                    <div className='flex gap-1 items-center'>
                        <img src={location} alt="no img" className='w-5 h-5' />
                        <div className='text-md text-gray-500'>Kalasan , Slemon, DIY</div>
                    </div>
                </div>
                <hr />
            </div>
            <div className='flex flex-col gap-2'>
                <div className='text-xl font-bold'>Project Overview</div>
                <div className='text-justify text-gray-500 text-md'>Lorem ipsum dolor sit amet consectetur adipisicing elit. At quos, culpa quasi, enim est odio ullam ea vitae, voluptatibus facere similique accusantium voluptas. Quasi tenetur, dolores officiis consectetur voluptatem repudiandae.</div>
            </div>
            <div className='flex gap-2'>
               <img src={save} alt="no img" className='w-10 h-10 bg-gray-300 rounded-full p-3' />
               <Button text="Submit a Proposal" bg="bg-blue-500" textC="text-white" w="w-full" h="h-10" r="rounded-full"/>
            </div>
        </div>
    );
};

export default Pages3;