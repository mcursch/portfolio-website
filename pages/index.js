import Head from 'next/head'
import Image from 'next/image'
import Navbar from '../components/Navbar'
import Footer from '../components/Footer'
import Hero from '../components/Hero'
import Skillgrid from '../components/Skillgrid'
import SectionHeading from '../components/SectionHeading'
import Projectgrid from '../components/Projectgrid'
import Container from '../components/Container'
import Reveal from '../components/Reveal'
import AmbientOrbs from '../components/AmbientOrbs'

// Short, scannable facts that sit under the About copy.
const facts = ['Eagle Scout', 'Karate Black Belt', 'Pianist', 'Artist', 'Go Gators 🐊']

export default function Home() {
  return (
    <>
      <Head>
        <title>Matt Curschman — Computer Engineer & Software Developer</title>
        <meta name="description" content="Portfolio of Matt Curschman, a full-stack software developer and computer engineer." />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <div className="w-full bg-base font-sans dark:bg-base-dark">
        <Navbar />

        <Hero />

        {/* About */}
        <section id="about-me" className="relative overflow-hidden bg-panel dark:bg-panel-dark">
          <AmbientOrbs variant="a" />
          <div className="relative">
            <SectionHeading eyebrow="Who I am">About Me</SectionHeading>

            <Container className="flex flex-col items-center gap-10 pb-24 md:flex-row md:items-start md:gap-16">
              {/* Portrait: gradient halo behind, slow-spinning ring around */}
              <Reveal from="left" className="flex-shrink-0">
                <div className="group relative mx-auto h-56 w-56 md:h-80 md:w-80">
                  <div
                    className="absolute -inset-3 animate-spin-slow rounded-full opacity-70 blur-md transition-opacity duration-500 group-hover:opacity-100"
                    style={{ background: 'conic-gradient(from 0deg, var(--accent), var(--accent-2), var(--accent-3), var(--accent))' }}
                  />
                  <Image
                    className="relative h-full w-full rounded-full object-cover shadow-2xl transition-transform duration-500 ease-spring group-hover:scale-[1.03]"
                    src="/images/picture.png"
                    width={380}
                    height={380}
                    alt="Matt Curschman"
                  />
                </div>
              </Reveal>

              <div className="flex-1 space-y-5 text-lg leading-relaxed text-gray-700 dark:text-gray-300">
                <Reveal from="right" delay={80}>
                  <p className="font-serif text-3xl font-semibold text-gray-900 dark:text-white">
                    Hi, I&apos;m <span className="text-gradient">Matthew Curschman</span>.
                  </p>
                </Reveal>

                <Reveal from="right" delay={160}>
                  <p>
                    I have a degree in Computer Engineering from the University of Florida. Go Gators!
                  </p>
                </Reveal>

                <Reveal from="right" delay={240}>
                  <p>
                    I currently work as a Full-Stack Web Developer with a heavy lean on back-end technologies.
                    I have experience with database creation, parsing, integration, and utilization on large-scale
                    projects. My current work project is <span className="font-semibold text-gray-900 dark:text-white">Conflux Parser</span> —
                    an application that parses large Google Sheets documents, extrapolates their data, and stores
                    it in a database for API access and downstream querying.
                  </p>
                </Reveal>

                <Reveal from="right" delay={320}>
                  <p>
                    On the side I&apos;m building <span className="font-semibold text-gray-900 dark:text-white">derivApp</span>, a
                    lexicographic parser for mathematical derivatives, and{' '}
                    <span className="font-semibold text-gray-900 dark:text-white">Myday</span>, a personal tracker.
                  </p>
                </Reveal>

                <Reveal from="right" delay={400}>
                  <div className="flex flex-wrap gap-2 pt-2">
                    {facts.map((fact, i) => (
                      <span
                        key={fact}
                        style={{ transitionDelay: `${i * 30}ms` }}
                        className="rounded-full border border-gray-300 bg-white/70 px-3.5 py-1.5 font-mono text-xs uppercase tracking-wider text-gray-600 transition-all duration-300 ease-spring hover:-translate-y-0.5 hover:border-accent hover:text-accent dark:border-white/10 dark:bg-white/5 dark:text-gray-400"
                      >
                        {fact}
                      </span>
                    ))}
                  </div>
                </Reveal>
              </div>
            </Container>
          </div>
        </section>

        {/* Skills */}
        <section id="skills" className="relative overflow-hidden bg-base dark:bg-base-dark">
          <AmbientOrbs variant="b" />
          <div className="relative flex w-full flex-col items-center">
            <SectionHeading eyebrow="What I work with">Skills</SectionHeading>
            <Container className="pb-24">
              <Skillgrid />
            </Container>
          </div>
        </section>

        {/* Projects */}
        <section id="projects" className="relative overflow-hidden bg-panel text-gray-900 dark:bg-panel-dark dark:text-white">
          <AmbientOrbs variant="a" />
          <div className="relative flex w-full flex-col items-center">
            <SectionHeading eyebrow="Things I&rsquo;ve built">Projects</SectionHeading>
            <Container className="pb-24">
              <Projectgrid />
            </Container>
          </div>
        </section>

        {/* Contact */}
        <div id="contact">
          <Footer />
        </div>
      </div>
    </>
  )
}
