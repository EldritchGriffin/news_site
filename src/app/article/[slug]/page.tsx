import React from 'react'
import Markdown from 'react-markdown'
import { getPostByDocumentId } from '@/app/(handlers)/requestHandlers';
import CardPost from '@/app/(components)/cardPost';

export default async function Page({
    params,
}: {
    params: Promise<{ slug: string }>
}) {
    const slug = (await params).slug;
    const post = await getPostByDocumentId(slug);
    return (
        <main className="bg-white text-gray-900 flex flex-col items-center w-full">
            <div className='max-w-screen-xl w-full justify-center items-center flex flex-col'>
                <div className='w-full h-[500px] my-10'>
                    <CardPost
                        title={post.data.title}
                        imageUrl={process.env.NEXT_PUBLIC_STRAPI_URL + post.data.banner.url}
                        category={post.data.category}
                        author={post.data.author}
                        date={post.data.publishedAt}
                    >
                    </CardPost>
                </div>
                <div className='w-[90%] prose lg:prose-xl'>
                    <Markdown>
                        {post.data.content}
                    </Markdown>
                </div>
            </div>
        </main>
    )
}
