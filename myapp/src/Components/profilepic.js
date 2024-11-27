import React, { useState } from 'react'



function  Profile(){
    const [ profilepicture,setProfilePicture]=useState(
        "./logo.jfif"// profile ka hore
    );
    const changeProfilePicture =(event)=>{
        const file= event.target.files[0];
        if (file){
            const newProflePicture =URL .createObjectURL(file);
            setProfilePicture(newProflePicture);
        }
    }

    return(
        <div style={{ textAlign: "center"}}>
            <h2> Change Profile Picture</h2>
            <img
            src={profilepicture}
            alt="profile"
            style={{
                width: "150px",
                height:"150px",
                borderRadius:"50%",
                objectFit:"cover"
            }}            
            /> 
            <div style={{marginTop: "20px"}}>

                <input type="file" accept="image/*" onChange={changeProfilePicture}/>
            </div>

        </div>
    )
}
export default Profile