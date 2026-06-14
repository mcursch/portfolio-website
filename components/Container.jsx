// Single source of truth for horizontal content margins. Every section routes
// its content through this so the whole site shares one consistent gutter/width.
export default function Container({ className = '', children }) {
    return (
        <div className={`w-full max-w-5xl mx-auto px-6 ${className}`}>
            {children}
        </div>
    )
}
