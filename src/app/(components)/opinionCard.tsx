import React from 'react'
import { styleText } from '../(utilities)/helperFunctions';

interface Props {
  title: string;
  avatar: string;
  content: string;
  author: string;
}


export default function OpinionCard({ title, content, author, avatar }: Props) {
  return (
    <div className="flex flex-row justify-between border shadow-lg overflow-hidden mb-6 hover:shadow-2xl transition-shadow duration-200">
      {/* Text section */}
      <div className="flex-1 p-6">
        <h2 className="text-2xl font-semibold mb-2">{title}</h2>
        <p className="text-gray-700 mb-4">{styleText(content, 42)}</p>
        <p className="text-sm text-gray-500">
          By <span className="font-medium text-gray-800">{author}</span>
        </p>
      </div>

      {/* Image section */}
      <div className="md:w-48 overflow-hidden">
        <img
          src={avatar}
          alt={title}
          className="w-fit h-fit object-fit p-4 max-w-[190px] max-h-[190px] rounded-full"
        />
      </div>
    </div>
  )
}
