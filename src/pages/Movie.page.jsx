import React from 'react';
import MovieHero from '../components/MovieHero.component';
import {FaCcVisa ,FaCcApplePay} from "react-icons/fa";
import Cast from '../components/Cast/Cast.component';
import PosterSlider from '../components/PosterSlider/PosterSlider.component';
import PremierImages from '../config/TempPosters.config';



const Movie = () => {

  const settings={
    infinity:false,
    speed:500,
   
    slidesToShow:4,
    slidesToScroll:4,
    InitialSlide:0,
    responsive: [
        {
        breakpoint:1024,
        settings : {
            slidesToShow:3,
            slidesToScroll:3,
            infinite:true,

        },

    },
    {
        breakpoint:600,
        settings : {
            slidesToShow:2,
            slidesToScroll:2,
            InitialSlide:1,

        },

    },
    {
        breakpoint:480,
        settings : {
            slidesToShow:3,
            slidesToScroll:1,
          

        },

    },
],
 };

 

  return (
    <>
      <MovieHero />
      <div className="my-12 container  px-4 lg:ml-20 lg:w-2/3" >
          <h2 className="text-black font-bold text-2xl mb-3">About the movie</h2>
          <div className="flex flex-col items-start gap-3">
          <p className="text-gray-800">
            Bruce Wayne and Diana Prince try to bring the metahumans of Earth 
            together after the death of Clark Kent. Meanwhile, Darkseid sends
             Steppenwolf to Earth with an army to subjugate humans.
          </p>
          </div>
          <div className="my-8">
          <hr />
          </div>


          <div className="my-8" flex flex-col gap-5>
            <h2 className="text-black font-bold text-2xl mb-3">Applicable Offers
            </h2>  

             <div className="flex flex-col gap-3 lg:flex-row">
             <div className="flex items-start bg-yellow-100 p-3  border-yellow-400 border-dashed border-2 rounded-md">
              <div className="w-8 h-8">
              <FaCcVisa className="w-full h-full" />
              </div>
              <div className="flex flex-col items-start gap-2">
                <h3 className="text-gray-700 text-xl font-bold">Visa Stream Offer</h3>
                <p className="text-gray-600">WATCH TOP MOVIES @ 50% OFF
                  Rent & Use Code STREAMSAVE</p>
              </div>
            </div>     
            

            
             <div className="flex items-start bg-yellow-100 p-3 border-yellow-400 border-dashed border-2 rounded-md">
              <div className="w-8 h-8">
              <FaCcApplePay className="w-full h-full" />
              </div>
              <div className="flex flex-col items-start gap-2">
                <h3 className="text-gray-700 text-xl font-bold">Apple Pay Offer</h3>
                <p className="text-gray-600">WATCH MOVIES ONLINE FOR FREE!
                Limited Period Offer</p>
              </div>
            </div>     
            </div>

          </div>   

          <div className="my-8">
          <hr />
          </div>

          <div className="my-8">
          <h2 className="text-black font-bold text-2xl mb-4">Cast & Crew</h2>
          <div className="flex flex-wrap gap-4">
            <Cast image="https://assets-in.bmscdn.com/iedb/artist/images/website/poster/large/henry-cavill-23964-04-05-2020-04-25-14.jpg"
            castName="Henry Cavill" role="Superman" />

            <Cast image="https://assets-in.bmscdn.com/iedb/artist/images/website/poster/large/ben-affleck-292-12-09-2017-05-12-16.jpg"
            castName="Ben Afflick" role="Batman" />

            <Cast image="https://assets-in.bmscdn.com/iedb/artist/images/website/poster/large/gal-gadot-11088-17-10-2017-11-45-36.jpg"
            castName="Gal Gadot" role="Wonder Women" />

            <Cast image="https://assets-in.bmscdn.com/iedb/artist/images/website/poster/large/jason-momoa-25617-24-03-2017-17-39-52.jpg"
            castName="Jason Momoa" role="Aquasman" />
          </div>
          </div>

          <div className="my-8">
          <hr />
          </div>

          <div className="my-8">
          <PosterSlider
          config={settings}
               images={PremierImages}
               title="You might also like"
               isDark={false}
               subtitle="" />   
          </div>

          <div className="my-8">
          <hr />
          </div>

          <div className="my-8">
          <PosterSlider
          config={settings}
               images={PremierImages}
               title="BMS XCLUSIVE"
               isDark={false}
               subtitle="" />   
          </div>

      </div>
    </>
  );
};

export default Movie;
