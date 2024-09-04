import React from 'react'

interface cardsProps {
  id?: number;
  title?: string;
  description?: string;
  className?: string; // Add className prop for additional styling
  children?: React.ReactNode; 
}

export const Cards : React.FC<cardsProps> = ({ id, title, description , className = '', children}) => {
  return (
    <div className={`flex flex-col gap-3 ${className}`}>
        <div className='flex flex-row'>
            <h1 className='text-4xl font-extrabold'>{id}</h1>
            {children}
        </div>
        <h1 className='text-4xl text-green-100 font-bold'>{title}</h1>
        <h1 className='text-md'>{description}</h1>
    </div>
  )
}
