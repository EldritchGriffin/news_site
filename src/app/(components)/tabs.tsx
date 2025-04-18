'use client';
import React, { useState } from 'react';
import CardPost from './cardPost';

export default function Tabs({
    sportsData,
    worldData,
  lifestyleData,
  businessData,
}: {
    sportsData: any;
    worldData: any;
  lifestyleData: any;
  businessData: any;
}) {
  const [activeTab, setActiveTab] = useState('sports');



  // Ensure category data exists and has a `data` property
  const filteredPosts = (() => {
    switch (activeTab) {
      case 'sports':
        return sportsData?.data || [];
      case 'world':
        return worldData?.data || [];
      case 'lifestyle':
        return lifestyleData?.data || [];
      case 'business':
        return businessData?.data || [];
      default:
        return [];
    }
  })();

  return (
    <>
      <div className="w-full max-w-screen-xl ">
        <section className="container mx-auto mb-10">
          <div className="flex gap-6 flex-col lg:flex-row justify-between">
            <h2 className="text-xl font-bold mb-4">Main Stories</h2>
            <ul className="flex gap-4 tabs justify-end ">
              {['sports', 'world', 'Lifestyle', 'Business'].map((tab) => (
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
          <div className="grid mt-4 grid-cols-1 md:grid-cols-2 xl:grid-cols-4 gap-2">
            {filteredPosts.slice(0,4).map((post: any, i: number) => (
              <article key={i} className="relative h-[221px]">
                <CardPost
                  title={post.title}
                  imageUrl={process.env.NEXT_PUBLIC_STRAPI_URL + post.banner.url}
                  category={post.Category}
                  author={post.author}
                  date={post.publishedAt}
                />
              </article>
            ))}
          </div>
        </section>
      </div>
    </>
  );
}