import { useEffect, useRef, useState } from 'react'

/**
 * Scroll-reveal wrapper. The element renders displaced + blurred and settles
 * into place the first time it crosses into the viewport.
 *
 * Implemented with IntersectionObserver rather than CSS `animation-timeline`
 * so it behaves identically in Safari/Firefox, where scroll-driven animations
 * are still uneven.
 *
 * @param delay   ms to stagger this element behind its siblings
 * @param from    direction the element travels in from
 * @param as      element/component to render (defaults to a div)
 * @param once    replay every time it re-enters when false
 */
export default function Reveal({
    children,
    delay = 0,
    from = 'up',
    as: Tag = 'div',
    once = true,
    className = '',
    ...rest
}) {
    const ref = useRef(null)
    const [visible, setVisible] = useState(false)

    useEffect(() => {
        const el = ref.current
        if (!el) return

        // No IO (or reduced motion) — show immediately, never animate.
        const reduce =
            typeof window.matchMedia === 'function' &&
            window.matchMedia('(prefers-reduced-motion: reduce)').matches
        if (reduce || typeof IntersectionObserver === 'undefined') {
            setVisible(true)
            return
        }

        const observer = new IntersectionObserver(
            ([entry]) => {
                if (entry.isIntersecting) {
                    setVisible(true)
                    if (once) observer.unobserve(el)
                } else if (!once) {
                    setVisible(false)
                }
            },
            // Fire slightly before the element is fully on screen so the
            // motion is finishing, not starting, when the eye arrives.
            { threshold: 0.12, rootMargin: '0px 0px -8% 0px' }
        )
        observer.observe(el)
        return () => observer.disconnect()
    }, [once])

    const offsets = {
        up: { '--reveal-y': '32px' },
        down: { '--reveal-y': '-32px' },
        left: { '--reveal-x': '-40px', '--reveal-y': '0px' },
        right: { '--reveal-x': '40px', '--reveal-y': '0px' },
        scale: { '--reveal-y': '12px', '--reveal-scale': '0.94' },
        none: { '--reveal-y': '0px' },
    }

    return (
        <Tag
            ref={ref}
            className={`reveal ${visible ? 'is-visible' : ''} ${className}`}
            style={{ ...offsets[from], '--reveal-delay': `${delay}ms` }}
            {...rest}
        >
            {children}
        </Tag>
    )
}
