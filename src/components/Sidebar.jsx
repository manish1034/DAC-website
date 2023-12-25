// import { UserContext } from '../App';
import { Link } from "react-router-dom";
import { FaHome } from "react-icons/fa";
import { BsPeopleFill } from "react-icons/bs";
import { MdEventAvailable } from "react-icons/md";
import { TfiMenuAlt } from "react-icons/tfi";
import { IoMdPhotos } from "react-icons/io";
// import { useContext } from 'react';

const Sidebar = () => {
  // const theme = useContext(UserContext);
  return (
    <div className="fixed h-full flex flex-col justify-around items-center w-[7.3rem] border-r-[0.1px] shadow-lg dark:border-white/20 z-40">
      <div className="flex flex-col justify-stretch mb-40 items-center">
        <Link to="/"><FaHome className="text-[2.2rem] text-black/40 dark:text-white mb-11 mt-5 cursor-pointer"/></Link>
        <Link to="/about"><BsPeopleFill className="text-[2.2rem] text-black/40 dark:text-white mb-11 cursor-pointer"/></Link>
        <Link to="/event"><MdEventAvailable className="text-[2.2rem] text-black/40 dark:text-white mb-11 cursor-pointer"/></Link>
        <Link to="/gallery"><IoMdPhotos className="text-[2.2rem] text-black/40 dark:text-white mb-11 cursor-pointer"/></Link>
      </div>
      <Link to="/quiz"><TfiMenuAlt className="text-[2.2rem] text-black/40 dark:text-white cursor-pointer"/></Link>
    </div>
  )
}

export default Sidebar;