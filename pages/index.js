import Head from 'next/head';
import styles from '../styles/Home.module.css';
import Link from 'next/link';
import Image from 'next/image';
import Navbar from '../components/Navbar';
import Typewriter from 'typewriter-effect'
import Skillgrid from '../components/Skillgrid';
import {useRef, useEffect, useState} from 'react'
import { document } from 'postcss';
export default function Home() {
  const bottomOfPageRef = useRef();
  const topOfPageRef = useRef();
  const [bottomElementVisible, setBottomElementVisible] = useState();
  const [topElementVisible, setTopElementVisble] = useState();

  useEffect(()=> {

    const observer1 = new IntersectionObserver((entries) => {
      const entry = entries[0]
      if(window.scrollY < 1300) {
        setBottomElementVisible(entry.isIntersecting)
      }

    })
    const observer2 = new IntersectionObserver((entries) => {
      const entry = entries[0]
      setTopElementVisble(entry.isIntersecting)
    })
    observer1.observe(bottomOfPageRef.current)
    observer2.observe(topOfPageRef.current)
  }, [])
  return (
    <>
    <div className=" h-full w-full bg-[#010718] ">
      <Navbar isTopVisible={topElementVisible} isBotVisible={bottomElementVisible}/>
      <div className="h-screen  w-full bg-[#010718] text-white font-serif " >
        <div className="h-full w-full flex flex-col  justify-center pl-40 pb-40 ">
          <div className="h-fit w-full   text-8.5xl ">
            Matt Curschman
          </div>

          <div className="flex flex-row">
            <div className="h-40 w-fit  text-7xl  pl-20">
              I am a 
            </div>
            <div className="text-7xl pl-4 text-[#4070F4]">
               <Typewriter
                className="testThing"
                options = {{
                    strings: ['Computer Engineer', 'Software Developer', 'Fullstack Creator'],
                    autoStart: true,
                    loop: true
                }}
            />

            </div>
           
          </div>
          <div ref={topOfPageRef}></div>


        </div>
          
        
        

      </div>

      <div  className="h-screen bg-[#111] mx-auto flex font-serif">
        <div className="  h-full w-full flex justify-center items-center">
          <Image
          className="rounded-full"
            src="/images/picture.png"
            width={800}
            height={800}
            />
        </div>
        <div className=" h-full w-full">
          <div className="whitespace-pre-wrap text-white text-xl m-20">
          My name is Matthew Curschman 
          {'\n'}{'\n'}
          I have a degree in Computer Engineering from the University of Florida. Go Gators!
          {'\n'}{'\n'}
          I currently work as a Full-Stack web Developer, with a heavy lean on back-end technologies.I have experience
          with Database Creation, Parsing, Integration, and Utilization on large scale projects. My current work project
          is a Parsing application designed to parse large Google Sheets documents, extrapolate their data,and store it
          in a database, where it can then be accessed as an API backend, queried for further information, or have
          subsequent operations ran on it (Conflux Parser).
          <div  ref={bottomOfPageRef}>
          </div>
          {'\n'}
          My current side projects are a  lexicographic parser designed to parse and read mathematical equations and provide
          their derivative (derivApp), and a personal tracker (Myday)
          {'\n'}{'\n'}
          My friends describe me as funny, and I like to describe myself as determined. I am an Eagle Scout, have a
          Black Belt in Karate, and enjoy both piano and art as my hobbies. My favorite subjects are
          Computer Science (duh), Math, and Art.

          </div>
        </div>

        
      </div>
      <div   className="h-screen bg-[#eee]">
        <div className="pt-20">
          <Skillgrid/>
        </div>
      </div>


    </div>

    

      
    </>
 
   
  );
}