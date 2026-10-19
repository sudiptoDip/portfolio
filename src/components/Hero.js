import { FiDownload } from "react-icons/fi";
import { profile, socials } from "@/data/portfolio";
import SocialIcon from "./SocialIcon";

export default function Hero() {
  return (
    <section
      id="home"
      className="relative overflow-hidden pt-28 pb-16 sm:pt-32 lg:pt-36 lg:pb-24"
    >
      <div className="pointer-events-none absolute -top-24 -left-24 h-72 w-72 rounded-full bg-accent/20 blur-3xl" />
      <div className="pointer-events-none absolute right-0 bottom-0 h-72 w-72 rounded-full bg-accent2/10 blur-3xl" />

      <div className="container-x relative grid items-center gap-12 lg:grid-cols-2">
        <div className="order-2 text-center lg:order-1 lg:text-left">
          <p className="mb-3 text-lg font-medium text-accent2">👋 Hello, I&apos;m</p>
          <h1 className="text-4xl font-extrabold text-white sm:text-5xl lg:text-6xl">
            {profile.name}
          </h1>
          <h2 className="mt-3 bg-gradient-to-r from-accent to-accent2 bg-clip-text text-2xl font-bold text-transparent sm:text-3xl">
            {profile.designation}
          </h2>
          <p className="mx-auto mt-5 max-w-xl leading-relaxed text-slate-400 lg:mx-0">
            {profile.intro}
          </p>

          <div className="mt-8 flex flex-wrap justify-center gap-4 lg:justify-start">
            <a href={profile.resume} target="_blank" rel="noreferrer" className="btn-primary">
              <FiDownload /> View Resume
            </a>
            <a href={profile.resume} download className="btn-outline">
              <FiDownload /> Download Resume
            </a>
          </div>

          <div className="mt-8 flex justify-center gap-3 lg:justify-start">
            {socials.map((s) => (
              <a
                key={s.name}
                href={s.url}
                target="_blank"
                rel="noreferrer"
                aria-label={s.name}
                title={s.name}
                className="flex h-11 w-11 items-center justify-center rounded-full border border-slate-700 text-lg text-slate-300 transition hover:-translate-y-1 hover:border-accent2 hover:text-accent2"
              >
                <SocialIcon name={s.icon} />
              </a>
            ))}
          </div>
        </div>

        <div className="order-1 flex justify-center lg:order-2">
          <div className="rounded-full bg-gradient-to-br from-accent to-accent2 p-1.5 shadow-2xl shadow-accent/30">
            <img
              src={profile.photo}
              alt={profile.name}
              className="h-64 w-64 rounded-full bg-card object-cover sm:h-80 sm:w-80"
            />
          </div>
        </div>
      </div>
    </section>
  );
}
