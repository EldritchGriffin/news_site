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



function Populattagss() {
  return (
    <>
    <div className='w-full max-w-screen-xl'>
    <section className="container  mx-auto  py-6">
        <div className="flex flex-wrap gap-2">
          {["Politics", "Sports", " Entertainment ", " Business "].map((tag, i) => (
            <span key={i} className="px-3 py-1 text-sm rounded-full bg-gray-200">
              {tag}
            </span>
          ))}
        </div>
      </section>
    </div>
    </>
  )
}

export default   function Page({ params, }: { params: Promise<{ id: string }> }) {

  const [current_categotie,setCurrent_categotie] = useState<any>("");
  const [categoriecontent,setCategoriecontent] = useState<any>("");
  const [LatesstContent,setLatesstContent] = useState<any>("");
  const [postspaginationcount, setPostspaginationcount] = useState<number>(1);
  
  const reloadcontent = async () => {
    console.log(postspaginationcount);
    setPostspaginationcount((prev) => prev + 1);
  };
  
  useEffect(() => {
    
    const fetchallData = async () => {
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

      <div className="w-full bg-pink-500 h-96 mb-14">
        <SwiperPosts posts={LatesstContent?.data} />
      </div>

      <div className=" flex flex-row justify-between  ">
        <h2 className="font-full  text-center flex items-center justify-center font-medium font-[Baskerville]" 
        style={{ fontSize: `calc(1.325rem + 0.9vw)` }}

        > You May Like </h2>
        <button className="bg-black h-fit text-white py-[6px] px-[12px] flex flex-row font-[Baskerville] gap-1" > Latest Post <VscTriangleDown /> </button>
      </div>
      <div className="lg:flex lg:flex-row lg:justify-between lg:w-full  lg:gap-10">

      <div className="lg:w-full">

          <div className="w-full flex flex-col gap-[24px]  my-[30px] md:grid md:grid-cols-2 lg:mt-0 ">
            {(
              categoriecontent?.data?.map((post: any, index: number)=>(
                <div key={index} className="w-full h-[300px] md:w-[100%] bg-pink-400">
                 {categoriecontent?.data?.length > 0 && (
                    <CardPost
                      title={categoriecontent.data[0]?.title || "Untitled"}
                      imageUrl={
                        process.env.NEXT_PUBLIC_STRAPI_URL +
                        categoriecontent.data[0].banner.url 
                      }
                      category={categoriecontent.data[0]?.category || "Uncategorized"}
                      author={categoriecontent.data[0]?.author || "Unknown Author"}
                      date={categoriecontent.data[0]?.publishedAt || "Unknown Date"}
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
