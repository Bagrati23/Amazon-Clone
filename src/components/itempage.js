import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import axios from "axios";
import Slider from "react-slick";
import { additem } from '../redux/slice/cartslice';


const Itempage = () => {
  const dispatch=useDispatch()
    const itempage = useSelector(state => state.page)
  const cat= useSelector(state=> state.cat)

const[Item,setitem]=useState([])
const[Item2,setitem2]=useState(0)



function SampleNextArrow(props) {
  const { className, style, onClick } = props;
  return (
    <div
      className={className}
      style={{ ...style, display: "block",background:"grey",height:"" }}
      onClick={onClick}
    />
  );
}
const settings = {

  className: "center",
  infinite: true,
  centerPadding: "60px",
  slidesToShow: 1,
  swipeToSlide: true,
  nextArrow: <SampleNextArrow />,
  prevArrow:<SampleNextArrow />,
  afterChange: function(index) {
    console.log(
      `Slider Changed to: ${index + 1}, background: #222; color: #bada55`
    );
  }
}
useEffect(() => {

  localStorage.setItem('itemId', itempage.id );

  axios.get(`https://ngglobalwebapi20231210182820.azurewebsites.net/api/product/products/${itempage.id}`)
    .then(res => setitem(res.data))
    .catch(err => console.log(err));
}, [itempage]);



    
  return (
    <div>


    <div className=' 2xl:flex-row xl:flex-row lg:flex md:flex-col h-max bg-gray-200 justify-between  mt-7 pb-24  '>
      <div className='flex xl:flex-row lg:flex-row md:flex-row sm:flex-row min-[420px]:flex-col-reverse'> 
     
        <div className={itempage.image.length == 6 ? 'flex 2xl:flex-col  xl:flex-col lg:flex-col md:flex-col sm:flex-col mr-36 min-[420px]:flex-row min-[420px]:w-14 ':'flex 2xl:flex-col mr-36 min-[420px]:flex-row xl:flex-col lg:flex-col md:flex-col sm:flex-col min-[420px]:w-20 '}>

   
<img className=' rounded-lg border pb-2 hover: cursor-pointer ' src={itempage.image[0]} width={100} height={100} onClick={()=>setitem2(0)}/>
<img className=' rounded-lg border pb-2 hover: cursor-pointer ' src={itempage.image[1]} width={100} height={100} onClick={()=>setitem2(1)}/>
<img className=' rounded-lg border pb-2 hover: cursor-pointer ' src={itempage.image[2]} width={100} height={100} onClick={()=>setitem2(2)}/>
<img  className={itempage.image.length >= 4 ? 'rounded-lg border pb-2 hover: cursor-pointer':' hidden'} src={itempage.image[3]} width={100} height={100} onClick={()=>setitem2(3)}/>
<img  className={itempage.image.length >= 5 ? 'rounded-lg border pb-2 hover: cursor-pointer':' hidden'} src={itempage.image[4]} width={100} height={100} onClick={()=>setitem2(4)}/>
<img  className={itempage.image.length == 6 ? 'rounded-lg border pb-2 hover: cursor-pointer':' hidden'}  src={itempage.image[5]} width={100} height={100} onClick={()=>setitem2(5)}/>
</div>
      <div>
    <img className='rounded-lg' src={itempage.image[Item2]} width={500} height={500}/>
</div>
  
</div>

      <div className='  w-2/5 '>     
          <h2 className='border-b border-slate-400 pb-4 text-lg w-96 shrink-0'>{Item.name}</h2> 
          <p className=' font-bold text-2xl pb-4'> <span className=' align-text-top font-normal text-xs '>$</span>{Item.price}</p>
          <button onClick={()=>dispatch(additem({img:Item.image, name:Item.name,price:Item.price,id:Item.id,amount: 1}))} className=' bg-yellow-300 rounded font-light w-36 h-10 mb-4' >ADD TO CART</button>
        <div className='border-b border-slate-400'>
          <ul>
            <li className='pb-4'><p>Brand: {Item.brand}</p></li>
            <li className='pb-4'><p>Model: {Item.model}</p></li>
        </ul>
        </div>
        <div className=' p-0'>
          <p className=' text-sm pb-4 w-[400px] '>{Item.description}</p>
         </div>
        </div>
        </div>
    </div>
  )
}

export default Itempage