// 'use client'

import Bubbletext from "../(components)/bubbletext";
import { FiChevronLeft } from 'react-icons/fi';
import { FiChevronRight } from 'react-icons/fi';

export default async function Page({ params, }: { params: Promise<{ id: string }> }) {
  const { id } = await params;
  return(
    <main className="w-full">

      <div className="flex gap-1 text-[16px] font-normal text-[#6c757d] ">
            <span  className="text-[#d42a23]">
              Home
            </span>
            <span>
              /
            </span>
            <span>
              {id}
            </span>
      </div>
      <div className="relative  w-full flex justify-between ">
        <div className="mb-2">

          <Bubbletext _text={id} _width={"135px"}/>
        </div>

          <div className="flex flex-row justify-end items-end gap-2  border-amber-800 w-40">
            <div className=" w-fit">
            <FiChevronLeft  className=" w-[30px] h-[30px] border-2 border-[#cfcfcf]" />
            </div>
            <div className=" w-fit">
            <FiChevronRight  className=" w-[30px] h-[30px] border-2 border-[#cfcfcf]" />
            </div>
          </div>
</div>

    
    </main>  
  )
}
