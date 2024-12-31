/* eslint-disable no-unused-vars */
// import React from 'react';
// import { ArrowUpRight, Users2, Lightbulb, Shield, Wifi, Anchor } from 'lucide-react';

// const About = () => {
//   const values = [
//     {
//       icon: <ArrowUpRight className="w-6 h-6 text-red-500" />,
//       title: "Spiritual Growth",
//       description: "We are committed to fostering spiritual growth and personal development through its curated collection of sermons."
//     },
//     {
//       icon: <Users2 className="w-6 h-6 text-red-500" />,
//       title: "Inclusivity",
//       description: "Embracing diversity and inclusivity, Wordify welcomes individuals from all walks of life and spiritual backgrounds."
//     },
//     {
//       icon: <Lightbulb className="w-6 h-6 text-red-500" />,
//       title: "Inspiration",
//       description: "Wordify aims to inspire and uplift users by providing access to motivational and thought-provoking content."
//     },
//     {
//       icon: <Shield className="w-6 h-6 text-red-500" />,
//       title: "Authenticity",
//       description: "Wordify values authenticity and integrity, ensuring that all contents is genuine, relevant and impactful."
//     },
//     {
//       icon: <Users2 className="w-6 h-6 text-red-500" />,
//       title: "Community",
//       description: "Wordify fosters a sense of community among its users, encouraging interaction, discussion, and shared learning experiences."
//     },
//     {
//       icon: <Wifi className="w-6 h-6 text-red-500" />,
//       title: "Accessibility",
//       description: "Wordify is committed to making spiritual wisdom accessible to everyone, regardless of geographical location or financial means."
//     },
//     {
//       icon: <Anchor className="w-6 h-6 text-red-500" />,
//       title: "Empowerment",
//       description: "Wordify empowers individuals to take control of their spiritual journey, providing the tools and resources needed for personal growth and transformation."
//     }
//   ];

//   return (
//     <div className="w-full max-w-7xl mx-auto px-4 py-16">
//       {/* Title with underline decoration */}
//       <div className="text-center mb-12">
//         <h2 className="text-3xl font-bold relative inline-block">
//           Our Values
//           <div className="absolute -bottom-2 left-1/2 transform -translate-x-1/2 w-16 h-1 bg-red-500 rounded-full" />
//         </h2>
//       </div>

//       {/* Values Grid */}
//       <div className="bg-gray-50 rounded-3xl p-8">
//         <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
//           {values.slice(0, 6).map((value, index) => (
//             <div key={index} className="p-4 border-b last:border-b-0 md:even:border-l md:odd:border-r-0">
//               <div className="flex items-start gap-4">
//                 <div className="flex-shrink-0">
//                   {value.icon}
//                 </div>
//                 <div>
//                   <h3 className="font-semibold text-xl mb-2">{value.title}</h3>
//                   <p className="text-gray-600 text-sm leading-relaxed">{value.description}</p>
//                 </div>
//               </div>
//             </div>
//           ))}
//         </div>

//         {/* Last item centered and full width */}
//         <div className="mt-8 pt-8 border-t">
//           <div className="max-w-xl mx-auto text-center">
//             <div className="flex flex-col items-center gap-4">
//               {values[6].icon}
//               <h3 className="font-semibold text-xl">{values[6].title}</h3>
//               <p className="text-gray-600 text-sm leading-relaxed">{values[6].description}</p>
//             </div>
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default About;





import React from 'react';
import { ArrowUpRight, Users, Lightbulb, Shield, Rss, Anchor } from 'lucide-react';

const About = () => {
  return (
    <div className="max-w-6xl mx-auto px-4 py-16 mt-24 " id='About'>
      <div className="text-center mb-16 relative">
        <h2 className="text-4xl font-bold mb-2">Our Values</h2>
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
            stroke="#CF0001"
            strokeWidth="3"
            strokeLinecap="round"
          />
        </svg>
      </div>

      <div className="bg-gray-50 rounded-lg">
        {/* Main grid */}
        <div className="relative grid md:grid-cols-2">
          {/* Vertical divider line */}
          <div className="hidden md:block absolute top-0 bottom-0 left-1/2 w-px bg-gray-200 -translate-x-1/2"></div>

          {/* Left column */}
          <div>
            {/* Spiritual Growth */}
            <div className="p-8">
              <ArrowUpRight className="w-6 h-6 text-red-500 mb-4" />
              <h3 className="text-xl font-semibold mb-2">Spiritual Growth</h3>
              <p className="text-gray-600">We are committed to fostering spiritual growth and personal development through its curated collection of sermons.</p>
            </div>
            
            <div className="h-px bg-gray-200" />
            
            {/* Inspiration */}
            <div className="p-8">
              <Lightbulb className="w-6 h-6 text-red-500 mb-4" />
              <h3 className="text-xl font-semibold mb-2">Inspiration</h3>
              <p className="text-gray-600">Wordify aims to inspire and uplift users by providing access to motivational and thought-provoking content.</p>
            </div>
            
            <div className="h-px bg-gray-200" />
            
            {/* Community */}
            <div className="p-8">
              <Users className="w-6 h-6 text-red-500 mb-4" />
              <h3 className="text-xl font-semibold mb-2">Community</h3>
              <p className="text-gray-600">Wordify fosters a sense of community among its users, encouraging interaction, discussion, and shared learning experiences.</p>
            </div>
          </div>

          {/* Right column */}
          <div>
            {/* Inclusivity */}
            <div className="p-8">
              <Users className="w-6 h-6 text-red-500 mb-4" />
              <h3 className="text-xl font-semibold mb-2">Inclusivity</h3>
              <p className="text-gray-600">Embracing diversity and inclusivity, Wordify welcomes individuals from all walks of life and spiritual backgrounds.</p>
            </div>
            
            <div className="h-px bg-gray-200" />
            
            {/* Authenticity */}
            <div className="p-8">
              <Shield className="w-6 h-6 text-red-500 mb-4" />
              <h3 className="text-xl font-semibold mb-2">Authenticity</h3>
              <p className="text-gray-600">Wordify values authenticity and integrity, ensuring that all contents is genuine, relevant and impactful.</p>
            </div>
            
            <div className="h-px bg-gray-200" />
            
            {/* Accessibility */}
            <div className="p-8">
              <Rss className="w-6 h-6 text-red-500 mb-4" />
              <h3 className="text-xl font-semibold mb-2">Accessibility</h3>
              <p className="text-gray-600">Wordify is committed to making spiritual wisdom accessible to everyone, regardless of geographical location or financial means.</p>
            </div>
          </div>
        </div>

        {/* Bottom section - Empowerment */}
        <div className="border-t border-gray-200">
          <div className="p-8 text-center">
            <Anchor className="w-6 h-6 text-red-500 mb-4 mx-auto" />
            <h3 className="text-xl font-semibold mb-2">Empowerment</h3>
            <p className="text-gray-600 max-w-2xl mx-auto">Wordify empowers individuals to take control of their spiritual journey, providing the tools and resources needed for personal growth and transformation.</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;