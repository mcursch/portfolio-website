import { useState, useEffect } from 'react'
import { useTheme } from 'next-themes'
import {
    SiHtml5, SiCss3, SiTailwindcss,
    SiNuxtdotjs, SiVuedotjs, SiReact, SiNextdotjs, SiAngular, SiSpringboot,
    SiCplusplus, SiJavascript, SiCsharp, SiPython,
    SiGitlab, SiGithub,
    SiMongodb, SiMariadb, SiSupabase,
    SiLinux, SiApple, SiWindows,
    SiOpenai, SiAnthropic, SiPytorch, SiPandas, SiPolars, SiNumpy
} from 'react-icons/si'
import { BsDatabase, BsCodeSlash } from 'react-icons/bs'
import { FaJava } from 'react-icons/fa'
import Reveal from './Reveal'

const categories = [
    {
        title: "Front End",
        skills: [
            { name: "HTML",     Icon: SiHtml5,      color: "#E34F26" },
            { name: "CSS",      Icon: SiCss3,       color: "#1572B6" },
            { name: "Tailwind", Icon: SiTailwindcss, color: "#06B6D4" },
        ]
    },
    {
        title: "Web Development",
        skills: [
            { name: "Nuxt.js",     Icon: SiNuxtdotjs,   color: "#00DC82" },
            { name: "Vue",         Icon: SiVuedotjs,    color: "#4FC08D" },
            { name: "React",       Icon: SiReact,       color: "#61DAFB" },
            { name: "Next.js",     Icon: SiNextdotjs,   color: "#000000" },
            { name: "Angular",     Icon: SiAngular,     color: "#DD0031" },
            { name: "Spring Boot", Icon: SiSpringboot,  color: "#6DB33F" },
        ]
    },
    {
        title: "Languages",
        skills: [
            { name: "C++",        Icon: SiCplusplus,  color: "#00599C" },
            { name: "Java",       Icon: FaJava,       color: "#ED8B00" },
            { name: "JavaScript", Icon: SiJavascript, color: "#F7DF1E" },
            { name: "C#",         Icon: SiCsharp,     color: "#239120" },
            { name: "C",          Icon: BsCodeSlash,  color: "#A8B9CC" },
            { name: "Python",     Icon: SiPython,     color: "#3776AB" },
        ]
    },
    {
        title: "Version Control",
        skills: [
            { name: "GitLab", Icon: SiGitlab, color: "#FC6D26" },
            { name: "GitHub", Icon: SiGithub, color: "#181717" },
        ]
    },
    {
        title: "Databases",
        skills: [
            { name: "SQL",      Icon: BsDatabase, color: "#4070F4" },
            { name: "MongoDB",  Icon: SiMongodb,  color: "#47A248" },
            { name: "MariaDB",  Icon: SiMariadb,  color: "#003545" },
            { name: "Supabase", Icon: SiSupabase, color: "#3ECF8E" },
        ]
    },
    {
        title: "Operating Systems",
        skills: [
            { name: "macOS",   Icon: SiApple,   color: "#000000" },
            { name: "Windows", Icon: SiWindows, color: "#0078D4" },
            { name: "Linux",   Icon: SiLinux,   color: "#FCC624" },
        ]
    },
    {
        title: "AI & Data",
        skills: [
            { name: "OpenAI",   Icon: SiOpenai,    color: "#000000" },
            { name: "Claude",   Icon: SiAnthropic, color: "#D97757" },
            { name: "PyTorch",  Icon: SiPytorch,   color: "#EE4C2C" },
            { name: "Pandas",   Icon: SiPandas,    color: "#150458" },
            { name: "Polars",   Icon: SiPolars,    color: "#CD792C" },
            { name: "NumPy",    Icon: SiNumpy,     color: "#013243" },
        ]
    },
]

// Brand colors that are too dark to show on a dark background
function resolveColor(hex, isDark) {
    if (!isDark) return hex
    const h = hex.replace('#', '')
    const r = parseInt(h.slice(0, 2), 16) / 255
    const g = parseInt(h.slice(2, 4), 16) / 255
    const b = parseInt(h.slice(4, 6), 16) / 255
    const luminance = 0.2126 * r + 0.7152 * g + 0.0722 * b
    return luminance < 0.12 ? '#e5e7eb' : hex
}

// Chip lifts and picks up a glow tinted with the technology's own brand colour.
function Chip({ name, Icon, color, isDark }) {
    const c = resolveColor(color, isDark)
    return (
        <div
            style={{ '--c': c }}
            className="group/chip flex cursor-default select-none items-center gap-2.5 rounded-full border border-gray-300 bg-white/80 px-4 py-2 text-base font-medium text-gray-700 backdrop-blur-sm transition-all duration-300 ease-spring hover:-translate-y-1 hover:border-[var(--c)] hover:shadow-[0_8px_24px_-8px_var(--c)] dark:border-white/10 dark:bg-white/5 dark:text-gray-200"
        >
            <Icon
                style={{ color: c }}
                className="flex-shrink-0 text-xl transition-transform duration-300 ease-spring group-hover/chip:scale-125 group-hover/chip:rotate-6"
            />
            <span>{name}</span>
        </div>
    )
}

export default function Skillgrid() {
    const { resolvedTheme } = useTheme()
    const [mounted, setMounted] = useState(false)
    useEffect(() => { setMounted(true) }, [])
    const isDark = mounted && resolvedTheme === 'dark'

    return (
        <div className="grid grid-cols-1 items-start gap-6 py-6 sm:grid-cols-2">
            {categories.map(({ title, skills }, i) => (
                <Reveal
                    key={title}
                    delay={i * 70}
                    from={i % 2 === 0 ? 'left' : 'right'}
                    className={i === categories.length - 1 && categories.length % 2 !== 0 ? 'sm:col-span-2' : ''}
                >
                    <div className="rounded-2xl border border-gray-200 bg-white/60 p-5 backdrop-blur-sm transition-colors duration-500 hover:border-accent/40 dark:border-white/5 dark:bg-white/[0.03]">
                        <div className="mb-4 flex items-center gap-3">
                            <span className="h-2 w-2 rounded-full" style={{ background: 'var(--brand-gradient)' }} />
                            <h3 className="font-mono text-xs font-bold uppercase tracking-[0.25em] text-gray-500 dark:text-gray-400">
                                {title}
                            </h3>
                            <span className="h-px flex-1 bg-gradient-to-r from-gray-300 to-transparent dark:from-white/10" />
                        </div>
                        <div className="flex flex-wrap gap-2">
                            {skills.map((skill) => (
                                <Chip key={skill.name} {...skill} isDark={isDark} />
                            ))}
                        </div>
                    </div>
                </Reveal>
            ))}
        </div>
    )
}
