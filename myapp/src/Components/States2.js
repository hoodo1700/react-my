import React from "react";
import { useState } from "react";


export default function States2() {
    const [mobile, setMobile]=useState({
        Name: 'iphone',
        Model:'16promax',
        color:'naivy-blue'    })
        function changeall(){
            setMobile(previousState=>{
                return{... previousState,color:'silver', Model:'s24', Name:'samsung'}
            })
        }
  return (
    <>
    <h1>state 2</h1>
    <p>  iam using new {mobile.Name} its model is {mobile.Model} its color is { mobile.color}</p>    
    <button className=" btn btn-success" onClick={changeall}> make a change</button>

    </>
  )
}
