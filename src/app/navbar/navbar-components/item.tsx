import { styleText } from '@/app/(utilities)/helperFunctions'
import React from 'react'

export default function Item(props : {title: string, content: string, banner: string, Category: string}) {
    return (
        <div className="cursor-pointer w-[180px] ">
            <div className="flex flex-col gap-1  p-2 ">
                <img src={props.banner} alt="Banner" className="w-full h-32 object-cover pb-2 " />
                <span className="text-xs p-2 text-white bg-[#d42a23] w-fit">{props.Category}</span>
                <h2 className="text-lg text-black font-bold">{styleText(props.title, 20)}</h2>
            </div>
        </div>
    )
}