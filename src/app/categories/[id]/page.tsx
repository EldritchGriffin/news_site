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

export default   function Page({ params, }: { params: Promise<{ id: string }> }) {

  const [current_categotie,setCurrent_categotie] = useState<any>("");
  const [categoriecontent,setCategoriecontent] = useState<any>([]);
  const [LatesstContent,setLatesstContent] = useState<Item>();
  const [postspaginationcount, setPostspaginationcount] = useState<number>(1);
  const [popularetags, setPopularetags] = useState<any>();
  const [postspaginationtype, setPostspaginationtype] = useState<string>("Latest Post");
  const [isLoading, setIsLoading] = useState(false);
  const [isLoadingtwo, setIsLoadingtwo] = useState(false);

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

  useEffect(() => {
    const fetccategorie = async () => {
      try {
      const threeDaysAgoISO = new Date(Date.now() - 3 * 24 * 60 * 60 * 1000).toISOString();

          const res = await axios.get(`/api/strapi/posts`, {
            params: {
              'filters[publishedAt][$gte]': threeDaysAgoISO,
              'populate': '*'
            }
          });
      const categories = res.data.data.reduce((acc: any, post: any) => {
        const category = post.category;
        const views = parseInt(post.views);
        if (!acc[category]) {
          acc[category] = 0;
        }
        acc[category] += views;
        return acc;
      }, {});
      const sortedCategories = Object.entries(categories).sort((a: any, b: any) => b[1] - a[1]);
      const sortedCategoriesNames = sortedCategories.map((category: any) => category[0]);
      setPopularetags(sortedCategoriesNames);
      return sortedCategoriesNames;
    } catch (error) {
      console.error('Error fetching latest posts:', error);
      throw error;
    }
  };
    const GetCategorie = async () => {
      try {
        const pathname = await params
        setCurrent_categotie(pathname.id);
        
      } catch (error) {
        console.error('Fetch error:', error);
      }
    };
    const fetchallData = async () => {
      setIsLoading(true);
      if (!current_categotie) return;
      try {
        const pathname = await params
        setCurrent_categotie(pathname.id);
        const res = await axios.get(`/api/strapi/posts?filters[category][$eq]=${decodeURIComponent(current_categotie)}&populate=*`);
        setLatesstContent(res.data);
        
      } catch (error) {
        console.error('Fetch error:', error);
      }
      setIsLoading(false);
    };
    const TopViewedRecentPostsPaginated = async () => {
      setIsLoadingtwo(true);
      if (!current_categotie) return;
      try {
        const res = await axios.get(`/api/strapi/posts`, {
          params: {
            'filters[category][$eq]': decodeURIComponent(current_categotie),
            'sort': 'views:desc',
            'pagination[page]': postspaginationcount,
            'pagination[pageSize]': 5,
            'populate': '*'
          }
        });
        if (postspaginationcount == 1)
          setCategoriecontent(res.data)
        else
          setCategoriecontent((prev: any) => ({
            ...res.data,
            data: [...(prev?.data || []), ...(res.data?.data || [])],
          }));
      } catch (error) {
        console.error('Error fetching latest posts:', error);
        throw error;
      }
      setIsLoadingtwo(false);
    };
    const fetchTopViewedRecentPostsPaginated = async () => {
      setIsLoadingtwo(true);
      if (!current_categotie) return;

      try {
        const sevenDaysAgoISO = new Date(Date.now() - 7 * 24 * 60 * 60 * 1000).toISOString();
    
        const res = await axios.get(`/api/strapi/posts`, {
          params: {
            'filters[category][$eq]': decodeURIComponent(current_categotie),
            'filters[publishedAt][$gte]': sevenDaysAgoISO,
            'sort': 'views:desc',
            'pagination[page]': postspaginationcount,
            'pagination[pageSize]': 5,
            'populate': '*'
          }
        });


        if (postspaginationcount == 1)
          setCategoriecontent(res.data)
        else
          setCategoriecontent((prev: any) => ({
            ...res.data,
            data: [...(prev?.data || []), ...(res.data?.data || [])],
          }));
      } catch (error) {
        console.error('Fetch error:', error);
      }
      setIsLoadingtwo(false);
    };
    
    const fetchlatestData = async () => {
      setIsLoadingtwo(true);
      if (!current_categotie) return;
      try {
        const pathname = await params
        setCurrent_categotie(pathname.id);
        const res = await axios.get(`/api/strapi/posts`,{params:
          {
            'filters[category][$eq]': decodeURIComponent(current_categotie),
            'sort': 'publishedAt:desc',
            'pagination[page]': postspaginationcount,
            'pagination[pageSize]': 5, 
            'populate': '*'
          }});
          if (postspaginationcount == 1)
            setCategoriecontent(res.data)
          else
            setCategoriecontent((prev: any) => ({
              ...res.data,
              data: [...(prev?.data || []), ...(res.data?.data || [])],
            }));
      } catch (error) {
        console.error('Fetch error:', error);
      }
      setIsLoadingtwo(false);
    };
    GetCategorie();
    fetchallData();
    if(postspaginationtype == "Latest Post")
      fetchlatestData();
    else if (postspaginationtype == "Most popular")
      TopViewedRecentPostsPaginated();
    else
      fetchTopViewedRecentPostsPaginated();
    fetccategorie();
  }, [current_categotie, postspaginationcount, postspaginationtype]);
  return(
    <main className=" flex flex-col  w-full  max-w-screen-xl justify-center px-10 py-6  mx-auto">
      <Breadcrumb />
      <div className="relative  w-full flex justify-between mb-5">
              <div className="mb-2">
                <Bubbletext _text={decodeURIComponent(current_categotie)} _width={"135px"}/>
              </div>
      </div>

      <div className="w-full h-96 mb-14  ">
        
        {/* {isLoading! && <SwiperPosts posts={LatesstContent?.data} /> } */}
        {!isLoading && LatesstContent?.data?.length > 0 && (
          <SwiperPosts posts={LatesstContent.data} />
        )}
        {!isLoading && LatesstContent?.data?.length == 0 && (
          <div className="w-full h-full flex items-center justify-center text-gray-400 text-2xl">
          No Posts
        </div>
        
        )}
        {isLoading && <div className="text-center  justify-center flex items-center h-full border-2">
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

      <div className=" flex flex-row justify-between  ">
        <h2 className="font-full  text-center flex items-center justify-center font-medium font-[Baskerville]" 
        style={{ fontSize: `calc(1.325rem + 0.9vw)` }}

        > You May Like </h2>
        <Menu>
          <MenuButton className="bg-black h-fit text-white py-[6px] px-[12px] flex flex-row font-[Baskerville] gap-1"> {postspaginationtype} <VscTriangleDown /> </MenuButton>
          <MenuItems className={"flex flex-col bg-white py-2 border border-gray-300 rounded-md w-[160px]"} anchor="bottom">
            <MenuItem  >
              <span className="text-[16px] text-normal text-[#212529] font-[Baskervville] py-[4px] hover:bg-gray-200 px-[16px]" onClick={()=>latestposts("Latest Post")}>
              Latest Post 
              </span>
            </MenuItem>
            <MenuItem>
              <span className="text-[16px] text-normal text-[#212529] font-[Baskervville] py-[4px] hover:bg-gray-200 px-[16px]" onClick={()=>latestposts("Most popular")}>
              Most popular
              </span>
            </MenuItem>
            <MenuItem>
              <span className="text-[16px] text-normal text-[#212529] font-[Baskervville] py-[4px] hover:bg-gray-200 px-[16px]" onClick={()=>latestposts("7 days popular")}>
              7 days popular
              </span>
            </MenuItem>
          </MenuItems>
        </Menu>
      </div>
      <div className="lg:flex lg:flex-row lg:justify-between lg:w-full  lg:gap-10">

      <div className="lg:w-full">

          <div className="w-full flex flex-col gap-[24px]  my-[30px] md:grid md:grid-cols-2 lg:mt-0 ">
            {(
              !isLoadingtwo && categoriecontent?.data?.map((post: any, index: number)=>(
                <div key={index} className="w-full h-[300px] md:w-[100%] ">
                 {categoriecontent?.data?.length > 0 && (
                    <CardPost
                      title={post?.title || "Untitled"}
                      imageUrl={
                        process.env.NEXT_PUBLIC_STRAPI_URL +
                        post.banner.url 
                      }
                      category={post?.category || "Uncategorized"}
                      author={post?.author || "Unknown Author"}
                      date={post?.publishedAt || "Unknown Date"}
                    />
                  )}
                </div>
              ))
            )}
                    {!isLoadingtwo && categoriecontent?.data?.length == 0 && (
          <div className="w-auto  h-[1000px] border-2 flex col-span-2  items-center justify-center text-gray-400 text-2xl">
          No Posts
        </div>
        
        )}
        {isLoadingtwo && <div className="text-center  justify-center flex items-center h-full border-2 col-span-2 ">
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

          <button className="bg-black text-white px-3 py-2 flex flex-row font-[Baskerville] gap-2 w-fit items-center" onClick={reloadcontent} ><TfiReload /> Load more</button>
      </div>

      <div className=" lg:w-[200px]">
        <div className="font-[Baskerville] text-[20px]"> Popular Tags</div>
        <Populattagss popularetags={popularetags} />
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
