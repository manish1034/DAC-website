// import { UserContext } from '../App';
import { NavLink } from "react-router-dom";
import { FaHome } from "react-icons/fa";
import { BsPeopleFill } from "react-icons/bs";
import { MdEventAvailable } from "react-icons/md";
import { TfiMenuAlt } from "react-icons/tfi";
import { IoMdPhotos } from "react-icons/io";
// import { useContext } from 'react';

const Sidebar = () => {
  // const theme = useContext(UserContext);
  return (
    <div className="fixed h-full flex flex-col justify-around items-center w-[7.3rem] border-r-[0.1px] shadow-[0px_1px_8px_#00000070] dark:border-white/20 z-40">
      <div className="flex flex-col justify-stretch mb-40 items-center">
        <NavLink to="/" className={({ isActive }) => (isActive ? 'dark:text-[#00fff7] rounded-xl text-[#0a7fe4]' : 'text-black/40 dark:text-white')}>
          <FaHome className="text-[2.2rem] mb-11 mt-5 cursor-pointer" />
          {/* <div className='h-[5px] w-[5px] rounded-full bg-[#00fff7]'></div> */}
        </NavLink>
        <NavLink to="/about" className={({ isActive }) => (isActive ? 'dark:text-[#00fff7] rounded-xl text-[#0a7fe4]' : 'text-black/40 dark:text-white')}>
          <BsPeopleFill className="text-[2.2rem] mb-11 cursor-pointer" />
        </NavLink>
        <NavLink to="/event" className={({ isActive }) => (isActive ? 'dark:text-[#00fff7] rounded-xl text-[#0a7fe4]' : 'text-black/40 dark:text-white')}>
          <MdEventAvailable className="text-[2.2rem] mb-11 cursor-pointer" />
        </NavLink>
        <NavLink to="/gallery" className={({ isActive }) => (isActive ? 'dark:text-[#00fff7] rounded-xl text-[#0a7fe4]' : 'text-black/40 dark:text-white')}>
          <IoMdPhotos className="text-[2.2rem] mb-11 cursor-pointer" />
        </NavLink>
      </div>
      <NavLink to="/quiz" className={({ isActive }) => (isActive ? 'dark:text-[#00fff7] rounded-xl text-[#0a7fe4]' : 'text-black/40 dark:text-white')}>
        <TfiMenuAlt className="text-[2.2rem] cursor-pointer"/>
      </NavLink>
    </div>
  )
}

export default Sidebar;