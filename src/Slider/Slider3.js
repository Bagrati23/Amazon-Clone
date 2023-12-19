import React, { Component, useEffect, useState } from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css"; 
import "slick-carousel/slick/slick-theme.css";
import axios from "axios";
import { useDispatch } from "react-redux";
import { addproduct } from "../redux/slice/itempageslice";






const Slider3 = () => {
  const dispatch= useDispatch()
  function SampleNextArrow(props) {
    const { className, style, onClick } = props;
    return (
      <div
        className={className}
        style={{ ...style, display: "block", background: "grey",height:"" }}
        onClick={onClick}
      />
    );
  }
  const[item2,setItem2]=useState([])
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
          dots: true
        }
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
          initialSlide: 2
        }
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
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

{axios.get('https://ngglobalwebapi20231210182820.azurewebsites.net/api/product/mostdemandproducts')
.then(res=>setItem2(res.data))
.catch(err=> console.log(err))},[])



  return (
    <div>
        <h2 className=" font-bold ">Most Popular</h2>
    
        <Slider {...settings}>
         {item2.map((item)=><div key={item.id} className="cursor-pointer w-8 border-8 h-72"  onClick={()=>dispatch(addproduct({id:item.id,image:item.images}))}>
          <img className="" src={item.images} width={100} height={100}/>
          <div className="pt-2">
         <p>$ {item.price}</p>
         <p> {item.name.substr(0, 55)}...</p>
         </div>
         </div>)}
        </Slider>
      </div>
    );
}
  


export default Slider3