'use client'

import Image from "next/image";
import { useState, useEffect, useRef} from "react";
import { LuMenu } from "react-icons/lu";
import { FaLongArrowAltRight } from "react-icons/fa";
import Item from "./navbar-components/item";
import { TiArrowSortedDown } from "react-icons/ti";
import Media from "./navbar-components/media";


export default function Navbar() {
    const [ShowList, SetShowList] = useState(false);
    const [showNational, setShowNational] = useState<number>(-1);
    const sidebarRef = useRef<HTMLDivElement>(null);

useEffect(() => {
  function handleClickOutside(event: MouseEvent) {
    if (sidebarRef.current && !sidebarRef.current.contains(event.target as Node)) {
      SetShowList(false);
    }
  }

  if (ShowList) {
    document.addEventListener("mousedown", handleClickOutside);
  }

  return () => {
    document.removeEventListener("mousedown", handleClickOutside);
  };
}, [ShowList]);
    const ListItems : ListItem[] = [
        {
            name : "Portada",
            value : 0,
            isDropDown : true
        },
        {
            name : "Política",
            value : 1,
            isDropDown : true
        },
        {
            name : "Economía",
            value : 2,
            isDropDown : true
        },
        {
            name : "Internacional",
            value : 3,
            isDropDown : true
        },
        {
            name : "Cultura y Ciencia",
            value : 4,
            isDropDown : true
        },
        {
            name : "Deportes",
            value : 5,
            isDropDown : true
        },
        {
            name : "Entrevistas",
            value : 6,
            isDropDown : true
        },
        {
            name : "vídeo",
            value : 7,
            isDropDown : false
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
            updatedAt : new Date("2025-04-17T22:4`1:24.059Z"),
            publishedAt : new Date("025-04-17T22:41:24.066Z"),
            Category : "National",
            banner : "/protest.jpg"
        }
    ]
    return (
        <>
         <header className="w-full h-full flex flex-col scroll-auto">
        <div className="w-full bg-[#222222] flex justify-center py-3">
          <Image src="/logo-trans.png" width={288} height={58} alt="Logo" />
        </div>
        <div className="w-full bg-red-500">
          <button
            className="text-white flex justify-center pl-2 px-[4px] py-[12px] cursor-pointer"
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
                className="flex justify-center align-items-center px-5 text-sm py-1 rounded-sm bg-[#212529] cursor-pointer text-white gap-1"
                onClick={() => SetShowList(false)}
              >
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
                <input
                  placeholder="Search"
                  className="border w-full text-gray-500 border-gray-500 rounded-sm p-2"
                />
                <button className="bg-white text-green-500 border-1 border-green-500 rounded-sm p-2">
                  Search
                </button>
              </div>
              <nav>
                <ul>
                  {ListItems.map((item: ListItem, itemIndex: number) => (
                    <div key={itemIndex}>
                      <li
                        className="flex cursor-pointer gap-2 mb-1 bg-[#f7f7f7] text-md w-full p-3 pl-2 content-center"
                        onClick={() =>
                          setShowNational(
                            showNational === itemIndex ? -1 : itemIndex
                          )
                        }
                      >
                        <p>{item.name}</p>
                        {item.isDropDown && <div className="text-sm flex items-center">
                          <TiArrowSortedDown />
                        </div>}
                      </li>
                      {(showNational === itemIndex && item.isDropDown) && (
                        <ul className="overflow-x-auto flex items-scroll">
                          {data.map((element: Item, index: number) => (
                            <li key={index} className="bg-[#f7f7f7]">
                              <Item
                                title={element.title}
                                content={element.content}
                                banner={element.banner}
                                Category={element.Category}
                              />
                            </li>
                          ))}
                        </ul>
                      )}
                    </div>
                  ))}
                </ul>
              </nav>
              <Media />
            </div>
          </div>
        </section>
      )}
        </>
    )  
}  