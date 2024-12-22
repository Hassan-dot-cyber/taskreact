import React from 'react'

function Borders(props) {
  return (
    <div className={`border-2 border-dashed p-10 border-black ${props.w} ${props.h} rounded-full ${props.opaicity}`}></div>
  )
}

export default Borders