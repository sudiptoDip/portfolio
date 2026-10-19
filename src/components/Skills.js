import { skills } from "@/data/portfolio";
import SectionTitle from "./SectionTitle";

export default function Skills() {
  return (
    <section id="skills" className="bg-slate-900/40 py-16 sm:py-20">
      <div className="container-x">
        <SectionTitle title="Skills" subtitle="Technologies and tools I work with" />

        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {skills.map((cat) => (
            <div key={cat.title} className="card">
              <h3 className="mb-6 text-xl font-semibold text-white">{cat.title}</h3>
              <div className="space-y-5">
                {cat.items.map((s) => (
                  <div key={s.name}>
                    <div className="mb-1.5 flex justify-between text-sm">
                      <span>{s.name}</span>
                      <span className="text-accent2">{s.level}%</span>
                    </div>
                    <div className="h-2.5 overflow-hidden rounded-full bg-slate-800">
                      <div
                        className="h-full rounded-full bg-gradient-to-r from-accent to-accent2"
                        style={{ width: `${s.level}%` }}
                      />
                    </div>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
