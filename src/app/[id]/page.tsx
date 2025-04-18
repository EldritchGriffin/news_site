// 'use client'

import Bubbletext from "../(components)/bubbletext";

export default async function Page({ params, }: { params: Promise<{ id: string }> }) {
  const { id } = await params;
  return(
    <main className="w-full bg-amber-300">

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
      <div className="relative inline-block bg-amber-900 w-full">
        <div className="w-full border-2 flex flex-col gap-4">
          <Bubbletext _text={"JAHAD TRUE KINGjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjj"} _width={145}/>
          <Bubbletext _text={"I ALONE SHALL STAND AND FALL"} _width={500}/>
        </div>
  {/* Triangle (tail) */}
  {/* <div className="absolute left-1/2 bottom-0 translate-y-full -translate-x-1/2 w-0 h-0 border-l-8 border-r-8 border-t-8 border-l-transparent border-r-transparent border-t-blue-500"></div> */}
</div>

    
    </main>  
  )
}
