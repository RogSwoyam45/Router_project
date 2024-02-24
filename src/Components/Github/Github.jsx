import { data } from 'autoprefixer'
import React, { useEffect, useState } from 'react'
import { useLoaderData } from 'react-router-dom'

function Github() {
    const data=useLoaderData()
    // const [data, setData ]=useState([])
    // useEffect(() => {
    //     fetch('https://api.github.com/users/RogSwoyam45')
    //     .then(Response => Response.json())
    //     .then(data => {
    //         console.log(data);
    //         setData(data)
            
    //     })
    // },[])
  return (
    <div className='text-center text-white m-4 bg-gray-400'>
      Github Followers: {data.followers}
      <img
      className='item-centre p-5' 
      src={data.avatar_url} 
      alt="image"
      width={300}/>
    </div>
  )
}

export default Github

export const githubInfoLoader = async () => {
    const response = await fetch('https://api.github.com/users/RogSwoyam45')
    return response.json()
}