import Sidebar from "./Sidebar";

const Quiz = () => {
  return (
    <div className="relative h-[100vh] w-[100vw]">
      <Sidebar/>
      <div className="relative flex flex-col h-[100vh] w-[100vw] bg-white dark:bg-[#010a18] justify-start text-white">Quiz
      </div>
    </div>
  )
}

export default Quiz;