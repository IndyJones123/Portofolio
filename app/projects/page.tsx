import React from 'react'
import Hero from '@/components/hero';
import Navbar from "@/components/navbar";
import { Cards } from '@/components/cards';
import { Card, CardContent } from "@/components/ui/card"
import { cardData } from '@/data'; // Import the data
import { FaLink , FaGithub, FaInstagram } from "react-icons/fa6";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel"

// Define the type for the skill object
type Skill = {
id:string;
  title: string;
  gambar:  string;// This type ensures the icon is a React component
  description?: string;
  tech?: string[];
  link?: string;
  github?: string;
  instagram?: string;
};

// Define the skills array with typed icon
export const skills: Skill[] = [
  {
    id:"01",
    title: "Apbisdi.id FullStack Project",
    gambar: "./apbisdi.png",
    description:"Apbisdi.id is a membership platform for digital business associations and universities across Indonesia. It uses a CMS to manage member data and resources easily, helping connect and support the digital business community.",
    tech: ["Laravel" , "MySql", "React" , "NodeJs" , "SEO"],
    link: "https://apbisdi.id",
    github: "https://github.com/IndyJones123/sistem-pendaftaran-apbisdi-Laravel",
    instagram: "https://www.instagram.com/p/C-KChNJPJcM/?img_index=1",
  },
  {
    id:"02",
    title: "LazyCosmetic",
    gambar: "./lazycosmetics.png",
    description:"LazyCosmetic is an e-commerce site for beauty products. It lets you shop directly through WhatsApp and securely pay using Midtrans.",
    tech: ["Codeigniter3" , "PHP" , "HTML" , "CSS" , "SEO" , "MySql"],
    link: "https://www.tokocozy.biz",
    github: "https://github.com/IndyJones123/E-commerce-CozyCosmetic",
  },
    {
    id:"03",
    title: "ERP - PT.Agrofarm Nusa Raya",
    gambar: "./agrofarm.png",
    description:"LazyCosmetic is an e-commerce site for beauty products. It lets you shop directly through WhatsApp and securely pay using Midtrans.",
    tech: ["Laravel" , "PHP" , "HTML" , "CSS" , "MySql"],
    link: "https://docs.google.com/document/d/1UiCHXNlMEFxB5_AnXBc2akwudgtNAFA4ZUjBbqOi3eY/edit?usp=sharing",
    github: "https://github.com/IndyJones123/ERP_Agrofarm",
  },
      {
    id:"04",
    title: "Nutricipe",
    gambar: "./Nutricipe.png",
    description:"NutriCipe is a mobile app that helps you identify recipes and track calories for dishes made from fruits. It provides easy access to fruit-based recipes and their nutritional information with just a few taps.",
    tech: ["ExpressJs" , "Javascript" , "Flutter"],
    github: "https://github.com/grandier/Nutricipe",
  },
        {
    id:"05",
    title: "Alfiandm.com",
    gambar: "./portofolio.png",
    description:"alfiandm.com is a portfolio website featuring a CMS for easy content management. It showcases work and projects while allowing for effortless updates and organization of content.",
    tech: ["TypeScript" , "NextJs", "ExpressJs" , "SEO" , "Supabase" , "Laravel Filamen"],
    link: "./",
    github: "https://github.com/grandier/Nutricipe",
  },
          {
    id:"06",
    title: "Mintakerjaiin_",
    gambar: "./mintakerjain.png",
    description:"Mintakerjain_ is a leading provider of journal publication services. We assist businesses and researchers in publishing and promoting academic journals efficiently and effectively.",
    tech: ["Javascript" , "NextJs", "ExpressJs" , "SEO" , "Supabase" ],
    link: "https://minta-kerjain.vercel.app",
    github: "https://github.com/IndyJones123/MintaKerjain",
  },
            {
    id:"07",
    title: "HanzationStore",
    gambar: "./hanzation.png",
    description:"HanzationStore is your go-to source for Steam account sharing. We offer a secure and convenient way to access and share Steam accounts, making gaming more accessible and affordable.",
    tech: ["Javascript" , "NextJs", "ExpressJs" , "SEO" , "Supabase" ],
    link: "https://hanzationstorelandingpage-als-projects-019a968f.vercel.app",
    github: "https://github.com/IndyJones123/HanzationStore",
  },
              {
    id:"08",
    title: "Sinarpadu",
    gambar: "./sinarpadu.png",
    description:"SinarPadu is the CMS for GIND, designed to manage and organize community games at UPN. It streamlines game management, event scheduling, and member coordination to enhance the gaming experience for the UPN community.",
    tech: ["Javascript" , "NextJs", "ExpressJs" , "SEO" , "Supabase" ],
    link: "https://sinarpadu.com",
    github: "https://github.com/IndyJones123/website-game-upn",
  },
];

const Page = () => {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-3 mt-3 sm:p-6">
      <div className="max-w-7xl w-full">
        <Navbar/>
<div className='flex flex-col  items-center justify-center text-center mt-5 md:mt-20 '>
<Carousel className="items-center justify-center w-4/6">
      <CarouselContent>
             
        {skills.map((card) => (
        
            <CarouselItem className='flex flex-col md:flex-row-reverse md:gap-10'>
            <div className="md:w-2/3">
              <Card>
                <CardContent className="flex aspect-square justify-center items-center p-3 flex-col gap-3 ">
                    <img className='w-full rounded-xl h-full md:w-100 md:h-100' src={card.gambar}/>

                </CardContent>
                
              </Card>
            </div>
            <div className='flex flex-col items-start text-start mt-6 gap-3 md:w-2/3'>
            <h1 className='text-4xl font-bold'>{card.id}</h1>
            <h1 className='text-2xl font-bold'>{card.title} </h1>
            <p>{card.description}</p>
            <h1 className='text-l font-thin text-green-100'>{card.tech?.join(', ')}</h1>
            <div className='w-full border'></div>
            <div className='flex flex-row gap-5 mt-5'>
            {card.link && (
            <a href={card.link}>
                <FaLink className='text-2xl' />
            </a>
            )}

            {card.github && (
            <a href={card.github}>
                <FaGithub className='text-2xl' />
            </a>
            )}

            {card.instagram && (
            <a href={card.instagram}>
                <FaInstagram className='text-2xl' />
            </a>
            )}
            </div>
            </div>
             </CarouselItem>

        
        ))}

      </CarouselContent>
        <CarouselPrevious/>
        <CarouselNext/>
    </Carousel>
</div>
            

        

      </div>
    </main>
  )
}

export default Page;
