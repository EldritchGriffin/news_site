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



function Populattagss() {
  return (
    <>
    <div className='w-full max-w-screen-xl'>
    <section className="container  mx-auto  py-6">
        <div className="flex flex-wrap gap-2">
          {["Economía", "Sports", " Entertainment ", " Business "].map((tag, i) => (
            <a href={`/categories/${tag}`} key={i} className="px-3 py-1 text-sm rounded-full bg-gray-200">
              {tag}
            </a>
          ))}
        </div>
      </section>
    </div>
    </>
  )
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
  const [categoriecontent,setCategoriecontent] = useState<any>("");
  const [LatesstContent,setLatesstContent] = useState<Item>();
  const [postspaginationcount, setPostspaginationcount] = useState<number>(1);
  
  const reloadcontent = async () => {
    setPostspaginationcount((prev) => prev + 1);
  };
  
  const latestposts = async () => {
    if (!categoriecontent) return;
    try {
      const sortedByDate = [...(categoriecontent?.data || [])].sort(
        (a, b) => {console.log(new Date(b.publishedAt)) ; return new Date(b.publishedAt).getTime() - new Date(a.publishedAt).getTime()}
      );
      
      setCategoriecontent((prev: any) => ({
        ...prev,
        data: sortedByDate,
      }));

    } catch (error) {
      console.error('Fetch error:', error);
    }
  };
  const mostpopular = async () => {
    if (!categoriecontent) return;
    try {
        const sortedByViews = (categoriecontent?.data || []).sort((a: Item, b: Item) => {   return Number(b.views) - Number(a.views)});
        setCategoriecontent((prev: any) => ({
          ...prev,
          data: sortedByViews,
        }));

    } catch (error) {
      console.error('Fetch error:', error);
    }
  };
  const sevendayspopular = async () => {
    if (!categoriecontent) return;
    try {
          const now = new Date();
          const sevenDaysAgo = new Date();
          sevenDaysAgo.setDate(now.getDate() - 7);
        const filteredAndSorted = (categoriecontent?.data || []).filter((post: Item) => new Date(post.publishedAt) >= sevenDaysAgo).sort((a: Item, b: Item) => Number(b.views) - Number(a.views));
        setCategoriecontent((prev: any) => ({
          ...prev,
          data: filteredAndSorted,
        }));

    } catch (error) {
      console.error('Fetch error:', error);
    }
  };
  useEffect(() => {
    
    const fetchallData = async () => {
      if (!current_categotie) return;
      try {
        const pathname = await params
        setCurrent_categotie(pathname.id);
        const res = await axios.get(`/api/strapi/posts?filters[category][$eq]=${decodeURIComponent(current_categotie)}&populate=*`);
        setLatesstContent(res.data);
        
      } catch (error) {
        console.error('Fetch error:', error);
      }
    };
    const fetchlatestData = async () => {
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
          console.log("thats it :", res.data);
          setCategoriecontent((prev: any) => ({
            ...res.data,
            data: [...(prev?.data || []), ...(res.data?.data || [])],
          }));
      } catch (error) {
        console.error('Fetch error:', error);
      }
    };
    fetchallData();
    fetchlatestData();
  }, [current_categotie, postspaginationcount]);
  return(
    <main className=" flex flex-col  w-full  max-w-screen-xl justify-center px-10 py-6  mx-auto">
      <Breadcrumb />
      <div className="relative  w-full flex justify-between mb-5">
              <div className="mb-2">
                <Bubbletext _text={decodeURIComponent(current_categotie)} _width={"135px"}/>
              </div>
      </div>

      <div className="w-full h-96 mb-14">
        <SwiperPosts posts={LatesstContent?.data} />
      </div>

      <div className=" flex flex-row justify-between  ">
        <h2 className="font-full  text-center flex items-center justify-center font-medium font-[Baskerville]" 
        style={{ fontSize: `calc(1.325rem + 0.9vw)` }}

        > You May Like </h2>
        <Menu>
          <MenuButton className="bg-black h-fit text-white py-[6px] px-[12px] flex flex-row font-[Baskerville] gap-1"> Latest Post <VscTriangleDown /> </MenuButton>
          <MenuItems className={"flex flex-col bg-white py-2 border border-gray-300 rounded-md w-[160px]"} anchor="bottom">
            <MenuItem  >
              <span className="text-[16px] text-normal text-[#212529] font-[Baskervville] py-[4px] hover:bg-gray-200 px-[16px]" onClick={latestposts}>
              Latest Post 
              </span>
            </MenuItem>
            <MenuItem>
              <span className="text-[16px] text-normal text-[#212529] font-[Baskervville] py-[4px] hover:bg-gray-200 px-[16px]" onClick={mostpopular}>
              Most popular
              </span>
            </MenuItem>
            <MenuItem>
              <span className="text-[16px] text-normal text-[#212529] font-[Baskervville] py-[4px] hover:bg-gray-200 px-[16px]" onClick={sevendayspopular}>
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
              categoriecontent?.data?.map((post: any, index: number)=>(
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
          </div>

          <button className="bg-black text-white px-3 py-2 flex flex-row font-[Baskerville] gap-2 w-fit items-center" onClick={reloadcontent} ><TfiReload /> Load more</button>
      </div>

      <div className=" lg:w-[200px]">
        <div className="font-[Baskerville] text-[20px]"> Popular Tags</div>
        <Populattagss />
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
