/* eslint-disable no-unused-vars */
import React from 'react'
import communityprayer from '../assets/images/communityprayer.png'

const Support = () => {
  return (
    <div className=" text-white py-16 px-4" style={{ backgroundColor: '#1f1f1f', }}>
        <div className="max-w-7xl mx-auto">
          <div className="flex flex-col md:flex-row items-center justify-between gap-8 md:gap-16">
            {/* Text Content */}
            <div className="w-full md:w-1/2 space-y-6">
              <div className="text-left mb-16 relative">
                <h2 className="text-4xl font-bold mb-2">Join Community</h2>
                {/* Curved underline SVG */}
                <svg
                  className="absolute left-1/4 -translate-x-1/2 -bottom-2"
                  width="120"
                  height="10"
                  viewBox="0 0 120 10"
                  fill="none"
                >
                  <path
                    d="M3 7C20 -1 100 -1 117 7"
                    stroke="#cf0001"
                    strokeWidth="3"
                    strokeLinecap="round"
                  />
                </svg>
              </div>
              <p className="text-gray-300 text-sm md:text-base">
                The scope of Wordify is nothing less than what our Lord Jesus said and is still saying to us: <span className="italic"> &quot; And he said unto them, Go ye into all the world, and preach the gospel to every creature.&quot;</span>
              </p>
              <button className="bg-red-600 text-white px-8 py-2.5 rounded hover:bg-red-700 transition-colors">
                Support
              </button>
            </div>

            {/* Image */}
            <div className="w-full md:w-1/2">
              <div className="rounded-lg overflow-hidden">
                <img
                  src={communityprayer}
                  alt="People joining hands in unity"
                  className="w-full h-auto object-cover rounded-lg"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
  )
}

export default Support
