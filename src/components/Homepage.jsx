import Sidebar from "./Sidebar";
import { us } from "../assets";

const Homepage = () => {
  return (
    <div className="h-[100vh] w-[100vw] bg-hero-site">
      <div className="flex h-[100vh] w-[100vw] bg-black bg-opacity-90">
        {/* Sidebar */}
        <Sidebar/>
        <div className="text-white">
          safdfas
        </div>
        <img src={us} alt="" className="absolute h-[100vh] right-0"/>
      </div>
    </div>  
  )
}

export default Homepage;