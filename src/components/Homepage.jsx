import Sidebar from "./Sidebar";
import { us } from "../assets";

const Homepage = () => {
  return (
    <div className="h-[100vh] w-[100vw] bg-hero-site">
      <div className="flex h-[100vh] w-[100vw] bg-black opacity-90">
        {/* Sidebar */}
        <Sidebar/>
        <div className="text-white flex-1">
          safdfas
        </div>
        <img src={us} alt="" className="relative h-[100vh] right-0 object-cover clip-photo z-10"/>
      </div>
    </div> 
  )
}

export default Homepage;