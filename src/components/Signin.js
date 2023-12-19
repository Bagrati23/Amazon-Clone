
import axios from 'axios';
import { jwtDecode } from 'jwt-decode';
import React, { useState } from 'react'
import Cookies from 'universal-cookie';

const Signin = () => {
const cookies= new Cookies();
  const[Email,setemail]=useState('')
  const[Password,setpassword]=useState('')
  const[jwtt,setjwtt]= useState(' ')
  const[jwttt,setjwttt]=  useState(' ')
  //  "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJyb2xlIjoiQ3VzdG9tZXIiLCJlbWFpbCI6ImFsYXZpZHplQGdtYWlsLmNvbSIsInVuaXF1ZV9uYW1lIjoiYmFncmF0aSIsIm5hbWVpZCI6IjIyIiwibmJmIjoxNzAyNDkyOTExLCJleHAiOjE3MDI1MzYxMTEsImlhdCI6MTcwMjQ5MjkxMX0.3lfF8JHLLUtJMs4Wl8eeKoMoUYHzWDwP6KGdBPByj8o";
   
function sign(){

  axios.post('https://ngglobalwebapi20231210182820.azurewebsites.net/api/User/LogIn',
   { 
    email: Email,
    password: Password
   
  })
  .then(function (response) {
    setjwtt(response.data.jwt);
    if(jwtt !== ' '){ 
setjwttt(jwtDecode(jwtt))
cookies.set("jwt", jwtt, {
  expires: new Date(1702631094 * 1000)
});
console.log(jwttt.unique_name)
}else{
 
}
  })
  .catch(function (error) {
    console.log(error);
    });


   


}  

  
 


  return (
    <div>
         <div className='text-center'>
                    <h1 className='text-4xl mb-4'>Sign in</h1>
                    <p className=' font-bold text-sm '>Email or mobile phone number</p>
                    < input 
                    value={Email}
                    onChange={(event)=>setemail(event.target.value)}
           
                    type='text' className=' border-2 border-black rounded mb-2'></input>
                    <p className=' font-bold text-sm'>Password</p>
                    < input type='password' 
                      value={Password}
                      onChange={(event)=>setpassword(event.target.value)}
                    className=' border-2 border-black rounded mb-7'></input>
    <button onClick={sign} className='text-sm bg-yellow-300 rounded h-7 w-64 items-center mb-3'>Continue </button>
    
</div>
    </div>
  )
}

export default Signin