import React, { Component, useEffect, useState } from "react";
import Slider from "react-slick";
import axios from "axios";







const Slider2 = () => {


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
  const[Item2,setItem2]=useState([])


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
{axios.get('https://ngglobalwebapi20231210182820.azurewebsites.net/api/product/offers')
.then(res=>setItem2(res.data))
.catch(err=> console.log(err))},[])








  return (
    <div>
        <h2 className=" font-bold ">Offers</h2>
  
        <Slider {...settings}>
         {Item2.map((item)=><div className="cursor-pointer w-8 border-t-8 border-x-8 h-80" key={item.id}>
          <img src={item.image} width={100} height={100}/>
          <p className=" line-through bg-red-600 w-fit pt-2">$ {item.oldPrice}</p>
        <p>$ {item.newPrice}</p>
        {item.name.substr(0, 55)}...
         

         </div>)}
        </Slider>

      </div>
    );
}
  


export default Slider2