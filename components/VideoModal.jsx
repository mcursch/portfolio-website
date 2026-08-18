import { useEffect } from "react"
import { createPortal } from "react-dom"
import { BsX } from "react-icons/bs"

// Rendered into document.body via a portal so the card's `overflow-hidden`
// never clips it. Closes on backdrop click, the X button, or Escape.
export default function VideoModal({ open, src, title, onClose }) {
    useEffect(() => {
        if (!open) return
        const onKey = (e) => {
            if (e.key === "Escape") onClose()
        }
        document.addEventListener("keydown", onKey)
        // Lock background scroll while the modal is open.
        const prevOverflow = document.body.style.overflow
        document.body.style.overflow = "hidden"
        return () => {
            document.removeEventListener("keydown", onKey)
            document.body.style.overflow = prevOverflow
        }
    }, [open, onClose])

    if (!open || typeof document === "undefined") return null

    return createPortal(
        <div
            className="animate-fade-in fixed inset-0 z-[100] flex items-center justify-center bg-black/80 p-4 backdrop-blur-md [animation-duration:250ms]"
            onClick={onClose}
            role="dialog"
            aria-modal="true"
            aria-label={title ? `${title} demo video` : "Demo video"}
        >
            {/* Scales up as it fades in so the video feels like it opens *from*
                the card rather than just appearing. */}
            <div
                className="animate-pop-in relative w-full max-w-4xl opacity-0"
                onClick={(e) => e.stopPropagation()}
            >
                <div className="mb-3 flex items-center justify-between">
                    {title && (
                        <h3 className="font-serif text-lg text-white/90">{title}</h3>
                    )}
                    <button
                        onClick={onClose}
                        aria-label="Close demo"
                        className="ml-auto flex h-10 w-10 items-center justify-center rounded-full border border-white/20 text-3xl text-white/80 transition-all duration-300 ease-spring hover:rotate-90 hover:border-white hover:text-white"
                    >
                        <BsX />
                    </button>
                </div>
                <video
                    key={src}
                    src={src}
                    controls
                    autoPlay
                    playsInline
                    className="max-h-[80vh] w-full rounded-2xl bg-black shadow-2xl ring-1 ring-white/10"
                />
            </div>
        </div>,
        document.body
    )
}
