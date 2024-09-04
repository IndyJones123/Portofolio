import React from 'react'
import Hero from '@/components/hero';
import Navbar from "@/components/navbar";
import { Cards } from '@/components/cards';
import { cardData } from '@/data'; // Import the data

const Page = () => {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-3 mt-3 sm:p-6">
      <div className="max-w-7xl w-full">
        <Navbar/>
        <div className='grid grid-rows-1 md:gap-10 md:mt-20 md:grid-cols-2 dark:bg-black mt-8'>
          {cardData.map((card) => (
            <div className='mt-2'>
            <Cards 
              key={card.id} 
              title={card.title} 
              description={card.description} 
              id={card.id} 
            >
            </Cards>
            <div className='border w-full mt-2'></div>
            </div>
          ))}
        </div>
      </div>
    </main>
  )
}

export default Page;
