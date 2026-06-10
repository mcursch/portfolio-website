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

function Chip({ name, Icon, color, isDark }) {
    const iconColor = resolveColor(color, isDark)
    return (
        <div className="flex items-center gap-2.5 px-4 py-2 rounded-full border dark:border-gray-600 border-gray-300 dark:bg-gray-700/40 bg-white text-base font-medium dark:text-gray-200 text-gray-700 hover:border-[#4070F4] transition-colors cursor-default select-none">
            <Icon style={{ color: iconColor }} className="text-xl flex-shrink-0" />
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
        <div className="grid grid-cols-2 gap-x-16 gap-y-10 px-20 py-6">
            {categories.map(({ title, skills }, i) => (
                <div
                    key={title}
                    className={i === categories.length - 1 && categories.length % 2 !== 0 ? 'col-span-2' : ''}
                >
                    <h3 className="text-sm font-bold uppercase tracking-widest dark:text-gray-400 text-gray-500 mb-3">
                        {title}
                    </h3>
                    <div className="h-px dark:bg-gray-600 bg-gray-300 mb-4" />
                    <div className="flex flex-wrap gap-2">
                        {skills.map((skill) => (
                            <Chip key={skill.name} {...skill} isDark={isDark} />
                        ))}
                    </div>
                </div>
            ))}
        </div>
    )
}
