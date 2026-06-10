import Link from "next/link"
import Underline from "./Underline"
import Typewriter from 'typewriter-effect'
import { BsFacebook, BsLinkedin, BsGithub, BsEnvelope } from "react-icons/bs"

export default function Footer() {
    return (
        <div className="h-[30rem] w-full dark:bg-[#111] bg-gray-100">
            <div className="h-full w-full flex flex-col">
                <div className="w-full flex justify-center font-bold text-4xl font-serif dark:text-white text-gray-900 pt-6">
                    Contact Me
                </div>
                <Underline />
                <div className="h-full w-full flex justify-center">
                    <div className="h-4/5 w-full flex flex-col">
                        <div className="w-full flex justify-center">
                            <Link href="/email" className="h-[4rem] w-[13rem] border-white border border-[2px] rounded-md
                            bg-[#4070F4] flex justify-center items-center text-white font-bold text-xl mt-10">
                                Email Me <BsEnvelope className="ml-2 text-3xl mt-1" />
                            </Link>
                        </div>

                        <div className="w-full text-4xl font-serif font-bold dark:text-white text-gray-900 my-[2rem] flex justify-center">
                            <div className="w-1/3 flex justify-end">
                                Together, we can
                            </div>
                            <div className="pl-4 w-1/3 text-[#4070F4]">
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
                                    <a href="https://www.facebook.com/matthew.curschman" target="_blank" rel="noreferrer">
                                        <BsFacebook />
                                    </a>
                                </li>
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
