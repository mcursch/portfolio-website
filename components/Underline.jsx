// Brand-gradient rule used under section headings. Grows out from the centre
// when its <Reveal> parent becomes visible.
export default function Underline({ className = '' }) {
    return (
        <div className={`flex items-center justify-center ${className}`}>
            <span
                className="block h-[3px] w-24 rounded-full"
                style={{ background: 'var(--brand-gradient)', backgroundSize: '200% auto' }}
            />
        </div>
    )
}
