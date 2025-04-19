'use client'
import { TiArrowSortedDown } from "react-icons/ti";
import { FiSearch } from "react-icons/fi";
import NavItems from "./navbar-components/NavItems";
import FullNavMedia from "./navbar-components/FullNavMedia";


export default function FullNavbar () {
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
        <header className="w-full flex flex-col">
            <div className="bg-[#222222] w-full flex justify-center py-3"> 
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
            <section className="w-full flex text-white justify-center h-[50px] bg-[#d42a23]">
                <nav className="flex w-[1000px] h-full">
                        <div className="flex w-full gap-8 shadow-2xl">
                            {
                                ListItems && (
                                    ListItems.map((item: ListItem, itemIndex: number) => {
                                        return (
                                          <div
                                            key={itemIndex}
                                            className="dropdown p-2 h-full items-center justify-center">
                                            <a className="flex gap-2 cursor-pointer text-md h-full items-center">
                                              <p className="text-sm">{item.name}</p>
                                              <div className="text-sm flex items-center">
                                                <TiArrowSortedDown />
                                              </div>
                                            </a>
                                            <ul className="dropdown-content flex transition w-screen h-full duration-300 left-0 absolute">
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
                                            </ul>
                                          </div>
                                        );
                                    }))}
                        </div>
                        <button  className="font-extrabold text-xl">
                            <FiSearch/>
                        </button>
                </nav>
            </section>
        </header>
    )
}