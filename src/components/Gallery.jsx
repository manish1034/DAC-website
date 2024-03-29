/* eslint-disable react/jsx-key */
// import { img_1 } from "../assets";
import Sidebar from './Sidebar';
import { useEffect, useState } from 'react';
import axios from 'axios';
import Loading from '../utils/Loading';

const Gallery = () => {
  const [data, setData] = useState([]);

  
  useEffect(() => {
    const fetchData = async() => {
      try{
        const response = await axios.get("https://dac-website-backend.onrender.com/api/gallery",{ 
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

  return (
    <div className="w-full">
      <Sidebar/>
      <div className="relative h-[150vh] flex flex-col bg-white dark:bg-[#010a18] justify-start text-white">
        <div className='flex flex-col justify-normal mt-6 pl-[10rem] mb-8'>
          <h1 className="text-black dark:text-white text-5xl font-bold text-center mr-[6rem]">Gallery</h1>
          {data.length > 0 ? (
            <>
              {data.map((item,index)=>(
                <div key={index} className='flex flex-col gap-4'>
                  {/* heading */}
                  <div className='flex gap-8 justify-start mt-[2rem]'>
                    <h1 className='text-4xl font-bold text-black dark:text-white'>Time Series (2002) </h1>
                    <h1 className='text-xl underline text-[#084db8] dark:text-[#00d1cd] mt-3 font-semibold'><a>view event details</a></h1>
                  </div>
                  {/* Photos */}
                  <div className='flex gap-5 justify-start mt-[0.5rem] overflow-x-scroll'>
                    {item.images.map((img,index)=> (
                      <img key={index} src={img} alt={index} className='h-[12rem] w-[17.5rem] rounded-lg object-cover shadow-xl'/>
                    ))}
                  </div>
                </div>
              ))}
            </>
          ):<Loading message="please wait patiently"/>
          }
        </div>
      </div>
    </div>
  )
}

export default Gallery;