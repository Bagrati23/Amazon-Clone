import { Link, Route, Routes } from 'react-router-dom';
import Cart from './components/Cart';
import { useDispatch, useSelector } from 'react-redux';
import "slick-carousel/slick/slick.css"; 
import "slick-carousel/slick/slick-theme.css";
import SearchIcon from '@mui/icons-material/Search';
import ShoppingCartCheckoutIcon from '@mui/icons-material/ShoppingCartCheckout';
import Itempage from './components/itempage.js';
import Homepage from './components/Homepage';
import Example from "./components/login"
import Footer from './components/footer';
import { useEffect, useState } from 'react';
import axios from 'axios';
import Cat from './components/cat';
import {  } from './redux/slice/itempageslice';
import { addcat } from './redux/slice/catslice';
import jwtdecode from './components/jwtdecode.js';


function App() {
  const itempage = useSelector(state => state.page)
  const cat= useSelector(state=> state.cat)

  const [item,setitem]=useState([])
  const [item2,setitem2] =useState('')
  const [item3,setitem3] =useState('')
  const [priceto,setpriceto] =useState('')
  const [pricefrom,setpricefrom] =useState('')
  const dispatch=useDispatch()
  useEffect(()=>{
    axios.get('https://ngglobalwebapi20231210182820.azurewebsites.net/api/product/categories')
    .then(res => setitem(res.data))
    .catch(err => console.log(err));
}, []);
  function clear(){
    dispatch(addcat({to:priceto,from:pricefrom,category:item3}))
    setpricefrom('')
    setpriceto('')
  }


  return (
    
    <div className="flex flex-col h-full justify-between  bg-gray-200 ">
      <div>
      <header className="flex pt-3 justify-between items-center bg-[#131921]">
        <button> <Link to=''><img className='  hover:border-2 border-white min-[420px]:w-16 2xl:w-32 xl: w-28' src='./Screenshot 2023-09-20 224909.png' width={113} height={60} ></img></Link></button>
         <div className='flex items-center'>
          <select className=' 2xl:w-fit bg-gray-200 rounded-l-lg h-10  md:w-20 lg:w-32 sm:w-10 min-[420px]:w-5'   
value={item2} 
onChange={(event) => {
 clear()
  const selectedValue = event.target.value; 
  const selectedOption = item.find((item) => item.name === selectedValue); 
  if (selectedOption) {
    const selectedKey = selectedOption.id; 
    setitem2(selectedValue); 
   setitem3(selectedKey); 
  
  }
}}   
 >   

       {item.map((item)=> 
         
           <option value={item.name} key={item.id} data-key={item.id} >{item.name} 
           

          </option>
           
            )}
          </select>
   
         <input type='text' placeholder='Search Amazon' className=' 2xl:w-96 h-10 md:w-32 lg:w-48 sm:w-16 min-[420px]:w-8'/>
       <button onClick={()=> dispatch(addcat({id:item3}))} ><SearchIcon  sx={{ fontSize: 40 }} className=' bg-[#FEBD69] rounded-r-lg'/></button>
      </div>
   <div className='hover:border-2 border-white'>
        <Example/>
      </div>
    <div className='hover:border-2 border-white'>  
      <Link to='/cart'>
       <ShoppingCartCheckoutIcon sx={{color:"#FFFFFF"}}/>
   </Link>

    </div>
      </header>
      <div>
        <input
        value={pricefrom}
        onChange={(event)=>setpricefrom(event.target.value)}
         type='text' placeholder='PriceFrom' />
        <input
        value={priceto}
        onChange={(event)=>setpriceto(event.target.value)}
        type='text' placeholder='PriceTo' />
        <Link to='/Filtred'>
        <button className=' bg-orange-300' onClick={()=> clear()} > Filter</button></Link>
      </div>
   
      <Routes>
       <Route path='/' element={<Homepage/>} />
       <Route path="/cart" element={< Cart />} />
       <Route path='/item' element={< Itempage/>}/>
       <Route path='/Filtred' element={<Cat/>}/>
      </Routes>
      </div>
      {jwtdecode}
      <footer className=' bottom-0 '>
    <Footer/>
        </footer>
      
   </div>
  );
}


export default App;
