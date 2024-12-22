import React from 'react'
// import { GiArrowWings } from "react-icons/gi";
import search from "../../Assets/search.png"
import bag from "../../Assets/bag.png"
import loaction from "../../Assets/location.png"
import Header from './Header'
import Inputs from '../../component/Inputs/Inputs'
import Button from '../../component/Buttons/Button'


function Pages2() {
    return (
        <div className='p-4'>
            <div className='flex flex-col gap-5'>
                <Header />
                <div className='flex flex-col gap-3'>
                    <Inputs img={search} place="Search type job" />
                    <div className='flex gap-3'>
                        <Inputs img={bag} place="Job type..." />
                        <Inputs img={loaction} place="Location..." />
                    </div>
                </div>
                <Button text="Search" />
            </div>
        </div>
    )
}

export default Pages2