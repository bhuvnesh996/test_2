import { Rating } from '@mui/material'
import FavoriteBorderIcon from '@mui/icons-material/FavoriteBorder';
import ShareIcon from '@mui/icons-material/Share';
import React from 'react'

function Body({body,author,reviews,reviews_count,learner_complete}) {
  return (
<div className='flex h-100'>
    <div className='mt-20 w-2/4 basis-1/2'>
        <p className='m-2 text-xl'>{body}</p>
        <div className='flex'>
            <div className='m-2 rounded-full'>
            <img className='object-contain h-10 w-10 basis-1/4' src="https://www.w3schools.com/howto/img_avatar.png"/>
            </div>
            <h1 className='basis-1/2 m-1 text-xl font-bold text-purple-900'>{author}</h1>    
        </div>
        <div className='m-3 flex'>
            <Rating className='basis-1/4' name="size-medium" defaultValue={5} />
            <p className="basis-1/2 text-gray-500">{reviews}</p>
        </div>
        <div className='m-3 flex'>
            <Rating className='basis-1/4' name="size-medium" defaultValue={5} />
            <p className="basis-1/2 text-gray-500">{reviews_count}</p>
        </div>
        <div>  
            <h1 className='text-xl m-1'>{learner_complete}</h1>
        </div>
        <div className='m-5 flex h-10 w-10'>
            <button className="bg-purple-900 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded-full">Class</button>
            <FavoriteBorderIcon className='m-2 basis-1/2' /> 
            <h1 className="mt-2 text-purple-900 font-bold" >Save </h1>
            <ShareIcon  className='basis-1/2 m-2'/>
            <h1 className="mt-2 text-purple-900 font-bold">Share</h1>
        </div>
    </div>
    <div className='flex mt-20 basis-1/2'> 
        <img className='object-fill h-80 w-96 basis-1/2' src='https://i.pinimg.com/736x/67/8c/eb/678cebf415761cd0eb06d3c9ea278bf6.jpg' ></img>
        <img className='object-fill h-80 w-96 basis-1/2' src="https://cdn.dribbble.com/users/528676/screenshots/3627473/media/18c749e748eff7b78b6636b9f2b0ec9d.jpg?compress=1&resize=400x300"></img>
    </div>
</div>
  )
}

export default Body