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
    <div className='flex bg-[#222222] text-sm w-[1000px] text-white justify-between'>
        <div className='flex gap-2'>
            <a>Contact us</a>
            <a>Blog</a>
        </div>
        <div>
            <p>{formattedDate}</p>
        </div>
        <div className="flex gap-2 w-fit">
            <Media/>
        </div>
    </div>
  )
}
