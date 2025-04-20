'use client'

import React from 'react'

import CardPost from '@/app/(components)/cardPost';
import { getAllFromCategory } from '@/app/(handlers)/requestHandlers';
import { useEffect, useState } from 'react';
import { TfiReload } from "react-icons/tfi";


export default  function Categoriepostswithreload({ current_categotie }: { current_categotie: any }) {

  const Postslist = ["" , "", "", "", "", "", ""];
  const [current,setCurrent] = useState<any>("");
    console.log("RED ONE :", current);
  return (
    <div className="">
         <div className="w-full flex flex-col gap-[24px]  my-[30px] md:grid md:grid-cols-2 lg:mt-0 ">
            {(

              Postslist.map((el, index)=>(
                <div key={index} className="w-full h-[300px] md:w-[100%] bg-pink-400">
                 {current_categotie?.data?.length > 0 && (
                    <CardPost
                      title={current_categotie.data[0]?.title || "Untitled"}
                      imageUrl={
                        process.env.NEXT_PUBLIC_STRAPI_URL +
                        (current_categotie.data[0]?.banner?.url || "/default-image.jpg")
                      }
                      category={current_categotie.data[0]?.category || "Uncategorized"}
                      author={current_categotie.data[0]?.author || "Unknown Author"}
                      date={current_categotie.data[0]?.publishedAt || "Unknown Date"}
                    />
                  )}
                </div>
              ))
            )}
          </div>

          <button className="bg-black text-white px-3 py-2 flex flex-row font-[Baskerville] gap-2 w-fit items-center" onClick={()=> setCurrent("salam")} ><TfiReload /> Load more</button>
    </div>
  )
}
