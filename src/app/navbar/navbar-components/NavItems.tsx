import React from 'react'

export default function NavItems(props : {title: string, content: string, banner: string, Category: string}) {
  return (
      <div className="cursor-pointer h-[200px] w-[400px] flex flex-col gap-2 p-2">
            <img
                className="rounded-sm"
                src={props.banner}
                alt={props.title}
            />
            <p className="bg-black p-2 text-white w-fit rounded-sm text-sm h-full">
                {props.Category}
            </p>
            <section>
                <p className="word-wrap text-black text-sm w-full h-full">
                    {props.title}
                </p>
            </section>
    </div>
  )
}
