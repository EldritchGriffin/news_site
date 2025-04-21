import React from 'react'

export default function trending() {
  return (
    <>
    <div className='w-full max-w-screen-xl'>
    <section className="container  mx-auto px-4 py-6">
        <h2 className="text-4xl font-bold mb-4">TRENDING TOPICS</h2>
        <div className="flex flex-wrap gap-2">
          {["Lorem Ipsum", "Ukraine Conflict", "Popular belief", "Standard chunk"].map((tag, i) => (
            <span key={i} className="px-3 py-1 text-sm rounded-full bg-gray-200 hover:bg-gray-800 hover:text-white cursor-pointer transition duration-200 ease-in-out">
              {tag}
            </span>
          ))}
        </div>
      </section>
    </div>
    </>
  )
}
