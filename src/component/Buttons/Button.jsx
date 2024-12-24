import React from 'react'

function Button(props) {
  return (
    <div className={props.w}>
        <button className={`${props.w} ${props.h} ${props.bg} ${props.r} text-center text-xs pl-1 pr-1 ${props.textC}`}>{props.text}</button>
    </div>
  )
}

export default Button