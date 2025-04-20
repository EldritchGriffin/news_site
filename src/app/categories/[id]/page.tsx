'use client'

import Bubbletext from '@/app/(components)/bubble';
import { FiChevronLeft } from 'react-icons/fi';
import { FiChevronRight } from 'react-icons/fi';
import { VscTriangleDown } from "react-icons/vsc";
import { TfiReload } from "react-icons/tfi";
import { usePathname, useSearchParams } from 'next/navigation'
import { useEffect, useState } from 'react';
import Breadcrumb from '@/app/(components)/breadcrumb';

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

function decodeSpaces(str: string) {
  return str.replace(/%20/g, ' ');
}

export default  function Page({ params, }: { params: Promise<{ id: string }> }) {
  const [path, setPath] = useState<string>("");
  const [id, setId] = useState<string>("");
  const Postslist = ["" , "", "", "", "", "", ""];
  const pathname = usePathname();

  useEffect(()=> {
    const currentPath = pathname.split('/');
    if (currentPath.length > 0)
      {
        setPath(currentPath[1]);
        setId(decodeSpaces(currentPath[2]));
      }
  },[]);
  return(
    <main className=" flex flex-col  w-full  max-w-screen-xl justify-center px-10 py-6  mx-auto">
      <Breadcrumb />
      <div className="relative  w-full flex justify-between mb-5">
              <div className="mb-2">
                <Bubbletext _text={id} _width={"135px"}/>
              </div>
      </div>

      <div className="w-full bg-pink-500 h-96 mb-14"></div>

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
              Postslist.map((el, index)=>(
                <div key={index} className="w-full h-[300px] md:w-[100%] bg-pink-400"></div>
              ))
            )}
          </div>

          <button className="bg-black text-white px-3 py-2 flex flex-row font-[Baskerville] gap-2 w-fit items-center" ><TfiReload /> Load more</button>
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
