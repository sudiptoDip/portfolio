import { profile, socials } from "@/data/portfolio";
import SocialIcon from "./SocialIcon";

export default function Footer() {
  return (
    <footer className="border-t border-slate-800 py-8">
      <div className="container-x flex flex-col items-center justify-between gap-4 sm:flex-row">
        <p className="text-sm text-slate-500">
          © {new Date().getFullYear()} {profile.name}. All rights reserved.
        </p>
        <div className="flex gap-3">
          {socials.map((s) => (
            <a
              key={s.name}
              href={s.url}
              target="_blank"
              rel="noreferrer"
              aria-label={s.name}
              className="text-lg text-slate-400 transition hover:text-accent2"
            >
              <SocialIcon name={s.icon} />
            </a>
          ))}
        </div>
      </div>
    </footer>
  );
}
