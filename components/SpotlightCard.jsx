import { useRef } from 'react'

/**
 * Card shell with two cursor-driven effects layered on:
 *  - a radial "spotlight" glow that follows the pointer (CSS `.spotlight`,
 *    fed the --mx/--my custom properties from here), and
 *  - a subtle 3D tilt away from centre (CSS `.tilt`, fed --rx/--ry).
 *
 * Both are skipped on coarse pointers and when the user prefers reduced
 * motion, where the card is simply a static surface.
 */
export default function SpotlightCard({
    children,
    className = '',
    tilt = true,
    maxTilt = 7,
    ...rest
}) {
    const ref = useRef(null)

    const enabled = () =>
        typeof window !== 'undefined' &&
        !window.matchMedia('(pointer: coarse)').matches &&
        !window.matchMedia('(prefers-reduced-motion: reduce)').matches

    const onMove = (e) => {
        const el = ref.current
        if (!el || !enabled()) return
        const rect = el.getBoundingClientRect()
        const px = (e.clientX - rect.left) / rect.width
        const py = (e.clientY - rect.top) / rect.height
        el.style.setProperty('--mx', `${px * 100}%`)
        el.style.setProperty('--my', `${py * 100}%`)
        if (tilt) {
            el.style.transition = 'transform 0.1s linear, box-shadow 0.4s ease'
            el.style.setProperty('--ry', `${(px - 0.5) * maxTilt * 2}deg`)
            el.style.setProperty('--rx', `${-(py - 0.5) * maxTilt * 2}deg`)
        }
    }

    const onLeave = () => {
        const el = ref.current
        if (!el) return
        // Longer, springy return so the card settles rather than snapping.
        el.style.transition = 'transform 0.6s cubic-bezier(0.34, 1.56, 0.64, 1), box-shadow 0.4s ease'
        el.style.setProperty('--rx', '0deg')
        el.style.setProperty('--ry', '0deg')
    }

    return (
        <div
            ref={ref}
            onMouseMove={onMove}
            onMouseLeave={onLeave}
            className={`spotlight ${tilt ? 'tilt' : ''} ${className}`}
            {...rest}
        >
            {children}
        </div>
    )
}
