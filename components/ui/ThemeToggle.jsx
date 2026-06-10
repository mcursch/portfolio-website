import { useState, useEffect } from "react"
import { Moon, Sun } from "lucide-react"
import { useTheme } from "next-themes"

export function ThemeToggle({ className = "" }) {
    const { resolvedTheme, setTheme } = useTheme()
    const [mounted, setMounted] = useState(false)

    useEffect(() => { setMounted(true) }, [])

    if (!mounted) return null

    const isDark = resolvedTheme === "dark"

    const handleToggle = () => {
        const el = document.documentElement
        el.classList.add("theme-transition")
        setTheme(isDark ? "light" : "dark")
        setTimeout(() => el.classList.remove("theme-transition"), 600)
    }

    return (
        <div
            className={`relative flex w-16 h-8 p-1 rounded-full cursor-pointer transition-colors duration-300 ${
                isDark
                    ? "bg-zinc-950 border border-zinc-800"
                    : "bg-white border border-zinc-200"
            } ${className}`}
            onClick={handleToggle}
            role="button"
            tabIndex={0}
            aria-label="Toggle theme"
            onKeyDown={(e) => e.key === "Enter" && handleToggle()}
        >
            {/* Sliding highlight pill — moves left for dark, right for light */}
            <div
                className={`absolute top-1 left-0 w-6 h-6 rounded-full transition-transform duration-300 ease-in-out ${
                    isDark
                        ? "translate-x-0 bg-zinc-800"
                        : "translate-x-10 bg-gray-200"
                }`}
            />

            {/* Icons — fixed positions, only colour changes */}
            <div className="relative flex justify-between items-center w-full z-10">
                <Moon
                    className={`w-4 h-4 transition-colors duration-300 ${
                        isDark ? "text-white" : "text-gray-400"
                    }`}
                    strokeWidth={1.5}
                />
                <Sun
                    className={`w-4 h-4 transition-colors duration-300 ${
                        isDark ? "text-gray-500" : "text-gray-700"
                    }`}
                    strokeWidth={1.5}
                />
            </div>
        </div>
    )
}
