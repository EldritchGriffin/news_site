import React from 'react';

interface CardPostProps {
  title: string;
  imageUrl: string;
  category: string;
  author?: string;
  date?: string;
}

const CardPost: React.FC<CardPostProps> = ({ 
  title, 
  imageUrl, 
  category, 
  author, 
  date 
}) => {
  return (
    <div className="relative w-full h-full rounded-lg shadow-md">
      <img src={imageUrl} alt={title} className="w-full h-full object-cover" />
      <div className="absolute inset-0 bg-gradient-to-b from-black/10 to-black/70"></div>
      <div className="absolute bottom-0 left-0 p-5 w-full">
        {category && (
          <div className="inline-block bg-red-600 text-white px-3 py-1 text-sm font-bold mb-3">
            {category}
          </div>
        )}
        <h2 className="text-white text-xl font-bold leading-snug mb-3 drop-shadow-md">
          {title}
        </h2>
        {(author) && (
          <div className="flex items-center text-white/80 text-sm">
            {author && <span className="font-medium">{author}</span>}
          </div>          
        )}
        {(date) && (
          <div className="flex items-center text-white/80 text-sm">
            {date && <span className="font-medium">{new Date(date).toLocaleDateString()}</span>}
          </div>
        )}
      </div>
    </div>
  );
};

export default CardPost;