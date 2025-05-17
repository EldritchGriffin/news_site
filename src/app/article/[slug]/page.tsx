import React from 'react'
import Markdown from 'react-markdown'
import { getPostByDocumentId } from '@/app/(handlers)/requestHandlers';
import CardPost from '@/app/(components)/cardPost';
import { FaFacebookF } from "react-icons/fa";
import { RiTwitterXLine } from "react-icons/ri";
import SocialShareButtons from '@/app/(components)/socials';

function PlaceholderAd() {
    return (
        <div className='w-full h-full bg-gray-300 flex justify-center items-center'>
            <h1 className='text-2xl font-semibold text-gray-500'>Placeholder Ad</h1>
        </div>
    )
}

function Socials() {
    //TODO : replace with actual social media links
    //TODO : change the colors
    return (
        <div className='flex gap-4 my-10'>
            <a href={`https://www.facebook.com`}>
                <button className='text-white w-28 h-10 flex justify-around items-center bg-blue-500 hover:bg-blue-700'>
                    <FaFacebookF />
                    <span className='text-sm font-semibold'>
                        Facebook
                    </span>
                </button>

            </a>
            <a href="https://x.com">
                <button className='text-white w-28 h-10 flex justify-around items-center bg-blue-400 hover:bg-blue-600'>
                    <RiTwitterXLine />
                    <span className='text-sm font-semibold'>
                        Twitter
                    </span>
                </button>
            </a>
        </div>
    )
}

export default async function Page({
    params,
}: {
    params: Promise<{ slug: string }>
}) {
    const slug = (await params).slug;
    const post = await getPostByDocumentId(slug);
    return (
        <main className="text-gray-900 flex flex-col items-center w-full ">
            <div className='max-w-screen-xl w-full justify-center items-center flex flex-col'>
                <div className='w-full h-[500px] mb-10'>
                    <CardPost
                        title={post.data.title}
                        imageUrl={process.env.NEXT_PUBLIC_STRAPI_URL + post.data.banner.url}
                        category={post.data.category}
                        author={post.data.author}
                        date={post.data.publishedAt}
                        documentId={post.data.documentId}
                    >
                    </CardPost>
                </div>
                <div className='prose lg:prose-lg'>
                    <Markdown>
                        {post.data.content}
                    </Markdown>
                    <h5 className='text-red-600 text-sm font-semibold mt-5'>
                        {`Published at : ${new Date(post.data.publishedAt).toLocaleDateString('en-US', {
                            year: 'numeric',
                            month: 'long',
                            day: 'numeric'
                        })}`}
                    </h5>
                    <hr
                        style={{ borderTop: "1px solid lightgrey" }}
                    ></hr>
                    <div className='w-full h-52 my-10'>
                        <PlaceholderAd />
                    </div>
                    <hr
                        style={{ borderTop: "1px solid lightgrey" }}
                    ></hr>
                    Share this article:
                    <SocialShareButtons
                        title={post.data.title}
                    ></SocialShareButtons>
                </div>
            </div>
        </main>
    )
}
