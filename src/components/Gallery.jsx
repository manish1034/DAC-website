import Sidebar from './Sidebar';

const Gallery = () => {
  return (
    <div className="relative h-[100vh] w-[100vw]">
      <Sidebar/>
      <div className="relative flex flex-col h-[100vh] w-[100vw] bg-[#010a18] justify-start text-white">Gallery
      </div>
    </div>
  )
}

export default Gallery;