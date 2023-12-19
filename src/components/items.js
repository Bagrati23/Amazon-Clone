import React from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { additem } from '../redux/slice/cartslice';



const Items = () => {


 const dispatch = useDispatch()




const items =[{
    img: "./KM-P7-1-3_700x.webp",
    name:"AUKEY",
    price:20,
    id:1
},
{
  img: "./KM-P7-1-3_700x.webp",
  name:"AUKEY",
  price:20,
  id:2
}]




  return (
    <div className='flex'>
   { items.map((item)=> <div key={item.id}>
      <img src={item.img} width={100} height={100}/>
       <p>{item.name}</p>
          <p>{item.price}$</p>
          <button onClick={()=>dispatch(additem({img:item.img, name:item.name,price:item.price,id:item.id}))} className=' bg-yellow-300 rounded font-light w-20' >ADD TO CART</button>

   </div>) }




    </div>
  )
}

export default Items