"use client"
import React from 'react'
import { navItems } from "@/data";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import Buttons from '@/components/ui/buttons';
import { motion } from 'framer-motion';
import Link from 'next/link';
import { reverse } from 'dns';


const hero = () => {
  return (
    <div className='md:mt-20'>
    <div className='center-vertically flex-col md:flex-row-reverse dark:bg-black mt-5 gap-5'>
      <div className='hidden lg:block w-1/7'></div>
      
        <Avatar className='w-3/4 h-3/4 md:w-1/3 '>
            <motion.div
            initial={{opacity: 0}}
            animate={{
              opacity:1,
              transition:{delay:0.5,duration:0.4,ease:"easeIn"},
            }}
            >
            <AvatarImage src="./alfian.jpg" />  
            </motion.div>
                       <motion.svg 
            className="w-full absolute"
            fill="transparent"
            viewBox="0 0 506 506"
            xmlns="https://www.w3.org/2000/svg"
            >
            <motion.circle 
              cx="253" 
              cy="253" 
              r="250" 
              stroke="#54CB9D" 
              strokeWidth="4" 
              strokeLinecap="round" 
              strokeLinejoin="round" 
              initial={{ strokeDasharray: "24 10 0 0"}} 
              animate={{ strokeDasharray: ["15 120 25 25", "16 25 92 72","4 250 22 22"], 
              rotate:[120,360],}}
              transition={{
                delay:0.5,
                duration:20,
                repeat:Infinity,
                repeatType:"reverse",
              }}
            />

            </motion.svg>  
             
        </Avatar>
        
        <div className='center-vertically md:items-start  gap-4 p-5 flex-col md:w-full md:gap-8 '>
            <h1 className='md:text-2xl'>Software Developer</h1>
            <h1 className='text-4xl md:text-7xl'>Hello I`am</h1>
            <h1 className='text-4xl md:text-5xl text-green-100 hidden lg:block'>Alfian Dorif Murtadlo</h1>
            <h1 className='text-4xl text-green-100 lg:hidden'>Alfian DM.</h1>
            <p className='text-center md:text-start md:text-2xl'>I am a recent Computer Science graduate, ready to start my career in tech and apply what I've learned.</p>
            <div className='flex flex-col md:flex-row gap-10 justify-center items-center'>
<a 
            href="https://youtube.com" 
            target="_blank" 
            rel="noopener noreferrer"
            className="inline-block " // Ensure the buttonsButtons styles are applied correctly
            >
            <Buttons text='Download CV' className='md:text-xl'>
            <svg className="w-4 h-4 md:w-12 md:h-12 text-green-100 dark:text-white" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" viewBox="0 0 24 24">
              <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 13V4M7 14H5a1 1 0 0 0-1 1v4a1 1 0 0 0 1 1h14a1 1 0 0 0 1-1v-4a1 1 0 0 0-1-1h-2m-1-5-4 5-4-5m9 8h.01"/>
            </svg>
            </Buttons>
            </a>
            {/* Sosmed */}
            <div className='flex flex-row gap-5'>
              {/* Instagram */}
              <a href="https://www.instagram.com/alfian.dm" target="_blank" rel="noopener noreferrer">
                <svg className="w-8 h-8 md:w-12 md:h-12 rounded-full border-2 p-1 border-green-100 text-green-100 " aria-hidden="true" xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" viewBox="0 0 24 24">
                  <path fill="currentColor" fillRule="evenodd" d="M3 8a5 5 0 0 1 5-5h8a5 5 0 0 1 5 5v8a5 5 0 0 1-5 5H8a5 5 0 0 1-5-5V8Zm5-3a3 3 0 0 0-3 3v8a3 3 0 0 0 3 3h8a3 3 0 0 0 3-3V8a3 3 0 0 0-3-3H8Zm7.597 2.214a1 1 0 0 1 1-1h.01a1 1 0 1 1 0 2h-.01a1 1 0 0 1-1-1ZM12 9a3 3 0 1 0 0 6 3 3 0 0 0 0-6Zm-5 3a5 5 0 1 1 10 0 5 5 0 0 1-10 0Z" clip-rule="evenodd"/>
                </svg>
              </a>
              {/* Github */}
              <a href="https://www.github.com/IndyJones123" target="_blank" rel="noopener noreferrer">
                <svg className="w-8 h-8 md:w-12 md:h-12 rounded-full border-2 p-1 border-green-100 text-green-100" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="currentColor" viewBox="0 0 24 24">
                  <path fill-rule="evenodd" d="M12.006 2a9.847 9.847 0 0 0-6.484 2.44 10.32 10.32 0 0 0-3.393 6.17 10.48 10.48 0 0 0 1.317 6.955 10.045 10.045 0 0 0 5.4 4.418c.504.095.683-.223.683-.494 0-.245-.01-1.052-.014-1.908-2.78.62-3.366-1.21-3.366-1.21a2.711 2.711 0 0 0-1.11-1.5c-.907-.637.07-.621.07-.621.317.044.62.163.885.346.266.183.487.426.647.71.135.253.318.476.538.655a2.079 2.079 0 0 0 2.37.196c.045-.52.27-1.006.635-1.37-2.219-.259-4.554-1.138-4.554-5.07a4.022 4.022 0 0 1 1.031-2.75 3.77 3.77 0 0 1 .096-2.713s.839-.275 2.749 1.05a9.26 9.26 0 0 1 5.004 0c1.906-1.325 2.74-1.05 2.74-1.05.37.858.406 1.828.101 2.713a4.017 4.017 0 0 1 1.029 2.75c0 3.939-2.339 4.805-4.564 5.058a2.471 2.471 0 0 1 .679 1.897c0 1.372-.012 2.477-.012 2.814 0 .272.18.592.687.492a10.05 10.05 0 0 0 5.388-4.421 10.473 10.473 0 0 0 1.313-6.948 10.32 10.32 0 0 0-3.39-6.165A9.847 9.847 0 0 0 12.007 2Z" clip-rule="evenodd"/>
                </svg>
              </a>
              {/* LinkedIn */}
              <a href="https://www.linkedin.com/in/alfian-dorif-murtadlo-420122157/" target="_blank" rel="noopener noreferrer">
                <svg className="w-8 h-8 md:w-12 md:h-12 rounded-full border-2 p-1 border-green-100 text-green-100" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="currentColor" viewBox="0 0 24 24">
                  <path fill-rule="evenodd" d="M12.51 8.796v1.697a3.738 3.738 0 0 1 3.288-1.684c3.455 0 4.202 2.16 4.202 4.97V19.5h-3.2v-5.072c0-1.21-.244-2.766-2.128-2.766-1.827 0-2.139 1.317-2.139 2.676V19.5h-3.19V8.796h3.168ZM7.2 6.106a1.61 1.61 0 0 1-.988 1.483 1.595 1.595 0 0 1-1.743-.348A1.607 1.607 0 0 1 5.6 4.5a1.601 1.601 0 0 1 1.6 1.606Z" clip-rule="evenodd"/>
                  <path d="M7.2 8.809H4V19.5h3.2V8.809Z"/>
                </svg>
              </a>
              {/* Youtube */}
              <a href="https://www.youtube.com/@alfiandevlive" target="_blank" rel="noopener noreferrer">
                <svg className="w-8 h-8 md:w-12 md:h-12 rounded-full border-2 p-1 border-green-100 text-green-100" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="currentColor" viewBox="0 0 24 24">
                  <path fill-rule="evenodd" d="M21.7 8.037a4.26 4.26 0 0 0-.789-1.964 2.84 2.84 0 0 0-1.984-.839c-2.767-.2-6.926-.2-6.926-.2s-4.157 0-6.928.2a2.836 2.836 0 0 0-1.983.839 4.225 4.225 0 0 0-.79 1.965 30.146 30.146 0 0 0-.2 3.206v1.5a30.12 30.12 0 0 0 .2 3.206c.094.712.364 1.39.784 1.972.604.536 1.38.837 2.187.848 1.583.151 6.731.2 6.731.2s4.161 0 6.928-.2a2.844 2.844 0 0 0 1.985-.84 4.27 4.27 0 0 0 .787-1.965 30.12 30.12 0 0 0 .2-3.206v-1.516a30.672 30.672 0 0 0-.202-3.206Zm-11.692 6.554v-5.62l5.4 2.819-5.4 2.801Z" clip-rule="evenodd"/>
                </svg>
              </a>
            </div>
            </div>
            

           
        </div>
        </div>
        
         {/* Experience */}
            <div className='flex flex-col gap-3 md:flex-row md:gap-20 items-center md:p-5 md:mt-10 '>
              {/* Long Experience */}
              <div className='flex flex-row gap-3 '>
                <h1 className='text-4xl w-1/4 md:text-7xl md:w-full font-bold'>2</h1>
                <p className='text-l md:text-2xl'>Years of <br />experience</p>
              </div>
              {/* Project Complited */}
              <div className='flex flex-row gap-3 '>
                <h1 className='text-4xl w-1/4 md:text-7xl md:w-full font-bold'>8</h1>
                <p className='text-l md:text-2xl'>Projects <br />Completed</p>
              </div>
              {/* Tecnology mastered */}
              <div className='flex flex-row gap-3 '>
                <h1 className='text-4xl w-1/4 md:text-7xl md:w-full font-bold'>12</h1>
                <p className='text-l md:text-2xl'>Technology <br />experience</p>
              </div>
            </div>
       
        
    </div>
    
  )
}

export default hero