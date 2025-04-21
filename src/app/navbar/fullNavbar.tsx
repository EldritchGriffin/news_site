'use client'
import { TiArrowSortedDown } from "react-icons/ti";
import { FiSearch } from "react-icons/fi";
import NavItems from "./navbar-components/NavItems";
import FullNavMedia from "./navbar-components/FullNavMedia";
import { useState } from "react";
import Link from 'next/link';


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
                trueName : "video",
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
                        {showListItems ? <div className="flex gap-8 shadow-2xl">
                            {
                                ListItems && (
                                    ListItems.map((item: ListItem, itemIndex: number) => {
                                        return (
                                          <div
                                            key={itemIndex}
                                            className="dropdown p-2 h-full items-center justify-center">
                                            <Link className="flex gap-2 cursor-pointer hover:text-black text-md h-full items-center"
                                            href={`${item.trueName != "" ? "/categories/" : "/"}${item.trueName}`}>
                                              <p className="text-sm">{item.name}</p>
                                              {item.isDropDown && <div className="text-sm flex items-center">
                                                <TiArrowSortedDown />
                                              </div>}
                                            </Link>
                                            {item.isDropDown && <ul className="dropdown-content flex transition bg-[#f7f7f7]  w-screen h-full z-50 duration-300 left-0 absolute">
                                              {item.items && (item.items.length > 0) && item.items.map((element: Item, index: number) => (
                                                <Link key={index} href={`/article/${element.documentId}`}>
                                                    <li className="bg-[#f7f7f7] w-full h-full ">
                                                      <NavItems
                                                        title={element.title}
                                                        content={element.content}
                                                        banner={process.env.NEXT_PUBLIC_STRAPI_URL + element.banner.url}
                                                        Category={element.category}
                                                        />
                                                    </li>
                                                </Link>
                                              ))}
                                            </ul>}
                                          </div>
                                        );
                                    }))}
                        </div>
                            :
                            <input type="text" name="Search" 
                                    placeholder="Search..." 
                                    autoFocus
                                    className="w-full h-full border-b-1 border-black focus:outline-none"/> 
                        }
                        <button className="font-extrabold text-xl cursor-pointer"
                            onClick={() => {
                                setShowListItems(!showListItems);
                            }}>
                            <FiSearch/>
                        </button>
                </nav>
            </section>
                </div>
        </header>
    )
}