import Reveal from './Reveal'
import Underline from './Underline'

// Shared heading for every page section so the eyebrow, size, weight, font and
// underline spacing stay identical site-wide.
export default function SectionHeading({ children, eyebrow, className = '' }) {
    return (
        <div className={`flex flex-col items-center pt-24 pb-6 text-center ${className}`}>
            {eyebrow && (
                <Reveal delay={0} from="down">
                    <p className="mb-3 font-mono text-xs uppercase tracking-[0.35em] text-accent">
                        {eyebrow}
                    </p>
                </Reveal>
            )}
            <Reveal delay={80}>
                <h2 className="font-serif text-4xl font-bold tracking-tight text-gray-900 dark:text-white sm:text-5xl">
                    {children}
                </h2>
            </Reveal>
            <Reveal delay={180} from="scale" className="mt-4">
                <Underline />
            </Reveal>
        </div>
    )
}
