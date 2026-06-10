import React from 'react';
import { BsDownload } from 'react-icons/bs'
import { ThemeToggle } from './ui/ThemeToggle'

export default function Navbar({ isBotVisible }) {

    const scrollToPosition = (el) => {
        document.getElementById(el).scrollIntoView({ behavior: 'smooth' })
    }

    const btnBase = "inline-block py-2 px-5 mx-4 mb-2 border border-2 border-[#4070F4] rounded-full hover:bg-[#4070F4] hover:text-white transition-colors"
    const navBg = "dark:bg-[#010718] bg-white"
    const textColor = "dark:text-white text-gray-900"

    return (
        <div className="sticky top-0 z-40">
            <div className={`h-16 pt-1 w-full absolute ${navBg} ${textColor}`}>
                <div className="h-full w-2/3 absolute top-0 left-0">
                    <ul className="w-full mt-2 flex items-center">
                        <button onClick={() => scrollToPosition('about-me')}>
                            <li className={`${btnBase} dark:bg-[#010718] bg-white`}>
                                About Me
                            </li>
                        </button>
                        <button onClick={() => scrollToPosition('skills')}>
                            <li className={`${btnBase} dark:bg-[#010718] bg-white`}>
                                Skills
                            </li>
                        </button>
                        <button onClick={() => scrollToPosition('projects')}>
                            <li className={`${btnBase} dark:bg-[#010718] bg-white`}>
                                Projects
                            </li>
                        </button>
                        <button onClick={() => scrollToPosition('contact')}>
                            <li className={`${btnBase} dark:bg-[#010718] bg-white`}>
                                Contact
                            </li>
                        </button>
                        <a href="/images/MatthewCurschmanResume.pdf" target="_blank" rel="noreferrer">
                            <li className="inline-block py-2 px-5 mx-4 mb-2 border border-2 border-white bg-[#4070F4] text-white rounded-full hover:bg-[#2050D2] transition-colors flex items-center">
                                Resume <BsDownload className="text-xl ml-2" />
                            </li>
                        </a>
                        <li className="list-none inline-flex items-center mx-2 mb-2" suppressHydrationWarning>
                            <ThemeToggle />
                        </li>
                    </ul>
                </div>
                <div className="absolute top-0 right-0 text-3xl pr-10 pt-4 font-serif">
                    <div className={`${isBotVisible ? 'transition-opacity opacity-100 duration-300' : 'transition-opacity opacity-0 duration-300'}`}>
                        Matt Curschman
                    </div>
                </div>
            </div>
        </div>
    )
}
