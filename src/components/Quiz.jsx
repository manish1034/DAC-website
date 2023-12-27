/* eslint-disable react/no-unescaped-entities */
import { NavLink } from "react-router-dom";
import { darkLogo } from "../assets";
import Sidebar from "./Sidebar";

const Quiz = () => {
  return (
    <div className="relative h-[100vh] w-[100vw]">
      <Sidebar/>
      <div className="relative flex flex-col h-[100vh] w-[100vw] bg-white dark:bg-[#010a18] justify-start text-white">
        <div className="text-black dark:text-white text-5xl font-bold mt-6 text-center">Quiz For Test</div>
        <div className="flex flex-row justify-between">
          <div className="flex flex-col">
            <div className="flex flex-col justify justify-start gap-8 h-[21rem] w-[22rem] bg-[#dfe8f6] dark:bg-[#0e1624] rounded-xl ml-[15rem] mt-14">
              <div className="w-full text-center">
                <h1 className="text-2xl font-semibold text-start ml-9 mb-2 mt-6 text-black dark:text-white">Name</h1>
                <input className="py-[0.2rem] bg-white dark:bg-[#262d39] placeholder:font-semibold placeholder:text-[#c4c4c4] dark:placeholder:text-[#3b424d] rounded-md pl-2 w-[18rem]" placeholder="Enter your name"/>
              </div>
              <div className="w-full text-center">
                <h1 className="text-2xl font-semibold text-start ml-9 mb-2 text-black dark:text-white">E-mail</h1>
                <input className="py-[0.2rem] bg-white dark:bg-[#262d39] placeholder:text-[#c4c4c4] dark:placeholder:text-[#3b424d]  placeholder:font-semibold rounded-md pl-2 w-[18rem]" placeholder="Enter your email address"/>
              </div>
              <div className="w-full text-center">
                <h1 className="text-2xl font-semibold text-start ml-9 mb-2 text-black dark:text-white">Phone</h1>
                <input className="py-[0.2rem] bg-white dark:bg-[#262d39] placeholder:text-[#c4c4c4] dark:placeholder:text-[#3b424d]  placeholder:font-semibold rounded-md pl-2 w-[18rem]" placeholder="Enter your phone"/>
              </div>
            </div>
            <h1 className="text-sm font-bold text-[#7687a2] ml-[15.2rem] mt-4">Note :- enter your details before taking the quiz</h1>
            <h1 className="text-[#7687a2] text-sm w-[24rem] ml-[15.2rem] mt-4">Dive into discovery with DDU College's Data Analytics Club quiz! Beyond analytics, explore diverse topics from tech trends to current affairs. It's not just a test; it's a chance to benchmark your knowledge, engage with a vibrant community, and develop versatile skills.</h1>
          </div>
          <div className="flex flex-col justify-around">
            <div className="flex-col justify-start gap-4 text-start">
              <h1 className="font-bold text-xl -ml-16 mt-10 text-center text-black dark:text-white">What the quiz is all About?</h1>
              <ul className="list-disc w-[29rem] mr-16 text-md mt-9 text-black dark:text-white">
                <li><span className="font-bold">Practical Application: </span>Test your ability to apply data analysis concepts in real-world.</li>
                <li><span className="font-bold">Problem-Solving Skills:</span> Enhance analytical thinking through hands-on problem-solving.</li>
                <li><span className="font-bold">Adaptability: </span> Tailored for all skill levels, providing an inclusive learning experience.</li>
              </ul>
            </div>
            <div className="text-center -ml-16">
              <NavLink to="/questions">
                <button className="h-8 w-[9rem] text-white dark:text-[#010a18] bg-[#084db8] dark:bg-[#00fff7] rounded-full font-bold shadow-[#5e8cd1] dark:shadow-[#458d8a] shadow-md">Take me to quiz!</button>
              </NavLink>
            </div>
            <div className="flex justify-center">
              <img src={darkLogo} alt="" className="h-28 w-28 mt-12 -ml-16"/>
            </div>
              <h1 className="text-sm font-bold text-[#7687a2] -mb-10 ml-10">copyright © dataanalyticsclub All Rights Reserved 2024</h1>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Quiz;