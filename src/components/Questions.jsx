/* eslint-disable react/no-unescaped-entities */
import { Link } from 'react-router-dom';
import Sidebar from './Sidebar'
import { TiBackspace } from "react-icons/ti";

const Questions = () => {
  return (
    <div className="relative h-[100vh] w-[100vw]">
        <Sidebar/>
        <div className="relative flex flex-col h-[100vh] w-[100vw] bg-white dark:bg-[#010a18] justify-start text-white">
            <div className="text-black dark:text-white text-5xl font-bold mt-6 text-center">Quiz For Test</div>
            <div className='flex flex-col justify-around'>
                <div className="flex justify-around mt-10 gap-[16rem]">
                    <div className="flex items-center">
                        <TiBackspace className="text-[#434f5f] text-2xl mr-4 ml-16"/>
                        <h1 className="text-[#434f5f] font-bold text-2xl">Back</h1>
                    </div>
                    <h1 className="text-[#434f5f] font-bold text-2xl ml-[10rem]">Time Elapsed : 90 min</h1>
                </div>
                <h1 className='ml-[14rem] pr-24 text-3xl text-black dark:text-[#7687a2] font-semibold mt-10'>
                    <b>Q3.</b> Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text <br/>ever since the 1500s
                </h1>
                <div className='flex justify-evenly mt-10'>
                    <div className='text-2xl text-black dark:text-[#3b424d] h-[3.5rem] w-[14rem] font-bold bg-[#dfe8f6] dark:bg-[#0e1624] shadow-md rounded-full text-start p-2 pl-5'>A. option A</div>
                    <div className='text-2xl text-black dark:text-[#3b424d] h-[3.5rem] w-[14rem] font-bold bg-[#dfe8f6] dark:bg-[#0e1624] shadow-md rounded-full text-start p-2 pl-5'>A. option A</div>
                </div>
                <div className='flex justify-evenly mt-10'>
                    <div className='text-2xl text-black dark:text-[#3b424d] h-[3.5rem] w-[14rem] font-bold bg-[#dfe8f6] dark:bg-[#0e1624] shadow-md rounded-full text-start p-2 pl-5'>A. option A</div>
                    <div className='text-2xl text-black dark:text-[#3b424d] h-[3.5rem] w-[14rem] font-bold bg-[#dfe8f6] dark:bg-[#0e1624] shadow-md rounded-full text-start p-2 pl-5'>A. option A</div>
                </div>
                <div className='flex justify-start ml-[22rem] gap-5 mt-14'>
                    <div className='h-[3rem] w-[3rem] bg-[#00fff7] rounded-lg text-center pt-[0.4rem] text-2xl text-black font-bold'>1</div>
                    <div className='h-[3rem] w-[3rem] bg-[#00fff7] rounded-lg text-center pt-[0.4rem] text-2xl text-black font-bold'>2</div>
                    <div className='h-[3rem] w-[3rem] bg-[#7687a2] rounded-lg text-center pt-[0.4rem] text-2xl text-black font-bold'>3</div>
                    <div className='h-[3rem] w-[3rem] bg-inherit rounded-lg text-center pt-[0.4rem] text-2xl text-[#3b424d] font-bold border-[2px] border-black/30 dark:border-[#7687a2]'>4</div>
                    <div className='h-[3rem] w-[3rem] bg-inherit rounded-lg text-center pt-[0.4rem] text-2xl text-[#3b424d] font-bold border-[2px] border-black/30 dark:border-[#7687a2]'>5</div>
                    <div className='h-[3rem] w-[3rem] bg-inherit rounded-lg text-center pt-[0.4rem] text-2xl text-[#3b424d] font-bold border-[2px] border-black/30 dark:border-[#7687a2]'>6</div>
                    <div className='h-[3rem] w-[3rem] bg-inherit rounded-lg text-center pt-[0.4rem] text-2xl text-[#3b424d] font-bold border-[2px] border-black/30 dark:border-[#7687a2]'>7</div>
                    <div className='h-[3rem] w-[3rem] bg-inherit rounded-lg text-center pt-[0.4rem] text-2xl text-[#3b424d] font-bold border-[2px] border-black/30 dark:border-[#7687a2]'>8</div>
                    <div className='h-[3rem] w-[3rem] bg-inherit rounded-lg text-center pt-[0.4rem] text-2xl text-[#3b424d] font-bold border-[2px] border-black/30 dark:border-[#7687a2]'>9</div>
                    <div className='h-[3rem] w-[3rem] bg-inherit rounded-lg text-center pt-[0.4rem] text-2xl text-[#3b424d] font-bold border-[2px] border-black/30 dark:border-[#7687a2]'>10</div>
                </div>
                <div className='flex justify-center mt-8'>
                    <Link to="/">
                        <button className="h-8 w-[9rem] text-black/60 hover:text-white dark:text-[#010a18] bg-[#f7f7f7] hover:bg-[#084db8] dark:hover:bg-[#00fff7] dark:bg-[#7687a2] rounded-full font-bold shadow-[#9fa3a8] dark:shadow-[#7687a2] shadow-md">Submit</button>
                    </Link>
                </div>    
            </div>

        </div>
    </div>
  )
}

export default Questions;