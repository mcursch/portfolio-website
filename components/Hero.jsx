import { useEffect, useRef } from 'react'
import Typewriter from 'typewriter-effect'
import { BsArrowDown, BsGithub, BsLinkedin, BsArrowUpRight } from 'react-icons/bs'
import ShaderBackground from './ShaderBackground'

const NAME = 'Matt Curschman'

// Letters keep one continuous stagger even though they're grouped by word.
const letterOffset = (words, upTo) =>
    words.slice(0, upTo).reduce((n, word) => n + word.length + 1, 0)

export default function Hero() {
    const contentRef = useRef(null)

    // Parallax: the hero copy drifts up and dissolves as the page scrolls,
    // handing the eye off to the section below. rAF-throttled, transform-only.
    useEffect(() => {
        const el = contentRef.current
        if (!el) return
        if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) return

        let frame = 0
        const update = () => {
            frame = 0
            const progress = Math.min(1, window.scrollY / window.innerHeight)
            el.style.transform = `translate3d(0, ${progress * 90}px, 0)`
            el.style.opacity = String(Math.max(0, 1 - progress * 1.4))
        }
        const onScroll = () => {
            if (!frame) frame = requestAnimationFrame(update)
        }
        update()
        window.addEventListener('scroll', onScroll, { passive: true })
        return () => {
            cancelAnimationFrame(frame)
            window.removeEventListener('scroll', onScroll)
        }
    }, [])

    return (
        <section className="grain relative h-screen min-h-[40rem] w-full overflow-hidden">
            {/* Animated aurora shader */}
            <div className="absolute inset-0 z-0">
                <ShaderBackground />
            </div>
            {/* Legibility scrim + a vignette that pulls focus to the centre */}
            <div className="absolute inset-0 z-0 bg-black/35" />
            <div className="absolute inset-0 z-0 bg-gradient-to-b from-black/50 via-transparent to-base-dark" />

            <div
                ref={contentRef}
                className="relative z-10 flex h-full w-full flex-col justify-center px-6 pb-24 will-change-transform sm:px-10 md:pl-24 lg:pl-36"
            >
                {/* Availability badge */}
                <div className="animate-rise-in mb-6 w-fit opacity-0" style={{ animationDelay: '150ms' }}>
                    <span className="glass inline-flex items-center gap-2.5 rounded-full border border-white/20 bg-white/10 px-4 py-1.5 font-mono text-xs uppercase tracking-[0.2em] text-white/90">
                        <span className="relative flex h-2 w-2">
                            <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-emerald-400 opacity-75" />
                            <span className="relative inline-flex h-2 w-2 rounded-full bg-emerald-400" />
                        </span>
                        Open to opportunities
                    </span>
                </div>

                {/* Name — letters rise in one at a time */}
                <h1 className="letter-rise font-serif text-5xl font-bold leading-[1.05] tracking-tight text-white drop-shadow-2xl sm:text-6xl md:text-8xl lg:text-8.5xl">
                    {NAME.split(' ').map((word, w, words) => (
                        // Each word is an unbreakable unit so the per-letter
                        // spans can't be split mid-name on narrow screens.
                        <span key={w} className="inline-block whitespace-nowrap">
                            {word.split('').map((ch, i) => (
                                <span key={i} className="letter" style={{ '--d': `${300 + (letterOffset(words, w) + i) * 45}ms` }}>
                                    {ch}
                                </span>
                            ))}
                            {w < words.length - 1 && '\u00A0'}
                        </span>
                    ))}
                </h1>

                <div
                    className="animate-rise-in mt-4 flex flex-col opacity-0 md:flex-row md:items-baseline md:pl-2"
                    style={{ animationDelay: '1000ms' }}
                >
                    <span className="font-serif text-2xl text-white/90 drop-shadow-lg sm:text-4xl md:text-6xl">
                        I am a
                    </span>
                    <span className="text-gradient-animate min-h-[2.5rem] break-words font-serif text-2xl drop-shadow-lg sm:text-4xl md:min-h-[4.5rem] md:pl-4 md:text-6xl">
                        <Typewriter
                            options={{
                                strings: ['Computer Engineer', 'Software Developer', 'Fullstack Creator'],
                                autoStart: true,
                                loop: true,
                            }}
                        />
                    </span>
                </div>

                <p
                    className="animate-rise-in mt-6 max-w-xl text-base leading-relaxed text-white/75 opacity-0 sm:text-lg"
                    style={{ animationDelay: '1150ms' }}
                >
                    Full-stack engineer with a back-end lean — parsers, databases, and AI tooling that
                    turns messy data into something people can actually use.
                </p>

                {/* Calls to action */}
                <div
                    className="animate-rise-in mt-9 flex flex-wrap items-center gap-4 opacity-0"
                    style={{ animationDelay: '1300ms' }}
                >
                    <a
                        href="#projects"
                        className="shine-host inline-flex items-center gap-2 rounded-full px-7 py-3 font-semibold text-white shadow-glow transition-all duration-300 hover:-translate-y-0.5 hover:shadow-glow-lg"
                        style={{ background: 'var(--brand-gradient)', backgroundSize: '200% auto' }}
                    >
                        See my work <BsArrowUpRight className="text-sm" />
                    </a>

                    <a
                        href="#contact"
                        className="glass inline-flex items-center gap-2 rounded-full border border-white/30 bg-white/10 px-7 py-3 font-semibold text-white transition-all duration-300 hover:-translate-y-0.5 hover:border-white hover:bg-white/20"
                    >
                        Get in touch
                    </a>

                    <div className="ml-1 flex items-center gap-2">
                        {[
                            { href: 'https://github.com/mcursch', Icon: BsGithub, label: 'GitHub' },
                            { href: 'https://www.linkedin.com/in/matthewcurschman/', Icon: BsLinkedin, label: 'LinkedIn' },
                        ].map(({ href, Icon, label }) => (
                            <a
                                key={label}
                                href={href}
                                target="_blank"
                                rel="noreferrer"
                                aria-label={label}
                                className="glass flex h-11 w-11 items-center justify-center rounded-full border border-white/25 bg-white/10 text-lg text-white transition-all duration-300 ease-spring hover:-translate-y-1 hover:border-white hover:bg-white/25"
                            >
                                <Icon />
                            </a>
                        ))}
                    </div>
                </div>
            </div>

            {/* Scroll cue */}
            <a
                href="#about-me"
                aria-label="Scroll to about"
                className="absolute inset-x-0 bottom-8 z-10 mx-auto flex w-fit flex-col items-center gap-2 text-white/70 transition-colors duration-300 hover:text-white"
            >
                <span className="font-mono text-xs uppercase tracking-[0.3em]">Scroll</span>
                <BsArrowDown className="animate-bounce-slow text-xl" />
            </a>
        </section>
    )
}
