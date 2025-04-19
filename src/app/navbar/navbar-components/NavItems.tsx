import React from 'react'

export default function NavItems(props : {title: string, content: string, banner: string, Category: string}) {
  return (
      <div className="cursor-pointer h-full w-[450] flex flex-col gap-4 p-2 ">
            <img
                className="h-[180px] w-full object-cover "
                src={props.banner}
                alt={props.title}
                />
            <p className="bg-black p-1 text-white w-fit rounded-sm text-sm ">
                {props.Category}
            </p>
            <section>
                <p className="word-wrap text-[#5d5d5d] text-sm w-full h-full">
                    {props.title}
                </p>
            </section>
    </div>
  )
}
