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
            className="fixed inset-0 z-[100] flex items-center justify-center bg-black/80 p-4"
            onClick={onClose}
            role="dialog"
            aria-modal="true"
            aria-label={title ? `${title} demo video` : "Demo video"}
        >
            <div className="relative w-full max-w-4xl" onClick={(e) => e.stopPropagation()}>
                <button
                    onClick={onClose}
                    aria-label="Close demo"
                    className="absolute -top-11 right-0 text-4xl text-white/80 hover:text-white transition-colors"
                >
                    <BsX />
                </button>
                <video
                    key={src}
                    src={src}
                    controls
                    autoPlay
                    playsInline
                    className="w-full max-h-[80vh] rounded-xl bg-black shadow-2xl"
                />
            </div>
        </div>,
        document.body
    )
}
