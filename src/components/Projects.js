import Link from "next/link";
import { projects } from "@/data/portfolio";
import SectionTitle from "./SectionTitle";

export default function Projects() {
  return (
    <section id="projects" className="py-16 sm:py-20">
      <div className="container-x">
        <SectionTitle title="Projects" subtitle="Some of my best work" />

        <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-2">
          {projects.map((p) => (
            <article
              key={p.slug}
              className="group flex flex-col overflow-hidden rounded-2xl border border-slate-800 bg-card shadow-xl shadow-black/20 transition hover:-translate-y-1 hover:border-accent/60"
            >
              <div className="overflow-hidden">
                <img
                  src={p.image}
                  alt={p.name}
                  className="aspect-video w-full object-cover transition duration-500 group-hover:scale-105"
                />
              </div>
              <div className="flex flex-1 flex-col p-6">
                <h3 className="text-xl font-semibold text-white">{p.name}</h3>
                <p className="mt-2 flex-1 text-sm leading-relaxed text-slate-400">{p.short}</p>
                <div className="mt-4 flex flex-wrap gap-2">
                  {p.stack.slice(0, 4).map((t,i) => (
                    <span
                      key={i}
                      className="rounded-full bg-slate-800 px-2.5 py-1 text-xs text-accent2"
                    >
                      {t}
                    </span>
                  ))}
                </div>
                <Link href={`/projects/${p.slug}`} className="btn-primary mt-6">
                  View Details
                </Link>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
