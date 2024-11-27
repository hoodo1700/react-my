import React, { useEffect, useState } from 'react'


export default function Timer(){
    const [count, setcount]= useState(0)
    useEffect(()=>{
        setTimeout(()=>{
            setcount((count)=>count+1)
        } ,1000)
    })
    return(
        <div>
            <h1 className='text-center text-primary'>counts page </h1>
            <h4 className='continer mt-5 text-center'>{count}</h4>
        </div>
    )
}
