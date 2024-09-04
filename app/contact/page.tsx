"use client"
import React from 'react';
import Navbar from "@/components/navbar";
import { FaWhatsapp, FaInstagram } from "react-icons/fa";
import { MdOutlineEmail } from "react-icons/md";

// Define the type for the contact object
type Contact = {
  title: string;
  link?: string;
  icon: React.ComponentType<{ size?: number }> // This type ensures the icon is a React component
};

// Define the contacts array with typed icon
export const Contacts: Contact[] = [
  {
    title: "6285648672062",
    icon: FaWhatsapp,
    link: "https://wa.me/6285648672062"
  },
  {
    title: "alfian.dm",
    icon: FaInstagram,
    link: "https://www.instagram.com/alfian.dm/"
  },
  {
    title: "alfianitem999@gmail.com",
    icon: MdOutlineEmail,
  },
];

const Page = () => {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-3 mt-3 sm:p-6">
      <div className="max-w-7xl w-full">
        <Navbar />
        <div className='flex flex-col gap-10 justify-center items-center mt-20 text-center md:flex-row md:gap-20 md:text-5xl md:container'>
          {Contacts.map((data, index) => (
            <div key={index}>
              {data.link ? (
                <div className=' flex items-center flex-col gap-5'>
                <a href={data.link}>
                  <data.icon size={50} />
                </a>
                <h1 className='text-2xl'>{data.title}</h1>
                </div>
              ) : (
                <div className=' flex items-center flex-col gap-5'>
                <data.icon size={50} />
                <h1 className='text-2xl'>{data.title}</h1>
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </main>
  )
}

export default Page;
