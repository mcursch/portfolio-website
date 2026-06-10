import React, { useState } from 'react';
import { BsDownload, BsList, BsX } from 'react-icons/bs'
import { ThemeToggle } from './ui/ThemeToggle'

export default function Navbar({ isBotVisible }) {
    const [menuOpen, setMenuOpen] = useState(false)

    const scrollToPosition = (el) => {
        document.getElementById(el).scrollIntoView({ behavior: 'smooth' })
        setMenuOpen(false)
    }

    const btnBase = "inline-block py-2 px-5 mx-4 mb-2 border border-2 border-[#4070F4] rounded-full hover:bg-[#4070F4] hover:text-white transition-colors"
    const navBg = "dark:bg-[#010718] bg-white"
    const textColor = "dark:text-white text-gray-900"

    const navLinks = [
        { label: 'About Me', id: 'about-me' },
        { label: 'Skills', id: 'skills' },
        { label: 'Projects', id: 'projects' },
        { label: 'Contact', id: 'contact' },
    ]

    return (
        <div className="sticky top-0 z-40">
            <div className={`h-16 w-full ${navBg} ${textColor} flex items-center justify-between px-6`}>
                {/* Desktop nav */}
                <ul className="hidden md:flex items-center flex-nowrap">
                    {navLinks.map(({ label, id }) => (
                        <button key={id} onClick={() => scrollToPosition(id)}>
                            <li className={`${btnBase} dark:bg-[#010718] bg-white`}>{label}</li>
                        </button>
                    ))}
                    <a href="/images/MatthewCurschmanResume.pdf" target="_blank" rel="noreferrer">
                        <li className="inline-block py-2 px-5 mx-4 mb-2 border border-2 border-white bg-[#4070F4] text-white rounded-full hover:bg-[#2050D2] transition-colors flex items-center">
                            Résumé <BsDownload className="text-xl ml-2" />
                        </li>
                    </a>
                    <li className="list-none inline-flex items-center mx-2 mb-2" suppressHydrationWarning>
                        <ThemeToggle />
                    </li>
                </ul>

                {/* Name (fades in on scroll) */}
                <div className={`font-serif text-xl md:text-3xl ${isBotVisible ? 'opacity-100' : 'opacity-0'} transition-opacity duration-300`}>
                    Matt Curschman
                </div>

                {/* Mobile right side: theme toggle + hamburger */}
                <div className="flex md:hidden items-center gap-3" suppressHydrationWarning>
                    <ThemeToggle />
                    <button onClick={() => setMenuOpen(o => !o)} aria-label="Toggle menu" className="text-3xl">
                        {menuOpen ? <BsX /> : <BsList />}
                    </button>
                </div>
            </div>

            {/* Mobile drawer */}
            {menuOpen && (
                <div className={`md:hidden ${navBg} ${textColor} flex flex-col px-6 py-4 gap-3 shadow-lg`}>
                    {navLinks.map(({ label, id }) => (
                        <button key={id} onClick={() => scrollToPosition(id)}
                            className="text-left py-2 px-4 border border-2 border-[#4070F4] rounded-full hover:bg-[#4070F4] hover:text-white transition-colors">
                            {label}
                        </button>
                    ))}
                    <a href="/images/MatthewCurschmanResume.pdf" target="_blank" rel="noreferrer"
                        className="py-2 px-4 border border-2 border-white bg-[#4070F4] text-white rounded-full hover:bg-[#2050D2] transition-colors flex items-center gap-2 w-fit">
                        Résumé <BsDownload className="text-xl" />
                    </a>
                </div>
            )}
        </div>
    )
}
