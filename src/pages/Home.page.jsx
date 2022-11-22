import React from "react";
import Slider from "react-slick";
import EntertainmentCardSlider from "../components/Entertainment/Entertainmentcard.component";


//component
import PosterSlider from "../components/PosterSlider/PosterSlider.component";

//configs
import PremierImages from "../config/TempPosters.config";


const HomePage=()=>{
    return (
        <>
        <div className="flex flex-col gap-4 ">
        <div className="container mx-auto px-4">
            <h1 className="text-xl font-bold text-gray-800 my-3">The Best of Entertainment</h1>
            <EntertainmentCardSlider />
           
        </div> 

        <div className="bg-litblue py-12">
           
            <div className="container mx-auto px-4">
            <div className="hidden  md:flex">
                <div>
                    <img src="https://assets-in.bmscdn.com/discovery-catalog/collections/tr:w-1440,h-120:q-80/premiere-banner-web-collection-202208191200.png" alt="premierlogo" 
                    className="w-full h-full"/>
                </div>
                
            </div>
                <PosterSlider
                images={PremierImages}
                title="Premieres"
                subtitle="Brand new release every Friday"
                isDark />
            </div>
        </div>
        </div>
          <div className="container mx-auto px-4 my-8">
               <PosterSlider
               images={PremierImages}
               title="Online Streaming Events"
               isDark={false}
               subtitle="" />   
         </div>   

         <div className="container mx-auto px-4 my-8">
               <PosterSlider
               images={PremierImages}
               title="Outdoor Events"
               isDark={false}
               subtitle="" />   
         </div>   
        </>
    );
};


export default HomePage;