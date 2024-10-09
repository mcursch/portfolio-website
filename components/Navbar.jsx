import React, {useEffect, useRef } from 'react';



export default function Navbar({isBotVisible}) {
    console.log(isBotVisible)



    return (
        <div className="sticky top-0">
            
            <div className="h-16 pt-1 w-full  absolute text-white bg-[#010718] ">
                <div className="h-full w-1/3 absolute top-0 right-0">
                    <ul className="w-full mt-2">
                    <button >
                    <a href="/rent">
                    <li className="inline-block py-2 px-5 mx-4 mb-2 border border-[#4070F4] bg-[#010718] border-2 rounded-full hover:bg-[#4070F4]" >
                       About Me
                    </li>
                    </a>
                    </button>
                    <button>
                    <li 
                    className="inline-block py-2 px-5 mx-4 mb-2 border border-2 border-[#4070F4] bg-[#010718] rounded-full hover:bg-[#4070F4]">
                        Skills
                    </li>
                    </button>
                    <button>
                    <li className="inline-block py-2 px-5 mx-4 mb-2 border border-2 border-[#4070F4] bg-[#010718] rounded-full hover:bg-[#4070F4]">
                        Projects
                    </li>
                    </button>
                    <button>
                    <li className="inline-block py-2 px-5 mx-4 mb-2 border border-2 border-[#4070F4] bg-[#010718] rounded-full hover:bg-[#4070F4]">
                        Resume ↓
                    </li>

                    </button>
                    </ul>

                </div>

                <div className="absolute top-0 left-0 text-2xl pl-10 pt-7">
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