import Image from 'next/image'
import { useState } from 'react'
import { BsArrowUpRight, BsPlayFill } from 'react-icons/bs'
import SpotlightCard from './SpotlightCard'
import VideoModal from './VideoModal'

/**
 * Project tile. The cover art sits behind a permanent gradient scrim with the
 * title always legible; on hover the image scales up, the scrim deepens and
 * the description + actions slide in from below. On touch, everything below
 * the title is simply always shown.
 */
export default function Projectcard({ title, subtitle, image, link, demo, tags = [], children }) {
    const [demoOpen, setDemoOpen] = useState(false)

    return (
        <SpotlightCard className="gradient-border group relative h-[24rem] w-full overflow-hidden rounded-3xl bg-[#0b1020] shadow-card transition-shadow duration-500 hover:shadow-card-hover">
            {/* Cover layer — real image when available, otherwise a brand gradient */}
            {image ? (
                <Image
                    src={'/images/' + image}
                    alt={title}
                    width={704}
                    height={512}
                    className="absolute inset-0 h-full w-full object-cover transition-transform duration-[900ms] ease-smooth group-hover:scale-110"
                />
            ) : (
                <div
                    className="absolute inset-0 animate-gradient-pan"
                    style={{ background: 'var(--brand-gradient)', backgroundSize: '200% auto' }}
                />
            )}

            {/* Scrim: keeps the title readable at rest, deepens on hover so the
                description has something to sit on. */}
            <div className="absolute inset-0 bg-gradient-to-t from-[#050912] via-[#050912]/70 to-transparent transition-opacity duration-500" />
            <div className="absolute inset-0 bg-[#050912]/0 transition-colors duration-500 group-hover:bg-[#050912]/60" />

            {/* Content */}
            <div className="absolute inset-0 flex flex-col justify-end p-6">
                {tags.length > 0 && (
                    <div className="mb-3 flex flex-wrap gap-2">
                        {tags.map((tag) => (
                            <span
                                key={tag}
                                className="rounded-full border border-white/15 bg-white/10 px-2.5 py-0.5 font-mono text-xs text-white/80 backdrop-blur-sm"
                            >
                                {tag}
                            </span>
                        ))}
                    </div>
                )}

                <h3 className="font-serif text-2xl font-bold text-white">{title}</h3>
                {subtitle && <p className="mt-1 text-sm text-accent-3">{subtitle}</p>}

                {/* Description + actions: collapsed at rest on pointer devices,
                    always open on touch (where there is no hover). */}
                <div className="max-h-40 overflow-hidden opacity-100 transition-all duration-500 ease-smooth sm:max-h-0 sm:opacity-0 sm:group-hover:max-h-40 sm:group-hover:opacity-100">
                    <p className="pt-3 text-sm leading-relaxed text-gray-300">{children}</p>
                    <div className="flex flex-wrap gap-3 pt-4">
                        {link && (
                            <a
                                href={link}
                                target="_blank"
                                rel="noreferrer"
                                className="shine-host inline-flex items-center gap-1.5 rounded-full bg-white/95 px-4 py-1.5 text-sm font-semibold text-gray-900 transition-transform duration-300 ease-spring hover:scale-105"
                            >
                                View Project <BsArrowUpRight className="text-xs" />
                            </a>
                        )}
                        {demo && (
                            <button
                                type="button"
                                onClick={() => setDemoOpen(true)}
                                className="inline-flex items-center gap-1.5 rounded-full border border-white/40 px-4 py-1.5 text-sm font-semibold text-white transition-all duration-300 ease-spring hover:scale-105 hover:border-white hover:bg-white/10"
                            >
                                <BsPlayFill className="text-base" /> Watch Demo
                            </button>
                        )}
                    </div>
                </div>
            </div>

            {demo && (
                <VideoModal open={demoOpen} src={demo} title={title} onClose={() => setDemoOpen(false)} />
            )}
        </SpotlightCard>
    )
}
