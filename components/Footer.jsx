import Link from "next/link"
import SectionHeading from "./SectionHeading"
import Typewriter from 'typewriter-effect'
import { BsLinkedin, BsGithub, BsEnvelope } from "react-icons/bs"

export default function Footer() {
    return (
        <div className="min-h-[30rem] w-full bg-base dark:bg-base-dark pb-8">
            <div className="h-full w-full flex flex-col">
                <SectionHeading>Contact Me</SectionHeading>
                <div className="h-full w-full flex justify-center">
                    <div className="h-4/5 w-full flex flex-col">
                        <div className="w-full flex justify-center">
                            <Link href="/email" className="inline-flex items-center gap-2 px-8 py-3 mt-10 rounded-full bg-accent text-white font-semibold text-lg shadow-sm hover:bg-accent-hover transition-colors">
                                Email Me <BsEnvelope className="text-xl" />
                            </Link>
                        </div>

                        <div className="w-full text-2xl sm:text-4xl font-serif font-bold dark:text-white text-gray-900 my-8 flex flex-col sm:flex-row justify-center items-center text-center sm:text-left gap-1 sm:gap-0 px-4">
                            <div className="sm:w-1/3 sm:flex sm:justify-end">
                                Together, we can
                            </div>
                            <div className="sm:pl-4 sm:w-1/3 text-accent min-h-[2rem]">
                                <Typewriter
                                    options={{
                                        strings: ['Make A Difference', 'Shape The Future', 'Change The World'],
                                        autoStart: true,
                                        loop: true
                                    }}
                                />
                            </div>
                        </div>

                        <div className="h-full flex justify-center items-center">
                            <ul className="flex mx-2">
                                <li className="px-4 text-4xl dark:text-gray-400 text-gray-600">
                                    <a href="https://www.linkedin.com/in/matthewcurschman/" target="_blank" rel="noreferrer">
                                        <BsLinkedin />
                                    </a>
                                </li>
                                <li className="px-4 text-4xl dark:text-gray-400 text-gray-600">
                                    <a href="https://github.com/mcursch" target="_blank" rel="noreferrer">
                                        <BsGithub />
                                    </a>
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}
