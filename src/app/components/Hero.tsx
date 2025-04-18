import React from 'react'

export default function Hero() {
  return (
    <>
    <div className="w-full max-w-screen-xl">

       <section className="container mx-auto px-4 py-6">
  <h2 className="text-xl font-bold mb-4">Main Stories</h2>
  <div className="flex flex-col lg:flex-row gap-2">
    {/* Main article taking 60% width */}
    <article className="lg:w-[60%] relative h-96 bg-black text-white p-6 flex flex-col justify-end">
      {/* Main Story Content */}
    </article>
    
    {/* Secondary stories taking remaining 40% width */}
    <div className="lg:w-2/5 grid grid-cols-2 gap-2">
      {[1, 2, 3, 4].map((_, i) => (
        <article key={i} className="bg-black p-3">
          {/* Secondary Story Content */}
        </article>
      ))}
    </div>
  </div>
</section>
        <section className="container mx-auto px-4 py-6">
        <h2 className="text-xl font-bold mb-4">Main Stories</h2>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-2">
          {[...Array(4)].map((_, i) => (
              <article key={i} className="aspect-square bg-black p-4 shadow flex flex-col justify-end">
            </article>
          ))}
        </div>
      </section>
          </div>
    </>
  )
}
