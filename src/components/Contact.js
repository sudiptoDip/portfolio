import { FaEnvelope, FaPhoneAlt, FaWhatsapp, FaMapMarkerAlt } from "react-icons/fa";
import { profile } from "@/data/portfolio";
import SectionTitle from "./SectionTitle";

export default function Contact() {
  const items = [
    {
      icon: <FaEnvelope />,
      label: "Email",
      value: profile.email,
      href: `mailto:${profile.email}`,
    },
    {
      icon: <FaPhoneAlt />,
      label: "Phone",
      value: profile.phone,
      href: `tel:${profile.phone}`,
    },
    {
      icon: <FaWhatsapp />,
      label: "WhatsApp",
      value: `+${profile.whatsapp}`,
      href: `https://wa.me/${profile.whatsapp}`,
      external: true,
    },
    {
      icon: <FaMapMarkerAlt />,
      label: "Location",
      value: profile.location,
    },
  ];

  return (
    <section id="contact" className="bg-slate-900/40 py-16 sm:py-20">
      <div className="container-x">
        <SectionTitle
          title="Contact"
          subtitle="Feel free to reach out for work or any discussion"
        />

        <div className="mx-auto grid max-w-4xl gap-6 sm:grid-cols-2">
          {items.map((it) => {
            const body = (
              <div className="card flex items-center gap-4 transition hover:border-accent2/60">
                <span className="flex h-12 w-12 shrink-0 items-center justify-center rounded-full bg-gradient-to-br from-accent to-accent2 text-xl text-white">
                  {it.icon}
                </span>
                <div className="min-w-0">
                  <p className="text-sm text-slate-400">{it.label}</p>
                  <p className="break-words font-medium text-white">{it.value}</p>
                </div>
              </div>
            );
            return it.href ? (
              <a
                key={it.label}
                href={it.href}
                {...(it.external ? { target: "_blank", rel: "noreferrer" } : {})}
              >
                {body}
              </a>
            ) : (
              <div key={it.label}>{body}</div>
            );
          })}
        </div>

        <div className="mt-10 text-center">
          <a href={`mailto:${profile.email}`} className="btn-primary">
            <FaEnvelope /> Send me an Email
          </a>
        </div>
      </div>
    </section>
  );
}
