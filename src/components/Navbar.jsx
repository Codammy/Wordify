/* eslint-disable no-unused-vars */
// import React from 'react'
// import logo from '../assets/images/logo.png'
// import SlideMenu from './SlideMenu'

// const Navbar = () => {
//     return (
//         <div className='flex justify-center md:gap-72 flex-wrap items-center mt-4 md:mt-9'>
//             <div>
//                 <img src={logo} alt="Logo" className='w-28 md:w-32 md:block hidden' />
//             </div>
//             <nav className='flex'>
//                 <ul className="navs flex lg:flex hidden gap-14">
//                     <li>
//                         <a
//                             href="/"
//                             className="relative text-gray-800 hover:text-black active:text-black py-2"
//                         >
//                             Home
//                             <span className="absolute bottom-0 left-0 w-full h-[2px] bg-red-500 transform scale-x-0 origin-left transition-all duration-300 ease-out hover:scale-x-100"></span>
//                         </a>
//                     </li>
//                     <li>
//                         <a
//                             href="/"
//                             className="relative text-gray-800 hover:text-black py-2"
//                         >
//                             About
//                             <span className="absolute bottom-0 left-0 w-full h-[2px] bg-red-500 transform scale-x-0 origin-left transition-all duration-300 ease-out hover:scale-x-100"></span>
//                         </a>
//                     </li>
//                     <li>
//                         <a
//                             href="/"
//                             className="relative text-gray-800 hover:text-black py-2"
//                         >
//                             Support
//                             <span className="absolute bottom-0 left-0 w-full h-[2px] bg-red-500 transform scale-x-0 origin-left transition-all duration-300 ease-out hover:scale-x-100"></span>
//                         </a>
//                     </li>
//                     <li>
//                         <a
//                             href="/"
//                             className="relative text-gray-800 hover:text-black py-2"
//                         >
//                             For Artists
//                             <span className="absolute bottom-0 left-0 w-full h-[2px] bg-red-500 transform scale-x-0 origin-left transition-all duration-300 ease-out hover:scale-x-100"></span>
//                         </a>
//                     </li>
//                 </ul>
//             </nav>

//             <div className='download-btn lg:block hidden'>
//                 <a
//                     href="/"
//                     className='text-white p-2 px-4 ml-5 rounded-lg font-light hover:bg-red-700' style={{backgroundColor: '#cf0001'}}>
//                     Download
//                 </a>
//             </div>


//             <div className="flex items-center justify-between lg:block gap-40 md:hidden">
//                 <img src={logo} alt="Wordify" className='w-28'/>
//                 <SlideMenu />
//             </div>
//         </div>
//     )
// }

// export default Navbar



// import logo from '../assets/images/logo.png'
// import React, { useState } from 'react';
// import { Menu, X } from 'lucide-react';

// const Navbar = () => {
//   const [isOpen, setIsOpen] = useState(false);

//   const menuItems = [
//     { title: 'Home', active: true },
//     { title: 'About', active: false },
//     { title: 'Support', active: false },
//     { title: 'For Artists', active: false },
//   ];

//   return (
//     <div className="">
//       <div className="max-w-7xl mx-auto px-4 sm:px-6">
//         <div className="flex justify-center gap-52 items-center py-4">
//           {/* Logo */}
//           <div className="flex items-center">
//             <img
//               src={logo}
//               alt="Wordify"
//               className="h-8 w-auto"
//             />
//           </div>

//           {/* Desktop Navigation */}
//           <nav className="hidden md:flex items-center justify-center gap-11 space-x-8">
//             {menuItems.map((item, index) => (
//               <a
//                 key={index}
//                 href="#item"
//                 className={`text-sm ${
//                   item.active
//                     ? 'text-red-500 border-b-2 border-red-500'
//                     : 'text-gray-700 hover:text-gray-900'
//                 }`}
//               >
//                 {item.title}
//               </a>
//             ))}
//             <button className="bg-red-500 text-white px-6 py-2 rounded-full text-sm hover:bg-red-600 transition-colors">
//               Download
//             </button>
//           </nav>

//           {/* Mobile Menu Button */}
//           <div className="md:hidden">
//             <button
//               onClick={() => setIsOpen(true)}
//               className="p-2"
//               aria-label="Open menu"
//             >
//               <Menu className="w-8 h-8" />
//             </button>
//           </div>

//           {/* Mobile Menu Overlay */}
//           {isOpen && (
//             <div
//               className="fixed inset-0 bg-black bg-opacity-50 transition-opacity z-40"
//               onClick={() => setIsOpen(false)}
//             />
//           )}

//           {/* Mobile Slide-out Menu */}
//           <div
//             className={`fixed top-0 right-0 w-80 h-full bg-white z-50 transform transition-transform duration-300 ease-in-out ${
//               isOpen ? 'translate-x-0' : 'translate-x-full'
//             }`}
//           >
//             {/* Mobile Menu Navbar */}
//             <div className="flex justify-between items-center p-4 border-b">
//               <div className="text-lg font-medium">Menu</div>
//               <button
//                 onClick={() => setIsOpen(false)}
//                 className="p-2 hover:bg-gray-100 rounded-lg"
//                 aria-label="Close menu"
//               >
//                 <X className="w-6 h-6" />
//               </button>
//             </div>

//             {/* Mobile Menu Items */}
//             <nav className="py-2">
//               {menuItems.map((item, index) => (
//                 <div
//                   key={index}
//                   className="border-b border-gray-100 last:border-b-0"
//                 >
//                   <a
//                     href="#"
//                     className={`block px-6 py-4 text-sm ${
//                       item.active ? 'text-red-500' : 'text-gray-900'
//                     } hover:bg-gray-50`}
//                   >
//                     {item.title}
//                   </a>
//                 </div>
//               ))}
//             </nav>
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default Navbar;




import logo from '../assets/images/logo.png';
import React, { useState, useEffect } from 'react';
import { Menu, X } from 'lucide-react';
import { Link } from 'react-scroll';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [activeSection, setActiveSection] = useState('hero');
  const [scrolled, setScrolled] = useState(false);

  const navItems = [
    { title: 'Home', id: 'nav' },
    { title: 'About', id: 'about' },
    { title: 'Support', id: 'support' },
    { title: 'For Artists', id: 'hero' },
 
  ];

  // Add shadow to navbar after scrolling
  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 0); // Add shadow when scrolled down
    };

    window.addEventListener('scroll', handleScroll);

    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Track active section based on scroll position
  useEffect(() => {
    const handleScroll = () => {
      const sectionOffsets = navItems.map(item => ({
        id: item.id,
        offsetTop: document.getElementById(item.id)?.offsetTop || 0,
      }));

      const currentSection = sectionOffsets.find((section, index) => {
        const nextSection = sectionOffsets[index + 1];
        const scrollTop = window.scrollY + 80; // Adjust for header height
        return (
          scrollTop >= section.offsetTop &&
          (!nextSection || scrollTop < nextSection.offsetTop)
        );
      });

      if (currentSection && currentSection.id !== activeSection) {
        setActiveSection(currentSection.id);
      }
    };

    window.addEventListener('scroll', handleScroll);

    return () => window.removeEventListener('scroll', handleScroll);
  }, [activeSection]);

  return (
    <div
      className={`w-full px-4 py-4 md:pt-8 fixed top-0 left-0 bg-white z-50 transition-shadow ${
        scrolled ? 'shadow-lg' : ''
      }`}
    >
      <div className="max-w-7xl mx-auto flex items-center justify-between">
        {/* Logo */}
        <div className="flex items-center">
          <img src={logo} alt="Wordify" className="h-8 w-auto" />
        </div>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex items-center absolute left-1/2 md:gap-11 -translate-x-1/2">
          {navItems.map((item, index) => (
            <Link
              key={index}
              to={item.id}
              smooth={true}
              duration={500}
              className={`px-4 py-2 text-sm cursor-pointer ${
                activeSection === item.id
                  ? 'text-red-500 border-b-2 border-red-500'
                  : 'text-gray-600 hover:text-gray-900'
              }`}
            >
              {item.title}
            </Link>
          ))}
        </nav>

        {/* Download Button (Desktop) */}
        <div className="hidden md:block">
          <button
            className="text-white px-6 py-2 rounded-lg text-sm hover:bg-red-600 transition-colors"
            style={{ backgroundColor: '#cf0001' }}
          >
            Download
          </button>
        </div>

        {/* Mobile Menu Button */}
        <button
          onClick={() => setIsOpen(true)}
          className="md:hidden p-2"
          aria-label="Open menu"
        >
          <Menu className="w-8 h-8" />
        </button>

        {/* Mobile Menu Overlay */}
        {isOpen && (
          <div
            className="fixed inset-0 bg-black bg-opacity-50 transition-opacity z-40 md:hidden"
            onClick={() => setIsOpen(false)}
          />
        )}

        {/* Mobile Slide-out Menu */}
        <div
          className={`fixed top-0 right-0 w-64 h-full bg-white z-50 transform transition-transform duration-300 ease-in-out md:hidden ${
            isOpen ? 'translate-x-0' : 'translate-x-full'
          }`}
        >
          {/* Menu Navbar */}
          <div className="flex justify-between items-center p-4 border-b">
            <div className="text-lg font-medium"></div>
            <button
              onClick={() => setIsOpen(false)}
              className="p-2 hover:bg-gray-100 rounded-lg"
              aria-label="Close menu"
            >
              <X className="w-6 h-6" />
            </button>
          </div>

          {/* Mobile Menu Items */}
          <nav className="py-2 text-center">
            {navItems.map((item, index) => (
              <Link
                key={index}
                to={item.id}
                smooth={true}
                duration={500}
                className={`block px-6 py-4 text-sm ${
                  activeSection === item.id ? 'text-red-500' : 'text-gray-900'
                } hover:bg-gray-50`}
                onClick={() => setIsOpen(false)} // Close menu on link click
              >
                {item.title}
              </Link>
            ))}
          </nav>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
