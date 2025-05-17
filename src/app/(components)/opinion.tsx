// components/Card.tsx
import { MessageCircle } from 'lucide-react';

interface Banner {
  id : number,
  url : string,
  alternativeText : string,
  caption : string,
  width : number,
  height : number
}

type CardProps = {
  title: string;
  author: string;
  comments: number;
  avatar: Banner;
};

export default function Card({ title, author, comments, avatar }: CardProps) {
  return (
    <div className="flex justify-between items-center shadow-sm py-6 w-full max-w-xl p-3 hover:shadow-lg">
      <div>
        <h2 className="text-lg font-semibold  mb-3 max-w-xs">{title}</h2>
        <div className="flex items-center space-x-2 text-gray-700">
          <span className="text-sm ">{comments}</span>
        </div>
        <div className="text-sm text-gray-700  mb-2">{'By ' + author}</div>
      </div>
      <img
        src={process.env.NEXT_PUBLIC_STRAPI_URL + avatar.url}
        alt={author}
        className="w-25 h-25 rounded-full object-cover bg-neutral-700 shrink-0"
      />
    </div>
  );
}

