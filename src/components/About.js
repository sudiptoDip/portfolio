import { about } from "@/data/portfolio";
import SectionTitle from "./SectionTitle";

export default function About() {
  return (
    <section id="about" className="py-16 sm:py-20">
      <div className="container-x">
        <SectionTitle title="About Me" subtitle="My journey, my interests and my personality" />

        <div className="grid gap-8 lg:grid-cols-3">
          <div className="card lg:col-span-2">
            <div className="space-y-4 leading-relaxed">
              {about.paragraphs.map((p, i) => (
                <p key={i}>{p}</p>
              ))}
            </div>
          </div>

          <div className="space-y-6">
            <div className="card">
              <h3 className="mb-4 text-lg font-semibold text-white">Hobbies & Interests</h3>
              <div className="flex flex-wrap gap-2">
                {about.hobbies.map((h) => (
                  <span
                    key={h}
                    className="rounded-full border border-slate-700 bg-slate-800/60 px-3 py-1.5 text-sm"
                  >
                    {h}
                  </span>
                ))}
              </div>
            </div>

            {about.stats.length > 0 && (
              <div className="grid grid-cols-3 gap-3">
                {about.stats.map((s) => (
                  <div key={s.label} className="card !p-4 text-center">
                    <div className="text-2xl font-bold text-accent2">{s.value}</div>
                    <div className="mt-1 text-xs text-slate-400">{s.label}</div>
                  </div>
                ))}
              </div>
            )}
          </div>
        </div>
      </div>
    </section>
  );
}
