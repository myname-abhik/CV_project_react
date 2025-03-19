import React from 'react'
import '../Pages_css/Home.css'
import 'material-icons/iconfont/material-icons.css';
import { useEffect,useRef } from 'react';
// import { Swiper, SwiperSlide } from 'swiper/react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Pagination, Autoplay } from 'swiper/modules';

import 'swiper/css';
import 'swiper/css/pagination';
import "swiper/css/navigation";
import Crousal from '../component/Crousal';
import movies from '../assets/Movies_info/Movies_info.json'
import { Movie } from '@mui/icons-material';
import Movies from '../component/Movies';
import movie_pickups from '../assets/Movies_info/Movie_pickup.json'
import Lenis from "@studio-freight/lenis";
import Navbar from '../component/Navbar';


const Home = () => {
  useEffect(() => {
    const lenis = new Lenis({
      duration: 1.9, // Adjusts smoothness
      easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)), // Custom easing
      direction: "vertical", // Can be "horizontal" as well
      smooth: true,
      smoothTouch: false, // Set true if you want smooth scrolling on touch devices
    });

    function raf(time) {
      lenis.raf(time);
      requestAnimationFrame(raf);
    }

    requestAnimationFrame(raf);

    return () => lenis.destroy(); // Cleanup on unmount
  }, []);


const pagref = useRef(null)
  return (
    <>
   
        <div className="home_page_frame" id="main_page">
        <div className="Upper_frame">
    


    <div className="Crousal_section">
   
           
           <div className="swiper-container first_swiper-container "  >
           <Swiper
  modules={[Navigation, Pagination, Autoplay]}
  pagination={{ clickable: true }}
  loop={true}
  autoplay={{ delay: 4000, disableOnInteraction: true }}
>
          
               <div className="swiper-wrapper Copy_Swiper">
               {
                movies.map((movie,index)=>(
                  <SwiperSlide  >
                <Crousal image={movie.Poster} ele={movie.Movie}Description={movie.Description} genre={movie.Genres}/>
                </SwiperSlide>
               ))}
               </div>
               </Swiper>
               
             </div>
             
             <div className="Circle"></div>
             
       </div>


        </div>
        <div className="Lower_frame_Top_Pickups">
       
       <div className="Title_pickup">Top picks for you <i className="material-icons right_arrow">arrow_right_alt</i></div>
      
       <div className="Movie_list">
       <Swiper
       modules={[Navigation, Pagination, Autoplay]}
   loop={true}
   autoplay={{ delay: 3000}}
   slidesPerView={'auto'}
   className='second_swiper'
 
       
       >
      
       {movie_pickups.map((movie)=>(
         <SwiperSlide className='second_swiper-slide'>
         <Movies className="second-swiper-movies" image={movie.Movie_poster} features={movie.Movie_feature} title={movie.Movie_title}/>
         </SwiperSlide>
       ))}
       
    
       </Swiper>
       </div>
     </div>
     <div className='Categories'>
      
     </div>
        </div>
    </>
  )
}

export default Home