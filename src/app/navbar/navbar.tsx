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
    const sidebarRef = useRef<HTMLDivElement>(null);
    const pathname = usePathname();
    const router = useRouter();

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
        <>
         <header className="w-full h-full flex flex-col scroll-auto">
        <div className="w-full bg-[#222222] flex justify-center py-3">
          <Link href='/'>
            <Image className="cursor-pointer" src="/logo-trans.png" width={288} height={58} alt="Logo" />
          </Link>
        </div>
        <div className="w-full bg-[#d42a23]">
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
                src="/mobile-logo.png"
                width={152}
                height={31}
                alt="Logo"
              />
              </Link>
              <div className="flex gap-2 w-full">
                <input
                  placeholder="Search"
                  className="border w-full text-gray-500 border-gray-500  p-2"
                />
                <button className="bg-white text-green-500 border-1 border-green-500  p-2">
                  Search
                </button>
              </div>
              <nav>
                <ul>
                  {ListItems.map((item: ListItem, itemIndex: number) => (
                    <div key={itemIndex}>
                      <li
                        className={`flex cursor-pointer gap-2 mb-1 ${path == item.trueName ? 'bg-[#d42a23] text-white' : 'bg-[#f7f7f7] text-black' } text-sm w-full p-3 pl-2 content-center`}
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
                        <Link className="text-black self-end" href={`${(item.trueName != "" && item.trueName !== "video") ? "/categories/" : "/"}${item.trueName}`} onClick={() => SetShowList(false)}>
                          <FaLongArrowAltRight size={15} />
                        </Link>
                      </div>
                      </li>
                      {(showNational === itemIndex && item.isDropDown) && (
                        <ul className="overflow-x-auto flex items-scroll ">
                          {item.items && item.items.map((element: Item, index: number) => (
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