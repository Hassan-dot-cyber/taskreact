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
                <Button text="Search" bg="bg-blue-500" textC="text-white" />
            </div>
            <div className='bg-[#f6f7f9] flex flex-col gap-5'>
                <div className='flex gap-2 pt-4 pb-4'>
                    <Button text="Recent Jobs" bg="bg-black" textC="text-white" />
                    <Button text="Popular Jobs" bg="bg-white" textC="text-gray-400" />
                    <Button text="Best Matches" bg="bg-white" textC="text-gray-400" />
                </div>
                <Sections h="Create Packaging Design for..." D="Fireart Studio" col="bg-[#f57b38]" />
                <Sections h="Looking for backend developer..." D="Bluemoon Studio" col="bg-[#57befc]" />
            </div>
        </div>
    )
}

export default Pages2