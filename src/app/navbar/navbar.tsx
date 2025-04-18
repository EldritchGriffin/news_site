'use client'

import Image from "next/image";
import { useState } from "react";
import { LuMenu } from "react-icons/lu";
import { FaLongArrowAltRight } from "react-icons/fa";
import { FaFacebookF } from "react-icons/fa";
import { RiTwitterXFill } from "react-icons/ri";
import { FaGooglePlusG } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa6";
import Item from "./navbar-components/item";
import { TiArrowSortedDown } from "react-icons/ti";



interface ListItem {
    name : string,
    value : number
}

export default function Navbar() {

    const [ShowList, SetShowList] = useState(false);
    const [showNational, setShowNational] = useState<number>(-1);
    const ListItems : ListItem[] = [
        {
            name : "National",
            value : 0
        },
        {
            name : "World",
            value : 1
        },
        {
            name : "Business",
            value : 2
        },
        {
            name : "Entertainment",
            value : 3
        },
        {
            name : "LifeStyle",
            value : 4
        },
        {
            name : "Sport",
            value : 5
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
        }
    ]
    return (
        <header className="w-full h-full flex flex-col scroll-auto">
            {!ShowList ?
                (
                    <>
                        <div className="w-full bg-black flex justify-center py-3">
                                <Image
                                  src="/logo-trans.png"
                                  width={288}
                                  height={58}
                                  alt="Logo"
                                />
                        </div>
                        <div className="w-full bg-red-500">
                            <button className="text-white flex justify-center px-[4px] py-[12px] cursor-pointer"
                                onClick={() => SetShowList(true)}>
                                <LuMenu size={30}/>
                            </button>
                        </div>
                    </>
                ) :
                (
                    <section className="w-full h-full py-8">
                        <div className="py-5 px-5">
                            <button className="flex justify-center align-items-center px-5 text-sm py-1 rounded-sm bg-[#212529] cursor-pointer text-white gap-1"
                                onClick={() => SetShowList(false)}>
                                <p>Close</p>
                                <FaLongArrowAltRight size={15} />
                            </button>
                        </div>
                        <div className="p-4 flex flex-col gap-3">
                            <Image
                                className="pb-1"
                                src="/mobile-logo.png"
                                width={152}
                                height={31}
                                alt="Logo"
                            />
                            <div className="flex gap-2 w-full">
                                <input placeholder="Search"
                                    className="border w-full text-gray-500 border-gray-500 rounded-sm p-2">
                                </input>
                                <button className="bg-white text-green-500 border-1 border-green-500 rounded-sm p-2">
                                    Search
                                </button>
                            </div>
                            <nav>
                                <ul>
                                    <li className=" bg-[#f7f7f7] p-2 text-md mb-2 pl-2" >Home</li>
                                    {
                                        ListItems && (
                                        ListItems.map( (item: ListItem, itemIndex: number) => {
                                            return (
                                                <>
                                                    <li className="flex cursor-pointer gap-2 bg-[#f7f7f7] text-md w-full p-2 mb-2 pl-2 content-center" onClick={()=> {
                                                        if (showNational === itemIndex)
                                                            setShowNational(-1);
                                                        else
                                                            setShowNational(itemIndex);
                                                        }}>
                                                            <p>
                                                                {item.name}
                                                            </p>
                                                            <div className="text-sm flex items-center">
                                                                <TiArrowSortedDown />
                                                            </div>
                                                        </li>
                                                        {showNational == itemIndex && 
                                                        <ul className="border  border-red-600 flex items-scroll">
                                                            {true && data.map((element: Item, index: number)=> {
                                                                return (
                                                                    <li key={index} className="bg-[#f7f7f7] w-full">
                                                                        <Item   title={element.title}
                                                                                content={element.content}
                                                                                banner={element.banner}
                                                                                Category={element.Category}>
                                                                        </Item>
                                                                    </li>
                                                                )
                                                            })}
                                                        </ul>
                                                    }
                                                </>
                                                )
                                            })
                                        )
                                    }
                                    <li className=" bg-[#f7f7f7] w-full p-2 text-md mb-2 pl-2" >Blog</li>
                                    <li className=" bg-[#f7f7f7] w-full p-2 text-md mb-2 pl-2" >Contact us</li>
                                </ul>
                            </nav>
                            <div className="flex gap-2 w-fit">
                                <a className="bg-black rounded-lg px-2.5 content-center  py-2.5 text-white">
                                    <FaFacebookF size={16}/>
                                </a>
                                <a className="bg-black rounded-lg px-2.5 content-center py-2.5 text-white">
                                    <RiTwitterXFill size={16}/>
                                </a>
                                <a className="bg-black rounded-lg px-2.5 content-center  py-2.5 text-white">
                                    <FaGooglePlusG size={20}/>
                                </a>
                                <a className="bg-black rounded-lg px-2.5 content-center  py-2.5 text-white">
                                    <FaInstagram size={16}/>
                                </a>
                            </div>
                        </div>
                    </section>
                )
            }
        </header>
    )
}