import Image from "next/image"

export default function Projectcard({ title, image, link, demo, children }) {
    return (
        <div className="group flex flex-col sm:relative sm:block w-[90vw] max-w-[32rem] sm:h-[22rem] rounded-2xl overflow-hidden shadow-lg cursor-pointer"
             style={{ position: 'relative' }}>

            {/* Image layer */}
            <Image
                src={"/images/" + image}
                alt={title}
                width={704}
                height={512}
                className="sm:absolute sm:inset-0 w-full h-[14rem] sm:h-full object-cover transition-opacity duration-500 sm:group-hover:opacity-0"
            />

            {/* Text layer */}
            <div className="sm:absolute sm:inset-0 bg-[#1a1a2e] flex flex-col justify-center items-center px-6 py-5 sm:py-0 text-center opacity-100 sm:opacity-0 sm:group-hover:opacity-100 transition-opacity duration-500">
                <h3 className="text-xl font-bold font-serif text-white mb-3">{title}</h3>
                <div className="h-px w-12 bg-[#4070F4] mb-4" />
                <p className="text-gray-300 text-sm leading-relaxed">{children}</p>
                <div className="mt-5 flex gap-3">
                    {link && (
                        <a
                            href={link}
                            target="_blank"
                            rel="noreferrer"
                            className="px-5 py-1.5 rounded-full border border-[#4070F4] text-[#4070F4] text-sm hover:bg-[#4070F4] hover:text-white transition-colors"
                        >
                            View Project
                        </a>
                    )}
                    {demo && (
                        <a
                            href={demo}
                            target="_blank"
                            rel="noreferrer"
                            className="px-5 py-1.5 rounded-full border border-[#4070F4] text-[#4070F4] text-sm hover:bg-[#4070F4] hover:text-white transition-colors"
                        >
                            View Demo
                        </a>
                    )}
                </div>
            </div>
        </div>
    )
}
