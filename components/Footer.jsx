import Link from 'next/link'
import Typewriter from 'typewriter-effect'
import { BsLinkedin, BsGithub, BsEnvelope, BsArrowUpRight, BsArrowUp } from 'react-icons/bs'
import SectionHeading from './SectionHeading'
import Container from './Container'
import Reveal from './Reveal'
import MagneticButton from './MagneticButton'
import AmbientOrbs from './AmbientOrbs'

const socials = [
    { label: 'LinkedIn', href: 'https://www.linkedin.com/in/matthewcurschman/', Icon: BsLinkedin },
    { label: 'GitHub', href: 'https://github.com/mcursch', Icon: BsGithub },
]

export default function Footer() {
    return (
        <footer className="relative w-full overflow-hidden bg-base pb-10 dark:bg-base-dark">
            <AmbientOrbs variant="b" />

            <div className="relative">
                <SectionHeading eyebrow="Say hello">Contact Me</SectionHeading>

                <Container className="pb-12">
                    <Reveal from="scale">
                        <div className="gradient-border relative overflow-hidden rounded-3xl border border-gray-200 bg-white/70 px-6 py-12 text-center backdrop-blur-sm dark:border-white/5 dark:bg-white/[0.03] sm:px-12">
                            <div className="flex flex-col items-center justify-center gap-2 font-serif text-2xl font-bold text-gray-900 dark:text-white sm:flex-row sm:text-4xl">
                                <span>Together, we can</span>
                                <span className="text-gradient-animate min-h-[2rem] sm:min-w-[19ch] sm:pl-3 sm:text-left">
                                    <Typewriter
                                        options={{
                                            strings: ['Make A Difference', 'Shape The Future', 'Change The World'],
                                            autoStart: true,
                                            loop: true,
                                        }}
                                    />
                                </span>
                            </div>

                            <p className="mx-auto mt-5 max-w-xl text-gray-600 dark:text-gray-400">
                                I&apos;m always up for a good problem — new roles, side projects, or just
                                trading notes on parsers and AI tooling.
                            </p>

                            <div className="mt-9 flex flex-col items-center justify-center gap-4 sm:flex-row">
                                <MagneticButton strength={0.3}>
                                    <Link
                                        href="/email"
                                        className="shine-host inline-flex items-center gap-2 rounded-full px-8 py-3.5 text-lg font-semibold text-white shadow-glow transition-shadow duration-300 hover:shadow-glow-lg"
                                        style={{ background: 'var(--brand-gradient)', backgroundSize: '200% auto' }}
                                    >
                                        Email Me <BsEnvelope className="text-xl" />
                                    </Link>
                                </MagneticButton>

                                <MagneticButton strength={0.3}>
                                    <a
                                        href="/images/MatthewCurschmanResume.pdf"
                                        target="_blank"
                                        rel="noreferrer"
                                        className="inline-flex items-center gap-2 rounded-full border border-gray-300 px-8 py-3.5 text-lg font-semibold text-gray-800 transition-colors duration-300 hover:border-accent hover:text-accent dark:border-white/15 dark:text-gray-200 dark:hover:border-accent dark:hover:text-accent"
                                    >
                                        Résumé <BsArrowUpRight className="text-base" />
                                    </a>
                                </MagneticButton>
                            </div>

                            {/* Socials — each icon lifts and lights up on hover */}
                            <ul className="mt-10 flex items-center justify-center gap-4">
                                {socials.map(({ label, href, Icon }, i) => (
                                    <li key={label}>
                                        <a
                                            href={href}
                                            target="_blank"
                                            rel="noreferrer"
                                            aria-label={label}
                                            style={{ transitionDelay: `${i * 40}ms` }}
                                            className="flex h-14 w-14 items-center justify-center rounded-2xl border border-gray-200 bg-white/70 text-2xl text-gray-600 transition-all duration-300 ease-spring hover:-translate-y-1.5 hover:border-accent hover:text-accent hover:shadow-glow dark:border-white/10 dark:bg-white/5 dark:text-gray-300 dark:hover:text-white"
                                        >
                                            <Icon />
                                        </a>
                                    </li>
                                ))}
                            </ul>
                        </div>
                    </Reveal>
                </Container>

                {/* Bottom bar */}
                <Container className="flex flex-col items-center justify-between gap-4 border-t border-gray-200 pt-8 text-sm text-gray-500 dark:border-white/5 dark:text-gray-500 sm:flex-row">
                    <p className="font-mono">© {new Date().getFullYear()} Matt Curschman</p>
                    <p className="font-mono">Built with Next.js + Tailwind</p>
                    <button
                        onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
                        className="group inline-flex items-center gap-2 transition-colors duration-300 hover:text-accent"
                    >
                        Back to top
                        <BsArrowUp className="transition-transform duration-300 group-hover:-translate-y-1" />
                    </button>
                </Container>
            </div>
        </footer>
    )
}
