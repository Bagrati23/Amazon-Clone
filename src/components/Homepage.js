import SearchIcon from '@mui/icons-material/Search';
import ShoppingCartCheckoutIcon from '@mui/icons-material/ShoppingCartCheckout';
import { Link, Route, Routes } from 'react-router-dom';


import { useDispatch, useSelector } from 'react-redux';

import "slick-carousel/slick/slick.css"; 
import "slick-carousel/slick/slick-theme.css";
import Example from "./login.js"
import Slider1 from '../Slider/Slider1.js';
import Slider2 from '../Slider/Slider2.js';
import Slider3 from '../Slider/Slider3.js';



 

function Homepage() {
  const item= useSelector(state => state.item)
  const dispatch = useDispatch()
  return (
    
    <div className="flex flex-col h-max justify-between  bg-gray-200  pb-10">
     
      <div className='flex flex-col pt-7 px-10 ' >
      <div className='bg-white px-10'    >
        <Link to='/item' >
        <Slider1/>
        </Link>
      </div> <div className=' bg-white px-10'    >
       <Link to='/item'>
      <Slider3/>
      </Link>
      </div>
       <div  className=' bg-white  px-10'   >
        <Slider2/>
      </div> 
       
      </div>
 
   </div>
  );
}


export default Homepage;
