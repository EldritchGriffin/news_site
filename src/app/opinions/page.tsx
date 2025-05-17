// import React from 'react'

// interface Opinion {
//     id: number;
//     title: string;
//     image: string;
//     content: string;
//     author: string;
//     date: string;
// }

// export default function Page() {
//     const OpinionData: Opinion[] = [
//         { id: 1, title: "Opinion 1", image: "https://via.placeholder.com/150", content: "This is the content of opinion 1.", author: "Author 1", date: "2023-10-01" },
//         { id: 2, title: "Opinion 2", image: "https://via.placeholder.com/150", content: "This is the content of opinion 2.", author: "Author 2", date: "2023-10-02" },
//         { id: 3, title: "Opinion 3", image: "https://via.placeholder.com/150", content: "This is the content of opinion 3.", author: "Author 3", date: "2023-10-03" },
//         { id: 4, title: "Opinion 4", image: "https://via.placeholder.com/150", content: "This is the content of opinion 4.", author: "Author 4", date: "2023-10-04" },
//         { id: 5, title: "Opinion 5", image: "https://via.placeholder.com/150", content: "This is the content of opinion 5.", author: "Author 5", date: "2023-10-05" },
//     ]

//     return (
//         <div className="max-w-3xl mx-auto p-6">
//             {OpinionData.map(opinion => (
//                 <div
//                     key={opinion.id}
//                     className="flex flex-col md:flex-row border rounded-lg shadow-lg overflow-hidden mb-6 hover:shadow-xl transition-shadow duration-200"
//                 >
//                     {/* Text section */}
//                     <div className="flex-1 p-6">
//                         <h2 className="text-2xl font-semibold mb-2">{opinion.title}</h2>
//                         <p className="text-gray-700 mb-4">{opinion.content}</p>
//                         <p className="text-sm text-gray-500">By <span className="font-medium text-gray-800">{opinion.author}</span> on <time dateTime={opinion.date}>{new Date(opinion.date).toLocaleDateString()}</time></p>
//                     </div>

//                     {/* Image section */}
//                     <div className="w-full md:w-48 relative">
//                         <img
//                             src={opinion.image}
//                             alt={opinion.title}
//                             className="w-full h-full object-cover rounded-tr-lg md:rounded-tr-lg rounded-br-lg md:rounded-br-none"
//                         />
//                     </div>
//                 </div>
//             ))}
//         </div>
//     )
// }

'use client'
import Bubbletext from '@/app/(components)/bubble';
import { VscTriangleDown } from "react-icons/vsc";
import { TfiReload } from "react-icons/tfi";
import Breadcrumb from '@/app/(components)/breadcrumb';
import { getAllPosts } from '@/app/(handlers)/requestHandlers';
import SwiperPosts from '@/app/(components)/swiperpost';
import CardPost from '@/app/(components)/cardPost';
import { getLatestPostsFromCategory } from '@/app/(handlers)/requestHandlers';
import { getAllFromCategory } from '@/app/(handlers)/requestHandlers';
import { useEffect, useState } from 'react';
import { GET } from '@/app/api/strapi/[...path]/route';
import { request } from 'http';
import axios from 'axios';
import { Menu, MenuButton, MenuItem, MenuItems } from '@headlessui/react'
import { getCategoriesFromLast3Days } from '@/app/(handlers)/requestHandlers';
import OpinionCard from '../(components)/opinionCard';


function Populattagss({ popularetags }: { popularetags: string[] }) {
  return (
    <div className='w-full max-w-screen-xl'>
      <section className="container mx-auto py-6">
        <div className="flex flex-wrap gap-2">
          {popularetags?.map((tag, i) => (
            <a
              href={`/categories/${encodeURIComponent(tag)}`}
              key={i}
              className="px-3 py-1 text-sm rounded-full bg-gray-200"
            >
              {tag}
            </a>
          ))}
        </div>
      </section>
    </div>
  );
}

interface Banner {
  id : number,
  url : string,
  alternativeText : string,
  caption : string,
  width : number,
  height : number
}

interface Item {
  id : number,
  documentId : string,
  title : string,
  content : string,
  createdAt : Date,
  updatedAt : Date,
  publishedAt : Date,
  category : string,
  banner : Banner,
  views: number
}

interface Opinion {
    id: number;
    title: string;
    image: string;
    content: string;
    author: string;
    date: string;
}

export default   function Page() {

  const [current_categotie,setCurrent_categotie] = useState<any>("");
  const [categoriecontent,setCategoriecontent] = useState<any>([]);
  const [LatesstContent,setLatesstContent] = useState<Item>();
  const [postspaginationcount, setPostspaginationcount] = useState<number>(1);
  const [popularetags, setPopularetags] = useState<any>();
  const [postspaginationtype, setPostspaginationtype] = useState<string>("Latest Post");
  const [isLoading, setIsLoading] = useState(false);
  const [isLoadingtwo, setIsLoadingtwo] = useState(false);
  const OpinionData: Opinion[] = [
            { id: 1, title: "Opinion 1", image: "https://via.placeholder.com/150", content: "This is the content of opinion 1.", author: "Author 1", date: "2023-10-01" },
            { id: 2, title: "Opinion 2", image: "https://via.placeholder.com/150", content: "This is the content of opinion 2.", author: "Author 2", date: "2023-10-02" },
            { id: 3, title: "Opinion 3", image: "https://via.placeholder.com/150", content: "This is the content of opinion 3.", author: "Author 3", date: "2023-10-03" },
            { id: 4, title: "Opinion 4", image: "https://via.placeholder.com/150", content: "This is the content of opinion 4.", author: "Author 4", date: "2023-10-04" },
            { id: 5, title: "Opinion 5", image: "https://via.placeholder.com/150", content: "This is the content of opinion 5.", author: "Author 5", date: "2023-10-05" },
        ]

  const reloadcontent = async () => {
    setPostspaginationcount((prev) => prev + 1);
  };
  
  const latestposts = async (type : string) => {
    if (postspaginationtype != type)
      {  
        setPostspaginationtype(type);
        setPostspaginationcount(1);
      }
  };

  return(
    <main className="w-full max-w-screen-xl mx-auto px-4 py-6">
      <Breadcrumb />

      {/* 1 column on small; lg → 3 columns, content spans 2, ads span 1 */}
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
        {/* Content: span 2 on lg */}
        <section className="lg:col-span-2">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
            {OpinionData.map(o => (
              <OpinionCard
                key={o.id}
                title={o.title}
                image={o.image}
                content={o.content}
                author={o.author}
                date={o.date}
              />
            ))}

            {!isLoading && OpinionData.length === 0 && (
              <div className="col-span-1 md:col-span-2 h-64 flex items-center justify-center text-gray-400 text-xl border-2 border-amber-400">
                No Posts
              </div>
            )}

            {isLoading && (
              <div className="col-span-1 md:col-span-2 flex items-center justify-center">
                <svg
                  aria-hidden="true"
                  className="w-12 h-12 text-gray-200 animate-spin fill-[#d42a23]"
                  viewBox="0 0 100 101"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  {/* spinner paths */}
                </svg>
              </div>
            )}
          </div>

          {!isLoading && (
            <button
            //   onClick={loadMore}
              className="inline-flex items-center gap-2 px-4 py-2 font-[Baskerville] bg-black text-white hover:bg-white hover:text-black hover:border hover:border-black"
            >
              <TfiReload /> Load more
            </button>
          )}
        </section>

        {/* Sidebar: ads */}
        <aside className="flex flex-col items-center gap-6">
          <div className="w-full max-w-xs h-64 bg-pink-800 text-yellow-400 flex items-center justify-center">
            Ad Placeholder
          </div>
          <div className="w-full max-w-xs h-64 bg-pink-800 text-yellow-400 flex items-center justify-center">
            Ad Placeholder
          </div>
        </aside>
      </div>
    </main>
  )
}
