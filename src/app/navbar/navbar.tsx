'use client'

import Image from "next/image";
import { useState, useEffect, useRef} from "react";
import { LuMenu } from "react-icons/lu";
import { FaLongArrowAltRight } from "react-icons/fa";
import Item from "./navbar-components/item";
import { TiArrowSortedDown } from "react-icons/ti";
import Media from "./navbar-components/media";
import { usePathname } from 'next/navigation'
import Link from 'next/link';
import { useRouter } from "next/navigation";
import { FiSearch } from "react-icons/fi";


import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import { ChevronLeft, ChevronRight } from "lucide-react";
import axios from "axios";

function decodeSpaces(str: string) {
  return str.replace(/%20/g, ' ');
}


interface NavbarProps {
  politicaData: Item[];
  economiaData: Item[];
  internacionalData: Item[];
  culturaYCienciaData: Item[];
  deportesData: Item[];
  entrevistasData: Item[];
}

export default function Navbar({
  politicaData,
  economiaData,
  internacionalData,
  culturaYCienciaData,
  deportesData,
  entrevistasData,
}: NavbarProps) {
    const [ShowList, SetShowList] = useState(false);
    const [showNational, setShowNational] = useState<number>(-1);
    const [path, setPath] = useState<string>("no path");
    const [seearching, setSearching] = useState(false);
    const sidebarRef = useRef<HTMLDivElement>(null);
    const pathname = usePathname();
    const router = useRouter();

    const [searchString, setSearchString] = useState<string>("");
    const [searchResults, setSearchResults] = useState<Item[]>([]);
    const [isLoading, setIsLoading] = useState<boolean>(false);
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
    // const currentPath = pathname.split('/');
    // const pathName = currentPath[1];
    // const pathNameDecoded = decodeSpaces(pathName);
    // setPath(pathNameDecoded);
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
        <>
         <header className="w-full h-full flex flex-col scroll-auto">
        <div className="w-full bg-[#222222] flex justify-center py-3">
          <Link href='/'>
            <Image className="cursor-pointer" src="/LOGO_MARIBERO_WHITE.png" width={288} height={58} alt="Logo" />
          </Link>
        </div>
        <div className="w-full bg-[#d42a23]">
          <button
            className="text-white flex justify-center pl-2 px-[4px] py-[12px] items-center cursor-pointer"
            onClick={() => SetShowList(true)}
          >
            <LuMenu size={30} />
          </button>
        </div>
      </header>
      {ShowList && (
        <section className="fixed inset-0 backdrop-blur-sm z-50">
          <div  ref={sidebarRef} className="max-w-[400px] overflow-y-auto h-full py-8 bg-white">
            <div className="py-5 px-5">
              <button
                className="flex justify-center align-items-center px-5 text-sm py-1  bg-[#212529] cursor-pointer text-white gap-1"
                onClick={() => SetShowList(false)}
              >
                <p>Close</p>
                <FaLongArrowAltRight size={15} />
              </button>
            </div>
            <div className="p-4 flex flex-col gap-3">
              <Link href={'/'} onClick={() => SetShowList(false)}>
              <Image
                className="cursor-pointer pb-1"
                src="/LOGO_MARIBERO_BLACK.png"
                width={152}
                height={31}
                alt="Logo"
              />
              </Link>
              <div className="flex gap-2 w-full">
                {!seearching && <button className="bg-[#d42a23] flex gap-2 justify-center items-center text-center text-white px-4 py-2"
                onClick={() => {
                  setSearching(true);
                }}>
                    <p>Search</p>
                    <FiSearch/>
                </button>}
              </div>
              <nav>
                {!seearching && <ul>
                  {ListItems.map((item: ListItem, itemIndex: number) => (
                    <div key={itemIndex}>
                      <li
                        className={`flex cursor-pointer gap-2 mb-1 ${path == item.name ? 'bg-[#d42a23] text-white' : 'bg-[#f7f7f7] text-black' } text-sm w-full p-3 pl-2 content-center`}
                        onClick={() =>
                        {
                          if (item.isDropDown) {  
                            setShowNational(showNational === itemIndex ? -1 : itemIndex)
                        } else {
                          setShowNational(-1);
                          SetShowList(false);
                          router.push(`/${item.trueName}`);
                        }
                      }
                    }
                      > 
                      <div className="flex justify-between w-full">
                            <div className="flex">
                              <p>{item.name}</p>
                              {item.isDropDown && <div className="text-sm flex items-center">
                                <TiArrowSortedDown />
                            </div>}
                          </div>
                        <Link className="text-black self-end" 
                              href={`${(item.name != "Portada" && item.name !== "vídeo") ? "/categories/" : "/"}${item.trueName}`}
                                     onClick={() => {SetShowList(false);}}>
                          <FaLongArrowAltRight size={15} />
                        </Link>
                      </div>
                      </li>
                      {(showNational === itemIndex && item.isDropDown) && (
                        <ul className="overflow-x-auto flex items-scroll ">
                          <Swiper
                                                    modules={[Navigation]}
                                                    slidesPerView={2} 
                                                    spaceBetween={2} 
                                                    loop={true} 
                                                    navigation={{
                                                        prevEl: `.prev-${itemIndex}`, 
                                                        nextEl: `.next-${itemIndex}`, 
                                                    }}
                                                    className="w-full h-full"
                                                    >
                          {item.items && item.items.map((element: Item, index: number) => (
                          <SwiperSlide key={index} className="w-full h-full ">
                            <Link key={index} href={`/article/${element.documentId}`} onClick={() => SetShowList(false)}>
                              <li className="bg-[#f7f7f7] h-full ">
                                <Item
                                  title={element.title}
                                  content={element.content}
                                  banner={process.env.NEXT_PUBLIC_STRAPI_URL + element.banner.url}
                                  Category={element.category}
                                  />
                              </li>
                            </Link>
                            </SwiperSlide>
                          ))}
                          </Swiper>
                        </ul>
                      )}
                    </div>
                  ))}
                </ul>}
                {seearching && (
                <div className="flex flex-col h-[600px] gap-4 bg-white p-4 rounded-md shadow-md">
                  <input
                    placeholder="Search"
                    className="border border-gray-300 rounded-md w-full text-gray-700 p-2 focus:outline-none focus:ring-2 focus:ring-black"
                    onChange={(e) => setSearchString(e.currentTarget.value)}
                  />
                  <p className="text-sm text-gray-600 font-semibold">Search results</p>
                              
                  <div className="flex flex-col flex-grow overflow-hidden">
                    {!isLoading && <ul className="flex flex-col gap-3 overflow-y-auto flex-grow pr-1">
                      {searchResults.map((item: Item, itemIndex: number) => (
                        <li
                          key={itemIndex}
                          className="flex items-center justify-between gap-4 bg-gray-100 hover:bg-gray-200 p-3 rounded-md transition cursor-pointer"
                        >
                          <Link href={`/article/${item.documentId}`} onClick={() =>{setSearchResults([]); setIsLoading(false); SetShowList(false); setSearching(false);}} className="flex items-center w-full">
                            <div className="flex items-center gap-3 w-full">
                              {item.banner?.url && (
                                <img
                                  src={process.env.NEXT_PUBLIC_STRAPI_URL + item.banner.url}
                                  alt={item.title}
                                  className="w-12 h-12 object-cover rounded-md border"
                                />
                              )}
                              <p className="text-sm text-black">{item.title}</p>
                              <div className="ml-auto">
                                <FaLongArrowAltRight size={16} className="text-gray-500" />
                              </div>
                            </div>
                          </Link>
                        </li>
                      ))}
                    </ul>}
                    {isLoading && <div className="text-center  justify-center flex items-center h-full">
                      <div role="status">
                        <svg aria-hidden="true" className="inline w-15 h-15 text-gray-200 animate-spin dark:text-gray-600 fill-[#d42a23]" viewBox="0 0 100 101" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M100 50.5908C100 78.2051 77.6142 100.591 50 100.591C22.3858 100.591 0 78.2051 0 50.5908C0 22.9766 22.3858 0.59082 50 0.59082C77.6142 0.59082 100 22.9766 100 50.5908ZM9.08144 50.5908C9.08144 73.1895 27.4013 91.5094 50 91.5094C72.5987 91.5094 90.9186 73.1895 90.9186 50.5908C90.9186 27.9921 72.5987 9.67226 50 9.67226C27.4013 9.67226 9.08144 27.9921 9.08144 50.5908Z" fill="currentColor"/>
                        <path d="M93.9676 39.0409C96.393 38.4038 97.8624 35.9116 97.0079 33.5539C95.2932 28.8227 92.871 24.3692 89.8167 20.348C85.8452 15.1192 80.8826 10.7238 75.2124 7.41289C69.5422 4.10194 63.2754 1.94025 56.7698 1.05124C51.7666 0.367541 46.6976 0.446843 41.7345 1.27873C39.2613 1.69328 37.813 4.19778 38.4501 6.62326C39.0873 9.04874 41.5694 10.4717 44.0505 10.1071C47.8511 9.54855 51.7191 9.52689 55.5402 10.0491C60.8642 10.7766 65.9928 12.5457 70.6331 15.2552C75.2735 17.9648 79.3347 21.5619 82.5849 25.841C84.9175 28.9121 86.7997 32.2913 88.1811 35.8758C89.083 38.2158 91.5421 39.6781 93.9676 39.0409Z" fill="currentFill"/>
                        </svg>
                        <span className="sr-only">Loading...</span>
                      </div>
                    </div>}
                    {/* Close Button Stays at Bottom */}
                    <div className="pt-4">
                      <button
                        className="bg-[#d42a23] text-white px-4 py-2 rounded-md w-full"
                        onClick={() => {
                          setSearching(false);
                          setSearchString("");
                        }}
                      >
                        Close
                      </button>
                    </div>
                  </div>
                </div>
              )}


              </nav>
              <Media />
            </div>
          </div>
        </section>
      )}
        </>
    )  
}  