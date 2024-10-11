import Head from 'next/head';
import styles from '../styles/Home.module.css';
import Link from 'next/link';
import Image from 'next/image';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import Typewriter from 'typewriter-effect'
import Skillgrid from '../components/Skillgrid';
import {useRef, useEffect, useState} from 'react'
import { document } from 'postcss';
import Underline from '../components/Underline';
import Projectgrid from '../components/Projectgrid';
export default function Home() {
  const bottomOfPageRef = useRef();
  const [bottomElementVisible, setBottomElementVisible] = useState();

  useEffect(()=> {
    
    const observer1 = new IntersectionObserver((entries) => {
      const entry = entries[0]
      if(window.scrollY < 1300) {
        setBottomElementVisible(entry.isIntersecting)
      }

    })
  
    observer1.observe(bottomOfPageRef.current)
  }, [])
  return (
    <>

    <div className=" h-full w-full bg-[#010718] ">
      <Navbar isBotVisible={bottomElementVisible}/>
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
        </div>
      </div>

      <div id="about-me"  className="h-screen bg-[#111] mx-auto flex font-serif">
        <div className="flex flex-col h-full w-full ">
          <div className="h-[8rem] w-full flex justify-center items-end text-white text-4xl font-serif">
              About Me
          </div>
          <Underline color="white"/>
          <div className="flex-1  text-black">
            <div className="h-full w-full flex flex-row justify-center items-center">
            <div className="h-2/3 w-1/2 border-black border-2">
              <div className="h-full w-full flex justify-center items-center">
                <div>
                  <Image
                  className="rounded-full"
                    src="/images/picture.png"
                    width={600}
                    height={600}
                    />
                </div>
              </div>
            </div>
            <div className="h-2/3 w-1/2 border-black border-2">
            <div className="whitespace-pre-wrap text-white text-mlg mr-3">
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
          </div>
        </div>
      </div>
      <div id="skills"  className="h-screen bg-[#eee]">
        <div className="h-full w-full flex flex-col items-center"> 
                <div className="h-[8rem] flex items-end font-serif text-4xl">
                  Skills
                </div>
                <Underline color="black"/>
                <div className="flex-1  w-full">
                  <div className="pt-5">
                    <Skillgrid/>
                  </div>
                </div>

        </div>
      </div>


      <div id="projects" className="h-screen bg-[#111] text-white">
        <div className="h-full w-full flex flex-col items-center">
          <div className="h-[8rem] flex items-end font-serif text-4xl">
            Projects
          </div>
          <Underline color="white"/>
          <div className="flex-1 w-full">
            <Projectgrid/>

          </div>


        </div>
      </div>

      <div id="contact">
        <Footer/>
      </div>
    </div>
    </>
  );
}