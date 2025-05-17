'use client'
import React from 'react';
import Media from './media';

export default function FullNavMedia() {
    const date = new Date();

    const formattedDate = date.toLocaleDateString('en-US', {
        weekday: 'long',
        month: 'long',
        day: 'numeric',
        year: 'numeric'
      });
  return (
    <div className='w-full max-w-screen-xl'>
    <div className='container mx-auto'>
        <div className='flex bg-[#222222] w-full text-sm justify-between items-center text-white'>
            <div className='flex gap-2'>
                <a className='cursor-pointer hover:text-[#d42a23]'>Contact us</a>
            </div>
            <div>
                <p>{formattedDate}</p>
            </div>
            <div className="flex gap-2 w-fit">
                <Media/>
            </div>
        </div>
    </div>
    </div>
  )
}
