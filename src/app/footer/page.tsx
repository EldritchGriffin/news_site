
'use client'
import React from 'react'
import { FaPhoneSquareAlt } from "react-icons/fa";
import { CiMail } from "react-icons/ci";
import { TbDeviceLandlinePhone } from "react-icons/tb";
import { FaFacebookF } from "react-icons/fa";
import { BsPinterest } from "react-icons/bs";
import { FaSquareXTwitter } from "react-icons/fa6";
import { RiTwitterXLine } from "react-icons/ri";
import { useState } from 'react';


export default function Footer() {
    const Categoriesmap = ["National" , "World", "Business", "LifeStyle", "Photo", "Videos"];
    const Aboutmap = ["Blogs" ,"Live", "Conatct Us", "Privacy Policy", "Terms And Conditions"];
    const [inputtext, SetInputtext] = useState(0);
  return (
    <div className="bg-[#212121] p-[15px]" >
    
    <div className="md:grid md:grid-cols-2 md:gap-4 md:border-b-2 md:border-b-[#363636] md:pb-6 lg:grid-cols-4 max-w-screen-xl mx-auto">
        <div className=''>
            <h5 className='font-[Baskerville] text-white text-[20px] font-medium leading-[24px] pb-[10px] mb-0 border-b border-[#363636]  box-border'>
            Categories
            </h5>
            <ul className='py-2 text-gray-300 text-[15px] pl-[5px]'>
                {(Categoriesmap.map((categorie, index) => (
                    <li className="box-border text-[#bbbbbb] md:text-[15px]  text-[14px] font-normal  leading-[21px] list-none list-outside mb-[5px] ml-0 mr-0 mt-0 p-0 text-left text-size-adjust-100 " key={index}>
                        <a href="" className=''>
                            {categorie}
                        </a>
                    </li>
                )))}
            </ul>
            
        </div>
        <div className=''>
            <h5 className='font-[Baskerville] text-white text-[20px] font-medium leading-[24px] pb-[10px] mb-0 border-b border-[#363636]  box-border'  >
            About
            </h5>
            <ul className='py-2 text-gray-300 '>
                {(Aboutmap.map((about, index) => (
                    <li className="box-border text-[#bbbbbb] md:text-[15px] text-[14px] font-normal  leading-[21px] list-none list-outside mb-[5px] ml-0 mr-0 mt-0 p-0 text-left text-size-adjust-100 " key={index}>
                        <a href="" className='text-[15px]'>
                            {about}
                        </a>
                    </li>
                )))}
            </ul>
        </div>
        <div className=''>
    <h5 className="border-b border-[#363636] text-[#ffffff]  font-[Baskervville] text-[20px] font-medium leading-[24px] mb-[15px] mt-0 ml-0 mr-0 pb-[10px]">
        Support
    </h5>
    <ul className="py-2 text-gray-300  space-y-2">
    
    <li className="flex items-center space-x-2 box-border text-[#bbbbbb]  text-[14px] font-normal  leading-[21px] list-none list-outside mb-[5px] ml-0 mr-0 mt-0 p-0 text-left text-size-adjust-100 ">
        <FaPhoneSquareAlt className="text-sm" />
        <a href="tel:18002505260" className="text-[15px] font-[Baskerville]">
            1800-250-5260
        </a>
    </li>
    <li className="flex items-center space-x-2 box-border text-[#bbbbbb]  text-[14px] font-normal  leading-[21px] list-none list-outside mb-[5px] ml-0 mr-0 mt-0 p-0 text-left text-size-adjust-100 ">
        <CiMail className="text-sm text-[#bbbbbb]" />
        <a href="mailto:support@example.com" className="text-[15px] font-[Baskerville] ">
            support@example.com
        </a>
    </li>
    <li className="flex items-center space-x-2 box-border text-[#bbbbbb]  text-[14px] font-normal  leading-[21px] list-none list-outside mb-[5px] ml-0 mr-0 mt-0 p-0 text-left text-size-adjust-100 ">
        <TbDeviceLandlinePhone className="text-sm" />
        <a href="mailto:support@example.com" className="text-[15px] font-[Baskerville] ">
            support@example.com
        </a>
    </li>
    </ul>
    <div className="flex flex-row space-x-2">
        <FaFacebookF className='text-sm bg-[#212121] text-[#bbbbbb]' />
        <RiTwitterXLine className='text-sm bg-[#212121] text-[#bbbbbb]' />
        <BsPinterest className='text-sm bg-[#212121] text-[#bbbbbb]' />
    </div>
    </div>
        <div className=''>
            <h5 className="border-b border-[#363636] text-[#ffffff]  font-[Baskervville] text-[20px] font-medium leading-[24px] mb-[15px] mt-0 ml-0 mr-0 py-[10px] md:pt-[0px]" >Newsletter Subscibe</h5>
        <div className="flex flex-col border-b border-[#363636] mb-3 md:border-b-0" >
            <div className="mb-3" >
                <input type="text" className='w-full h-[38px] focus:outline-none bg-white py-1 pl-2  text-[16px] font-[Baskervville] focus:shadow-[0_0_0_0.25rem_rgba(13,110,253,.25)]' style={{border: (inputtext == 1 ? `1px solid #86b7fe` : 'none')}} placeholder='Enter your Email' onFocus={()=>SetInputtext(1)} onBlur={()=>SetInputtext(0)}/>
            </div>
            <button className='mb-3 text-white bg-[#d42a23] text-[16px] font-[Baskervville] font-normal py-[6px] px-[12px] '>Subscribe</button>
        </div>
        </div>
        </div>
        <div className=" w-full flex justify-center pt-3">
            <h5 className='text-[#ffffff] text-[13px] font-normal align- leading-[19px] text-center mb-[10px] '>2022-2023 © MH News. All rights reserved.</h5>
        </div>
    </div>
  )
}
