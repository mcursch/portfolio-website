import { useEffect, useState } from 'react'

// Thin brand-gradient bar pinned under the navbar that fills as the page is
// read. Uses rAF-throttled scroll reads so it never fights the compositor.
export default function ScrollProgress() {
    const [progress, setProgress] = useState(0)

    useEffect(() => {
        let frame = 0
        const update = () => {
            frame = 0
            const doc = document.documentElement
            const scrollable = doc.scrollHeight - window.innerHeight
            setProgress(scrollable > 0 ? Math.min(1, window.scrollY / scrollable) : 0)
        }
        const onScroll = () => {
            if (!frame) frame = requestAnimationFrame(update)
        }
        update()
        window.addEventListener('scroll', onScroll, { passive: true })
        window.addEventListener('resize', onScroll)
        return () => {
            cancelAnimationFrame(frame)
            window.removeEventListener('scroll', onScroll)
            window.removeEventListener('resize', onScroll)
        }
    }, [])

    return (
        <div className="h-[2px] w-full bg-transparent">
            <div
                className="h-full origin-left"
                style={{
                    transform: `scaleX(${progress})`,
                    background: 'var(--brand-gradient)',
                    boxShadow: progress > 0.01 ? '0 0 12px rgb(79 125 255 / 0.8)' : 'none',
                }}
            />
        </div>
    )
}
