import axios from 'axios'
import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { addproduct } from "../redux/slice/itempageslice";
import { Link } from 'react-router-dom';

const Cat = () => {   
    const cat= useSelector(state=> state.cat)
    const dispatch = useDispatch()

    const[ item,setitem]=useState([])
     useEffect(()=>{  
      

        axios.get('https://ngglobalwebapi20231210182820.azurewebsites.net/api/product/products',{
    params:{
      CategoryId:cat.Category,
      PriceFrom:cat.Pricefrom ,
      PriceTo:cat.Priceto
    }
})

.then(function (response) {
   setitem(response.data)
})
    .catch(err => console.log(err));

  })

  
  return (
  
    <div>


{item.map((item)=>  <Link to='/item' ><div className=" w  cursor-pointer border-4 h-64 border-gray-400" key={item.id} onClick={()=>dispatch(addproduct({id:item.id,image:item.images}))} >
          <img src={item.images} width={100} height={100}/>
            <div className="pt-2">
           <p>$ {item.price}</p> 
   
           <p>{item.name.substr(0, 55)}...</p>
            </div>
         </div></Link>)}
    </div> 
  )
}

export default Cat