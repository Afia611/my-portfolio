

import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import {
  ArrowLeft,
  ArrowUpRight,
  Code2,
  Lightbulb,
  Rocket,
} from "lucide-react";

import { FaGithub } from "react-icons/fa";
import { projects } from "@/data/projects";

type ProjectPageProps = {
  params: Promise<{
    slug: string;
  }>;
};

export function generateStaticParams() {
  return projects.map((project) => ({
    slug: project.slug,
  }));
}

export default async function ProjectDetailsPage({
  params,
}: ProjectPageProps) {
  const { slug } = await params;

  const project = projects.find(
    (item) => item.slug === slug
  );

  if (!project) {
    notFound();
  }

  return (
    <main className="min-h-screen bg-[#0B1120] text-white">
      {/* NAVBAR */}
      <header className="border-b border-slate-800 bg-[#0B1120]">
        <nav className="mx-auto flex max-w-6xl items-center justify-between px-5 py-5">
          <Link
            href="/"
            className="text-2xl font-bold text-cyan-400"
          >
            Afia.
          </Link>

          <Link
            href="/#projects"
            className="inline-flex items-center gap-2 text-sm font-medium text-slate-300 transition hover:text-cyan-400"
          >
            <ArrowLeft size={17} />
            Back to Projects
          </Link>
        </nav>
      </header>

      {/* PROJECT DETAILS */}
      <section className="mx-auto max-w-5xl px-5 py-14 md:py-20">
        {/* BREADCRUMB */}
        <div className="mb-8 flex flex-wrap items-center gap-2 text-sm text-slate-400">
          <Link
            href="/"
            className="hover:text-cyan-400"
          >
            Home
          </Link>

          <span>/</span>

          <Link
            href="/#projects"
            className="hover:text-cyan-400"
          >
            Projects
          </Link>

          <span>/</span>

          <span className="text-cyan-400">
            {project.name}
          </span>
        </div>

        {/* PROJECT TITLE */}
        <div className="mb-10">
          <p className="mb-3 text-sm font-semibold uppercase tracking-[0.2em] text-cyan-400">
            Featured Project
          </p>

          <h1 className="mb-5 text-4xl font-bold tracking-tight sm:text-5xl">
            {project.name}
          </h1>

          <p className="max-w-3xl text-lg leading-8 text-slate-400">
            {project.description}
          </p>
        </div>

        {/* PROJECT IMAGE */}
        <div className="relative mb-12 aspect-video w-full overflow-hidden rounded-2xl border border-slate-700 bg-[#111C30]">
          <Image
            src={project.image}
            alt={`${project.name} project screenshot`}
            fill
            priority
            sizes="(max-width: 1024px) 100vw, 1024px"
            className="object-cover object-top"
          />
        </div>

        {/* PROJECT LINKS */}
        <div className="mb-14 flex flex-wrap gap-4">
          {project.live && (
            <a
              href={project.live}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center gap-2 rounded-lg bg-cyan-400 px-6 py-3 font-semibold text-slate-950 transition hover:bg-cyan-300"
            >
              <ArrowUpRight size={19} />
              Live Website
            </a>
          )}

          {project.github && (
            <a
              href={project.github}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center gap-2 rounded-lg border border-slate-600 px-6 py-3 font-semibold text-slate-200 transition hover:border-cyan-400 hover:text-cyan-400"
            >
              <FaGithub size={19} />
              GitHub Repository
            </a>
          )}
        </div>

        {/* TECH STACK */}
        <section className="mb-12 rounded-2xl border border-slate-700 bg-[#111C30] p-6 md:p-8">
          <div className="mb-6 flex items-center gap-3">
            <Code2
              size={25}
              className="text-cyan-400"
            />

            <h2 className="text-2xl font-bold">
              Technologies Used
            </h2>
          </div>

          <div className="flex flex-wrap gap-3">
            {project.stack.map((technology) => (
              <span
                key={technology}
                className="rounded-lg border border-slate-700 bg-[#0B1120] px-4 py-2 text-sm font-medium text-slate-200 transition hover:border-cyan-400 hover:text-cyan-400"
              >
                {technology}
              </span>
            ))}
          </div>
        </section>

        {/* DEVELOPMENT CHALLENGES */}
        <section className="mb-12 rounded-2xl border border-slate-700 bg-[#111C30] p-6 md:p-8">
          <div className="mb-6 flex items-center gap-3">
            <Lightbulb
              size={25}
              className="text-cyan-400"
            />

            <h2 className="text-2xl font-bold">
              Development Challenges
            </h2>
          </div>

          <p className="leading-8 text-slate-300">
            {project.challenges}
          </p>
        </section>

        {/* FUTURE IMPROVEMENTS */}
        <section className="mb-14 rounded-2xl border border-slate-700 bg-[#111C30] p-6 md:p-8">
          <div className="mb-6 flex items-center gap-3">
            <Rocket
              size={25}
              className="text-cyan-400"
            />

            <h2 className="text-2xl font-bold">
              Future Improvements
            </h2>
          </div>

          <p className="leading-8 text-slate-300">
            {project.future}
          </p>
        </section>

        {/* BACK BUTTON */}
        <div className="border-t border-slate-800 pt-8">
          <Link
            href="/#projects"
            className="inline-flex items-center gap-2 font-medium text-cyan-400 transition hover:text-cyan-300"
          >
            <ArrowLeft size={19} />
            Explore More Projects
          </Link>
        </div>
      </section>

      {/* FOOTER */}
      <footer className="border-t border-slate-800 px-5 py-7 text-center text-sm text-slate-400">
        Â© {new Date().getFullYear()} Afia Zahin.
        All rights reserved.
      </footer>
    </main>
  );
}


