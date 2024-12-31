import React from 'react';
import logoAlt from '../assets/images/logoAlt.png'
import X from '../assets/images/icons/x.png'
import 'boxicons/css/boxicons.min.css';
const Footer = () => {
    return (
        <div className="w-full bg-white p-8">
            {/* Notification */}


            {/* Footer Content */}
            <div className="max-w-8xl mx-auto mt-8">
                {/* <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-12 md: ">
                 
                    <div className="text-center md:text-left">
                        <h3 className="font-semibold mb-4">Organization</h3>
                        <div className="space-y-3">
                            <p><a href="#" className="text-gray-500 hover:text-gray-700">Contact Us</a></p>
                            <p><a href="#" className="text-gray-500 hover:text-gray-700">Work With Us</a></p>
                            <p><a href="#" className="text-gray-500 hover:text-gray-700">Blog & News</a></p>
                        </div>
                    </div>

                    
                    <div className="text-center md:text-left">
                        <h3 className="font-semibold mb-4">Resources</h3>
                        <div className="space-y-3">
                            <p><a href="#" className="text-gray-500 hover:text-gray-700">Documentation</a></p>
                            <p><a href="#" className="text-gray-500 hover:text-gray-700">Papers</a></p>
                            <p><a href="#" className="text-gray-500 hover:text-gray-700">Brand Guidelines</a></p>
                        </div>
                    </div>

                    
                    <div className="text-center md:text-left">
                        <h3 className="font-semibold mb-4">Legal</h3>
                        <div className="space-y-3">
                            <p><a href="#" className="text-gray-500 hover:text-gray-700">Terms of Service</a></p>
                            <p><a href="#" className="text-gray-500 hover:text-gray-700">Privacy Policy</a></p>
                            <p><a href="#" className="text-gray-500 hover:text-gray-700">Cookies Policy</a></p>
                        </div>
                    </div> */}

                <div className='flex md:gap-96 flex-col md:flex-row gap-11 justify-center items-center'>
                    <div className='flex flex-col md:flex-row gap-20'>
                        <div className="text-center md:text-left">
                            <h3 className="font-semibold mb-4">Organization</h3>
                            <div className="space-y-3">
                                <p><a href="#" className="text-gray-500 hover:text-gray-700">Contact Us</a></p>
                                <p><a href="#" className="text-gray-500 hover:text-gray-700">Work With Us</a></p>
                                <p><a href="#" className="text-gray-500 hover:text-gray-700">Blog & News</a></p>
                            </div>
                        </div>


                        <div className="text-center md:text-left">
                            <h3 className="font-semibold mb-4">Resources</h3>
                            <div className="space-y-3">
                                <p><a href="#" className="text-gray-500 hover:text-gray-700">Documentation</a></p>
                                <p><a href="#" className="text-gray-500 hover:text-gray-700">Papers</a></p>
                                <p><a href="#" className="text-gray-500 hover:text-gray-700">Brand Guidelines</a></p>
                            </div>
                        </div>


                        <div className="text-center md:text-left">
                            <h3 className="font-semibold mb-4">Legal</h3>
                            <div className="space-y-3">
                                <p><a href="#" className="text-gray-500 hover:text-gray-700">Terms of Service</a></p>
                                <p><a href="#" className="text-gray-500 hover:text-gray-700">Privacy Policy</a></p>
                                <p><a href="#" className="text-gray-500 hover:text-gray-700">Cookies Policy</a></p>
                            </div>
                        </div>
                    </div>

                    <div className='rounded-3xl flex flex-col gap-4 justify-center items-center md:ml-10'
                        style={{ backgroundColor: '#f2f2f2', width: '330px', height: '150px', border: '1px solid #a7a7a7', }}
                    >
                        {/* Name & logo*/}
                        <div className='flex items-center gap-40 justify-center'>
                            <div className='flex items-center' style={{ gap: '7px' }}>
                                <div>
                                    <img src={logoAlt} alt="Logo" className='w-8' />
                                </div>
                                <div style={{ lineHeight: '10px' }}>
                                    <h4 className="text-medium" style={{ fontWeight: '' }}>Wordify</h4>
                                    <p className='opacity-50 text-xs'>@wordifyapp</p>
                                </div>
                            </div>

                            <div>
                                <img src={X} alt="X logo" />
                            </div>
                        </div>

                        {/* Message */}
                        <div >
                            <p className='opacity-70' style={{ fontSize: '15px' }}>
                                We&#39;ve just anounced new features that <br /> would help you increase your experience <br /> using Wordify!
                            </p>
                        </div>
                    </div>
                </div>

                {/* Follow Us */}
                <div className="text-center mb-8 mt-11 flex flex-col md:flex-row gap-2 justify-center items-center">
                    <h3 className="font-semibold">Follow Us</h3>
                    <div className="flex justify-center gap-2">
                        <a href="#"><i className='bx bxl-facebook p-2 border rounded-full' style={{backgroundColor: '#f2f2f2', border: '1px solid #a7a7a7',}}></i></a>
                        <a href="#"><i className='bx bxl-instagram p-2 border rounded-full' style={{backgroundColor: '#f2f2f2', border: '1px solid #a7a7a7',}}></i></a>
                    </div>
                    <div className='flex justify-center gap-2'>
                        <a href="#"><i className='bx bxl-linkedin p-2 border rounded-full' style={{backgroundColor: '#f2f2f2', border: '1px solid #a7a7a7',}}></i></a>
                        <a href="#"><i className='bx bxl-twitter p-2 border rounded-full' style={{backgroundColor: '#f2f2f2', border: '1px solid #a7a7a7',}}></i></a>
                    </div>
                </div>
                <hr />
                {/* Copyright */}
                <div className="flex items-center justify-center text-sm text-gray-500 mt-6">

                    <img src={logoAlt} alt="Wordify" className="w-5 h-5 mr-2" />
                    <span>Wordify, 2024. All rights reserved</span>
                </div>
            </div>
        </div>
    );
};

export default Footer;