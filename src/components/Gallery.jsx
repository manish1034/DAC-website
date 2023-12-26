import Sidebar from './Sidebar';
import { img_1 } from "../assets";

const Gallery = () => {
  return (
    <div className="relative h-[100vh] w-[100vw]">
      <Sidebar/>
      <div className="relative flex flex-col h-[100vh] w-[100vw] bg-white dark:bg-[#010a18] justify-start text-white">
        <div className='flex flex-col justify-normal mt-6 pl-[10rem]'>
          <h1 className="text-black dark:text-white text-5xl font-bold text-center mr-[6rem]">Gallery</h1>
          <div className='flex flex-col gap-4'>
            {/* heading */}
            <div className='flex gap-8 justify-start mt-[2rem]'>
              <h1 className='text-4xl font-bold text-black dark:text-white'>Time Series (2002) </h1>
              <h1 className='text-xl underline text-[#084db8] dark:text-[#00d1cd] mt-3 font-semibold'><a>view event details</a></h1>
            </div>
            {/* Photos */}
            <div className='flex gap-5 justify-start mt-[0.5rem]'>
              <img src={img_1} className='h-[12rem] w-[17.5rem] rounded-lg'/>
              <img src={img_1} className='h-[12rem] w-[17.5rem] rounded-lg'/>
              <img src={img_1} className='h-[12rem] w-[17.5rem] rounded-lg'/>
              <img src={img_1} className='h-[12rem] w-[17.5rem] rounded-lg'/>
            </div>
          </div>
          <div className='flex flex-col gap-4'>
            {/* heading */}
            <div className='flex gap-8 justify-start mt-[2rem]'>
              <h1 className='text-4xl font-bold text-black dark:text-white'>Time Series (2002) </h1>
              <h1 className='text-xl underline text-[#084db8] dark:text-[#00d1cd] mt-3 font-semibold'><a>view event details</a></h1>
            </div>
            {/* Photos */}
            <div className='flex gap-5 justify-start mt-[0.5rem]'>
              <img src={img_1} className='h-[12rem] w-[17.5rem] rounded-lg'/>
              <img src={img_1} className='h-[12rem] w-[17.5rem] rounded-lg'/>
              <img src={img_1} className='h-[12rem] w-[17.5rem] rounded-lg'/>
              <img src={img_1} className='h-[12rem] w-[17.5rem] rounded-lg'/>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Gallery;