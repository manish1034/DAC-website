/* eslint-disable react/no-unescaped-entities */
import Sidebar from "./Sidebar";
import { BsPersonCircle } from "react-icons/bs";
import { IoLogoLinkedin } from "react-icons/io5";

const About = () => {
  return (
    <div className="relative h-[100vh] w-[100vw]">
      <Sidebar/>
      <div className="relative flex flex-col h-[100vh] w-[100vw] bg-[#010a18] justify-start">
        <div className="text-white text-5xl font-bold mt-6 text-center">Meet The Team</div>
        {/* DoWnParT DIscRiption */}
        <div className="flex gap-2">
          <div className="flex flex-col h-[34rem] w-[25rem] bg-[#1a222f] rounded-xl mt-10 ml-[10rem] justify-start">
            <BsPersonCircle className="ml-[7.5rem] mt-9 text-[10rem] bg-[#666666] rounded-full text-[#d9d9d9]"/>
            <h1 className="text-center text-white text-5xl mt-5 font-bold">Name</h1>
            <h1 className="text-center text-white text-2xl mt-0">Position</h1>
            <IoLogoLinkedin className="relative left-[11.5rem] mt-1 text-[2rem] text-[#0177b5] cursor-pointer"/>
            <p className="text-white text-sm p-5">Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of </p>
          </div>
          <div className="flex-col h-[34rem] w-[46rem] bg-[#1a222f] rounded-xl mt-10 justify-start">
            <div className="flex justify-around px-6 mt-20">
              <div className="flex flex-col justify-center">
                <BsPersonCircle className="text-[6rem] bg-[#666666] rounded-full text-[#d9d9d9] cursor-pointer"/>
                <h1 className="text-center text-white text-3xl mt-1 font-bold">Name</h1>
                <h1 className="text-center text-white text-xl mt-0">Position</h1>
                <IoLogoLinkedin className="mt-1 ml-8 text-[1.5rem] text-[#0177b5] cursor-pointer"/>
              </div>
              <div className="flex flex-col justify-center">
                <BsPersonCircle className="text-[6rem] bg-[#666666] rounded-full text-[#d9d9d9] cursor-pointer"/>
                <h1 className="text-center text-white text-3xl mt-1 font-bold">Name</h1>
                <h1 className="text-center text-white text-xl mt-0">Position</h1>
                <IoLogoLinkedin className="mt-1 ml-8 text-[1.5rem] text-[#0177b5] cursor-pointer"/>
              </div>
              <div className="flex flex-col justify-center">
                <BsPersonCircle className="text-[6rem] bg-[#666666] rounded-full text-[#d9d9d9] cursor-pointer"/>
                <h1 className="text-center text-white text-3xl mt-1 font-bold">Name</h1>
                <h1 className="text-center text-white text-xl mt-0">Position</h1>
                <IoLogoLinkedin className="mt-1 ml-8 text-[1.5rem] text-[#0177b5] cursor-pointer"/>
              </div>
              <div className="flex flex-col justify-center">
                <BsPersonCircle className="text-[6rem] bg-[#666666] rounded-full text-[#d9d9d9] cursor-pointer"/>
                <h1 className="text-center text-white text-3xl mt-1 font-bold">Name</h1>
                <h1 className="text-center text-white text-xl mt-0">Position</h1>
                <IoLogoLinkedin className="mt-1 ml-8 text-[1.5rem] text-[#0177b5] cursor-pointer"/>
              </div>
            </div> 
            <div className="flex justify-around px-6 mt-8">
              <div className="flex flex-col justify-center">
                <BsPersonCircle className="text-[6rem] bg-[#666666] rounded-full text-[#d9d9d9] cursor-pointer"/>
                <h1 className="text-center text-white text-3xl mt-1 font-bold">Name</h1>
                <h1 className="text-center text-white text-xl mt-0">Position</h1>
                <IoLogoLinkedin className="mt-1 ml-8 text-[1.5rem] text-[#0177b5] cursor-pointer"/>
              </div>
              <div className="flex flex-col justify-center">
                <BsPersonCircle className="mt-4 text-[6rem] bg-[#666666] rounded-full text-[#d9d9d9] cursor-pointer"/>
                <h1 className="text-center text-white text-3xl mt-1 font-bold">Name</h1>
                <h1 className="text-center text-white text-xl mt-0">Position</h1>
                <IoLogoLinkedin className="mt-1 ml-8 text-[1.5rem] text-[#0177b5] cursor-pointer"/>
              </div>
              <div className="flex flex-col justify-center">
                <BsPersonCircle className="mt-4 text-[6rem] bg-[#666666] rounded-full text-[#d9d9d9] cursor-pointer"/>
                <h1 className="text-center text-white text-3xl mt-1 font-bold">Name</h1>
                <h1 className="text-center text-white text-xl mt-0">Position</h1>
                <IoLogoLinkedin className="mt-1 ml-8 text-[1.5rem] text-[#0177b5] cursor-pointer"/>
              </div>
              <div className="flex flex-col justify-center">
                <BsPersonCircle className="mt-4 text-[6rem] bg-[#666666] rounded-full text-[#d9d9d9] cursor-pointer"/>
                <h1 className="text-center text-white text-3xl mt-1 font-bold">Name</h1>
                <h1 className="text-center text-white text-xl mt-0">Position</h1>
                <IoLogoLinkedin className="mt-1 ml-8 text-[1.5rem] text-[#0177b5] cursor-pointer"/>
              </div>
            </div> 
          </div>
        </div>
      </div>
    </div>
  )
}

export default About;