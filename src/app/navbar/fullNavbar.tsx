'use client'
import { TiArrowSortedDown } from "react-icons/ti";
import { FiSearch } from "react-icons/fi";
import NavItems from "./navbar-components/NavItems";
import FullNavMedia from "./navbar-components/FullNavMedia";
import { useState } from "react";
import Link from 'next/link';
import { Description, Dialog, DialogPanel, DialogTitle } from '@headlessui/react'

import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import { ChevronLeft, ChevronRight } from "lucide-react";


interface FullNavbarProps {
    politicaData: Item[];
    economiaData: Item[];
    internacionalData: Item[];
    culturaYCienciaData: Item[];
    deportesData: Item[];
    entrevistasData: Item[];
}

export default function FullNavbar ({
    politicaData,
    economiaData,
    internacionalData,
    culturaYCienciaData,
    deportesData,
    entrevistasData,
}: FullNavbarProps) {
        const [showListItems, setShowListItems] = useState(true);
        const [search, setSearch] = useState(false);


        const ListItems : ListItem[] = [
            {
                name : "Portada",
                value : 0,
                isDropDown : false,
                trueName : "",
                items : []
            },
            {
                name : "Política",
                value : 1,
                isDropDown : true,
                trueName : "Politica",
                items : politicaData
    
            },
            {
                name : "Economía",
                value : 2,
                isDropDown : true,
                trueName : "Economia",
                items : economiaData
    
            },
            {
                name : "Internacional",
                value : 3,
                isDropDown : true,
                trueName : "Internacional",
                items : internacionalData
    
            },
            {
                name : "Cultura y Ciencia",
                value : 4,
                isDropDown : true,
                trueName : "Cultura y Ciencia",
                items : culturaYCienciaData 
            },
            {
                name : "Deportes",
                value : 5,
                isDropDown : true,
                trueName : "Deportes",
                items : deportesData
    
            },
            {
                name : "Entrevistas",
                value : 6,
                isDropDown : true,
                trueName : "Entrevistas",
                items : entrevistasData
    
            },
            {
                name : "vídeo",
                value : 7,
                isDropDown : false,
                trueName : "videos",
                items : []
            }
        ]

        
    return (
        <header className="flex flex-col">
            <div className="bg-[#222222] relative flex justify-center border-b-1 border-[#2c2c2c] py-3"> 
                <FullNavMedia/>
            </div>
            <div className="w-full bg-[#222222] flex justify-center py-3">
                <Link href={'/'}>
                    <img
                        className="cursor-pointer"
                      src="/logo-trans.png"
                      width={288}
                      height={58}
                      alt="Logo"
                    />
                </Link>
            </div>
            <div className='w-full bg-[#d42a23] h-full' >
            <section className="container mx-auto max-w-screen-xl ">
                <nav className="flex text-white justify-between h-[50px]">
                        <div className="flex gap-8 shadow-2xl">
                            {
                                ListItems && (
                                    ListItems.map((item: ListItem, itemIndex: number) => {
                                        return (
                                          <div
                                            key={itemIndex}
                                            className="dropdown p-2 h-full items-center justify-center">
                                            <Link className="flex gap-2 cursor-pointer hover:text-black text-md h-full items-center"
                                            href={`${(item.name != "Portada" && item.name !== "vídeo") ? "/categories/" : "/"}${item.trueName}`}>
                                              <p className="text-sm">{item.name}</p>
                                              {item.isDropDown && <div className="text-sm flex items-center">
                                                <TiArrowSortedDown />
                                              </div>}
                                            </Link>
                                            {item.isDropDown && (
                                                <ul className="dropdown-content flex transition bg-[#f7f7f7] w-screen h-full z-50 duration-300 left-0 absolute pr-2">
                                                    <Swiper
                                                    modules={[Navigation]}
                                                    slidesPerView={4} 
                                                    spaceBetween={20} 
                                                    loop={true} 
                                                    navigation={{
                                                        prevEl: `.prev-${itemIndex}`, 
                                                        nextEl: `.next-${itemIndex}`, 
                                                    }}
                                                    className="w-full h-full"
                                                    >
                                                    {item.items &&
                                                        item.items.length > 0 &&
                                                        item.items.map((element: Item, index: number) => (
                                                        <SwiperSlide key={index} className="w-full h-full ">
                                                            <Link href={`/article/${element.documentId}`}>
                                                            <li className="bg-[#f7f7f7] w-full h-full ">
                                                                <NavItems
                                                                title={element.title}
                                                                content={element.content}
                                                                banner={
                                                                    process.env.NEXT_PUBLIC_STRAPI_URL + element.banner.url
                                                                }
                                                                Category={element.category}
                                                                />
                                                            </li>
                                                            </Link>
                                                        </SwiperSlide>
                                                        ))}
                                                    </Swiper>
                                                    <div className="absolute bottom-2 left-4 flex gap-2 z-10">
                                                    <button
                                                        className={`prev-${itemIndex} bg-white/10 cursor-pointer text-black border border-gray-600 p-2 transition`}
                                                    >
                                                        <ChevronLeft className="w-4 h-4" />
                                                    </button>
                                                    <button
                                                        className={`next-${itemIndex} bg-white/10 cursor-pointer text-black border border-gray-600 p-2 transition`}
                                                    >
                                                        <ChevronRight className="w-4 h-4" />
                                                    </button>
                                                    </div>
                                                </ul>
                                                )}
                                          </div>
                                        );
                                    }))}
                        </div>
                        <button className="font-extrabold text-xl cursor-pointer"
                            onClick={() => {
                                setShowListItems(!showListItems);
                                setSearch(true);
                            }}>
                            <FiSearch/>
                        </button>
                </nav>
            </section>
            </div>
            <Dialog open={search} onClose={() => setSearch(false)} className="relative z-50 w-[50%]">
                <div className="fixed inset-0 flex w-fulll items-center justify-center p-4">
                <DialogPanel className="w-full space-y-4 border bg-white p-12">
                <DialogTitle className="font-bold">Search result:</DialogTitle>
                    <div className="flex flex-col gap-4 text-sm">
                        <input type="text" name="Search"
                            placeholder="Search..."
                            autoFocus
                            className="w-full h-full border-b-2 border-black focus:outline-none"/>
                        <div className="flex flex-col gap-2 overflow-x-auto max-h-[400px]">
                            {deportesData && deportesData.map((searchElement : Item, index) => {
                                return (
                                <div key={index} className="flex gap-2  h-[100px] border-b-2 border-[#2c2c2c]">
                                    <img src={process.env.NEXT_PUBLIC_STRAPI_URL + searchElement.banner.url} alt={searchElement.title} className="max-w-[200px]"/>
                                    <div className="flex flex-col text-center justify-around">
                                        <p className="bg-red-600 p-2 h-[30px] text-white">{searchElement.category}</p>
                                        <p>{searchElement.title}</p>
                                    </div>
                                </div>
                                )
                            })}
                        </div>
                          <button className="gap-4 bg-black text-white flex justify-center p-2 hover:bg-[#d42a23] border transition" onClick={() => setSearch(false)}>Cancel</button>
                    </div>
                </DialogPanel>
                </div>
            </Dialog>
        </header>
    )
}