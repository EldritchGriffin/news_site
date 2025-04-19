import React from 'react'

export default function page() {
  return (
    <>
    <div className='w-full p-6'>
      <section className=" max-w-screen-xl mx-auto mt-10 mb-20 ">
        <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-9'>
        {Array(9).fill(null).map((_:any, i:number) => (
          <article key={i} className="relative">
            <img
              className=""
              src="/protest.jpg"
              alt="Video Thumbnail"
            />
            <p className="bg-black p-1 text-white w-fit text-sm mt-2">
              Category Name
            </p>
            <section>
              <p className="word-wrap text-sm">
                Video Title {i + 1}
              </p>
            </section>
          </article>
        ))}
        </div>
      </section>
    </div>
    </>
  )
}
