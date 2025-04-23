'use client'
import { TiArrowSortedDown } from "react-icons/ti";
import { FiSearch } from "react-icons/fi";
import NavItems from "./navbar-components/NavItems";
import FullNavMedia from "./navbar-components/FullNavMedia";
import { useEffect, useState } from "react";
import Link from 'next/link';
import { Description, Dialog, DialogPanel, DialogTitle } from '@headlessui/react'

import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import { ChevronLeft, ChevronRight } from "lucide-react";
import { searchPosts } from "../(handlers)/requestHandlers";
import axios from "axios";


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
        const [searchString, setSearchString] = useState<string>("");
        const [searchResults, setSearchResults] = useState<Item[]>([]);
        useEffect(() => {
            async function fetchSearch() {
                if (searchString.length > 0)
                    {
                        const searched = await axios.get(`/api/strapi/posts?filters[title][$contains]=${searchString}&populate=*`);
                        if (searched.data)
                            setSearchResults(searched.data.data);
                    }
            }
            fetchSearch();
        }
        , [searchString]);

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
            <Dialog open={search} onClose={() => setSearch(false)} className="relative z-50">
  {/* Centered with blur background */}
  <div className="fixed inset-0 flex items-center justify-center backdrop-blur-sm bg-black/30 p-4">
    {/* Fixed size panel */}
            <DialogPanel className="w-[800px] h-[600px] space-y-4 border bg-white p-8 shadow-xl rounded-md overflow-hidden">
              <DialogTitle className="text-xl font-bold">Search result:</DialogTitle>

              <div className="flex flex-col gap-4 text-sm h-full">
                {/* Search input */}
                <input
                  type="text"
                  name="Search"
                  placeholder="Search..."
                  autoFocus
                  onChange={(e) => setSearchString(e.target.value)}
                  className="w-full border-b-2 border-black focus:outline-none p-2"
                />

                {/* Results list */}
                <div className="flex flex-col gap-2 overflow-y-auto max-h-[400px]">
                  {searchResults?.map((searchElement, index) => (
                    <Link href={`/article/${searchElement.documentId}`} onClick={() => setSearch(false)} key={index}>
                        <div className="flex gap-2 h-[100px] border-b-2 border-gray-300">
                          <img
                            src={process.env.NEXT_PUBLIC_STRAPI_URL + searchElement.banner?.url}
                            alt={searchElement.title}
                            className="w-[120px] h-full object-cover rounded-sm border"
                          />
                          <div className="flex flex-col justify-around text-left">
                            <p className="bg-red-600 p-1 px-2 text-white text-xs w-fit rounded">{searchElement.category}</p>
                            <p className="text-sm font-medium">{searchElement.title}</p>
                          </div>
                        </div>
                    </Link>
                  ))}
                </div>
              
                {/* Cancel button */}
                <button
                  className="bg-black text-white px-4 py-2 hover:bg-red-600 transition self-center"
                  onClick={() => setSearch(false)}
                >
                  Cancel
                </button>
              </div>
            </DialogPanel>
          </div>
        </Dialog>
       </header>
    )
}