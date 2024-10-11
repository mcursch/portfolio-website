import Head from "next/head"
import Underline from "../components/Underline"
import {useEffect} from "react"
export default function email() {
    useEffect(() => {
        emailjs.init({
            publicKey: 'VRl9fnCYraFWFVAX3'
          })
    },[])
    const sendEmail = () => {
        console.log('hello')
    }
    return (
        <>
                <Head>
            <script type="text/javascript"
        src="https://cdn.jsdelivr.net/npm/@emailjs/browser@4/dist/email.min.js">
        </script>
        </Head>
        <div>
            <div className="h-screen w-full flex justify-center items-center">
                
                <div className="h-5/6 w-1/2">
                    <form className="h-full flex flex-col ">
                    <div className="h-20 w-full text-white bg-red-600 flex justify-center items-center">
                        <div class="flex justify-center items-center">
                            Warning!!! This part of the site is currently down for matinence (10/11/2024) and non-functional.If you would like to send me an email please email 
                            <div className="font-bold  text-black pl-1">
                                {"mattcurschman@gmail.com"}
                            </div>
                        </div>
                    </div>

                        <div className="w-full flex justify-center items-end h-14 text-white font-serif font-bold text-2xl">Email Form</div>
                        <Underline color="white"/>

                        <div className="flex flex-col h-full justify-center items-center">
                            <input type="text" placeholder="Name"
                            className="bg-[#010718] text-[#4070F4] border border-2 border-[#4070F4] w-2/3 h-12 rounded-full px-5 my-4" />
                            <input type="text" placeholder="Email"
                            className="bg-[#010718] text-[#4070F4] border border-2 border-[#4070F4] w-2/3 h-12 rounded-full px-5 my-4" />
                            <input type="text" placeholder="Subject"
                            className="bg-[#010718] text-[#4070F4] border border-2 border-[#4070F4] w-2/3 h-12 rounded-full px-5 my-4" />
                            <textarea type="text" placeholder="Content"
                            className="bg-[#010718] text-[#4070F4] border border-2 border-[#4070F4] w-2/3 h-[20rem] rounded-xl px-5 pt-5 flex justify-start items-start my-4 " />
                            <button type="button" className="text-white bg-[#4070F4] h-10 w-[10rem] rounded-full"  onClick={() => sendEmail()} >Send Email</button>
                        </div>
                        
                    </form>
                </div>
            </div>
        </div>
        </>

    )

}