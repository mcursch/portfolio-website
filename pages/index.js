import Head from 'next/head';
import styles from '../styles/Home.module.css';
import Link from 'next/link';
import Image from 'next/image';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import Typewriter from 'typewriter-effect'
import Skillgrid from '../components/Skillgrid';
import { useRef, useEffect, useState } from 'react'
import Underline from '../components/Underline';
import Projectgrid from '../components/Projectgrid';

export default function Home() {
  const bottomOfPageRef = useRef();
  const [bottomElementVisible, setBottomElementVisible] = useState();

  useEffect(() => {
    const observer1 = new IntersectionObserver((entries) => {
      const entry = entries[0]
      if (window.scrollY < 1300) {
        setBottomElementVisible(entry.isIntersecting)
      }
    })
    observer1.observe(bottomOfPageRef.current)
  }, [])

  return (
    <>
      <div className="h-full w-full dark:bg-[#010718] bg-white">
        <Navbar isBotVisible={bottomElementVisible} />

        {/* Hero */}
        <div className="h-screen w-full dark:bg-[#010718] bg-white dark:text-white text-gray-900 font-serif">
          <div className="h-full w-full flex flex-col justify-center px-6 md:pl-40 pb-20 md:pb-40">
            <div className="h-fit w-full text-4xl md:text-8xl lg:text-8.5xl">
              Matt Curschman
            </div>
            <div className="flex flex-row">
              <div className="h-16 md:h-40 w-fit text-3xl md:text-7xl pl-4 md:pl-20">
                I am a
              </div>
              <div className="text-3xl md:text-7xl pl-4 text-[#4070F4]">
                <Typewriter
                  options={{
                    strings: ['Computer Engineer', 'Software Developer', 'Fullstack Creator'],
                    autoStart: true,
                    loop: true
                  }}
                />
              </div>
            </div>
          </div>
        </div>

        {/* About */}
        <div id="about-me" className="min-h-screen dark:bg-[#111] bg-gray-100 font-serif flex flex-col">
          <div className="pt-16 pb-4 w-full flex justify-center dark:text-white text-gray-900 text-4xl">
            About Me
          </div>
          <Underline />
          <div className="flex-1 flex items-center">
            <div className="max-w-5xl mx-auto w-full px-6 md:px-12 py-12 flex flex-col md:flex-row items-center gap-8 md:gap-16">
              <div className="flex-shrink-0 flex justify-center">
                <Image
                  className="rounded-full shadow-lg w-48 h-48 md:w-[380px] md:h-[380px]"
                  src="/images/picture.png"
                  width={380}
                  height={380}
                  alt="Matt Curschman"
                />
              </div>
              <div className="flex-1 space-y-5 text-lg leading-relaxed dark:text-gray-300 text-gray-700">
                <p className="text-2xl font-semibold dark:text-white text-gray-900">
                  Hi, I'm Matthew Curschman.
                </p>
                <p>
                  I have a degree in Computer Engineering from the University of Florida. Go Gators!
                </p>
                <p>
                  I currently work as a Full-Stack Web Developer with a heavy lean on back-end technologies.
                  I have experience with database creation, parsing, integration, and utilization on large-scale
                  projects. My current work project is Conflux Parser — an application that parses large Google
                  Sheets documents, extrapolates their data, and stores it in a database for API access and
                  downstream querying.
                </p>
                <p>
                  On the side I'm building derivApp, a lexicographic parser for mathematical derivatives, and
                  Myday, a personal tracker.
                </p>
                <p>
                  Outside of engineering: Eagle Scout, Black Belt in Karate, piano player, and artist.
                  My favorite subjects are Computer Science, Math, and Art.
                </p>
                <div ref={bottomOfPageRef} />
              </div>
            </div>
          </div>
        </div>

        {/* Skills */}
        <div id="skills" className="min-h-screen dark:bg-slate-800 bg-[#eee]">
          <div className="h-full w-full flex flex-col items-center">
            <div className="h-[8rem] flex items-end font-serif text-4xl dark:text-white text-gray-900">
              Skills
            </div>
            <Underline />
            <div className="flex-1 w-full">
              <div className="pt-5">
                <Skillgrid />
              </div>
            </div>
          </div>
        </div>

        {/* Projects */}
        <div id="projects" className="min-h-screen dark:bg-[#111] bg-gray-100 dark:text-white text-gray-900">
          <div className="h-full w-full flex flex-col items-center">
            <div className="h-[8rem] flex items-end font-serif text-4xl">
              Projects
            </div>
            <Underline />
            <div className="flex-1 w-full">
              <Projectgrid />
            </div>
          </div>
        </div>

        {/* Contact */}
        <div id="contact">
          <Footer />
        </div>
      </div>
    </>
  );
}
