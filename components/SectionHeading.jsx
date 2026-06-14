import Underline from './Underline'

// Shared heading for every page section so size, weight, font, and the
// underline spacing stay identical site-wide.
export default function SectionHeading({ children }) {
    return (
        <div className="flex flex-col items-center pt-16 pb-2">
            <h2 className="font-serif font-bold text-4xl dark:text-white text-gray-900 mb-3">
                {children}
            </h2>
            <Underline />
        </div>
    )
}
