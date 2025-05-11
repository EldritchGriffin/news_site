// components/Card.tsx
import { MessageCircle } from 'lucide-react';

type CardProps = {
  title: string;
  author: string;
  comments: number;
  avatar: string;
};

export default function Card({ title, author, comments, avatar }: CardProps) {
  return (
    <div className="flex justify-between items-center shadow-sm py-6 w-full max-w-xl p-3">
      <div>
        <h2 className="text-lg font-semibold  mb-3 max-w-xs">{title}</h2>
        <div className="text-sm text-gray-700  mb-2">{author}</div>
        <div className="flex items-center space-x-2 text-gray-700">
          <MessageCircle size={20} />
          <span className="text-sm ">{comments}</span>
        </div>
      </div>
      <img
        src={avatar}
        alt={author}
        className="w-25 h-25 rounded-full object-cover bg-neutral-700 shrink-0"
      />
    </div>
  );
}

