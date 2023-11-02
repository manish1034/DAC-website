import { FaHome } from "react-icons/fa";

const Sidebar = () => {
  return (
    <div className="h-full bg-black opacity-90 flex flex-col justify-around items-center w-[7.3rem] border-r-[0.1px] border-white/20 z-40">
      <div className="flex flex-col justify-stretch mb-40 items-center">
        <FaHome className="text-4xl text-white mb-11 mt-10"/>
        <FaHome className="text-4xl text-white mb-11"/>
        <FaHome className="text-4xl text-white mb-11"/>
      </div>
      <FaHome className="text-4xl text-white"/>
    </div>
  )
}

export default Sidebar;