
'use client'
import React from 'react'
import { FaPhoneSquareAlt } from "react-icons/fa";
import { CiMail } from "react-icons/ci";
import { TbDeviceLandlinePhone } from "react-icons/tb";
import { FaFacebookF } from "react-icons/fa";
import { BsPinterest } from "react-icons/bs";
import { FaPhoneAlt } from "react-icons/fa";
import { IoMdMail } from "react-icons/io";

import { FaSquareXTwitter } from "react-icons/fa6";
import { RiTwitterXLine } from "react-icons/ri";
import { useState } from 'react';

function isValidEmail(email: string) {
    const pattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return pattern.test(email);
}

function subscriveservicce(Email:string, SetEmailvalid:any){
    if (isValidEmail(Email))
        SetEmailvalid(1);
    else
        SetEmailvalid(0);
}

export default function Footer() {
    const Categoriesmap = ["Entrevistas" , "Deportes", "Cultura y Ciencia"];
    const Aboutmap = ["Internacional", "Economía", "Política"];
    const [inputtext, SetInputtext] = useState(0);
    const [Email, SetEmail] = useState("");
    const [Phone, SetPhone] = useState("");
    const [Emailvalid, SetEmailvalid] = useState(0);
    const [Phonevalid, SetPhonevalid] = useState(0);
    
  return (
      <div className="bg-[#212121] p-[15px]" >
    
    <div className="md:grid md:grid-cols-2 md:gap-4 md:border-b-2 md:border-b-[#363636] md:pb-6 lg:grid-cols-4 max-w-screen-xl mx-auto">
        <div className='col-span-2'>
            <h5 className='font-[Baskerville] text-white text-[20px] font-medium leading-[24px] pb-[10px] mb-0 border-b border-[#363636]  box-border'>
            Categories
            </h5>
            <div className='lg:flex lg:flex-row lg:justify-between md:grid md:grid-cols-2 pt-2'>
                <ul className=' text-gray-300 text-[15px] pl-[5px]'>
                    {(Categoriesmap.map((categorie, index) => (
                        <li className="box-border text-[#bbbbbb] md:text-[15px]  text-[14px] font-normal  leading-[21px] list-none list-outside mb-[5px] ml-0 mr-0 mt-0 p-0 text-left text-size-adjust-100 " key={index}>
                            <a href={`/categories/${categorie}`} className=''>
                                {categorie}
                            </a>
                        </li>
                    )))}
                        <li className="box-border text-[#bbbbbb] md:text-[15px]  text-[14px] font-normal  leading-[21px] list-none list-outside mb-[5px] ml-0 mr-0 mt-0 p-0 text-left text-size-adjust-100 " key={"Carta al director"}>
                            <a href="" className=''>
                            Carta al director
                            </a>
                        </li>
                </ul>
                <ul className=' text-gray-300 lg:pr-40 pl-[5px]'>
                    {(Aboutmap.map((about, index) => (
                        <li className="box-border text-[#bbbbbb] md:text-[15px] text-[14px] font-normal  leading-[21px] list-none list-outside mb-[5px] ml-0 mr-0 mt-0 p-0 text-left text-size-adjust-100 " key={index}>
                            <a href={`/categories/${about}`} className='text-[15px]'>
                                {about}
                            </a>
                        </li>
                        
                    )))}
                </ul>
            </div>
        </div>
        <div className=''>
    <h5 className="border-b border-[#363636] text-[#ffffff]  font-[Baskervville] text-[20px] font-medium leading-[24px]  mt-0 ml-0 mr-0 pb-[10px]">
        Support
    </h5>
    <ul className="py-2 text-gray-300  space-y-2 border-amber-200 ">
    
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
    </div>
    </div>
        <div className=''>
            <h5 className="border-b border-[#363636] text-[#ffffff]  font-[Baskervville] text-[20px] font-medium leading-[24px] mb-[15px] mt-0 ml-0 mr-0 py-[10px] md:pt-[0px]" >Newsletter Subscibe</h5>
                <div className="flex flex-row">
                <div className="">
                        <div className="mb-3 mr-2" >
                            <FaPhoneAlt className=' text-[#bbbbbb] flex justify-self-center self-center h-[38px] '/>
                        </div>
                        <div className="mb-3 mr-2" >
                            <IoMdMail className=' text-[#bbbbbb] flex justify-self-center h-[38px] self-center '/>
                        </div>
                </div>
                <div className="flex flex-col border-b border-[#363636] mb-3 md:border-b-0 w-full" >
                        <div className="mb-3" >
                        <input
                        type="tel"
                        value={Phone}
                        onChange={(e) => SetPhone(e.target.value)}
                        placeholder="Enter your phone number"
                        pattern="[0-9]*"
                        inputMode="numeric"
                        className={`w-full h-[38px] focus:outline-none bg-white py-1 pl-2 text-[16px] font-[Baskervville] ${Phonevalid ? 'focus:shadow-[0_0_0_0.25rem_rgba(13,110,253,.25)]' : 'focus:shadow-[0_0_0_0.25rem_rgba(220,53,69,.25)]' }`} style={{border: Phonevalid === 1 ? '1px solid #86b7fe' : 'none', }}  onFocus={() => SetPhonevalid(1)} onBlur={() => SetPhonevalid(0)}
                        />
                    </div>
                        <div className="mb-3" >
                    <input
                        type="email"
                        value={Email}
                        onChange={(e) => SetEmail(e.target.value)}
                        className={`w-full h-[38px] focus:outline-none bg-white py-1 pl-2 text-[16px] font-[Baskervville] ${Emailvalid ? 'focus:shadow-[0_0_0_0.25rem_rgba(13,110,253,.25)]' : 'focus:shadow-[0_0_0_0.25rem_rgba(220,53,69,.25)]' }`} style={{border: inputtext === 1 ? '1px solid #86b7fe' : 'none', }} placeholder="Enter your Email" onFocus={() => SetInputtext(1)} onBlur={() => SetInputtext(0)}/>
                    </div>
                    <button className='mb-3 text-white bg-[#d42a23] text-[16px] font-[Baskervville] font-normal py-[6px] px-[12px]' onClick={() => (subscriveservicce(Email, SetEmailvalid))}>Subscribe</button>
                </div>
                </div>
        </div>
        </div>
        <div className=" w-full flex justify-center pt-3">
            <h5 className='text-[#ffffff] text-[13px] font-normal align- leading-[19px] text-center mb-[10px] '>2022-2023 © MH News. All rights reserved.</h5>
        </div>
    </div>
  )
}
