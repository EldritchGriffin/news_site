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

//   useEffect(() => {
//     const fetccategorie = async () => {
//       try {
//       const threeDaysAgoISO = new Date(Date.now() - 3 * 24 * 60 * 60 * 1000).toISOString();

//           const res = await axios.get(`/api/strapi/posts`, {
//             params: {
//               'filters[publishedAt][$gte]': threeDaysAgoISO,
//               'populate': '*'
//             }
//           });
//       const categories = res.data.data.reduce((acc: any, post: any) => {
//         const category = post.category;
//         const views = parseInt(post.views);
//         if (!acc[category]) {
//           acc[category] = 0;
//         }
//         acc[category] += views;
//         return acc;
//       }, {});
//       const sortedCategories = Object.entries(categories).sort((a: any, b: any) => b[1] - a[1]);
//       const sortedCategoriesNames = sortedCategories.map((category: any) => category[0]);
//       setPopularetags(sortedCategoriesNames);
//       return sortedCategoriesNames;
//     } catch (error) {
//       console.error('Error fetching latest posts:', error);
//       throw error;
//     }
//   };
    // const GetCategorie = async () => {
    //   try {
    //     const pathname = await params
    //     setCurrent_categotie(pathname.id);
        
    //   } catch (error) {
    //     console.error('Fetch error:', error);
    //   }
    // };
    // const fetchallData = async () => {
    //   setIsLoading(true);
    //   if (!current_categotie) return;
    //   try {
    //     const pathname = await params
    //     setCurrent_categotie(pathname.id);
    //     const res = await axios.get(`/api/strapi/posts?filters[category][$eq]=${decodeURIComponent(current_categotie)}&populate=*`);
    //     setLatesstContent(res.data);
        
    //   } catch (error) {
    //     console.error('Fetch error:', error);
    //   }
    //   setIsLoading(false);
    // };
//     const TopViewedRecentPostsPaginated = async () => {
//       setIsLoadingtwo(true);
//       if (!current_categotie) return;
//       try {
//         const res = await axios.get(`/api/strapi/posts`, {
//           params: {
//             'filters[category][$eq]': decodeURIComponent(current_categotie),
//             'sort': 'views:desc',
//             'pagination[page]': postspaginationcount,
//             'pagination[pageSize]': 5,
//             'populate': '*'
//           }
//         });
//         if (postspaginationcount == 1)
//           setCategoriecontent(res.data)
//         else
//           setCategoriecontent((prev: any) => ({
//             ...res.data,
//             data: [...(prev?.data || []), ...(res.data?.data || [])],
//           }));
//       } catch (error) {
//         console.error('Error fetching latest posts:', error);
//         throw error;
//       }
//       setIsLoadingtwo(false);
//     };
//     const fetchTopViewedRecentPostsPaginated = async () => {
//       setIsLoadingtwo(true);
//       if (!current_categotie) return;

//       try {
//         const sevenDaysAgoISO = new Date(Date.now() - 7 * 24 * 60 * 60 * 1000).toISOString();
    
//         const res = await axios.get(`/api/strapi/posts`, {
//           params: {
//             'filters[category][$eq]': decodeURIComponent(current_categotie),
//             'filters[publishedAt][$gte]': sevenDaysAgoISO,
//             'sort': 'views:desc',
//             'pagination[page]': postspaginationcount,
//             'pagination[pageSize]': 5,
//             'populate': '*'
//           }
//         });


//         if (postspaginationcount == 1)
//           setCategoriecontent(res.data)
//         else
//           setCategoriecontent((prev: any) => ({
//             ...res.data,
//             data: [...(prev?.data || []), ...(res.data?.data || [])],
//           }));
//       } catch (error) {
//         console.error('Fetch error:', error);
//       }
//       setIsLoadingtwo(false);
//     };
    
//     const fetchlatestData = async () => {
//       setIsLoadingtwo(true);
//       if (!current_categotie) return;
//       try {
//         const pathname = await params
//         setCurrent_categotie(pathname.id);
//         const res = await axios.get(`/api/strapi/posts`,{params:
//           {
//             'filters[category][$eq]': decodeURIComponent(current_categotie),
//             'sort': 'publishedAt:desc',
//             'pagination[page]': postspaginationcount,
//             'pagination[pageSize]': 5, 
//             'populate': '*'
//           }});
//           if (postspaginationcount == 1)
//             setCategoriecontent(res.data)
//           else
//             setCategoriecontent((prev: any) => ({
//               ...res.data,
//               data: [...(prev?.data || []), ...(res.data?.data || [])],
//             }));
//       } catch (error) {
//         console.error('Fetch error:', error);
//       }
//       setIsLoadingtwo(false);
//     };
//     GetCategorie();
//     fetchallData();
//     if(postspaginationtype == "Latest Post")
//       fetchlatestData();
//     else if (postspaginationtype == "Most popular")
//       TopViewedRecentPostsPaginated();
//     else
//       fetchTopViewedRecentPostsPaginated();
//     fetccategorie();
//   }, [current_categotie, postspaginationcount, postspaginationtype]);
  return(
    <main className=" flex flex-col  w-full  max-w-screen-xl justify-center px-10 py-6  mx-auto">
      <Breadcrumb />
      <div className="lg:flex lg:flex-row lg:justify-between lg:w-full  lg:gap-10">
      <div className="lg:w-full">
          <div className="w-full flex flex-col gap-[12px] pt-2 my-[30px] md:grid md:grid-cols-2 lg:mt-0 ">
            {(
               OpinionData?.map((post: Opinion, index: number)=>(
                <div key={index} className="w-full h-[200px] md:w-[100%] ">
                 
                    <OpinionCard
                      title={post?.title || "Untitled"}
                      image={
                        process.env.NEXT_PUBLIC_STRAPI_URL +
                        post.image
                      }
                      author={post?.author || "Unknown Author"}
                      date={post?.date || "Unknown Date"}
                      content={post?.content || "No content available"}
                    />
                </div>
              ))
            )}
                    {!isLoadingtwo && categoriecontent?.data?.length == 0 && (
          <div className="w-auto  h-[1000px] border-2 border-amber-400 flex col-span-2  items-center justify-center text-gray-400 text-2xl">
          No Posts
        </div>
        
        )}
        {isLoadingtwo  && <div className="text-center   justify-center flex items-center   col-span-2 ">
        <div role="status">
          <svg aria-hidden="true" className="inline w-15 h-15 text-gray-200 animate-spin dark:text-gray-600 fill-[#d42a23]" viewBox="0 0 100 101" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M100 50.5908C100 78.2051 77.6142 100.591 50 100.591C22.3858 100.591 0 78.2051 0 50.5908C0 22.9766 22.3858 0.59082 50 0.59082C77.6142 0.59082 100 22.9766 100 50.5908ZM9.08144 50.5908C9.08144 73.1895 27.4013 91.5094 50 91.5094C72.5987 91.5094 90.9186 73.1895 90.9186 50.5908C90.9186 27.9921 72.5987 9.67226 50 9.67226C27.4013 9.67226 9.08144 27.9921 9.08144 50.5908Z" fill="currentColor"/>
          <path d="M93.9676 39.0409C96.393 38.4038 97.8624 35.9116 97.0079 33.5539C95.2932 28.8227 92.871 24.3692 89.8167 20.348C85.8452 15.1192 80.8826 10.7238 75.2124 7.41289C69.5422 4.10194 63.2754 1.94025 56.7698 1.05124C51.7666 0.367541 46.6976 0.446843 41.7345 1.27873C39.2613 1.69328 37.813 4.19778 38.4501 6.62326C39.0873 9.04874 41.5694 10.4717 44.0505 10.1071C47.8511 9.54855 51.7191 9.52689 55.5402 10.0491C60.8642 10.7766 65.9928 12.5457 70.6331 15.2552C75.2735 17.9648 79.3347 21.5619 82.5849 25.841C84.9175 28.9121 86.7997 32.2913 88.1811 35.8758C89.083 38.2158 91.5421 39.6781 93.9676 39.0409Z" fill="currentFill"/>
          </svg>
          <span className="sr-only">Loading...</span>
        </div>
      </div>
      }
          </div>

          {!isLoadingtwo  &&  <button className="bg-black text-white px-3 py-2 flex flex-row font-[Baskerville] gap-2 w-fit items-center hover:bg-white hover:text-black hover:border-2 hover:border-black" onClick={reloadcontent} ><TfiReload /> Load more</button>}
      </div>

      <div className=" lg:w-[200px]">
        {/* <div className="font-[Baskerville] text-[20px]"> Popular Tags</div>
        <Populattagss popularetags={popularetags} /> */}
        <div className="w-full flex flex-col justify-center pt-[30px]">

        <div className="w-[300px] h-[500px]  bg-pink-800 text-yellow-400 flex justify-center items-center self-center mb-[15px] lg:w-[200]">
            Ad PlaceHolder
        </div>
        <div className="w-[300px] h-[500px] lg:h-[400px] bg-pink-800 text-yellow-400 flex justify-center items-center self-center lg:w-[200]">
            Ad PlaceHolder
        </div>
        </div>
      </div>
      </div>
    </main>  
  )
}
