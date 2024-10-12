import Underline from "./Underline"
import Typewriter from 'typewriter-effect'
import SocialIcon from "./SocialIcon"
import {BsFacebook, BsLinkedin, BsDownload, BsGithub, BsEnvelope } from "react-icons/bs"
export default function Footer () {
    return (
        <div className="h-[30rem] w-full">
            <div className="h-full w-full flex flex-col "> 
                <div className="w-full flex justify-center font-bold text-4xl font-serif text-white ">
                    Contact Me
                </div>
                <Underline color="white"/>
                <div className="h-full w-full  flex justify-center">
                    <div className="h-4/5 w-full flex flex-col ">
                        <div className="w-full flex justify-center">
                            <a href="mailto:mattcurschman@gmail.com" className="h-[4rem] w-[13rem] border-white border border-[2px] rounded-md
                            bg-[#4070F4] flex justify-center items-center text-white font-bold text-xl  mt-10 flex">
                                Email Me <BsEnvelope className="ml-2 text-3xl mt-1"/>
                            </a>
                        </div>
                        
                        <div className=" w-full  text-4xl font-serif font-bold text-white my-[2rem] flex justify-center">
                            <div className="w-1/3 flex justify-end ">
                                Together, we can  
                            </div>
                            <div className="pl-4 w-1/3  text-[#4070F4]">
                                <Typewriter
                                className="testThing"
                                options = {{
                                    strings: ['Make A Difference', 'Shape The Future', 'Change The World'],
                                    autoStart: true,
                                    loop: true
                                }}/>
                            </div>
                        </div>

                        <div className="h-full text-white  flex justify-center items-center">
                            <ul className="flex mx-2">
                                <li className="px-4 text-4xl text-gray-400">
                                    <a href="https://www.facebook.com/matthew.curschman" target="blank">
                                        <BsFacebook />
                                    </a>
                                </li>
                                <li className="px-4 text-4xl text-gray-400">
                                    <a href="https://www.linkedin.com/in/matthewcurschman/" target="blank">
                                        <BsLinkedin />
                                    </a>
                                </li>
                            
                                <li className="px-4 text-4xl text-gray-400"> 
                                    <a href="https://github.com/mcursch" target="blank">
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