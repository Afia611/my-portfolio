
"use client";

import { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { projects } from "@/data/projects";

import {
  ArrowRight,
  Download,
  ExternalLink,
  Mail,
  Menu,
  X,
  Code2,
  GraduationCap,
  BriefcaseBusiness,
} from "lucide-react";

import { FaGithub, FaLinkedin } from "react-icons/fa";

const navigation = [
  { name: "Home", href: "#home" },
  { name: "About", href: "#about" },
  { name: "Skills", href: "#skills" },
  { name: "Education", href: "#education" },
  { name: "Experience", href: "#experience" },
  { name: "Projects", href: "#projects" },
  { name: "Contact", href: "#contact" },
];

const skills = [
  "HTML5",
  "CSS3",
  "JavaScript",
  "TypeScript",
  "React",
  "Next.js",
  "Node.js",
  "Tailwind CSS",
  "DaisyUI",
  "Context API",
  "REST API",
  "MongoDB",
  "Better Auth",
  "Git",
  "GitHub",
  "Responsive Design",
];

export default function Home() {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <main className="min-h-screen bg-[#0B1120] text-white">

      {/* NAVBAR */}
      <header className="sticky top-0 z-50 border-b border-slate-800 bg-[#0B1120]/95 backdrop-blur">
        <nav className="mx-auto flex max-w-6xl items-center justify-between px-5 py-5">
          <Link
            href="#home"
            className="text-2xl font-bold text-cyan-400"
          >
            Afia.
          </Link>

          <div className="hidden items-center gap-7 md:flex">
            {navigation.map((item) => (
              <Link
                key={item.name}
                href={item.href}
                className="text-sm text-slate-300 transition hover:text-cyan-400"
              >
                {item.name}
              </Link>
            ))}
          </div>

          <button
            type="button"
            className="text-cyan-400 md:hidden"
            onClick={() => setMenuOpen((prev) => !prev)}
            aria-label="Toggle navigation"
            aria-expanded={menuOpen}
          >
            {menuOpen ? <X size={26} /> : <Menu size={26} />}
          </button>
        </nav>

        {menuOpen && (
          <div className="flex flex-col gap-4 border-t border-slate-800 bg-[#0B1120] px-6 py-5 md:hidden">
            {navigation.map((item) => (
              <Link
                key={item.name}
                href={item.href}
                onClick={() => setMenuOpen(false)}
                className="text-slate-300 hover:text-cyan-400"
              >
                {item.name}
              </Link>
            ))}
          </div>
        )}
      </header>

      {/* HERO */}
      <section
        id="home"
        className="mx-auto grid max-w-6xl scroll-mt-24 items-center gap-12 px-5 py-24 md:grid-cols-2"
      >
        <div>
          <p className="mb-4 font-medium text-cyan-400">
            Hello, I&apos;m
          </p>

          <h1 className="mb-5 text-4xl font-bold leading-tight sm:text-5xl lg:text-6xl">
            Afia Zahin
          </h1>

          <h2 className="mb-6 text-2xl font-semibold text-cyan-400 sm:text-3xl">
            Frontend Developer
          </h2>

          <p className="mb-8 max-w-xl leading-8 text-slate-400">
            I build modern, responsive, and user-friendly web
            applications using React, Next.js, TypeScript, and
            Tailwind CSS. I enjoy transforming ideas into clean,
            functional digital experiences.
          </p>

          <div className="flex flex-wrap gap-4">
            <Link
              href="#projects"
              className="inline-flex items-center gap-2 rounded-lg bg-cyan-400 px-6 py-3 font-semibold text-slate-950 transition hover:bg-cyan-300"
            >
              View Projects
              <ArrowRight size={18} />
            </Link>

            <a
              href="/resume.pdf"
              download="Afia_Zahin_Resume.pdf"
              className="inline-flex items-center gap-2 rounded-lg border border-cyan-400 px-6 py-3 font-semibold text-cyan-400 transition hover:bg-cyan-400 hover:text-slate-950"
            >
              <Download size={18} />
              Download Resume
            </a>
          </div>

          <div className="mt-8 flex items-center gap-5">
            <a
              href="https://github.com/Afia611"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="GitHub"
              className="text-slate-300 transition hover:text-cyan-400"
            >
              <FaGithub size={26} />
            </a>

            <a
              href="https://www.linkedin.com/in/afia-zahin-linked/"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="LinkedIn"
              className="text-slate-300 transition hover:text-cyan-400"
            >
              <FaLinkedin size={26} />
            </a>
          </div>
        </div>

        <div className="flex justify-center">
          <div className="relative h-72 w-72 overflow-hidden rounded-full border-4 border-cyan-400 shadow-[0_0_50px_rgba(34,211,238,0.15)] sm:h-80 sm:w-80">
            <Image
              src="/profile.png"
              alt="Afia Zahin"
              fill
              priority
              sizes="(max-width: 640px) 288px, 320px"
              className="object-cover"
            />
          </div>
        </div>
      </section>

      {/* ABOUT */}
      <section
        id="about"
        className="scroll-mt-24 bg-[#111C30] px-5 py-20"
      >
        <div className="mx-auto max-w-6xl">
          <h2 className="mb-8 text-3xl font-bold">
            About <span className="text-cyan-400">Me</span>
          </h2>

          <p className="max-w-4xl leading-9 text-slate-300">
            I am a frontend developer with a background in business
            and marketing. I hold an MBA in Marketing from North
            South University and have professional experience in
            business analysis, banking, media planning, and client
            communication.
          </p>

          <p className="mt-5 max-w-4xl leading-9 text-slate-300">
            My transition into software development combines
            analytical thinking, problem-solving, and creativity.
            I work with JavaScript, TypeScript, React, Next.js,
            and modern frontend technologies to create accessible,
            responsive, and engaging web applications.
          </p>
        </div>
      </section>

      {/* SKILLS */}
      <section
        id="skills"
        className="mx-auto max-w-6xl scroll-mt-24 px-5 py-20"
      >
        <div className="mb-10 flex items-center gap-3">
          <Code2 className="text-cyan-400" size={30} />
          <h2 className="text-3xl font-bold">
            Technical <span className="text-cyan-400">Skills</span>
          </h2>
        </div>

        <div className="flex flex-wrap gap-4">
          {skills.map((skill) => (
            <span
              key={skill}
              className="rounded-lg border border-slate-700 bg-[#111C30] px-5 py-3 font-medium text-slate-200 transition hover:border-cyan-400 hover:text-cyan-400"
            >
              {skill}
            </span>
          ))}
        </div>
      </section>

      {/* EDUCATION */}
      <section
        id="education"
        className="scroll-mt-24 bg-[#111C30] px-5 py-20"
      >
        <div className="mx-auto max-w-6xl">
          <div className="mb-10 flex items-center gap-3">
            <GraduationCap className="text-cyan-400" size={30} />
            <h2 className="text-3xl font-bold">
              My <span className="text-cyan-400">Education</span>
            </h2>
          </div>

          <div className="rounded-xl border border-slate-700 bg-[#0B1120] p-7">
            <h3 className="mb-2 text-xl font-bold">
              Master of Business Administration (MBA)
            </h3>

            <p className="mb-2 text-cyan-400">
              North South University
            </p>

            <p className="text-slate-400">
              Major in Marketing
            </p>
          </div>
        </div>
      </section>

      {/* EXPERIENCE */}
      <section
        id="experience"
        className="mx-auto max-w-6xl scroll-mt-24 px-5 py-20"
      >
        <div className="mb-10 flex items-center gap-3">
          <BriefcaseBusiness className="text-cyan-400" size={30} />
          <h2 className="text-3xl font-bold">
            Professional{" "}
            <span className="text-cyan-400">Experience</span>
          </h2>
        </div>

        <div className="rounded-xl border border-slate-700 bg-[#111C30] p-7">
          <h3 className="mb-4 text-xl font-bold">
            Business, Banking & Marketing
          </h3>

          <p className="leading-8 text-slate-400">
            Experience in business analysis, banking, media
            planning, stakeholder communication, research, and
            project coordination. These experiences strengthened
            my analytical thinking, teamwork, communication,
            and problem-solving skills, which I now apply to
            software development.
          </p>
        </div>
      </section>

      {/* PROJECTS */}
      <section
        id="projects"
        className="scroll-mt-24 bg-[#111C30] px-5 py-20"
      >
        <div className="mx-auto max-w-6xl">
          <h2 className="mb-4 text-3xl font-bold">
            Featured{" "}
            <span className="text-cyan-400">Projects</span>
          </h2>

          <p className="mb-12 text-slate-400">
            Explore some of the web applications I have built.
          </p>

          <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
            {projects.map((project) => (
              <article
                key={project.slug}
                className="flex h-full flex-col overflow-hidden rounded-2xl border border-slate-700 bg-[#0B1120] transition hover:border-cyan-400"
              >
                {/* PROJECT IMAGE */}
                <div className="relative h-52 w-full overflow-hidden bg-slate-800">
                  <Image
                    src={project.image}
                    alt={`${project.name} screenshot`}
                    fill
                    sizes="(max-width: 768px) 100vw, (max-width: 1024px) 50vw, 33vw"
                    className="object-cover object-top"
                  />
                </div>

                {/* PROJECT CONTENT */}
                <div className="flex flex-1 flex-col p-6">
                  <h3 className="mb-4 text-2xl font-bold">
                    {project.name}
                  </h3>

                  <p className="mb-6 flex-1 leading-8 text-slate-400">
                    {project.description}
                  </p>

                  {/* TECHNOLOGY TAGS */}
                  <div className="mb-6 flex flex-wrap gap-2">
                    {project.stack.slice(0, 3).map((tech) => (
                      <span
                        key={tech}
                        className="rounded bg-cyan-950/60 px-3 py-1 text-xs font-medium text-cyan-400"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>

                  {/* EXACTLY THREE BUTTONS */}
                  <div className="flex flex-col gap-3">

                    {/* VIEW DETAILS */}
                    <Link
                      href={`/projects/${project.slug}`}
                      className="inline-flex w-full items-center justify-center gap-2 rounded-lg bg-cyan-400 px-4 py-3 font-semibold text-slate-950 transition hover:bg-cyan-300"
                    >
                      View Details
                      <ArrowRight size={17} />
                    </Link>

                    {/* LIVE WEBSITE */}
                    {project.live && (
                      <a
                        href={project.live}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex w-full items-center justify-center gap-2 rounded-lg border border-cyan-400 px-4 py-3 font-semibold text-cyan-400 transition hover:bg-cyan-400 hover:text-slate-950"
                      >
                        <ExternalLink size={17} />
                        Live Website
                      </a>
                    )}

                    {/* GITHUB REPOSITORY */}
                    {project.github && (
                      <a
                        href={project.github}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex w-full items-center justify-center gap-2 rounded-lg border border-slate-600 px-4 py-3 font-semibold text-slate-300 transition hover:border-cyan-400 hover:text-cyan-400"
                      >
                        <FaGithub size={17} />
                        GitHub Repository
                      </a>
                    )}

                  </div>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* CONTACT */}
      <section
        id="contact"
        className="mx-auto max-w-6xl scroll-mt-24 px-5 py-20"
      >
        <h2 className="mb-5 text-3xl font-bold">
          Get In <span className="text-cyan-400">Touch</span>
        </h2>

        <p className="mb-8 max-w-2xl leading-8 text-slate-400">
          I am open to frontend development opportunities,
          collaborations, and exciting projects. Feel free
          to connect with me.
        </p>

        <div className="flex flex-wrap gap-4">
          <a
            href="mailto:afia.zahin06@gmail.com"
            className="inline-flex items-center gap-3 rounded-lg border border-slate-700 bg-[#111C30] px-5 py-3 text-slate-200 transition hover:border-cyan-400 hover:text-cyan-400"
          >
            <Mail size={20} />
            Email Me
          </a>

          <a
            href="https://github.com/Afia611"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-3 rounded-lg border border-slate-700 bg-[#111C30] px-5 py-3 text-slate-200 transition hover:border-cyan-400 hover:text-cyan-400"
          >
            <FaGithub size={20} />
            GitHub
          </a>

          <a
            href="https://www.linkedin.com/in/afia-zahin-linked/"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-3 rounded-lg border border-slate-700 bg-[#111C30] px-5 py-3 text-slate-200 transition hover:border-cyan-400 hover:text-cyan-400"
          >
            <FaLinkedin size={20} />
            LinkedIn
          </a>
        </div>
      </section>

      {/* FOOTER */}
      <footer className="border-t border-slate-800 bg-[#0B1120] px-5 py-7 text-center text-sm text-slate-400">
        © {new Date().getFullYear()} Afia Zahin.
        All rights reserved.
      </footer>

    </main>
  );
}
