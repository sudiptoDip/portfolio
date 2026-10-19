import Link from "next/link";
import { notFound } from "next/navigation";
import { FaGithub } from "react-icons/fa";
import { FiExternalLink, FiArrowLeft } from "react-icons/fi";
import { projects } from "@/data/portfolio";

export function generateStaticParams() {
  return projects.map((p) => ({ slug: p.slug }));
}

export async function generateMetadata({ params }) {
  const { slug } = await params;
  const project = projects.find((p) => p.slug === slug);
  return { title: project ? `${project.name} | Project Details` : "Project not found" };
}

export default async function ProjectDetails({ params }) {
  const { slug } = await params;
  const project = projects.find((p) => p.slug === slug);
  if (!project) notFound();

  return (
    <section className="pt-28 pb-16 sm:pt-32 sm:pb-24">
      <div className="container-x max-w-4xl">
        <Link
          href="/#projects"
          className="mb-8 inline-flex items-center gap-2 text-sm text-slate-400 transition hover:text-accent2"
        >
          <FiArrowLeft /> Back to all projects
        </Link>

        <h1 className="text-3xl font-extrabold text-white sm:text-4xl">{project.name}</h1>

        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img
          src={project.image}
          alt={project.name}
          className="mt-8 aspect-video w-full rounded-2xl border border-slate-800 object-cover"
        />

        <div className="mt-8 flex flex-wrap gap-4">
          <a href={project.live} target="_blank" rel="noreferrer" className="btn-primary">
            <FiExternalLink /> Live Project
          </a>
          <a href={project.github} target="_blank" rel="noreferrer" className="btn-outline">
            <FaGithub /> GitHub
          </a>
        </div>

        <div className="mt-12 space-y-10">
          <div>
            <h2 className="mb-3 text-xl font-semibold text-white">Description</h2>
            <p className="leading-relaxed">{project.description}</p>
          </div>

          <div>
            <h2 className="mb-3 text-xl font-semibold text-white">Main Technology Stack</h2>
            <div className="flex flex-wrap gap-2">
              {project.stack.map((t,i) => (
                <span
                  key={i}
                  className="rounded-full border border-slate-700 bg-slate-800/60 px-3 py-1.5 text-sm text-accent2"
                >
                  {t}
                </span>
              ))}
            </div>
          </div>

          <div className="grid gap-8 md:grid-cols-2">
            <div className="card">
              <h2 className="mb-3 text-xl font-semibold text-white">Challenges Faced</h2>
              <ul className="list-disc space-y-2 pl-5 text-sm leading-relaxed">
                {project.challenges.map((c,i) => (
                  <li key={i}>{c}</li>
                ))}
              </ul>
            </div>
            <div className="card">
              <h2 className="mb-3 text-xl font-semibold text-white">Future Plans & Improvements</h2>
              <ul className="list-disc space-y-2 pl-5 text-sm leading-relaxed">
                {project.improvements.map((c,i) => (
                  <li key={i}>{c}</li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
