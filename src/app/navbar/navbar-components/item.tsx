import { styleText } from '@/app/(utilities)/helperFunctions'
import React from 'react'

export default function Item(props : {title: string, content: string, banner: string, Category: string}) {
    return (
        <div className="cursor-pointer md:w-[200px] h-full lg:w-full flex flex-col gap-2 p-2">
            <img
                className="rounded-sm"
                src={props.banner}
                alt={props.title}
                width={150}
            />
            <p className="bg-[#d42a23] p-1 rounded-sm text-white w-fit text-sm">
                {props.Category}
            </p>
            <section>
                <p className="word-wrap text-[#5d5d5d] text-sm">
                    {styleText(props.title)}
                </p>
            </section>
        </div>
    )
}