import React from 'react';
import { styleText } from '../(utilities)/helperFunctions';

interface CardPostProps {
  title: string;
  imageUrl: string;
  category: string;
  author?: string;
  date?: string;
}

const CardPostChin: React.FC<CardPostProps> = ({ 
  title, 
  imageUrl, 
  category, 
  author, 
  date 
}) => {
  return (
    <div className="w-full overflow-hidden shadow-md">
      {/* Image Container with Category Label */}
      <div className="relative">
        <img src={imageUrl} alt={title} className="w-full h-48 object-cover" />
        {category && (
          <div className="absolute bottom-0 left-0 bg-red-600 text-white px-4 py-1 text-sm font-bold">
            {category}
          </div>
        )}
      </div>
      
      {/* Content Below Image */}
      <div className="p-4 bg-white">
        <h2 className="text-gray-900 text-lg font-medium mb-2">
          {title}
        </h2>
        {(author || date) && (
          <div className="flex items-center text-gray-600 text-sm">
            {author && <span className="font-medium">{author}</span>}
            {date && <span className="ml-2 text-gray-500">{date}</span>}
          </div>
        )}
      </div>
    </div>
  );
};

export default CardPostChin;