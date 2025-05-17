'use client';
import React, { useState } from 'react';
import CardPostChin from './cardPostChin';
import Bubbletext from './bubble';

export default function Tabs({
    politicaData,
    economiaData,
    internacionalData,

}: {
    politicaData: any;
    economiaData: any;
    internacionalData: any;
}) {
  const [activeTab, setActiveTab] = useState('Política');



  // Ensure category data exists and has a `data` property
  const filteredPosts = (() => {
    switch (activeTab) {
      case 'Política':
        return politicaData || [];
      case 'Economía':
        return economiaData || [];
      case 'Internacional':
        return internacionalData || [];
      case 'Cultura y Ciencia':
      default:
        return [];
    }
  })();

    console.log("======>", politicaData)
  return (
    <>
      <div className="w-full max-w-screen-xl ">
        <section className="container mx-auto mb-20 mt-10">
          <div className="flex gap-6 flex-col lg:flex-row justify-between">
            <Bubbletext _text='Main Stories' _width='w-[140px]' />
            <ul className="flex gap-4 tabs justify-end ">
              {['Política', 'Economía', 'Internacional'].map((tab) => (
                <li key={tab}>
                  <button
                    className={`text-sm ${
                      activeTab === tab ? 'text-gray-800 font-bold' : 'text-gray-500'
                    } hover:text-gray-800`}
                    onClick={() => setActiveTab(tab)}
                  >
                    {tab}
                  </button>
                </li>
              ))}
            </ul>
        </div>
          <div className="grid grid-cols-1 md:grid-cols-2 md:gap-y-12 xl:grid-cols-4 gap-2 mt-6">
            {filteredPosts.slice(0,4).map((post: any, i: number) => (
              <article key={i} className="relative">
                <CardPostChin
                  title={post.title}
                  imageUrl={process.env.NEXT_PUBLIC_STRAPI_URL + post.banner.url}
                  category={post.category}
                  author={post.author}
                  date={post.publishedAt}
                  documentId={post.documentId}
                />
              </article>
            ))}
          </div>
        </section>
      </div>
    </>
  );
}