import Head from 'next/head';
import Image from 'next/image';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import Typewriter from 'typewriter-effect'
import Skillgrid from '../components/Skillgrid';
import SectionHeading from '../components/SectionHeading';
import Projectgrid from '../components/Projectgrid';
import ShaderBackground from '../components/ShaderBackground';
import Container from '../components/Container';

export default function Home() {
  return (
    <>
      <Head>
        <title>Matt Curschman — Computer Engineer & Software Developer</title>
        <meta name="description" content="Portfolio of Matt Curschman, a full-stack software developer and computer engineer." />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <div className="h-full w-full bg-base dark:bg-base-dark">
        <Navbar />

        {/* Hero */}
        <div className="relative h-screen w-full overflow-hidden font-serif">
          {/* Animated shader background */}
          <div className="absolute inset-0 z-0">
            <ShaderBackground />
          </div>
          {/* Legibility scrim — keeps text readable over the shader in both themes */}
          <div className="absolute inset-0 z-0 bg-black/30 dark:bg-black/30" />

          <div className="relative z-10 h-full w-full flex flex-col justify-center px-6 md:pl-40 pb-20 md:pb-40 text-white">
            <div className="h-fit w-full text-5xl sm:text-6xl md:text-8xl lg:text-8.5xl drop-shadow-lg break-words">
              Matt Curschman
            </div>
            <div className="mt-2 flex flex-col md:flex-row md:items-baseline">
              <div className="text-2xl sm:text-4xl md:text-7xl md:pl-20 drop-shadow-lg">
                I am a
              </div>
              <div className="text-2xl sm:text-4xl md:text-7xl md:pl-4 text-accent drop-shadow-lg min-h-[2.5rem] md:min-h-[5rem] break-words">
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
        <div id="about-me" className="min-h-screen bg-panel dark:bg-panel-dark font-serif flex flex-col">
          <SectionHeading>About Me</SectionHeading>
          <div className="flex-1 flex items-center">
            <Container className="py-12 flex flex-col md:flex-row items-center gap-8 md:gap-16">
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
              </div>
            </Container>
          </div>
        </div>

        {/* Skills */}
        <div id="skills" className="min-h-screen bg-base dark:bg-base-dark">
          <div className="h-full w-full flex flex-col items-center">
            <SectionHeading>Skills</SectionHeading>
            <Container className="flex-1 pt-5">
              <Skillgrid />
            </Container>
          </div>
        </div>

        {/* Projects */}
        <div id="projects" className="min-h-screen bg-panel dark:bg-panel-dark dark:text-white text-gray-900">
          <div className="h-full w-full flex flex-col items-center">
            <SectionHeading>Projects</SectionHeading>
            <Container className="flex-1">
              <Projectgrid />
            </Container>
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
