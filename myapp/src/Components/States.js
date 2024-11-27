import React, { useState } from 'react'

function States() {
    const [age,setAge]= useState( '20 years')
    const[name,setName]= useState('samda')
    const[addres,setAddres]= useState('sh.omer')
    const[email,setEmail]= useState('samda@gmail.com')

    
  return (
    <>
   <h1>welcome states</h1>   
   <h3> my name is {name} and my age is {age}</h3>
   <h3>my addres{addres} and my email is{email}</h3>
    <div className='p-3 ms-3'>
   <button className='btn btn-primary ' onClick={()=> setName('Huda ') } > new name</button> 
   <button className='btn btn-primary ms-3' onClick={()=> setAge('21 ') } > new age </button>
   <button className='btn btn-primary ms-3' onClick={()=> setAddres('sh.madar ') } > new address </button>
   <button className='btn btn-primary ms-3' onClick={()=> setEmail('Hoodo@gmail.com ') } > new age </button>
   </div>
    </>
  )
}

export default States
