import { education } from "@/data/portfolio";
import SectionTitle from "./SectionTitle";

export default function Education() {
  if (!education.length) return null;
  return (
    <section id="education" className="py-16 sm:py-20">
      <div className="container-x">
        <SectionTitle title="Education" subtitle="My academic background" />

        <div className="relative mx-auto max-w-3xl border-l-2 border-slate-700 pl-6 sm:pl-8">
          {education.map((e) => (
            <div key={e.degree} className="relative mb-8 last:mb-0">
              <span className="absolute -left-[33px] top-6 h-4 w-4 rounded-full border-4 border-bg bg-accent2 sm:-left-[41px]" />
              <div className="card">
                {/* <span className="text-sm font-medium text-accent2">{e.period}</span> */}
                <h3 className="mt-1 text-xl font-semibold text-white">{e.degree}</h3>
                <p className="mt-1 text-slate-400">{e.institute}</p>
                {e.result && <p className="mt-1 text-sm text-slate-300">{e.result}</p>}
                {e.details && <p className="mt-3 text-sm leading-relaxed">{e.details}</p>}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
