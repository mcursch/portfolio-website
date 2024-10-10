import React, {useEffect, useRef } from 'react';
export default function Navbar({isBotVisible}) {


    const scrollToPosition = (el) => {
        let x = document.getElementById(el).getBoundingClientRect().top -64
        document.getElementById(el).scrollIntoView({behavior: 'smooth'})
        // if(x < 10) {
        //     x = 0
        // } else {
        //     x = x - 10
        // }

        // if(x > 0) {
        //     window.scrollBy(0,10)
        //     setTimeout(scrollToPosition(el),10)
        // }
    }

 

   
    return (
        <div  className="sticky top-0 z-40">
            
            <div className="h-16 pt-1 w-full  absolute text-white bg-[#010718] ">
                <div className="h-full w-1/2 absolute top-0 right-0">
                    <ul className="w-full mt-2">
                        <button onClick={() => scrollToPosition('about-me')}>
                            <li className="inline-block py-2 px-5 mx-4 mb-2 border border-[#4070F4] bg-[#010718] border-2 rounded-full hover:bg-[#4070F4]" >
                            About Me
                            </li>
                        </button>
                        <button onClick={() => scrollToPosition('skills')}>
                            <li 
                            className="inline-block py-2 px-5 mx-4 mb-2 border border-2 border-[#4070F4] bg-[#010718] rounded-full hover:bg-[#4070F4]">
                                Skills
                            </li>
                        </button>
                        <button onClick={() => scrollToPosition('projects')}>

                            <li className="inline-block py-2 px-5 mx-4 mb-2 border border-2 border-[#4070F4] bg-[#010718] rounded-full hover:bg-[#4070F4]">
                                Projects
                            </li>
                        </button>

                        <button onClick={() => scrollToPosition('contact')}>
                            <li className="inline-block py-2 px-5 mx-4 mb-2 border border-2 border-[#4070F4] bg-[#010718] rounded-full hover:bg-[#4070F4]">
                                Contact
                            </li>
                        </button>
                        <button>
                            <li className="inline-block py-2 px-5 mx-4 mb-2 border border-2 border-white bg-[#4070F4] rounded-full hover:bg-[#2050D2]">
                                Resume ↓
                            </li>
                        </button>
                    </ul>
                </div>
                <div className="absolute top-0 left-0 text-3xl pl-10 pt-4 font-serif">
                    <div className={`${isBotVisible ? 'transition-opacity opacity-100 duration-300' :'transition-opacity opacity-0 duration-300'}`}>
                        <div>
                            Matt Curschman
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}