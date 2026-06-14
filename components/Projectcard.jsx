import Image from "next/image"

export default function Projectcard({ title, subtitle, image, link, demo, children }) {
    return (
        <div className="group relative flex flex-col sm:block w-[90vw] sm:w-[28rem] max-w-[28rem] sm:h-[22rem] rounded-2xl overflow-hidden shadow-lg cursor-pointer">

            {/* Cover layer — real image when available, otherwise an accent gradient */}
            {image ? (
                <Image
                    src={"/images/" + image}
                    alt={title}
                    width={704}
                    height={512}
                    className="sm:absolute sm:inset-0 w-full h-[14rem] sm:h-full object-cover transition-opacity duration-500 sm:group-hover:opacity-0"
                />
            ) : (
                <div className="sm:absolute sm:inset-0 w-full h-[14rem] sm:h-full flex flex-col items-center justify-center text-center px-6 bg-gradient-to-br from-[#1a1a2e] via-[#1a1a2e] to-accent transition-opacity duration-500 sm:group-hover:opacity-0">
                    <h3 className="text-2xl font-bold font-serif text-white">{title}</h3>
                    {subtitle && <p className="mt-2 text-sm text-gray-300">{subtitle}</p>}
                </div>
            )}

            {/* Detail layer (revealed on hover) */}
            <div className="sm:absolute sm:inset-0 bg-[#1a1a2e] flex flex-col justify-center items-center px-6 py-5 sm:py-0 text-center opacity-100 sm:opacity-0 sm:group-hover:opacity-100 transition-opacity duration-500">
                <h3 className="text-xl font-bold font-serif text-white mb-1">{title}</h3>
                {subtitle && <p className="text-accent text-sm mb-3">{subtitle}</p>}
                <div className="h-px w-12 bg-accent mb-4" />
                <p className="text-gray-300 text-sm leading-relaxed">{children}</p>
                <div className="mt-5 flex gap-3">
                    {link && (
                        <a
                            href={link}
                            target="_blank"
                            rel="noreferrer"
                            className="px-5 py-1.5 rounded-full border border-accent text-accent text-sm hover:bg-accent hover:text-white transition-colors"
                        >
                            View Project
                        </a>
                    )}
                    {demo && (
                        <a
                            href={demo}
                            target="_blank"
                            rel="noreferrer"
                            className="px-5 py-1.5 rounded-full border border-accent text-accent text-sm hover:bg-accent hover:text-white transition-colors"
                        >
                            View Demo
                        </a>
                    )}
                </div>
            </div>
        </div>
    )
}
