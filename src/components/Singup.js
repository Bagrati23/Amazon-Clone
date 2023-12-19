import axios from 'axios'
import React from 'react'
import { useState } from 'react'
  
const Singup = () => {
const[name,setname]=useState('')
const[email,setemail]=useState('')
const[password,setpassword]=useState('')
const[password2,setpassword2]=useState('')

function sing(){
axios.post('https://ngglobalwebapi20231210182820.azurewebsites.net/api/user/registerUser',
 {
  userName: name,
  password:password ,
  email: email
})
.then(function (response) {
  console.log(response);
})
.catch(function (error) {
  console.log(error);
});
console.log(name,password,email)
}

  return (
    <div className='text-center'>   
    <h1 className='text-4xl mb-4'>Sign in</h1>
     <p className=' font-bold text-sm'>Your Name</p>
    < input 
    value={name}
    onChange={(event)=>setname(event.target.value)}
    type='text' className=' border-2 border-black rounded mb-2'/>
    <p className=' font-bold text-sm'>Email or mobile phone number</p>
    < input 
value={email}
onChange={(event)=>setemail(event.target.value)}
    type='text' className=' border-2 border-black rounded mb-2'/>
    <p className=' font-bold text-sm'>Password</p>
    < input 
value={password}
onChange={(event)=>setpassword(event.target.value)}
    type='password' className=' border-2 border-black rounded mb-2'/> 
    <p className=' font-bold text-sm'>Re-enter Password</p>
    < input
  value={password2}
  onChange={(event)=>setpassword2(event.target.value)}
     type='password' className={ password2 === password ?"border-2 border-black rounded mb-2": "border-2 border-red-500 rounded mb-2"}/>
<button  onClick={sing} className='text-sm bg-yellow-300 rounded h-7 w-64 items-center mt-3' > Create Account </button>
</div>
  )
}

export default Singup