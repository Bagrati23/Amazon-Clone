import React, { useState } from 'react';
import Checkbox from '@mui/material/Checkbox';
import { useSelector } from 'react-redux';

const label = { inputProps: { 'aria-label': 'Checkbox demo' } };

const Cart = () => {
  const cart = useSelector((state) => state.cart);
  const [pricee, setPircee] = useState(1);


  const total = cart.reduce((accumulator, item) => accumulator + item.price*pricee, 0);

  const minus= ()=>{
   if(pricee > 0){
    setPircee(prev=> prev-1 )
   }

  }



  return (
    <div className='bg-gray-200 flex justify-between pt-3 px-4 h-screen 2xl:flex-row xl:flex-row  lg:flex-row min-[420px]:flex-col'>
      <div className='bg-white w-4/5 pt-5 mr-5 min-[420px]:w-fit'>
        <h1 className='font-medium text-2xl border-b'>Shopping Cart</h1>
    
        <div>
          {cart.map((item) => 
            <div key={item.id} className=' flex'>
              <img src={item.img} width={100} height={100} />
              <div className=''>
              <p className=' text-sm'>{item.name}</p>
              <p>{item.price}$</p>
              <p className='text-sm'>
          {<Checkbox {...label} size='small' />} This is a gift
        </p>
            <div>
            <button onClick={()=>setPircee((prev)=> prev+1) } >+</button>        
           {pricee}
              <button onClick={minus} >-</button>              
            </div></div>
            </div>)}
        
        </div>
        <p className='flex place-content-end pr-3'>
          Subtotal ({cart.length} items):{' '}
          <span className='font-bold'>$ {total.toFixed(2)}</span>
        </p>
      </div>

      <div className='bg-white p-5 h-fit w-[297px]'>
        <p className='flex'>
          Subtotal ({cart.length} items):<p className='font-bold'>${total.toFixed(2)}</p>
        </p>
        <p className='text-sm'>
          {<Checkbox {...label} size='small' />} This order contains a gift
        </p>
        <button className='text-sm bg-yellow-300 rounded h-7 w-64 items-center'>
          Proceed to Checkout
        </button>
      </div>
    </div>
    )}


export default Cart;