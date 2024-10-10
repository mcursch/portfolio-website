import Link from 'next/link';
import Head from 'next/head';
import Script from 'next/script';
import Typewriter from 'typewriter-effect'
import {useRef, useEffect, useState} from 'react'

export default function FirstPost() {
    const handleScroll = () => {
        console.log('scroll')
    }
    useEffect(() => {
        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
      });

    return (
        <>
        <div className="h-[200rem] bg-blue-500">
            <div className="h-40 flex items-center justify-center">
                <div className="h-20 w-20 bg-white">
                    <div class="w-full h-full relative">
                    <div class="w-full h-full absolute ">
                        <div className="h-full w-full flex justify-center items-center">
                            hello
                        </div>
                    </div>
                    <div className="h-full w-full  absolute">
                    <div className="h-full w-full flex justify-center items-center opacity-0 bg-black/80 hover:opacity-100 duration-300">
                            goodbye
                        </div>
                    </div>
                    </div>
                </div>
            </div>

        </div>
        
        

    </>
    );
}
