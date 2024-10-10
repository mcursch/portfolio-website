import Underline from "./Underline"
import Typewriter from 'typewriter-effect'

export default function Footer () {
    return (
        <div className="h-[30rem] w-full">
            <div className="h-full w-full flex flex-col "> 
                <div className="w-full flex justify-center font-bold text-4xl font-serif text-white">
                    Contact Me
                </div>
                <Underline color="white"/>
                <div className="h-full w-full bg-white flex justify-center">
                    <div className="h-4/5 w-full flex flex-col bg-green-200">
                        <div className="w-full flex justify-center">
                            <div className="h-[5rem] w-[15rem] border-white border border-[2px] 
                            bg-[#4070F4] flex justify-start items-center text-white font-bold text-xl pl-4 ">
                                Email Me 
                            </div>


                        </div>
                        
                        <div className="h-20 w-full text-4xl font-serif font-bold text-white border border-2 border-black flex justify-center">
                            <div className="w-1/3 flex justify-end bg-blue-800">
                                Togther, we can  
                            </div>
                            <div className="pl-4 w-1/3 bg-black text-[#4070F4]">
                                <Typewriter
                                className="testThing"
                                options = {{
                                    strings: ['change the world'],
                                    autoStart: true,
                                    loop: true
                                }}/>
                            </div>
                        </div>

                        <div className="my-10 text-white border border-2 border-black flex justify-center ">
                            Socials
                        </div>


                    </div>
                   
                </div>
               
                

            </div>

           
           
            

        </div>
    )
}