// import { img_1 } from "../assets";
/* eslint-disable react/jsx-key */
/* eslint-disable react/no-unescaped-entities */
import Sidebar from "./Sidebar";
import { Swiper, SwiperSlide } from 'swiper/react';

import 'swiper/css';
import 'swiper/css/effect-coverflow';
import 'swiper/css/pagination';
import 'swiper/css/navigation';

import { EffectCoverflow, Pagination, Navigation } from 'swiper/modules';
import { FaArrowLeft, FaArrowRight } from "react-icons/fa";
import { useContext, useEffect, useRef, useState } from "react";
import { UserContext } from "../App";
import axios from "axios";
import Loading from "../utils/Loading";
import { Link } from "react-router-dom";

const Event = () => {
  const theme = useContext(UserContext);
  const [data, setData] = useState([]);
  const [activeSlide, setActiveSlide] = useState(0);
  const swiperRef = useRef(null);
  
  useEffect(() => {
    const fetchData = async() => {
      try{
        const response = await axios.get("https://dac-website-backend.onrender.com/api/events",{ 
          headers: {
            Authorization: `Bearer ${import.meta.env.VITE_APP_TOKEN}`
          }
        })
        setData(response.data);
        console.log(response.data);
      }catch (error) {
        console.error('Error fetching data:', error);
      }
    };
    fetchData();
  }, []);
  
  const handleSlideChange = (swiper) => {
    setActiveSlide(swiper.activeIndex);
    // console.log("Active Slide Data:", data[swiper.activeIndex]);
    // console.log("Active Slide Index:", swiper.activeIndex);
  };

  return (
    <div className="w-full">
      <Sidebar/>
      <div className="relative h-[100vh] text-white flex flex-col bg-white dark:bg-[#010a18] justify-start">
        <h1 className="text-5xl w-full font-bold mt-6 text-center pl-[6rem] text-black dark:text-white">Events We've Conducted</h1>
        {data.length > 0 ? (
        <>
          <div className="flex gap-8">
            {/* Carousel */}
            <div className="container relative right-32">
              <h1 className="heading ml-[10rem] text-xl font-bold mt-[0rem] text-black dark:text-white">Events Poster</h1>
                <Swiper
                  ref={swiperRef}
                  effect={'coverflow'}
                  
                  centeredSlides={true}
                  slidesPerView={'auto'}
                  coverflowEffect={{
                    rotate: 0,
                    stretch: 0,
                    depth: 250,
                    modifier: 5,
                  }}
                  pagination={{ 
                    el: '.swiper-pagination', 
                    clickable: true,
                    renderBullet: function (index, className) {
                    return `<span class="${className}" style="background-color: ${theme === "dark" ? "#00fff7" : "#025fc4"}; font-size: 5rem"></span>`;
                  }}}
                  navigation={{
                    clickable: true,
                    nextEl: '.swiper-button-next',
                    prevEl: '.swiper-button-prev',
                  }}
                  modules={[EffectCoverflow, Pagination, Navigation]}
                  className="swiper_container"
                  onSlideChange={(swiper) => handleSlideChange(swiper)}
                >
                {data.map((item, index) => (
                  <SwiperSlide key={index}>
                    <img src={item.image} alt="slide_image" className=" object-cover" />
                  </SwiperSlide>
                ))} 
                <div className="slider-controler">
                  <FaArrowLeft className="text-[#025fc4] dark:text-[#00fff7] relative left-[-1%] swiper-button-prev"/>
                  <FaArrowRight className="text-[#025fc4] dark:text-[#00fff7] relative swiper-button-next"/>
                  <div className="swiper-pagination"></div>
                </div>
              </Swiper>
            </div> 
            {/* Content  */}
            <div className="flex flex-col h-[26.5rem] w-[19rem] bg-[#025fc4] mr-[8rem] mt-[5rem] rounded-xl">
              <h1 className="mt-3 text-center text-[2rem] max-w-sm font-bold">{data[activeSlide]?.name}</h1>
              <h1 className="mt-2 text-center text-3xl w-full font-bold">{data[activeSlide]?.date}</h1>
              <p className="text-center px-3 text-sm mt-5 max-w-md">{data[activeSlide]?.description}</p>
            </div>
          </div>
        </>
        ): ("")
        }
        {data.length > 0 ? (
          <Link to="/gallery">
            <button className="absolute h-8 w-[8.5rem] bottom-10 left-[30%] text-white dark:text-[#010a18] bg-[#084db8] dark:bg-[#00fff7] rounded-full font-bold shadow-[#5e8cd1] dark:shadow-[#458d8a] shadow-md z-20">View Photos</button>
          </Link>
        ):<Loading message="please wait patiently"/>
        }
      </div>
    </div>
  )
}

export default Event;