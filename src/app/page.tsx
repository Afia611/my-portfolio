
"use client";

import { useState } from "react";
import Link from "next/link";
import {
  Mail,
  Phone,
  Download,
  Menu,
  X,
  ExternalLink,
  ArrowRight,
  Code2,
  BriefcaseBusiness,
  GraduationCap,
} from "lucide-react";
import { FaGithub, FaLinkedin } from "react-icons/fa";
import { projects } from "@/data/projects";

const skills = {
  Frontend: [
    "HTML",
    "CSS",
    "JavaScript",
    "TypeScript",
    "React",
    "Next.js",
  ],
  Backend: [
    "Node.js",
    "MongoDB",
    "Better Auth",
    "REST APIs",
  ],
  Tools: [
    "Git",
    "GitHub",
    "VS Code",
    "Tailwind CSS",
    "DaisyUI",
  ],
};

const navLinks = [
  "Home",
  "About",
  "Skills",
  "Education",
  "Experience",
  "Projects",
  "Contact",
];

export default function Home() {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <div className="min-h-screen bg-[#0B1120] text-slate-100">

      {/* NAVBAR */}
      <header className="sticky top-0 z-50 border-b border-slate-800 bg-[#0B1120]/95 backdrop-blur">
        <nav className="mx-auto flex max-w-6xl items-center justify-between px-5 py-5">
          <a
            href="#home"
            className="text-2xl font-bold text-cyan-400"
          >
            Afia<span className="text-white">.</span>
          </a>

          <div className="hidden items-center gap-6 md:flex">
            {navLinks.map((link) => (
              <a
                key={link}
                href={`#${link.toLowerCase()}`}
                className="text-sm text-slate-300 transition hover:text-cyan-400"
              >
                {link}
              </a>
            ))}
          </div>

          <button
            type="button"
            className="md:hidden"
            aria-label="Toggle menu"
            aria-expanded={menuOpen}
            onClick={() => setMenuOpen(!menuOpen)}
          >
            {menuOpen ? <X /> : <Menu />}
          </button>
        </nav>

        {menuOpen && (
          <div className="flex flex-col gap-4 border-t border-slate-800 px-6 py-5 md:hidden">
            {navLinks.map((link) => (
              <a
                key={link}
                href={`#${link.toLowerCase()}`}
                onClick={() => setMenuOpen(false)}
                className="text-slate-300 hover:text-cyan-400"
              >
                {link}
              </a>
            ))}
          </div>
        )}
      </header>

      <main>

        {/* HERO */}
        <section
          id="home"
          className="mx-auto flex min-h-[85vh] max-w-6xl flex-col-reverse items-center justify-center gap-12 px-5 py-20 md:flex-row"
        >
          <div className="flex-1">
            <p className="mb-4 font-medium text-cyan-400">
              Hello, I'm
            </p>

            <h1 className="text-5xl font-extrabold tracking-tight md:text-7xl">
              Afia Zahin
            </h1>

            <h2 className="mt-4 text-3xl font-bold text-cyan-400 md:text-4xl">
              Frontend Developer
            </h2>

            <p className="mt-6 max-w-xl leading-8 text-slate-400">
              I build responsive, accessible, and user-friendly web
              applications using React, Next.js, and TypeScript.
              I combine technical development with a background in
              business and marketing.
            </p>

            <div className="mt-8 flex flex-wrap gap-4">
              <a
                href="#projects"
                className="btn border-0 bg-cyan-400 text-slate-950 hover:bg-cyan-300"
              >
                View Projects
                <ArrowRight size={17} />
              </a>

              <a
                href="/resume.pdf"
                download
                className="btn border border-cyan-400 bg-transparent text-cyan-400 hover:bg-cyan-400 hover:text-slate-950"
              >
                <Download size={17} />
                Download Resume
              </a>
            </div>

            <div className="mt-8 flex gap-6">
              <a
                href="https://github.com/Afia611"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="GitHub"
                className="transition hover:text-cyan-400"
              >
                <FaGithub size={24} />
              </a>

              <a
                href="https://www.linkedin.com/in/afia-zahin-linked/"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="LinkedIn"
                className="transition hover:text-cyan-400"
              >
                <FaLinkedin size={24} />
              </a>

              <a
                href="mailto:afia.zahin06@gmail.com"
                aria-label="Email"
                className="transition hover:text-cyan-400"
              >
                <Mail size={24} />
              </a>
            </div>
          </div>

          <div className="relative flex h-64 w-64 shrink-0 items-center justify-center overflow-hidden rounded-full border-4 border-cyan-400 bg-slate-800 shadow-[0_0_65px_#22d3ee25] md:h-80 md:w-80">
            <Code2
              className="absolute text-cyan-400"
              size={80}
            />

            <img
              src="/profile.png"
              alt="Afia Zahin - Frontend Developer"
              className="relative z-10 h-full w-full object-cover object-center"/>
          </div>
        </section>

        {/* ABOUT */}
        <section
          id="about"
          className="scroll-mt-20 bg-[#111C30] px-5 py-20"
        >
          <div className="mx-auto max-w-6xl">
            <Heading title="About Me" />

            <p className="max-w-4xl leading-9 text-slate-300">
              I am a Frontend Developer with an MBA in Marketing
              from North South University. My professional experience
              in business analysis, banking, media planning, and client
              communication has strengthened my analytical thinking
              and problem-solving abilities.
              <br />
              <br />
              My programming journey began with HTML, CSS, and
              JavaScript and progressed to React, TypeScript, and
              Next.js. I enjoy transforming ideas into functional
              digital experiences, designing clean interfaces,
              and solving development problems.
              <br />
              <br />
              Beyond programming, I enjoy creative work, learning
              new technologies, and exploring the intersection
              of business, design, and technology.
            </p>
          </div>
        </section>

        {/* SKILLS */}
        <section
          id="skills"
          className="mx-auto max-w-6xl scroll-mt-20 px-5 py-20"
        >
          <Heading title="Technical Skills" />

          <div className="grid gap-6 md:grid-cols-3">
            {Object.entries(skills).map(([category, items]) => (
              <div
                key={category}
                className="rounded-2xl border border-slate-800 bg-[#111C30] p-6"
              >
                <h3 className="mb-5 text-xl font-semibold text-cyan-400">
                  {category}
                </h3>

                <div className="flex flex-wrap gap-3">
                  {items.map((skill) => (
                    <span
                      key={skill}
                      className="rounded-lg border border-slate-700 bg-slate-800 px-3 py-2 text-sm text-slate-200"
                    >
                      {skill}
                    </span>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* EDUCATION */}
        <section
          id="education"
          className="scroll-mt-20 bg-[#111C30] px-5 py-20"
        >
          <div className="mx-auto max-w-6xl">
            <Heading title="Education" />

            <div className="rounded-2xl border border-slate-700 p-7">
              <GraduationCap
                className="mb-4 text-cyan-400"
                size={34}
              />

              <h3 className="text-2xl font-bold">
                Master of Business Administration (MBA)
              </h3>

              <p className="mt-2 text-cyan-400">
                North South University, Dhaka
              </p>

              <p className="mt-2 text-slate-400">
                Major: Marketing
              </p>
            </div>
          </div>
        </section>

        {/* EXPERIENCE */}
        <section
          id="experience"
          className="mx-auto max-w-6xl scroll-mt-20 px-5 py-20"
        >
          <Heading title="Professional Experience" />

          <div className="rounded-2xl border border-slate-800 bg-[#111C30] p-7">
            <BriefcaseBusiness
              className="mb-4 text-cyan-400"
              size={34}
            />

            <h3 className="text-2xl font-bold">
              Business & Marketing Experience
            </h3>

            <p className="mt-4 leading-8 text-slate-400">
              Experience across business analysis, banking,
              media planning, client communication, research,
              and project coordination. These experiences support
              my ability to understand user needs, communicate
              effectively, and develop practical software solutions.
            </p>
          </div>
        </section>

        {/* PROJECTS */}
        <section
          id="projects"
          className="scroll-mt-20 bg-[#111C30] px-5 py-20"
        >
          <div className="mx-auto max-w-6xl">
            <Heading title="Featured Projects" />

            <div className="grid gap-7 md:grid-cols-3">
              {projects.map((project) => (
                <div
                  key={project.slug}
                  className="overflow-hidden rounded-2xl border border-slate-700 bg-[#0B1120] transition hover:-translate-y-1 hover:border-cyan-400"
                >
                  <div className="flex h-48 items-center justify-center bg-slate-800">
                    <img
                      src={project.image}
                      alt={`${project.name} screenshot`}
                      className="h-full w-full object-cover"
                      onError={(e) => {
                        e.currentTarget.style.display = "none";
                      }}
                    />
                  </div>

                  <div className="p-6">
                    <h3 className="text-2xl font-bold">
                      {project.name}
                    </h3>

                    <p className="mt-3 min-h-24 text-sm leading-7 text-slate-400">
                      {project.description}
                    </p>

                    <div className="my-5 flex flex-wrap gap-2">
                      {project.stack.slice(0, 3).map((tech) => (
                        <span
                          key={tech}
                          className="rounded bg-cyan-400/10 px-2 py-1 text-xs text-cyan-400"
                        >
                          {tech}
                        </span>
                      ))}
                    </div>

                    <Link
                      href={`/projects/${project.slug}`}
                      className="btn w-full border-0 bg-cyan-400 text-slate-950 hover:bg-cyan-300"
                    >
                      View Details
                      <ExternalLink size={16} />
                    </Link>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* CONTACT */}
        <section
          id="contact"
          className="mx-auto max-w-6xl scroll-mt-20 px-5 py-20"
        >
          <Heading title="Get In Touch" />

          <p className="mb-8 max-w-xl leading-8 text-slate-400">
            I'm open to frontend development opportunities,
            collaborations, and conversations about technology.
            Feel free to reach out!
          </p>

          <div className="flex flex-col gap-6">
            <a
              href="mailto:afia.zahin06@gmail.com"
              className="flex items-center gap-3 break-all hover:text-cyan-400"
            >
              <Mail className="shrink-0 text-cyan-400" />
              afia.zahin06@gmail.com
            </a>

            <a
              href="https://github.com/Afia611"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-3 hover:text-cyan-400"
            >
              <FaGithub className="text-cyan-400" size={24} />
              github.com/Afia611
            </a>

            <a
              href="https://www.linkedin.com/in/afia-zahin-linked/"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-3 hover:text-cyan-400"
            >
              <FaLinkedin className="text-cyan-400" size={24} />
              LinkedIn Profile
            </a>
          </div>
        </section>
      </main>

      {/* FOOTER */}
      <footer className="border-t border-slate-800 px-5 py-8 text-center text-sm text-slate-400">
        © {new Date().getFullYear()} Afia Zahin.
        Built with Next.js and Tailwind CSS.
      </footer>
    </div>
  );
}

function Heading({ title }: { title: string }) {
  return (
    <h2 className="mb-10 text-3xl font-bold md:text-4xl">
      {title}
      <span className="text-cyan-400">.</span>
    </h2>
  );
}
