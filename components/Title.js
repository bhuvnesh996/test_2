import React from 'react'


function Title({title,subtitle}) {
  return (
    <div className='max-h-fit min-h-fit'>
        <h1 className="text-5xl font-bold max-h-fit min-h-fit ">{title}</h1>
        <div className="top-3">
        <h1 className='m-1 text-gray-500'>{subtitle}</h1>
        </div>
    </div>
  )
}

export default Title