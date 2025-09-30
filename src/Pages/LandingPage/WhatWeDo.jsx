import React from 'react'
import image1 from '../../assets/whatwedo1.png'
import image2 from '../../assets/whatwedo2.png'

function WhatWeDo() {
  return (
    <div className='h-screen px-40 py-10 '>
      <div className='space-y-40'>
        <div className='flex grid-cols-2 mt-10 gap-28'>
          <div>
            <img src={image2}  />
          </div>

          <div className='flex flex-col items-start justify-center gap-3'>
            <span className='text-[#4F46E5] text-3xl'>Web & Mobile App Development</span>
            <p>Your web and mobile Apps are pieces of the puzzle to grow your business.
              We use frameworks which tailor content and engagement methods to respond to different intents shown by your potential customers who interact with your business online.
            </p>
            <button className="bg-[#F28D35] hover:bg-orange-500 uppercase cursor-pointer text-white font-semibold px-6 py-2 rounded-md transition-colors duration-300">
              LEARN MORE
            </button>
          </div>
        </div>

        <div className='flex grid-cols-2 gap-28 '>

          <div className='flex flex-col items-start justify-center gap-3'>
            <span className='text-[#4F46E5] text-3xl'>Digital Strategy Consulting</span>
            <p>Your digital strategy should complement the overall marketing strategy of the company.
              In online marketing, each component will never work in isolation and every business needs a different mix.
              We provide a clear concept and strategic overview to find the most efficient model for your business.
            </p>
            <button className="bg-[#F28D35] hover:bg-orange-500 uppercase cursor-pointer text-white font-semibold px-6 py-2 rounded-md transition-colors duration-300">
              LEARN MORE
            </button>
          </div>

          <div>
            <img src={image1} />
          </div>
        </div>
      </div>
    </div>
  )
}

export default WhatWeDo
