'use client'
import { TiArrowSortedDown } from "react-icons/ti";
import { FiSearch } from "react-icons/fi";
import NavItems from "./navbar-components/NavItems";
import FullNavMedia from "./navbar-components/FullNavMedia";
import { useState } from "react";


export default function FullNavbar () {
        const [showListItems, setShowListItems] = useState(true);
        const ListItems : ListItem[] = [
            {
                name : "Portada",
                value : 0,
                isDropDown : true,
                trueName : "Portada"
                ,
            },
            {
                name : "Política",
                value : 1,
                isDropDown : true,
                trueName : "Politica"
    
            },
            {
                name : "Economía",
                value : 2,
                isDropDown : true,
                trueName : "Economia"
    
            },
            {
                name : "Internacional",
                value : 3,
                isDropDown : true,
                trueName : "Internacional"
    
            },
            {
                name : "Cultura y Ciencia",
                value : 4,
                isDropDown : true,
                trueName : "Cultura y Ciencia"
    
            },
            {
                name : "Deportes",
                value : 5,
                isDropDown : true,
                trueName : "Deportes"
    
            },
            {
                name : "Entrevistas",
                value : 6,
                isDropDown : true,
                trueName : "Entrevistas"
    
            },
            {
                name : "vídeo",
                value : 7,
                isDropDown : false,
                trueName : "video"
            }
        ]
        const data : Item[] = [
            {
                id : 1,
                documentId : "",
                title : "title 1",
                content : "this is the content of the page .",
                createdAt : new Date("2025-04-16T20:38:52"),
                updatedAt : new Date("2025-04-17T22:41:24"),
                publishedAt : new Date("025-04-17T22:41:24"),
                Category : "National",
                banner : "/protest.jpg"
            },
            {
                id : 2,
                documentId : "",
                title : "title 2",
                content : "this is the content of the page .",
                createdAt : new Date("2025-04-16T20:38:52.530Z"),
                updatedAt : new Date("2025-04-17T22:41:24.059Z"),
                publishedAt : new Date("025-04-17T22:41:24.066Z"),
                Category : "National",
                banner : "/protest.jpg"
            },
            {
                id : 3,
                documentId : "",
                title : "title 3",
                content : "this is the content of the page .",
                createdAt : new Date("2025-04-16T20:38:52.530Z"),
                updatedAt : new Date("2025-04-17T22:41:24.059Z"),
                publishedAt : new Date("025-04-17T22:41:24.066Z"),
                Category : "National",
                banner : "/protest.jpg"
            },
            {
                id : 4,
                documentId : "",
                title : "title 1",
                content : "this is the content of the page .",
                createdAt : new Date("2025-04-16T20:38:52"),
                updatedAt : new Date("2025-04-17T22:41:24"),
                publishedAt : new Date("025-04-17T22:41:24"),
                Category : "National",
                banner : "/protest.jpg"
            },
            {
                id : 5,
                documentId : "",
                title : "title 2",
                content : "this is the content of the page .",
                createdAt : new Date("2025-04-16T20:38:52.530Z"),
                updatedAt : new Date("2025-04-17T22:41:24.059Z"),
                publishedAt : new Date("025-04-17T22:41:24.066Z"),
                Category : "National",
                banner : "/protest.jpg"
            },
            {
                id : 6,
                documentId : "",
                title : "title 3",
                content : "this is the content of the page .",
                createdAt : new Date("2025-04-16T20:38:52.530Z"),
                updatedAt : new Date("2025-04-17T22:41:24.059Z"),
                publishedAt : new Date("025-04-17T22:41:24.066Z"),
                Category : "National",
                banner : "/protest.jpg"
            },
            {
                id : 7,
                documentId : "",
                title : "title 2",
                content : "this is the content of the page .",
                createdAt : new Date("2025-04-16T20:38:52.530Z"),
                updatedAt : new Date("2025-04-17T22:41:24.059Z"),
                publishedAt : new Date("025-04-17T22:41:24.066Z"),
                Category : "National",
                banner : "/protest.jpg"
            },
            {
                id : 8,
                documentId : "",
                title : "title 3",
                content : "this is the content of the page .",
                createdAt : new Date("2025-04-16T20:38:52.530Z"),
                updatedAt : new Date("2025-04-17T22:41:24.059Z"),
                publishedAt : new Date("025-04-17T22:41:24.066Z"),
                Category : "National",
                banner : "/protest.jpg"
            }
        ]
        
    return (
        <header className="flex flex-col">
            <div className="bg-[#222222] relative flex justify-center border-b-1 border-[#2c2c2c] py-3"> 
                <FullNavMedia/>
            </div>
            <div className="w-full bg-[#222222] flex justify-center py-3">
                <img
                  src="/logo-trans.png"
                  width={288}
                  height={58}
                  alt="Logo"
                />
            </div>
            <div className='w-full bg-[#d42a23]'>
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
                                            <a className="flex gap-2 cursor-pointer hover:text-black text-md h-full items-center">
                                              <p className="text-sm">{item.name}</p>
                                              {item.isDropDown && <div className="text-sm flex items-center">
                                                <TiArrowSortedDown />
                                              </div>}
                                            </a>
                                            {item.isDropDown && <ul className="dropdown-content flex transition w-screen h-full z-50 duration-300 left-0 absolute">
                                              {data.map((element: Item, index: number) => (
                                                <li key={index} className="bg-[#f7f7f7] w-full h-full">
                                                  <NavItems
                                                    title={element.title}
                                                    content={element.content}
                                                    banner={element.banner}
                                                    Category={element.Category}
                                                  />
                                                </li>
                                              ))}
                                            </ul>}
                                          </div>
                                        );
                                    }))}
                        </div>
                            :
                            <input type="text" name="Search" 
                                    placeholder="Search..." 
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