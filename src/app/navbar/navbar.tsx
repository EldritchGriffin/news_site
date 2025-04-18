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

// const data = [
//       {
//         "id": 11,
//         "documentId": "qs05e8su1l083dycwjdvpvia",
//         "title": "The release of Letraset sheets containing ",
//         "content": "/protest.jpg",
//         "createdAt": "2025-04-16T20:38:52.530Z",
//         "updatedAt": "2025-04-17T22:41:24.059Z",
//         "publishedAt": "2025-04-17T22:41:24.066Z",
//         "Category": "politics",
//         "author": "mahmoud darwich",
//         "banner": {
//           "id": 2,
//           "documentId": "spls4zhbuhu7filow5xhnq1y",
//           "name": "blm.jpeg",
//           "alternativeText": null,
//           "caption": null,
//           "width": 275,
//           "height": 183,
//           "formats": {
//             "thumbnail": {
//               "name": "thumbnail_blm.jpeg",
//               "hash": "thumbnail_blm_f9eb901ce8",
//               "ext": ".jpeg",
//               "mime": "image/jpeg",
//               "path": null,
//               "width": 234,
//               "height": 156,
//               "size": 14.98,
//               "sizeInBytes": 14975,
//               "url": "/uploads/thumbnail_blm_f9eb901ce8.jpeg"
//             }
//           },
//           "hash": "blm_f9eb901ce8",
//           "ext": ".jpeg",
//           "mime": "image/jpeg",
//           "size": 18.04,
//           "url": "/uploads/blm_f9eb901ce8.jpeg",
//           "previewUrl": null,
//           "provider": "local",
//           "provider_metadata": null,
//           "createdAt": "2025-04-17T22:41:19.585Z",
//           "updatedAt": "2025-04-17T22:41:19.585Z",
//           "publishedAt": "2025-04-17T22:41:19.586Z"
//         }
//       }
//     ]

export default function Navbar() {

    const [ShowList, SetShowList] = useState(false);
    return (
        <header className="w-full h-full flex flex-col">
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
                            <button className="text-white flex justify-center px-[4px] py-[12px]"
                                onClick={() => SetShowList(true)}>
                                <LuMenu size={30}/>
                            </button>
                        </div>
                    </>
                ) :
                (
                    <section className="">
                        <div className="">
                            <button className="flex justify-center align-items-center bg-black cursor-pointer text-white gap-1"
                                onClick={() => SetShowList(false)}>
                                <p>Close</p>
                                <FaLongArrowAltRight size={15} />
                            </button>
                        </div>
                        <div className="p-4 flex flex-col gap-3">
                            <Image
                              src="/mobile-logo.png"
                              width={152}
                              height={31}
                              alt="Logo"
                            />
                            <div className="flex gap-2">
                                <input placeholder="Search"
                                    className="border text-gray-500 border-gray-500 rounded-sm p-2">
                                </input>
                                <button className="bg-white text-green-500 border-1 border-green-500 rounded-sm p-2">
                                    Search
                                </button>
                            </div>
                            <nav>
                                <ul>
                                    <li></li>
                                    <li className="bg-[#f7f7f7]">
                                        <Item></Item>
                                    </li>
                                    <li>TEST</li>
                                    <li>TEST</li>
                                    <li>TEST</li>
                                </ul>
                            </nav>
                            <div className="flex gap-2 w-fit">
                                <a className="bg-black rounded-sm p-3 text-white">
                                    <FaFacebookF size={20}/>
                                </a>
                                <a className="bg-black rounded-sm p-3 text-white">
                                    <RiTwitterXFill size={20}/>
                                </a>
                                <a className="bg-black rounded-sm p-3 text-white">
                                    <FaGooglePlusG size={20}/>
                                </a>
                                <a className="bg-black rounded-sm p-3 text-white">
                                    <FaInstagram size={20}/>
                                </a>
                            </div>
                        </div>
                    </section>
                )
            }
        </header>
    )
}