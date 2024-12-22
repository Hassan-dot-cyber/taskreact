import React from 'react'

function Boxs(props) {
    return (
        // <div className={`w-10 h-10 ${props.padding}  bg-${props.color}-500`}>
        <div className={`absolute ${props.bo} ${props.ri}`}>
            <div className={`${props.color} ${props.w} ${props.h} shadow-lg ${props.shadow} rounded-xl flex justify-center items-center`}>
                <div className={`w-10 h-10 flex justify-center items-center`}>
                    <img className={`${props.pw}`} src={props.img} alt="no image" />
                </div>
            </div>
        </div>
    )
}

export default Boxs