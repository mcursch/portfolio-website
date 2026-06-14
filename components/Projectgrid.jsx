import Projectcard from "./Projectcard"

// Add a real `image` (file in /public/images) and per-project `link`/`demo`
// URLs as they become available; cards without an image show an accent
// gradient placeholder.
const projects = [
    {
        title: "DerivApp",
        image: "derivapp.png",
        link: "https://github.com/mcursch",
        description:
            "A symbolic derivative calculator built with a custom lexical parser and token engine. Enter any expression in x and get the exact derivative plus evaluated result.",
    },
    {
        title: "Conductor",
        subtitle: "AI-Enhanced Development Tool",
        link: "https://github.com/mcursch",
        description:
            "An AI-enhanced development tool that orchestrates and accelerates day-to-day coding workflows.",
    },
    {
        title: "Kime",
        subtitle: "Computer Vision Martial-Arts Trainer",
        link: "https://github.com/mcursch",
        description:
            "A computer-vision pipeline that analyzes martial-arts technique from video to coach and correct form.",
    },
    {
        title: "RoomRadar",
        subtitle: "AI-Enhanced Hospitality Web Scraper",
        link: "https://github.com/mcursch",
        description:
            "An AI-enhanced web scraper for the hospitality industry that aggregates and surfaces lodging data.",
    },
    {
        title: "Querious",
        subtitle: "AI Chatbot",
        link: "https://github.com/mcursch",
        description:
            "A conversational AI chatbot for natural-language question answering.",
    },
]

export default function Projectgrid() {
    return (
        <div className="flex flex-wrap gap-8 justify-center py-10">
            {projects.map((p) => (
                <Projectcard
                    key={p.title}
                    title={p.title}
                    subtitle={p.subtitle}
                    image={p.image}
                    link={p.link}
                    demo={p.demo}
                >
                    {p.description}
                </Projectcard>
            ))}
        </div>
    )
}
