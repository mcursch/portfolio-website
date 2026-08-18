import Projectcard from './Projectcard'
import Reveal from './Reveal'

// Add a real `image` (file in /public/images) and per-project `link`/`demo`
// URLs as they become available; cards without an image show an animated
// brand-gradient placeholder.
const projects = [
    {
        title: 'DerivApp',
        subtitle: 'Symbolic Derivative Engine',
        image: 'derivapp.png',
        link: 'https://github.com/mcursch',
        tags: ['Parser', 'Python', 'Math'],
        description:
            'A symbolic derivative calculator built with a custom lexical parser and token engine. Enter any expression in x and get the exact derivative plus evaluated result.',
    },
    {
        title: 'Conductor',
        subtitle: 'AI-Enhanced Development Tool',
        image: 'conductor.png',
        link: 'https://github.com/mcursch',
        demo: '/videos/conductor.mp4',
        tags: ['AI', 'Tooling', 'DX'],
        description:
            'An AI-enhanced development tool that orchestrates and accelerates day-to-day coding workflows.',
    },
    {
        title: 'Kime',
        subtitle: 'Computer Vision Martial-Arts Trainer',
        image: 'kime.png',
        link: 'https://github.com/mcursch',
        demo: '/videos/kime.mp4',
        tags: ['Computer Vision', 'PyTorch'],
        description:
            'A computer-vision pipeline that analyzes martial-arts technique from video to coach and correct form.',
    },
    {
        title: 'RoomRadar',
        subtitle: 'AI-Enhanced Hospitality Web Scraper',
        image: 'roomradar.png',
        link: 'https://github.com/mcursch',
        demo: '/videos/roomradar.mp4',
        tags: ['Scraping', 'AI', 'Data'],
        description:
            'An AI-enhanced web scraper for the hospitality industry that aggregates and surfaces lodging data.',
    },
    {
        title: 'Querious',
        subtitle: 'AI Chatbot',
        image: 'querious.png',
        link: 'https://github.com/mcursch',
        demo: '/videos/querious.mp4',
        tags: ['LLM', 'Chat', 'RAG'],
        description: 'A conversational AI chatbot for natural-language question answering.',
    },
]

export default function Projectgrid() {
    return (
        <div className="flex flex-wrap justify-center gap-8 py-10">
            {projects.map((p, i) => (
                <Reveal
                    key={p.title}
                    from="scale"
                    // Cards cascade in reading order rather than all at once.
                    delay={(i % 2) * 110 + Math.floor(i / 2) * 60}
                    // Two per row on desktop; a lone final card centres itself
                    // rather than stretching across the full width.
                    className="w-full md:w-[calc(50%-1rem)]"
                >
                    <Projectcard
                        title={p.title}
                        subtitle={p.subtitle}
                        image={p.image}
                        link={p.link}
                        demo={p.demo}
                        tags={p.tags}
                    >
                        {p.description}
                    </Projectcard>
                </Reveal>
            ))}
        </div>
    )
}
