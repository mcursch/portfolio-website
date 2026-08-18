import { useRef } from 'react'

/**
 * Wraps any element so it drifts toward the cursor while hovered and springs
 * back on exit — the "magnetic button" interaction. Pointer-coarse devices are
 * skipped entirely (nothing to be magnetic toward).
 *
 * @param strength how far the element may travel, as a fraction of the offset
 */
export default function MagneticButton({ children, strength = 0.3, className = '', as: Tag = 'div' }) {
    const ref = useRef(null)

    const onMove = (e) => {
        const el = ref.current
        if (!el || window.matchMedia('(pointer: coarse)').matches) return
        const rect = el.getBoundingClientRect()
        const x = e.clientX - (rect.left + rect.width / 2)
        const y = e.clientY - (rect.top + rect.height / 2)
        el.style.transition = 'transform 0.12s linear'
        el.style.transform = `translate3d(${x * strength}px, ${y * strength}px, 0)`
    }

    const onLeave = () => {
        const el = ref.current
        if (!el) return
        el.style.transition = 'transform 0.55s cubic-bezier(0.34, 1.56, 0.64, 1)'
        el.style.transform = 'translate3d(0, 0, 0)'
    }

    return (
        <Tag
            ref={ref}
            onMouseMove={onMove}
            onMouseLeave={onLeave}
            className={`inline-block will-change-transform ${className}`}
        >
            {children}
        </Tag>
    )
}
