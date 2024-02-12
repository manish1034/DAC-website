/* eslint-disable react/jsx-key */
// import { img_1 } from "../assets";
import Sidebar from './Sidebar';
import { useEffect, useState } from 'react';
import axios from 'axios';

const Gallery = () => {
  const token = "ywOD1sidz3zhpOZf9BDsTqqQJ8vLUA4syWCGykj8tvPOQmKdLdM3fc49sQQZ2oU6";
  const [data, setData] = useState([]);

  
  useEffect(() => {
    const fetchData = async() => {
      try{
        const response = await axios.get("http://localhost:3000/api/gallery",{ 
          Headers: {
            Authorization: `Bearer ${token}`
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
      <div className="relative flex flex-col bg-white dark:bg-[#010a18] justify-start text-white">
        <div className='flex flex-col justify-normal mt-6 pl-[10rem] mb-8'>
          <h1 className="text-black dark:text-white text-5xl font-bold text-center mr-[6rem]">Gallery</h1>
          {data.map((item,index)=>(
          <>
            <div key={index} className='flex flex-col gap-4'>
              {/* heading */}
              <div className='flex gap-8 justify-start mt-[2rem]'>
                <h1 className='text-4xl font-bold text-black dark:text-white'>Time Series (2002) </h1>
                <h1 className='text-xl underline text-[#084db8] dark:text-[#00d1cd] mt-3 font-semibold'><a>view event details</a></h1>
              </div>
              {/* Photos */}
              <div className='flex gap-5 justify-start mt-[0.5rem]'>
                {item.images.map((img,index)=> (
                  <img key={index} src={img} alt={index} className='h-[12rem] w-[17.5rem] rounded-lg object-cover shadow-xl'/>
                ))}
              </div>
            </div>
          </>
          ))}
        </div>
      </div>
    </div>
  )
}

export default Gallery;