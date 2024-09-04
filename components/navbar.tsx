"use client";
import React, { useEffect, useState } from 'react';
import { IoIosHome } from "react-icons/io";
import { DropdownMenu, DropdownMenuContent, DropdownMenuItem, DropdownMenuLabel, DropdownMenuSeparator, DropdownMenuTrigger } from "@/components/ui/dropdown-menu";
import Buttons from '@/components/ui/buttons';

const Navbar = () => {
  const [activePage, setActivePage] = useState("");

  useEffect(() => {
    setActivePage(window.location.pathname);
  }, []);

  const isActive = (href: string) => activePage === href ? 'text-green-100' : 'text-white-100';

  return (
    <div>
      <div className='w-7xl-full w-full flex flex-row'>
        <div className='basis-11/12 md:basis-1/2'>
          <h1 className='text-xl md:text-3xl'>Alfian<span className='text-green-100'>.dm</span></h1>
        </div>
        <div className='basis-1/2 text-xl hidden md:block'>
          <div className='flex flex-row gap-5 justify-center'>
            <a href="/" className={isActive('/')}>Home</a>
            <a href="/services" className={isActive('/services')}>Services</a>
            <a href="/resume" className={isActive('/resume')}>Resume</a>
            <a href="/projects" className={isActive('/projects')}>Projects</a>
            <a href="/contact"><Buttons text='Contact Me' className='text-l font-bold '/></a>
          </div>
        </div>
        <div className='basis-1/12 text-xl md:hidden'>
          <DropdownMenu>
            <DropdownMenuTrigger className='flex items-center'>
              <svg className="w-6 h-6 text-green-100 dark:text-white" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="currentColor" viewBox="0 0 24 24">
                <path d="M10.83 5a3.001 3.001 0 0 0-5.66 0H4a1 1 0 1 0 0 2h1.17a3.001 3.001 0 0 0 5.66 0H20a1 1 0 1 0 0-2h-9.17ZM4 11h9.17a3.001 3.001 0 0 1 5.66 0H20a1 1 0 1 1 0 2h-1.17a3.001 3.001 0 0 1-5.66 0H4a1 1 0 1 1 0-2Zm1.17 6H4a1 1 0 1 0 0 2h1.17a3.001 3.001 0 0 0 5.66 0H20a1 1 0 1 0 0-2h-9.17a3.001 3.001 0 0 0-5.66 0Z"/>
              </svg>
            </DropdownMenuTrigger>
            <DropdownMenuContent>
              <DropdownMenuLabel>Alfian<span className='text-green-100'>.dm</span></DropdownMenuLabel>
              <DropdownMenuSeparator />
              <a href="/"><DropdownMenuItem className={isActive('/')}>Home</DropdownMenuItem></a>
              <a href="/services"><DropdownMenuItem className={isActive('/services')}>Services</DropdownMenuItem></a>
              <a href="/resume"><DropdownMenuItem className={isActive('/resume')}>Resume</DropdownMenuItem></a>
              <a href="/projects"><DropdownMenuItem className={isActive('/projects')}>Projects</DropdownMenuItem></a>
              <a href="/contact"><DropdownMenuItem className={isActive('/contact')}>Contact</DropdownMenuItem></a>
            </DropdownMenuContent>
          </DropdownMenu>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
