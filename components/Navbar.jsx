import React, { useState, useEffect } from 'react';
import { BsDownload, BsList, BsX } from 'react-icons/bs'

export default function Navbar() {
    const [menuOpen, setMenuOpen] = useState(false)
    const [scrolled, setScrolled] = useState(false)   // bg is invisible at the very top, appears the instant we leave it
    const [pastHero, setPastHero] = useState(false)   // name fades in once the hero is scrolled past

    // Self-contained scroll tracking so the navbar keeps working regardless of the
    // page layout below it.
    useEffect(() => {
        const onScroll = () => {
            const y = window.scrollY || document.documentElement.scrollTop || 0
            setScrolled(y > 0)
            setPastHero(y > window.innerHeight * 0.6)
        }
        onScroll()
        window.addEventListener('scroll', onScroll, { passive: true })
        return () => window.removeEventListener('scroll', onScroll)
    }, [])

    const scrollToPosition = (el) => {
        document.getElementById(el).scrollIntoView({ behavior: 'smooth' })
        setMenuOpen(false)
    }

    const navBg = "bg-base dark:bg-base-dark"
    const textColor = "dark:text-white text-gray-900"

    // Pill buttons that echo the theme toggle: rounded-full, zinc border + surface,
    // subtle accent on hover.
    const navBtn = "inline-flex items-center px-5 py-2 rounded-full text-sm font-medium border transition-colors bg-white dark:bg-zinc-950 border-zinc-200 dark:border-zinc-800 text-gray-700 dark:text-gray-200 hover:border-accent hover:text-accent hover:bg-accent/10 dark:hover:bg-accent/20"
    // The standout button: solid accent fill with white text at rest, lighting up
    // to a white pill with accent text on hover.
    const resumeBtn = "inline-flex items-center gap-2 px-5 py-2 rounded-full text-sm font-semibold border border-accent bg-accent text-white hover:bg-white hover:text-accent transition-colors"

    const navLinks = [
        { label: 'About Me', id: 'about-me' },
        { label: 'Skills', id: 'skills' },
        { label: 'Projects', id: 'projects' },
        { label: 'Contact', id: 'contact' },
    ]

    return (
        <div className="fixed top-0 left-0 right-0 z-40">
            <div className={`h-16 w-full ${scrolled ? `${navBg} shadow-sm` : 'bg-transparent'} ${textColor} flex items-center justify-between px-6 transition-colors duration-300`}>
                {/* Desktop nav */}
                <ul className="hidden md:flex items-center gap-2">
                    {navLinks.map(({ label, id }) => (
                        <li key={id}>
                            <button className={navBtn} onClick={() => scrollToPosition(id)}>
                                {label}
                            </button>
                        </li>
                    ))}
                    <li>
                        <a href="/images/MatthewCurschmanResume.pdf" target="_blank" rel="noreferrer" className={resumeBtn}>
                            Résumé <BsDownload className="text-base" />
                        </a>
                    </li>
                </ul>

                {/* Name (fades in on scroll) */}
                <div className={`font-serif text-xl md:text-3xl ${pastHero ? 'opacity-100' : 'opacity-0'} transition-opacity duration-300`}>
                    Matt Curschman
                </div>

                {/* Mobile hamburger */}
                <div className="flex md:hidden items-center">
                    <button
                        onClick={() => setMenuOpen(o => !o)}
                        aria-label="Toggle menu"
                        aria-expanded={menuOpen}
                        className="text-2xl p-2 -mr-2 rounded-lg text-gray-800 dark:text-gray-100 hover:bg-accent/10 dark:hover:bg-accent/20 active:scale-95 transition-all"
                    >
                        {menuOpen ? <BsX className="text-3xl" /> : <BsList className="text-3xl" />}
                    </button>
                </div>
            </div>

            {/* Mobile drawer */}
            {menuOpen && (
                <div className={`md:hidden ${navBg} ${textColor} border-t border-zinc-200 dark:border-zinc-800 shadow-xl animate-menu-in`}>
                    <ul className="flex flex-col px-4 py-3 gap-1">
                        {navLinks.map(({ label, id }) => (
                            <li key={id}>
                                <button
                                    onClick={() => scrollToPosition(id)}
                                    className="w-full text-left px-5 py-3 rounded-xl text-base font-medium text-gray-700 dark:text-gray-200 hover:bg-accent/10 dark:hover:bg-accent/20 hover:text-accent active:scale-[0.98] transition-all"
                                >
                                    {label}
                                </button>
                            </li>
                        ))}
                        <li className="pt-2">
                            <a
                                href="/images/MatthewCurschmanResume.pdf"
                                target="_blank"
                                rel="noreferrer"
                                onClick={() => setMenuOpen(false)}
                                className="flex w-full items-center justify-center gap-2 px-5 py-3 rounded-xl font-semibold bg-accent text-white hover:bg-accent-hover active:scale-[0.98] transition-all"
                            >
                                Résumé <BsDownload className="text-lg" />
                            </a>
                        </li>
                    </ul>
                </div>
            )}
        </div>
    )
}
