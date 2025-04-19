import React from 'react'
import { FaFacebookF } from "react-icons/fa";
import { RiTwitterXFill } from "react-icons/ri";
import { FaGooglePlusG } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa6";

export default function FullPageSocials() {
    const currentTime : Date = new Date();
    const formattedDate = currentTime.toLocaleDateString('en-US', {
        weekday: 'long',
        year: 'numeric',
        month: 'long',
        day: 'numeric'
      });
  return (
    <div className='flex justify-between'>
        <div className='flex gap-2 text-white'>
            <a>Contact us</a>
            <a>Blog</a>
        </div>
        <div>
            <p>
                {formattedDate}
            </p>
        </div>
        <div className="flex gap-2 w-fit">
            <a className="bg-[#222222] border-white rounded-lg px-2.5 content-center py-2.5 text-white">
                <FaFacebookF size={16}/>
            </a>
            <a className="bg-[#222222] rounded-lg border-white px-2.5 content-center py-2.5 text-white">
                <RiTwitterXFill size={16}/>
            </a>
            <a className="bg-[#222222] rounded-lg px-2.5 border-white content-center  py-2.5 text-white">
                <FaGooglePlusG size={20}/>
            </a>
            <a className="bg-[#222222] rounded-lg px-2.5 content-center border-white  py-2.5 text-white">
                <FaInstagram size={16}/>
            </a>
        </div>
    </div>
  )
}
