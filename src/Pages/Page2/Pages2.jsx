import React from 'react'
import search from "../../Assets/search.png"
import bag from "../../Assets/bag.png"
import loaction from "../../Assets/location.png"
import Header from './Header'
import Inputs from '../../component/Inputs/Inputs'
import Button from '../../component/Buttons/Button'
import Sections from '../../component/Sections/Sections'

function Pages2() {
    return (
        <div className='p-4 flex flex-col gap-10'>
            <div className='flex flex-col gap-5'>
                <Header />
                <div className='flex flex-col gap-3'>
                    <Inputs img={search} place="Search type job" />
                    <div className='flex gap-3'>
                        <Inputs img={bag} place="Job type..." />
                        <Inputs img={loaction} place="Location..." />
                    </div>
                </div>
                <Button text="Search" bg="bg-blue-500" textC="text-white" w="w-full" h="h-10" r="rounded-full" />
            </div>
            <div className='bg-[#f6f7f9] flex flex-col gap-5'>
                <div className='flex gap-2 pt-4 pb-4'>
                    {
                        (() => {
                            const buttonData = [
                                { text: "Recent Jobs", bg: "bg-black", textC: "text-white" },
                                { text: "Popular Jobs", bg: "bg-white", textC: "text-gray-400" },
                                { text: "Best Matches", bg: "bg-white", textC: "text-gray-400" }
                            ];
                            return buttonData.map((item, index) => (
                                <Button key={index} text={item.text} bg={item.bg} textC={item.textC} w="w-full" h="h-10" r="rounded-full" />
                            ))
                        })()
                    }
                    {/* <Button text="Recent Jobs" bg="bg-black" textC="text-white" w="w-full" h="h-10" r="rounded-full" />
                    <Button text="Popular Jobs" bg="bg-white" textC="text-gray-400" w="w-full" h="h-10" r="rounded-full" />
                    <Button text="Best Matches" bg="bg-white" textC="text-gray-400" w="w-full" h="h-10" r="rounded-full" /> */}
                </div>
                <Sections h="Create Packaging Design for..." D="Fireart Studio" col="bg-[#f57b38]" />
                <Sections h="Looking for backend developer..." D="Bluemoon Studio" col="bg-[#57befc]" />
            </div>
            <div className='flex justify-between sticky bottom-0 w-full'>
                {[...Array(5)].map((_, index) => (
                    <img src={bag} alt="" className='w-10 h-10 hover:bg-blue-300 rounded-full p-2' />
                ))}
            </div>

        </div>
    )
}

export default Pages2