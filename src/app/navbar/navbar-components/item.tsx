import React from 'react'

export default function Item(props : {title: string, content: string, banner: string, Category: string}) {
    return (
        <div className="cursor-pointer md:h-[200px] md:w-[200px] lg:h-full lg:w-full flex flex-col gap-2 p-2">
            <img
                className="rounded-sm"
                src={props.banner}
                alt={props.title}
            />
            <p className="bg-black p-1 text-white w-fit text-sm">
                {props.Category}
            </p>
            <section>
                <p className="word-wrap text-[#5d5d5d] text-sm">
                    {props.title}
                </p>
            </section>
        </div>
    )
}