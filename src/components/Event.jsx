/* eslint-disable react/no-unescaped-entities */
import Sidebar from "./Sidebar";
import { Swiper, SwiperSlide } from 'swiper/react';

import 'swiper/css';
import 'swiper/css/effect-coverflow';
import 'swiper/css/pagination';
import 'swiper/css/navigation';

import { EffectCoverflow, Pagination, Navigation } from 'swiper/modules';
import { FaArrowLeft, FaArrowRight } from "react-icons/fa";
import { img_1 } from "../assets";
import { useContext } from "react";
import { UserContext } from "../App";



const Event = () => {
  const theme = useContext(UserContext);
  return (
    <div className="relative h-[100vh] w-[100vw]">
      <Sidebar/>
      <div className="relative text-white flex flex-col h-[100vh] w-[100vw] bg-white dark:bg-[#010a18] justify-start">
        <div className="text-5xl w-full font-bold mt-6 text-center pl-[6rem] text-black dark:text-white">Events We've Conducted</div>
        <div className="flex gap-8">
          {/* Carousel */}
          <div className="container relative right-32">
            <h1 className="heading ml-[10rem] text-xl font-bold mt-[0rem] text-black dark:text-white">Events Poster</h1>
              {theme==="dark"?
              <Swiper
                effect={'coverflow'}
                grabCursor={true}
                centeredSlides={true}
                loop={true}
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
                  return `<span class="${className}" style="background-color: #00fff7; font-size: 5rem"></span>`;
                }}}
                navigation={{
                  nextEl: '.swiper-button-next',
                  prevEl: '.swiper-button-prev',
                  clickable: true,
                }}
                modules={[EffectCoverflow, Pagination, Navigation]}
                className="swiper_container"
              >
                <SwiperSlide>
                  <img src={img_1} alt="slide_image" className=" object-cover" />
                </SwiperSlide>
                <SwiperSlide>
                  <img src={img_1} alt="slide_image" />
                </SwiperSlide>
                <SwiperSlide>
                  <img src={img_1} alt="slide_image" />
                </SwiperSlide>
                <SwiperSlide>
                  <img src={img_1} alt="slide_image" />
                </SwiperSlide>
                <SwiperSlide>
                  <img src={img_1} alt="slide_image" />
                </SwiperSlide>
                <SwiperSlide>
                  <img src={img_1} alt="slide_image" />
                </SwiperSlide>
                <SwiperSlide>
                  <img src={img_1} alt="slide_image" />
                </SwiperSlide>

                <div className="slider-controler">
                  <FaArrowLeft className="text-xl text-[#00fff7] relative left-[-1%] swiper-button-prev"/>
                  <FaArrowRight className="rext-xl text-[#00fff7] relative swiper-button-next"/>
                  <div className="swiper-pagination"></div>
                </div>
              </Swiper>
              :<Swiper
                effect={'coverflow'}
                grabCursor={true}
                centeredSlides={true}
                loop={true}
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
                  return `<span class="${className}" style="background-color: #025fc4; font-size: 5rem"></span>`;
                }}}
                navigation={{
                  nextEl: '.swiper-button-next',
                  prevEl: '.swiper-button-prev',
                  clickable: true,
                }}
                modules={[EffectCoverflow, Pagination, Navigation]}
                className="swiper_container"
              >
                <SwiperSlide>
                  <img src={img_1} alt="slide_image" className="shadow-2xl" />
                </SwiperSlide>
                <SwiperSlide>
                  <img src={img_1} alt="slide_image" className="shadow-2xl" />
                </SwiperSlide>
                <SwiperSlide>
                  <img src={img_1} alt="slide_image" className="shadow-2xl" />
                </SwiperSlide>
                <SwiperSlide>
                  <img src={img_1} alt="slide_image" className="shadow-2xl" />
                </SwiperSlide>
                <SwiperSlide>
                  <img src={img_1} alt="slide_image" className="shadow-2xl" />
                </SwiperSlide>
                <SwiperSlide>
                  <img src={img_1} alt="slide_image" className="shadow-2xl" />
                </SwiperSlide>
                <SwiperSlide>
                  <img src={img_1} alt="slide_image" className="shadow-2xl" />
                </SwiperSlide>

                <div className="slider-controler">
                  <FaArrowLeft className="text-xl text-[#084db8] relative left-[-1%] swiper-button-prev"/>
                  <FaArrowRight className="rext-xl text-[#084db8] relative swiper-button-next"/>
                  <div className="swiper-pagination"></div>
                </div>
              </Swiper>}
          </div> 
          {/* Content  */}
          <div className="flex flex-col h-[26rem] w-[19rem] bg-[#025fc4] mr-[8rem] mt-[5rem] rounded-xl">
            <h1 className="mt-8 ml-8 text-start text-[2.7rem] w-full font-bold">Event Name</h1>
            <h1 className="mt-5 text-center text-4xl w-full font-bold">About Event</h1>
            <p className="text-center px-3 text-sm mt-5">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque sit amet dapibus felis, a dictum ex. Aliquam id tempor purus, sit amet faucibus lorem. Fusce sit amet scelerisque justo. Orci varius natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Aliquam sodales tincidunt lectus, a dapibus ante varius vitae. Aliquam id tempor purus, sit amet faucibus lorem. Fusce sit amet scelerisque justo.</p>
          </div>
        </div>
        <button className="relative h-8 w-[8.5rem] bottom-16 left-[30%] text-white dark:text-[#010a18] bg-[#084db8] dark:bg-[#00fff7] rounded-full font-bold shadow-[#5e8cd1] dark:shadow-[#458d8a] shadow-md">View Photos</button>
      </div>
    </div>
  )
}

export default Event;