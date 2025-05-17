'use client'
import { TfiReload } from "react-icons/tfi";
import Breadcrumb from '@/app/(components)/breadcrumb';
import { useEffect, useState } from 'react';
import axios from 'axios';
import OpinionCard from '../(components)/opinionCard';

interface Banner {
  id : number,
  url : string,
  alternativeText : string,
  caption : string,
  width : number,
  height : number
}

interface Opinion {
    id: number;
    title: string;
    avatar: Banner;
    content: string;
    author: string;
}

export default   function Page() {
  const [postspaginationcount, setPostspaginationcount] = useState<number>(1);
  const [opinionsData, setOpinionsData] = useState<Opinion[]>([]);
  const [isLoading, setIsLoading] = useState(true);

  const reloadcontent = async () => {
    setPostspaginationcount((prev) => prev + 1);
  };
  
  console.log('OpinionsData:', opinionsData.length);
  useEffect(() => {
    const fetchData = async () => {
      try {
        if (opinionsData.length)
          setIsLoading(true)
        const response = await axios.get('/api/strapi/Opinions', {
          params: {
            'pagination[page]': postspaginationcount,
            'pagination[pageSize]': 5,
            populate: '*',
          },
        })
        const newOpinions: Opinion[] = response.data.data
  
        setOpinionsData(prev =>
          postspaginationcount === 1
            ? newOpinions
            : [...prev, ...newOpinions]
        )
      } catch (error) {
        console.error('Error fetching data:', error)
      } finally {
        if (isLoading)
        setIsLoading(false)
      }
    }
    fetchData()
  }, [postspaginationcount])
  
  return(
    <main className="w-full max-w-screen-xl mx-auto px-4 py-6">
      <Breadcrumb />
      {/* 1 column on small; lg → 3 columns, content spans 2, ads span 1 */}
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
        {/* Content: span 2 on lg */}
        <section className="lg:col-span-2">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
            {!isLoading && opinionsData?.map((o, index) => (
              <OpinionCard
                key={index}
                title={o.title}
                avatar={process.env.NEXT_PUBLIC_STRAPI_URL + o.avatar.url}
                content={o.content}
                author={o.author}
              />
            ))}
            {!isLoading && opinionsData.length === 0 && (
              <div className="col-span-1 md:col-span-2 h-64 flex items-center justify-center text-gray-400 text-xl border-2 border-amber-400">
                No Posts
              </div>
            )}

            {isLoading  && (
              <div className="col-span-1 md:col-span-2 flex items-center justify-center">
                <svg
                  aria-hidden="true"
                  className="w-12 h-12 text-gray-200 animate-spin fill-[#d42a23]"
                  viewBox="0 0 100 101"
                  xmlns="http://www.w3.org/2000/svg"
                >
                </svg>
              </div>
            )}
          </div>

          {!isLoading && (
            <button
              onClick={reloadcontent}
              className="inline-flex items-center gap-2 px-4 py-2 font-[Baskerville] bg-black text-white hover:bg-white hover:text-black hover:border hover:border-black"
            >
              <TfiReload /> Load more
            </button>
          )}
        </section>

        {/* Sidebar: ads */}
        <aside className="flex flex-col items-center gap-6">
          <div className="w-full max-w-xs h-64 bg-pink-800 text-yellow-400 flex items-center justify-center">
            Ad Placeholder
          </div>
          <div className="w-full max-w-xs h-64 bg-pink-800 text-yellow-400 flex items-center justify-center">
            Ad Placeholder
          </div>
        </aside>
      </div>
    </main>
  )
}
