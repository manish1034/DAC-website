import { FaHome } from "react-icons/fa";
import { BsPeopleFill } from "react-icons/bs";
import { MdEventAvailable } from "react-icons/md";
import { TfiMenuAlt } from "react-icons/tfi";

const Sidebar = () => {
  return (
    <div className="fixed h-full flex flex-col justify-around items-center w-[7.3rem] border-r-[0.1px] border-white/20 z-40">
      <div className="flex flex-col justify-stretch mb-40 items-center">
        <FaHome className="text-4xl text-white mb-11 mt-10 cursor-pointer"/>
        <BsPeopleFill className="text-4xl text-white mb-11 cursor-pointer"/>
        <MdEventAvailable className="text-4xl text-white mb-11 cursor-pointer"/>
      </div>
      <TfiMenuAlt className="text-4xl text-white cursor-pointer"/>
    </div>
  )
}

export default Sidebar;