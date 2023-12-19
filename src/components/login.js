import { Dialog, Transition } from '@headlessui/react'
import { Fragment, useState } from 'react'
import axios from 'axios';
import { jwtDecode } from 'jwt-decode';
import React from 'react'
import Cookies from 'universal-cookie';


  
export default function MyModal() {
  const[item,setitem]=useState(false)
  let [isOpen, setIsOpen] = useState(false)
const [user,setuser]=useState('')
  function closeModal() {
    setIsOpen(false)
  }


  function openModal() {
    setIsOpen(true)
    setitem(false)
  }const Singup = () => {
      const[Name,setName]=useState('')
      const[Email,setEmail]=useState('')
      const[Password,setPassword]=useState('')
      const[Password2,setPassword2]=useState('')
      
      function sing(){
      axios.post('https://ngglobalwebapi20231210182820.azurewebsites.net/api/user/registerUser',
       {
        userName: Name,
        password:Password ,
        email: Email
      })
      .then(function (response) {
        console.log(response);
      })
      .catch(function (error) {
        console.log(error);
      });
      console.log(Name,Password,Email)
     setIsOpen(false)
     
      }
      
        return (
          
          <div >   
         
          <button onClick={()=> setitem(false)} className=' bg-yellow-300 rounded-xl absolute top-3 left-3 p-2 text-sm'>Go Back</button>
        
          <div className='text-center'>
          <h1 className='text-4xl mb-4'>Sign in</h1>

           <p className=' font-bold text-sm'>Your Name</p>
          < input 
          value={Name}
          onChange={(event)=>setName(event.target.value)}
          type='text' className=' border-2 border-black rounded mb-2'/>
          <p className=' font-bold text-sm'>Email or mobile phone number</p>
          < input 
      value={Email}
      onChange={(event)=>setEmail(event.target.value)}
          type='text' className=' border-2 border-black rounded mb-2'/>
          <p className=' font-bold text-sm'>Password</p>
          < input 
      value={Password}
      onChange={(event)=>setPassword(event.target.value)}
          type='password' className=' border-2 border-black rounded mb-2'/> 
          <p className=' font-bold text-sm'>Re-enter Password</p>
          < input
        value={Password2}
        onChange={(event)=>setPassword2(event.target.value)}
           type='password' className={ Password2 === Password ?"border-2 border-black rounded mb-2": "border-2 border-red-500 rounded mb-2"}/>
      <button  onClick={sing} className='text-sm bg-yellow-300 rounded h-7 w-64 items-center mt-3' > Create Account </button>
     </div> 
     </div>
        )
      }
  const Signin = () => {
    const cookies= new Cookies();
      const[Email,setemail]=useState('')
      const[Password,setpassword]=useState('')
      const[jwtt,setjwtt]= useState(' ')
      const[jwttt,setjwttt]=  useState('')
      //  "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJyb2xlIjoiQ3VzdG9tZXIiLCJlbWFpbCI6ImFsYXZpZHplQGdtYWlsLmNvbSIsInVuaXF1ZV9uYW1lIjoiYmFncmF0aSIsIm5hbWVpZCI6IjIyIiwibmJmIjoxNzAyNDkyOTExLCJleHAiOjE3MDI1MzYxMTEsImlhdCI6MTcwMjQ5MjkxMX0.3lfF8JHLLUtJMs4Wl8eeKoMoUYHzWDwP6KGdBPByj8o";
       
    function sign(){
      
    
      axios.post('https://ngglobalwebapi20231210182820.azurewebsites.net/api/User/LogIn',
       { 
        email: Email,
        password: Password
       
      })
      .then(function (response) {
        setjwtt(jwtDecode(response.data.jwt));
       console.log(jwtt)
        cookies.set("jwt", response.data.jwt, {
          expires: new Date(1702631094 * 1000),
        });
        console.log(jwtt.unique_name);
      })
      .catch(function (error) {
        console.log(error);
        });
    
   
  setuser(jwtt.unique_name)
  setIsOpen(false)
  
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
    


  return (
    <>
      <div className="">
        <button
          type="button"
          onClick={openModal}

          className="rounded-md px-4 py-2 text-sm font-medium text-white w-[100px]  lg:text-sm md:text-sm  min-[420px]:text-xs"
        >
        {user === '' ?  `Hello,Sign in Account & Lists`: `Hello,${user} & Lists`}
        </button>
   
      </div>


      

      <Transition appear show={isOpen} as={Fragment}>
        <Dialog as="div" className="relative z-10" onClose={closeModal}>
          <Transition.Child
            as={Fragment}
            enter="ease-out duration-300"
            enterFrom="opacity-0"
            enterTo="opacity-100"
            leave="ease-in duration-200"
            leaveFrom="opacity-100"
            leaveTo="opacity-0"
          >
            <div className="fixed inset-0 bg-black bg-opacity-25" />
          </Transition.Child>

          <div className="fixed inset-0 overflow-y-auto">
            <div className="flex min-h-full items-center justify-center p-4 text-center">
              <Transition.Child
                as={Fragment}
                enter="ease-out duration-300"
                enterFrom="opacity-0 scale-95"
                enterTo="opacity-100 scale-100"
                leave="ease-in duration-200"
                leaveFrom="opacity-100 scale-100"
                leaveTo="opacity-0 scale-95"
              >
                <Dialog.Panel className="w-full max-w-md transform overflow-hidden rounded-2xl bg-white p-6 text-left align-middle shadow-xl transition-all">
                  <Dialog.Title
                    as="h3"
                    className="text-lg font-medium leading-6 text-gray-900"
                  >
                   
                  
                   <div className=' text-center'>
                    <div className={item === false ? ' border-b-2':''}>{item === false ? <Signin/>: <Singup/>}</div>
                    
                  
                    <button className={item === false ?'text-sm bg-yellow-300 rounded h-7 w-64 items-center mt-3':'hidden'} onClick={()=> setitem(true)}> Create Account </button>
                    </div>
                  </Dialog.Title>
                  <div className="mt-2">
                    
                  </div>

                  <div className="mt-4">
                   
                  </div>
                </Dialog.Panel>
              </Transition.Child>
            </div>
          </div>
        </Dialog>
      </Transition>
    </>
  )
}
