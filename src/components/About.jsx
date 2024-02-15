/* eslint-disable react-hooks/exhaustive-deps */
/* eslint-disable no-unused-vars */
/* eslint-disable react/no-unescaped-entities */
// import { BsPersonCircle } from "react-icons/bs";
import Sidebar from "./Sidebar";
import { linkedin } from "../assets";
import axios from "axios";
import { useEffect, useState } from "react";

const About = () => {
  const [data, setData] = useState([]);

  
  useEffect(() => {
    const fetchData = async() => {
      try{
        const response = await axios.get("http://localhost:3000/api/team",{ 
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
      <div className="relative flex flex-col h-[100vh] bg-white dark:bg-[#010a18] justify-start">
        <div className="text-black dark:text-white text-5xl font-bold mt-6 text-center">Meet The Team</div>
        {/* DoWnParT DIscRiption */}
        <div className="flex gap-5">
          {data.filter(item => item.name == 'Vikas Pandey').map((item, index)=>(
          <>
          <div className="flex flex-col h-[34rem] w-[25rem] bg-[#dfe8f6] dark:bg-[#1a222f] rounded-xl mt-10 ml-[10rem] justify-start shadow-md">
            <img src={item.image} alt="" className="h-[9rem] w-[9rem] ml-[8rem] rounded-full mt-10 text-[2rem] text-[#0177b5] cursor-pointer"/>
            {/* <BsPersonCircle className="ml-[7.5rem] mt-9 text-[10rem] bg-[#666666] rounded-full shadow-xl text-[#d9d9d9]"/> */}
            <h1 key={index} className="text-center text-black dark:text-white text-4xl mt-3 font-bold">{item.name}</h1>
            <h1 className="text-center text-black/70 dark:text-white text-2xl mt-0">{item.position}</h1>
            <img src={linkedin} alt="" className="h-7 w-7 ml-[11.5rem] mt-1 text-[2rem] text-[#0177b5] cursor-pointer"/>
            <p className="text-black dark:text-white text-sm p-5">{item.description}</p>
          </div>
          </>
          ))}
          <div className="flex-col h-[34rem] w-[46rem] bg-[#dfe8f6] dark:bg-[#1a222f] rounded-xl mt-10 justify-start shadow-md">
            <div className="flex justify-around px-6 mt-20">
              {data.slice(1).map((ele)=>(
                <>
                  <div className="flex flex-col justify-center items-center">
                  <img src={ele.image} alt="" className="h-[7rem] w-[7rem] mt-1 text-[1.5rem] text-[#0177b5] rounded-full cursor-pointer"/>
                  <h1 className="text-center text-black dark:text-white text-lg mt-1 font-bold">{ele.name}</h1>
                  <h1 className="text-center text-black dark:text-white text-xl mt-0">{ele.position}</h1>
                  <img src={linkedin} alt="" className="h-6 w-6 mt-1 text-[1.5rem] text-[#0177b5] cursor-pointer"/>
                  </div>
                </>
              ))}
            </div> 
            <div className="flex justify-around px-6 mt-8">
              {data.slice(1).map((ele)=>(
                <>
                  <div className="flex flex-col justify-center items-center">
                  <img src={ele.image} alt="" className="h-[7rem] w-[7rem] mt-1 text-[1.5rem] text-[#0177b5] rounded-full cursor-pointer"/>
                  <h1 className="text-center text-black dark:text-white text-lg mt-1 font-bold">{ele.name}</h1>
                  <h1 className="text-center text-black dark:text-white text-xl mt-0">{ele.position}</h1>
                  <img src={linkedin} alt="" className="h-6 w-6 mt-1 text-[1.5rem] text-[#0177b5] cursor-pointer"/>
                  </div>
                </>
              ))}
            </div> 
          </div>
        </div>
      </div>
    </div>
  )
}

export default About;