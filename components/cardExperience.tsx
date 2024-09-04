import { title } from 'process';
import React from 'react'

interface CardExperienceProps {
  id?: number;
  year?: string;
  title?: string;
  description?: string;
  className?: string; // Add className prop for additional styling
  children?: React.ReactNode; 
}

export const CardExperience : React.FC<CardExperienceProps> = ({ id, year, title, description , className = '', children}) => {
  return (
    <div className={`flex flex-col justify-center items-center gap-3 bg-slate-800 rounded-xl p-3 ${className}`}>
        <h1 className='text-2xl text-green-100'>{year}</h1>
        <h1 className='text-2xl'>{title}</h1>
        <h1>{description}</h1>
    </div>
  )
}
