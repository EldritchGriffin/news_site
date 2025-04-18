'use client'
import { useState } from "react";
import Item from "./navbar-components/item";
import { TiArrowSortedDown } from "react-icons/ti";

export default function FullNavbar () {
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
            },
            {
                name : "Photos",
                value : 6
            },
            {
                name : "Videos",
                value : 6
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
                updatedAt : new Date("2025-04-17T22:41:24.059Z"),
                publishedAt : new Date("025-04-17T22:41:24.066Z"),
                Category : "National",
                banner : "/protest.jpg"
            }
        ]
    return (
        <header className="w-full flex flex-col">
            <div className="w-full bg-black flex justify-center py-3">
                <img
                  src="/logo-trans.png"
                  width={288}
                  height={58}
                  alt="Logo"
                />
            </div>
            <section className="w-full text-white h-full bg-[#d42a23]">
                <nav className="">
                        <ul className="flex max-w-[990px] justify-center items-center">
                            {/* <li className="text-md">Home</li> */}
                            {
                                ListItems && (
                                ListItems.map( (item: ListItem, itemIndex: number) => {
                                    return (
                                        <div key={itemIndex}>
                                            <li key={itemIndex} className="flex cursor-pointer text-md content-center"
                                                onClick={()=> {
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
                                                {/* {showNational == itemIndex && 
                                                <ul className="z-33 overflow-x-auto flex items-scroll">
                                                    {true && data.map((element: Item, index: number)=> {
                                                        return (
                                                            <li key={index} className="bg-[#f7f7f7]">
                                                                <Item   title={element.title}
                                                                        content={element.content}
                                                                        banner={element.banner}
                                                                        Category={element.Category}>
                                                                </Item>
                                                            </li>
                                                        )
                                                    })}
                                                </ul>
                                            } */}
                                        </div>
                                        )
                                    })
                                )
                            }
                            {/* <li className="text-md" >Photos</li>
                            <li className="text-md" >Videos</li> */}
                        </ul>
                </nav>
            </section>
        </header>
    )
}