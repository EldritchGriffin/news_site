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
    politicaData: [];
    economiaData: [];
    internacionalData: [];
    culturaYCienciaData: [];
    deportesData: [];
    entrevistasData: [];
}

function PlaceholderAd() {
  return (
      <div className='w-full h-full bg-gray-300 flex justify-center items-center'>
          <h1 className='text-2xl font-semibold text-gray-500'>Placeholder Ad</h1>
      </div>
  )
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
        const [isLoading, setIsLoading] = useState(false);
        useEffect(() => {
            async function fetchSearch() {
                if (searchString.length > 0)
                    {
                      setIsLoading(true);
                        const searched = await axios.get(`/api/strapi/posts?filters[title][$contains]=${searchString}&populate=*`);
                        if (searched.data)
                            setSearchResults(searched.data.data);
                        setIsLoading(false);
                    }
            }
            fetchSearch();
        }
        , [searchString]);
        console.log("Navbar data fetched : ", politicaData);
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
              trueName : "Política",
              items : politicaData
    
          },
          {
              name : "Economía",
              value : 2,
              isDropDown : true,
              trueName : "Economía",
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
              trueName : "vídeos",
              items : []
          }
        ]

        
    return (
        <header className="flex flex-col">
            <div className="bg-[#222222] relative flex justify-center border-b-1 border-[#2c2c2c] py-3"> 
                <FullNavMedia/>
            </div>
            <div className="w-full bg-[#222222] flex justify-center items-center py-3 h-48">
              <div className="w-full max-w-screen-xl flex flex-row justify-between gap-20 items-center ">
                <Link href={'/'}>
                    <img
                        className="cursor-pointer"
                      src="/LOGO_MARIBERO_WHITE.png"
                      width={350}
                      alt="Logo"
                    />
                </Link>
                <div className="w-full h-32">
                  <PlaceholderAd/>
                </div>
              </div>
            </div>
            <div className='w-full bg-[#d42a23] h-full'>
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
                                              <p className="lg:text-sm md:text-xs">{item.name}</p>
                                              {item.isDropDown && <div className="text-sm flex items-center">
                                                <TiArrowSortedDown />
                                              </div>}
                                            </Link>
                                            {item.isDropDown && (
                          <ul className="dropdown-content flex transition bg-[#f7f7f7] w-screen h-full z-50 duration-300 left-0 absolute pr-2">
                            {item.items && item.items.length > 0 ? (
                            <>
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
                              {item.items.map((element: Item, index: number) => (
                                <SwiperSlide key={index} className="w-full h-full">
                                  <Link href={`/article/${element.documentId}`}>
                                    <li className="bg-[#f7f7f7] w-full h-full">
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
                          </>
                        ) : (
                          <div className="flex items-center justify-center w-full h-full">
                            <p className="text-gray-600 text-lg">No data found</p>
                          </div>
                        )}
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
              <div className="fixed inset-0 flex items-center justify-center backdrop-blur-sm bg-black/30 p-4">
                <DialogPanel className="w-[800px] h-[600px]  bg-white p-8 shadow-xl  flex flex-col">
                  <DialogTitle className="text-xl font-bold mb-4">Search result:</DialogTitle>
                                    
                  {/* Main content (input + results) grows */}
                  <div className="flex flex-col gap-4 flex-grow overflow-hidden ">
                    {/* Search input */}
                    <input
                      type="text"
                      name="Search"
                      placeholder="Seasrch..."
                      autoFocus
                      onChange={(e) => setSearchString(e.target.value)}
                      className="w-full border-b-1  focus:outline-none p-2 focus:border-[#d42a23]"
                    />
            
                    {/* Scrollable results */}
                    {!isLoading && <div className="flex flex-col gap-2 overflow-y-auto flex-grow pr-1 ">
                      {searchResults?.map((searchElement, index) => (
                        <Link href={`/article/${searchElement.documentId}`} onClick={() =>{setSearchResults([]); setSearch(false); setIsLoading(false);}} key={index}>
                          <div className="flex gap-2 h-[100px] border-b-2 border-gray-300 hover:bg-gray-300 p-1">
                            <img
                              src={process.env.NEXT_PUBLIC_STRAPI_URL + searchElement.banner?.url}
                              alt={searchElement.title}
                              className="w-[120px] h-full object-cover "
                            />
                            <div className="flex flex-col justify-around text-left">
                              <p className="bg-red-600 p-1 px-2 text-white text-xs w-fit ">
                                {searchElement.category}
                              </p>
                              <p className="text-sm font-medium">{searchElement.title}</p>
                            </div>
                          </div>
                        </Link>
                      ))}
                    </div>}
                    {isLoading && <div className="text-center  justify-center flex items-center h-full">
                      <div role="status">
                        <svg aria-hidden="true" className="inline w-15 h-15 text-gray-200 animate-spin dark:text-gray-600 fill-[#d42a23]" viewBox="0 0 100 101" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M100 50.5908C100 78.2051 77.6142 100.591 50 100.591C22.3858 100.591 0 78.2051 0 50.5908C0 22.9766 22.3858 0.59082 50 0.59082C77.6142 0.59082 100 22.9766 100 50.5908ZM9.08144 50.5908C9.08144 73.1895 27.4013 91.5094 50 91.5094C72.5987 91.5094 90.9186 73.1895 90.9186 50.5908C90.9186 27.9921 72.5987 9.67226 50 9.67226C27.4013 9.67226 9.08144 27.9921 9.08144 50.5908Z" fill="currentColor"/>
                        <path d="M93.9676 39.0409C96.393 38.4038 97.8624 35.9116 97.0079 33.5539C95.2932 28.8227 92.871 24.3692 89.8167 20.348C85.8452 15.1192 80.8826 10.7238 75.2124 7.41289C69.5422 4.10194 63.2754 1.94025 56.7698 1.05124C51.7666 0.367541 46.6976 0.446843 41.7345 1.27873C39.2613 1.69328 37.813 4.19778 38.4501 6.62326C39.0873 9.04874 41.5694 10.4717 44.0505 10.1071C47.8511 9.54855 51.7191 9.52689 55.5402 10.0491C60.8642 10.7766 65.9928 12.5457 70.6331 15.2552C75.2735 17.9648 79.3347 21.5619 82.5849 25.841C84.9175 28.9121 86.7997 32.2913 88.1811 35.8758C89.083 38.2158 91.5421 39.6781 93.9676 39.0409Z" fill="currentFill"/>
                        </svg>
                        <span className="sr-only">Loading...</span>
                      </div>
                    </div>}
                  </div>
                    
                  {/* Cancel button stays at bottom */}
                  <button
                    className="bg-black text-white px-4 py-2 hover:bg-red-600 transition self-center mt-4"
                    onClick={() => setSearch(false)}
                  >
                    Cancel
                  </button>
                </DialogPanel>
              </div>
            </Dialog>
       </header>
    )
}