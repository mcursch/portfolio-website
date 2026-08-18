import React, { useState, useEffect, useRef, useCallback } from 'react'
import { BsDownload, BsList, BsX } from 'react-icons/bs'
import ScrollProgress from './ScrollProgress'
import MagneticButton from './MagneticButton'

const navLinks = [
    { label: 'About', id: 'about-me' },
    { label: 'Skills', id: 'skills' },
    { label: 'Projects', id: 'projects' },
    { label: 'Contact', id: 'contact' },
]

export default function Navbar() {
    const [menuOpen, setMenuOpen] = useState(false)
    const [scrolled, setScrolled] = useState(false)   // bar is invisible at the very top, glass appears once we leave it
    const [pastHero, setPastHero] = useState(false)   // name fades in once the hero is scrolled past
    const [active, setActive] = useState(null)        // section currently under the reader

    const listRef = useRef(null)
    const itemRefs = useRef({})
    const [pill, setPill] = useState({ left: 0, width: 0, ready: false })

    // Self-contained scroll tracking so the navbar keeps working regardless of
    // the page layout below it.
    useEffect(() => {
        let frame = 0
        const read = () => {
            frame = 0
            const y = window.scrollY || document.documentElement.scrollTop || 0
            setScrolled(y > 8)
            setPastHero(y > window.innerHeight * 0.6)

            // Scroll spy: the active section is the last one whose top has
            // passed a line ~40% down the viewport.
            const line = y + window.innerHeight * 0.4
            let current = null
            for (const { id } of navLinks) {
                const el = document.getElementById(id)
                if (el && el.offsetTop <= line) current = id
            }
            setActive(current)
        }
        const onScroll = () => {
            if (!frame) frame = requestAnimationFrame(read)
        }
        read()
        window.addEventListener('scroll', onScroll, { passive: true })
        window.addEventListener('resize', onScroll)
        return () => {
            cancelAnimationFrame(frame)
            window.removeEventListener('scroll', onScroll)
            window.removeEventListener('resize', onScroll)
        }
    }, [])

    // Slide the highlight pill under whichever link is active.
    const syncPill = useCallback(() => {
        const el = active ? itemRefs.current[active] : null
        if (!el || !listRef.current) {
            setPill((p) => ({ ...p, ready: false }))
            return
        }
        setPill({ left: el.offsetLeft, width: el.offsetWidth, ready: true })
    }, [active])

    useEffect(() => {
        syncPill()
        window.addEventListener('resize', syncPill)
        return () => window.removeEventListener('resize', syncPill)
    }, [syncPill])

    const scrollToPosition = (el) => {
        document.getElementById(el)?.scrollIntoView({ behavior: 'smooth' })
        setMenuOpen(false)
    }

    // Links sit flat on the bar; the sliding pill behind them supplies the
    // "selected" surface, so only colour changes per-link.
    const navBtn =
        'relative z-10 px-4 py-2 rounded-full text-sm font-medium transition-colors duration-300'

    return (
        <header className="fixed inset-x-0 top-0 z-40">
            <div
                className={`transition-all duration-500 ${
                    scrolled
                        ? 'glass border-b border-white/10 bg-white/70 shadow-[0_8px_30px_-12px_rgba(0,0,0,0.35)] dark:border-white/5 dark:bg-base-dark/60'
                        : 'border-b border-transparent bg-transparent'
                }`}
            >
                <div className="flex h-16 items-center justify-between px-6">
                    {/* Desktop nav */}
                    <nav className="hidden md:block">
                        <ul ref={listRef} className="relative flex items-center gap-1">
                            {/* Sliding highlight */}
                            <li
                                aria-hidden="true"
                                className="pointer-events-none absolute inset-y-1 rounded-full bg-accent/15 ring-1 ring-accent/40 transition-all duration-500 ease-smooth"
                                style={{
                                    left: pill.left,
                                    width: pill.width,
                                    opacity: pill.ready ? 1 : 0,
                                }}
                            />
                            {navLinks.map(({ label, id }) => (
                                <li key={id} ref={(el) => (itemRefs.current[id] = el)}>
                                    <button
                                        onClick={() => scrollToPosition(id)}
                                        aria-current={active === id ? 'true' : undefined}
                                        className={`${navBtn} ${
                                            active === id
                                                ? 'text-accent'
                                                : 'text-gray-700 hover:text-accent dark:text-gray-300 dark:hover:text-white'
                                        }`}
                                    >
                                        {label}
                                    </button>
                                </li>
                            ))}
                            <li className="ml-3">
                                <MagneticButton strength={0.35}>
                                    <a
                                        href="/images/MatthewCurschmanResume.pdf"
                                        target="_blank"
                                        rel="noreferrer"
                                        className="shine-host inline-flex items-center gap-2 rounded-full px-5 py-2 text-sm font-semibold text-white shadow-glow transition-shadow duration-300 hover:shadow-glow-lg"
                                        style={{ background: 'var(--brand-gradient)', backgroundSize: '200% auto' }}
                                    >
                                        Résumé <BsDownload className="text-base" />
                                    </a>
                                </MagneticButton>
                            </li>
                        </ul>
                    </nav>

                    {/* Name (fades in past the hero) */}
                    <div
                        className={`font-serif text-xl tracking-tight text-gray-900 transition-all duration-500 dark:text-white md:text-2xl ${
                            pastHero ? 'translate-y-0 opacity-100' : '-translate-y-2 opacity-0'
                        }`}
                    >
                        Matt <span className="text-gradient">Curschman</span>
                    </div>

                    {/* Mobile hamburger */}
                    <div className="flex items-center md:hidden">
                        <button
                            onClick={() => setMenuOpen((o) => !o)}
                            aria-label="Toggle menu"
                            aria-expanded={menuOpen}
                            className="-mr-2 rounded-xl p-2 text-2xl text-gray-800 transition-all duration-300 hover:bg-accent/10 active:scale-90 dark:text-gray-100 dark:hover:bg-accent/20"
                        >
                            <span className={`block transition-transform duration-300 ${menuOpen ? 'rotate-90' : ''}`}>
                                {menuOpen ? <BsX className="text-3xl" /> : <BsList className="text-3xl" />}
                            </span>
                        </button>
                    </div>
                </div>

                <ScrollProgress />
            </div>

            {/* Mobile drawer — items cascade in one after another */}
            {menuOpen && (
                <div className="glass animate-menu-in border-b border-white/10 bg-white/85 shadow-xl dark:bg-base-dark/85 md:hidden">
                    <ul className="flex flex-col gap-1 px-4 py-3">
                        {navLinks.map(({ label, id }, i) => (
                            <li key={id} className="animate-rise-in opacity-0" style={{ animationDelay: `${i * 60}ms` }}>
                                <button
                                    onClick={() => scrollToPosition(id)}
                                    className={`w-full rounded-xl px-5 py-3 text-left text-base font-medium transition-all duration-300 active:scale-[0.98] ${
                                        active === id
                                            ? 'bg-accent/15 text-accent'
                                            : 'text-gray-700 hover:bg-accent/10 hover:text-accent dark:text-gray-200 dark:hover:bg-accent/20'
                                    }`}
                                >
                                    {label}
                                </button>
                            </li>
                        ))}
                        <li
                            className="animate-rise-in pt-2 opacity-0"
                            style={{ animationDelay: `${navLinks.length * 60}ms` }}
                        >
                            <a
                                href="/images/MatthewCurschmanResume.pdf"
                                target="_blank"
                                rel="noreferrer"
                                onClick={() => setMenuOpen(false)}
                                className="flex w-full items-center justify-center gap-2 rounded-xl px-5 py-3 font-semibold text-white transition-all duration-300 active:scale-[0.98]"
                                style={{ background: 'var(--brand-gradient)' }}
                            >
                                Résumé <BsDownload className="text-lg" />
                            </a>
                        </li>
                    </ul>
                </div>
            )}
        </header>
    )
}
