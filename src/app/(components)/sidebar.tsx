import React from 'react'
import Bubbletext from './bubble'

export default function sidebar() {
  return (
    <>
    <div className='w-full max-w-screen-xl'>
        <section className="container mx-auto ">
        <Bubbletext _text='Lifestyle' _width='w-[140px]' />
        <div className='grid grid-cols-1 lg:grid-cols-3 gap-6 mt-6'>

        <article className="bg-white p-4 shadow">
          <p className="text-sm text-red-600 mb-1">Author / Dec 05, 2022</p>
          <p className="text-sm">Lorem Ipsum is simply dummy text of the printing and typesetting industry.</p>
        </article>

        <aside className="space-y-4">
          {[1, 2, 3, 4].map((_, i) => (
              <div key={i} className="bg-white p-3 shadow">
              <p className="text-sm">Lorem Ipsum is simply dummy text</p>
              <span className="text-xs text-gray-500">Author Date</span>
            </div>
          ))}
        </aside>
          <div className="bg-gray-300 h-96 flex items-center justify-center">
            <span className="text-sm text-gray-700">Ad Placeholder</span>
          </div>
        </div>
      </section>
    </div>
    </>
  )
}
