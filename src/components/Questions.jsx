import Sidebar from './Sidebar'
import { TiBackspace } from "react-icons/ti";

const Questions = () => {
  return (
    <div className="relative h-[100vh] w-[100vw]">
        <Sidebar/>
        <div className="relative flex flex-col h-[100vh] w-[100vw] bg-white dark:bg-[#010a18] justify-start text-white">
            <div className="text-black dark:text-white text-5xl font-bold mt-6 text-center">Quiz For Test</div>
            <div className="flex justify-around mt-10 gap-[16rem]">
                <div className="flex items-center">
                    <TiBackspace className="text-[#434f5f] text-2xl mr-4 ml-16"/>
                    <h1 className="text-[#434f5f] font-bold text-2xl">Back</h1>
                </div>
                <h1 className="text-[#434f5f] font-bold text-2xl ml-[10rem]">Time Elapsed : 90 min</h1>
            </div>
        </div>
    </div>
  )
}

export default Questions;