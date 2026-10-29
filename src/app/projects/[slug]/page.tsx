
import Link from "next/link";
import { notFound } from "next/navigation";
import { projects } from "@/data/projects";
import { ArrowLeft, ExternalLink } from "lucide-react";
import { FaGithub } from "react-icons/fa";

export function generateStaticParams() {
  return projects.map((project) => ({ slug: project.slug }));
}

export default async function ProjectDetails({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const project = projects.find((item) => item.slug === slug);

  if (!project) notFound();

  return (
    <main className="min-h-screen bg-[#0B1120] px-5 py-12 text-white">
      <div className="mx-auto max-w-4xl">
        <Link href="/#projects"
          className="mb-10 inline-flex items-center gap-2 text-cyan-400">
          <ArrowLeft size={18} /> Back to Projects
        </Link>

        <h1 className="mb-5 text-4xl font-bold md:text-5xl">
          {project.name}
        </h1>

        <div className="mb-8 flex min-h-64 items-center justify-center overflow-hidden rounded-2xl bg-slate-800">
           <img src={project.image}
            alt={project.name}
            className="w-full object-cover" /> 
        </div>

        <Section title="Project Overview">
          {project.description}
        </Section>

        <section className="mb-9">
          <h2 className="mb-4 text-2xl font-semibold text-cyan-400">
            Technology Stack
          </h2>
          <div className="flex flex-wrap gap-3">
            {project.stack.map((tech) => (
              <span key={tech}
                className="rounded-lg bg-slate-800 px-4 py-2 text-sm">
                {tech}
              </span>
            ))}
          </div>
        </section>

        <Section title="Challenges Faced">
          {project.challenges}
        </Section>

        <Section title="Future Improvements">
          {project.future}
        </Section>

        <div className="flex flex-wrap gap-4">
          {project.live && (
            <a href={project.live} target="_blank" rel="noopener noreferrer"
              className="btn border-0 bg-cyan-400 text-slate-950">
              <ExternalLink size={18} /> Live Website
            </a>
          )}

          <a href={project.github} target="_blank" rel="noopener noreferrer"
            className="btn border border-cyan-400 bg-transparent text-cyan-400">
            <FaGithub size={18} /> GitHub Repository
          </a>
        </div>
      </div>
    </main>
  );
}

function Section({
  title,
  children,
}: {
  title: string;
  children: React.ReactNode;
}) {
  return (
    <section className="mb-9">
      <h2 className="mb-4 text-2xl font-semibold text-cyan-400">
        {title}
      </h2>
      <p className="leading-8 text-slate-300">{children}</p>
    </section>
  );
}
