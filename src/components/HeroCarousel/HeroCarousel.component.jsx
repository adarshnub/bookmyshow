import React from "react";
import HeroSlider from "react-slick";
import { NextArrow,PrevArrow } from "./Arrows.component";





const HeroCarousel =()=>{

const settingsLG= {
    arrows:true,
    autoplay:true,
    centerMode:true,
    centerPadding:"360px",
    sidesToShow:1,
    infinite: true,
    slidesToScroll: 1,
    nextArrow: <NextArrow />,
    prevArrow: <PrevArrow />,
};

    const settings = {
        arrows:true,
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1,
        nextArrow: <NextArrow />,
        prevArrow: <PrevArrow />,
      };

      const images = ["https://images.unsplash.com/photo-1668613965090-167f9263906f?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1169&q=80",
                       "https://images.unsplash.com/photo-1668603486663-5fd96b778391?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=687&q=80",
                        "https://images.unsplash.com/photo-1668570000683-aa421ea758a2?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=688&q=80",
                    "https://images.unsplash.com/photo-1664575599736-c5197c684128?ixlib=rb-4.0.3&ixid=MnwxMjA3fDF8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80",
                 "https://images.unsplash.com/photo-1668537472212-b79c4f3e8591?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=687&q=80"];


    return (
        <>
          <div className="lg:hidden">
          <HeroSlider {...settings}>
                {
                    images.map((image)=>(
                        <div className="w-full h-80 md:h-64 py-3 ">
                            <img src={image} alt="testing" className="w-full h-full rounded-md" />
                        </div>
                    ))
                }
            </HeroSlider>   
          </div> 
          
          <div className="hidden lg:block">
          <HeroSlider {...settingsLG}>
                {
                    images.map((image)=>(
                        <div className="w-full h-96 px-2 py-3 ">
                            <img src={image} alt="testing" className="w-full h-full rounded-md" />
                        </div>
                    ))
                }
            </HeroSlider> 
          </div> 
        </>
    );
}




export default HeroCarousel;