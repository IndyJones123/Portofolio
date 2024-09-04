
import React from 'react'
import Navbar from "@/components/navbar";
import Button from '@/components/ui/buttons';
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { experience , education  } from '@/data'; // Import the data
import { FaHtml5 , FaCss3, FaPhp, FaNodeJs  , FaLaravel } from "react-icons/fa";
import { RiFlutterFill , RiNextjsFill } from "react-icons/ri";
import { BiLogoPostgresql } from "react-icons/bi";
import { SiCsharp, SiMysql , SiUnity, SiExpress, SiTypescript, SiTailwindcss } from "react-icons/si";


import { CardExperience } from '@/components/cardExperience';

// Define the type for the skill object
type Skill = {
  title: string;
  icon:  React.ComponentType<{ size?: number }>// This type ensures the icon is a React component
};

// Define the skills array with typed icon
export const skills: Skill[] = [
  {
    title: "HTML",
    icon: FaHtml5,
  },
  {
    title: "CSS",
    icon: FaCss3,
  },
    {
    title: "PHP",
    icon: FaPhp,
  },
    {
    title: "Laravel",
    icon: FaLaravel,
  },
    {
    title: "NodeJs",
    icon: FaNodeJs,
  },
    {
    title: "Flutter",
    icon: RiFlutterFill,
  },
    {
    title: "PostgreSql",
    icon: BiLogoPostgresql,
  },
    {
    title: "MySql",
    icon: SiMysql,
  },
      {
    title: "ExpressJs",
    icon: SiExpress,
  },
      {
    title: "TypeScript",
    icon: SiTypescript,
  },
        {
    title: "Tailwind",
    icon: SiTailwindcss,
  },
        {
    title: "NextJs",
    icon: RiNextjsFill,
  },
          {
    title: "Unity",
    icon: SiUnity,
  },
            {
    title: "C#",
    icon: SiCsharp,
  },
];

import Image from 'next/image';
const page = () => {
    
  return (
   <main className="flex min-h-screen flex-col items-center justify-between p-3 mt-3 sm:p-6 ">
      <div className="max-w-7xl w-full ">
        <Navbar/>
            <Tabs defaultValue="Experience" className="w-full md:mt-10">
            <div className='flex flex-col md:flex-row gap-3 items-center text-center md:items-start md:text-start '>
                <div className='md:w-1/3 md:flex md:flex-col md:gap-10'>
                    <h1 className='md:text-4xl font-bold'>Why hire Me?</h1>
                    <p className='md:text-2xl'>I'm willing to relocate to any other place or remote</p>
                    <TabsList className='flex flex-row md:flex-col md:mt-10 w-full '>
                        <TabsTrigger value="Experience" ><h1 className='text-green-100 md:bg-slate-600 md:w-[400px] md:h-[50px] flex md:items-center md:justify-center md:text-center rounded-xl'>Experience</h1></TabsTrigger>
                        <TabsTrigger value="Skills"><h1 className='text-green-100 md:bg-slate-600 md:w-[400px]  md:h-[50px] flex md:items-center md:justify-center md:text-center rounded-xl'>Skills</h1></TabsTrigger>
                        <TabsTrigger value="Education"><h1 className='text-green-100 md:bg-slate-600 md:w-[400px] md:h-[50px] flex md:items-center md:justify-center md:text-center rounded-xl'>Education</h1></TabsTrigger>
                    </TabsList>
                </div>
            <TabsContent value="Experience" className='md:w-2/3'>
                <div className='flex flex-col gap-5'>
                    <h1 className='text-2xl md:text-4xl'>My Experience</h1>
                    <p>I interned at PT. Agrofarm Nusa Raya as a Full Stack Developer, where I created the website ERD for the HRD module. Afterward, I freelanced, handling web development projects for lecturers and partners in Surabaya and Sidoarjo.</p>
                    <div className='md:grid md:grid-cols-2 gap-3'>
                    {experience.map((card) => (
                        <div className='mt-2 w-100 h-100 text-center'>
                        <CardExperience 
                        key={card.id} 
                        year={card.year}
                        title={card.title} 
                        description={card.description} 
                        id={card.id} 
                        >
                        </CardExperience>
                        </div>
                    ))}
                    </div>
                </div>       
            </TabsContent>
            <TabsContent value="Skills">
                <h1 className='text-2xl'>My Skills</h1>
                <div className='grid grid-cols-2 gap-12 md:grid-cols-5'>
                     {skills.map((card) => (
                        <div className='mt-5 flex flex-col justify-center text-center items-center gap-3'>
                            <h1 className='text-green-100'>{card.title}</h1>
                            <div className=''><card.icon size={100}/></div>
                        </div>
                    ))}
                </div>  
            </TabsContent>
            <TabsContent value="Education">
                <div className='flex flex-col gap-5'>
                    <h1 className='text-2xl md:text-4xl'>My Education</h1>
                    <div className='md:grid md:grid-cols-2 md:gap-5'>
                    {education.map((card) => (
                        <div className='mt-2 md:mt-0 md:text-center'>
                        <CardExperience 
                        key={card.id} 
                        year={card.year}
                        title={card.title} 
                        description={card.description} 
                        id={card.id} 
                        >
                        </CardExperience>
                        </div>
                    ))}
                    </div>
                </div>
            </TabsContent>
            </div>
            </Tabs>
        

      </div>
    </main>
  )
}

export default page