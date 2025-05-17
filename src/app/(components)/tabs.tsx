'use client';
import React, { useState } from 'react';
import CardPostChin from './cardPostChin';
import Bubbletext from './bubble';
import Link from 'next/link';

export default function Tabs({
    politicaData,

}: {
    politicaData: any;
}) {

  return (
    <>
      <div className="w-full max-w-screen-xl ">
        <section className="container mx-auto mb-20 mt-10">
        <div className='flex items-center justify-between'>
        <Bubbletext _text={'Política'} _width="w-[170px] " />
          <Link className="text-sm text-gray-500 text-end hover:text-gray-800 " href={`/categories/${'Política'}`}>
              Ver más
          </Link>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 md:gap-y-12 xl:grid-cols-4 gap-2 mt-6">
            {
              politicaData.map((post: any, i: number) => (
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