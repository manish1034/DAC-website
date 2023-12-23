import Sidebar from "./Sidebar";
import { us, darkLogo } from "../assets";
import { AiOutlineInstagram } from "react-icons/ai";
import { FaLinkedin } from "react-icons/fa";
import { FaSun } from "react-icons/fa";


const Homepage = () => {
  return (
    <div className="relative h-[100vh] w-[100vw]">
      <Sidebar/>                                  
      <div className="flex h-[100vh] w-[100vw] bg-[#010a18]">
        {/* top part */}
        <div className="flex-1">
          <div className="flex flex-row justify-between items-center">
            <img src={darkLogo} alt="" className="h-28 w-28 mt-10 ml-36"/>
            <div className="flex flex-row justify-around items-center">
              <h1 className="text-[#00fff7] font-bold cursor-pointer">Follow us on</h1>
              <AiOutlineInstagram className="text-xl text-[#00fff7] ml-5 cursor-pointer"/>
              <FaLinkedin className="text-xl text-[#00fff7] ml-5 cursor-pointer"/>
              <div className="bg-[#00fff7] h-6 w-[0.2px] ml-4"></div>
              <FaSun className="text-xl text-[#00fff7] ml-5 cursor-pointer"/>
            </div>
          </div>
        </div>
        {/* slant image part */}
        <img src={us} alt="" className="relative h-[100vh] right-0 clip-photo"/>
      </div>
      {/* mid part with absolute position*/}
      <div className="absolute top-[30%] left-[19%] bg-[#1f2734] h-[20.5rem] w-[34rem] rounded-2xl">
        <h1 className="text-white text-xl m-4">Welcome to</h1>
        <h1 className="text-white text-5xl mt-2 ml-12 font-sans font-bold">Data Analytics Club, DDUC</h1>
        <h1 className="text-white text-lg m-4 font-light">where we are dedicated towards nurturing a community of data enthusiasts. Our mission is to equip members with the tools to unravel the potential of data, promoting hands-on learning, ethical analysis, and innovative problem-solving. Join us to explore the realms of data and harness its powers.</h1>
      </div>
      <button className="absolute h-8 w-[10rem] bottom-16 left-[20%] bg-[#00fff7] rounded-full font-bold shadow-[#458d8a] shadow-md">Our Journey</button>
    </div> 
  )
}

export default Homepage;