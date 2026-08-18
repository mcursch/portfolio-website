/**
 * Soft, slowly drifting colour fields that sit behind a section's content.
 * Purely decorative — heavily blurred, low opacity, and pointer-transparent so
 * they read as lighting rather than shapes.
 */
export default function AmbientOrbs({ variant = 'a' }) {
    const sets = {
        a: [
            { className: 'left-[-10%] top-[-15%] h-[38rem] w-[38rem] bg-accent/25 animate-float' },
            { className: 'right-[-12%] bottom-[-20%] h-[32rem] w-[32rem] bg-accent-2/20 animate-float-slow' },
        ],
        b: [
            { className: 'right-[-8%] top-[-10%] h-[34rem] w-[34rem] bg-accent-3/20 animate-float-slow' },
            { className: 'left-[-14%] bottom-[-18%] h-[30rem] w-[30rem] bg-accent/20 animate-float' },
        ],
    }

    return (
        <div aria-hidden="true" className="pointer-events-none absolute inset-0 overflow-hidden">
            {sets[variant].map((orb, i) => (
                <div key={i} className={`absolute rounded-full blur-[110px] ${orb.className}`} />
            ))}
        </div>
    )
}
