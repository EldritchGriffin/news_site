'use client'

import { usePathname } from 'next/navigation'
import Link from 'next/link'

const Postslist = ["article", "categories"];

function decodeSpaces(str: string) {
    return str.replace(/%20/g, ' ');
  }

export default function Breadcrumbs() {
  const pathname = usePathname(); 
  const segments = pathname.split('/').filter(Boolean);

  const crumbs = segments.map((segment, index) => {
    segment = decodeSpaces(segment);
    const href = '/' + segments.slice(0, index + 1).join('/');
    const isLast = index === segments.length - 1;
    const result = Postslist.find(( thatone ) => thatone === segment);
    return (
      <li key={index} className="flex items-center gap-1">
        {!result ?  (
          <Link href={href} className="text-red-600 hover:underline capitalize">
             <span className="">{segment}</span>
          </Link>
        ) : (
          <span className="text-gray-600 font-semibold capitalize">{segment}</span>
        )}
        {!isLast && <span className="text-gray-400 px-1">/</span>}
      </li>
    );
  });

  return (
    <div className="flex gap-1 text-[16px] font-normal text-[#6c757d] mb-5">
        <ol className="flex flex-row gap-2">
        <Link href="/" className="text-red-600 font-semibold">Home</Link>
        {segments.length > 0 && <span className="text-gray-400 px-1">/</span>}
        {crumbs}
      </ol>
    </div>
  );
}
