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
        <div className="h-[200rem] bg-black">
            hello
        </div>

    </>
    );
}
