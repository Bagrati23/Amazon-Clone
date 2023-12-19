import React, { Component, useEffect, useState } from "react";
import Slider from "react-slick";
import axios from "axios";
import { green } from "@mui/material/colors";
import { useDispatch, useSelector } from "react-redux";
import { addproduct } from "../redux/slice/itempageslice";







const Slider1 = () => {
  const dispatch = useDispatch()
  const cat=useSelector(state=> state.page)
  function SampleNextArrow(props) {
    const { className, style, onClick } = props;
    return (
      <div
        className={className}
        style={{ ...style, display: "block",background:"grey",height:"" ,}}
        onClick={onClick}
      />
    );
  }
  const[item,setItem]=useState([])
  const settings = {

    className: "center",
    infinite: true,
    centerPadding: "60px",
    slidesToShow: 3,
    swipeToSlide: true,
    nextArrow: <SampleNextArrow />,
    prevArrow:<SampleNextArrow />,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 3,
          infinite: true,
          swipeToSlide: true,
        }
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
          initialSlide: 2,
          swipeToSlide: true,
        }
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          swipeToSlide: true,
          slidesToScroll: 1
        }
      }
    ],
  
    afterChange: function(index) {
      console.log(
        `Slider Changed to: ${index + 1}, background: #222; color: #bada55`
      );
    }
  }
  useEffect(()=>
  {axios.get('https://ngglobalwebapi20231210182820.azurewebsites.net/api/product/latestproducts')
 .then(res=>setItem(res.data))
.catch(err=> console.log(err))},[])
 






  return (
    <div>
        <h2 className=" font-bold "> Latest Products</h2>
         
        <Slider {...settings}>
         {item.map((item)=><div className=" w-8  cursor-pointer border-8 h-64" key={item.id}  onClick={()=>dispatch(addproduct({id:item.id,image:item.images}))}>
          <img src={item.images} width={100} height={100}/>
            <div className="bg-white pt-2">
           <p>$ {item.price}</p> 
           <p>{item.name.substr(0, 55)}...</p>
            </div>
         </div>)}
        </Slider>
      </div>
    );
}
  


export default Slider1