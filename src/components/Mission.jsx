/* eslint-disable no-unused-vars */
import React from 'react';
import image3 from '../assets/images/image 3.png'
import image4 from '../assets/images/image 4.png'
import image5 from '../assets/images/image 5.png'

const Mission = () => {
  const missions = [
    {
      text: "To penetrate the darkness in the world and shine the Light of Jesus.",
      image: { image3 },
      alt: "Light shining in darkness"
    },
    {
      text: "To amplify the Word of God coming from the mouth of His servants, to all men in all the nations of the world.",
      image: { image4 },
      alt: "Diverse group of people"
    },
    {
      text: "To invade the digital space with the name of Jesus; represented accurately",
      image: { image5 },
      alt: "Digital connection illustration"
    }
  ];

  return (
    <div>
      {/* Mission Statement Section */}
      <section className="bg-gray-50 py-16">
        <div className="max-w-7xl mx-auto px-4">
          <div className="text-center mb-16 relative">
            <h2 className="text-4xl font-bold mb-2">Mission Statement</h2>
            {/* Curved underline SVG */}
            <svg
              className="absolute left-1/2 -translate-x-1/2 -bottom-2"
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



          <div className='flex md:flex-row flex-col gap-20'>
            {/* Name cards */}
            <div className='flex flex-col max-w-sm shadow-md rounded-3xl bg-white-500'>
              <p className="text-gray-700 p-4 pb-2">
                To amplify the Word of God coming from the mouth of His servants, to all men
                in all the nations of the world.
              </p>
              <div className="p-2">
                <img
                  src={image3}
                  alt="Jesus in light"
                  className="rounded-2xl w-full h-48 object-cover"
                />
              </div>
            </div>

            <div className='flex flex-col max-w-sm shadow-md rounded-3xl bg-white-500'>
              <p className="text-gray-700 p-4 pb-2">
                To amplify the Word of God coming from the mouth of His servants, to all men
                in all the nations of the world.
              </p>
              <div className="p-2">
                <img
                  src={image4}
                  alt="Jesus in light"
                  className="rounded-2xl w-full h-48 object-cover"
                />
              </div>
            </div>

            <div className='flex flex-col max-w-sm shadow-md rounded-3xl bg-white-500'>
              <p className="text-gray-700 p-4 pb-2">
                To amplify the Word of God coming from the mouth of His servants, to all men
                in all the nations of the world.
              </p>
              <div className="p-2">
                <img
                  src={image5}
                  alt="Jesus in light"
                  className="rounded-2xl w-full h-48 object-cover"
                />
              </div>
            </div>
          </div>


        </div>

      </section>

      {/* Join Community Section */}
      
    </div>
  );
};

export default Mission;