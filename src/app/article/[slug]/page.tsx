// app/(blog)/[slug]/page.tsx
import React from 'react'
import Markdown from 'react-markdown'
import { getPostByDocumentId, translateBatchedText } from '@/app/(handlers)/requestHandlers';
import CardPost from '@/app/(components)/cardPost';
import { FaFacebookF } from "react-icons/fa";
import { RiTwitterXLine } from "react-icons/ri";
import SocialShareButtons from '@/app/(components)/socials';
import rehypeRaw from 'rehype-raw'
import LanguageSelector from '@/app/(components)/languageSelector';

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
    params: Promise<{ slug: string, lang: string
    }>,
    searchParams?: { [key: string]: string | string[] | undefined }
}) {
    const slug = (await params).slug;
    const targetLang = (await params).lang
    const post = await getPostByDocumentId(slug);
    let content = post.content;
    let title = post.title;
    
    console.log("this is the post", post);
    return (
        <main className="text-gray-900 flex flex-col items-center w-full ">
            <div className='max-w-screen-xl w-full justify-center items-center flex flex-col'>
                {/* Add language selector */}
                <div className="self-end mt-5 mb-4">
                    <LanguageSelector currentLang={targetLang} />
                </div>
                
                <div className='w-full h-[500px] mb-10'>
                    <CardPost
                        title={title}
                        imageUrl={process.env.NEXT_PUBLIC_STRAPI_URL + post.banner.url}
                        category={post.category}
                        author={post.author}
                        date={post.publishedAt}
                        documentId={post.documentId}
                    >
                    </CardPost>
                </div>
                <div className='prose lg:prose-lg'>
                    <Markdown
                       rehypePlugins={[rehypeRaw]}>
                        {content}
                    </Markdown>
                    <h5 className='text-red-600 text-sm font-semibold mt-5'>
                        {`Published at : ${new Date(post.publishedAt).toLocaleDateString('en-US', {
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
                        title={title} 
                    ></SocialShareButtons>
                </div>
            </div>
        </main>
    )
}