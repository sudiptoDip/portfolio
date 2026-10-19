"use client";

import { useState } from "react";
import Link from "next/link";
import { HiMenu, HiX } from "react-icons/hi";
import { profile } from "@/data/portfolio";

const links = [
  { label: "Home", href: "/#home" },
  { label: "About", href: "/#about" },
  { label: "Skills", href: "/#skills" },
  { label: "Education", href: "/#education" },
  { label: "Projects", href: "/#projects" },
  { label: "Contact", href: "/#contact" },
];

export default function Navbar() {
  const [open, setOpen] = useState(false);

  return (
    <header className="fixed inset-x-0 top-0 z-50 border-b border-slate-800/70 bg-bg/80 backdrop-blur">
      <nav className="container-x flex h-16 items-center justify-between">
        <Link href="/#home" className="text-xl font-bold text-white">
          {profile.name.split(" ")[0]}
          <span className="text-accent2">.</span>
        </Link>

        {/* Desktop menu */}
        <ul className="hidden items-center gap-1 lg:flex">
          {links.map((l) => (
            <li key={l.href}>
              <Link
                href={l.href}
                className="rounded-full px-3 py-2 text-sm font-medium text-slate-300 transition hover:bg-slate-800 hover:text-accent2"
              >
                {l.label}
              </Link>
            </li>
          ))}
        </ul>

        {/* Mobile toggle */}
        <button
          onClick={() => setOpen(!open)}
          aria-label="Toggle menu"
          className="rounded-lg p-2 text-2xl text-white hover:bg-slate-800 lg:hidden"
        >
          {open ? <HiX /> : <HiMenu />}
        </button>
      </nav>

      {/* Mobile menu */}
      {open && (
        <ul className="border-t border-slate-800 bg-bg px-4 pb-4 lg:hidden">
          {links.map((l) => (
            <li key={l.href}>
              <Link
                href={l.href}
                onClick={() => setOpen(false)}
                className="block rounded-lg px-3 py-3 text-base font-medium text-slate-300 hover:bg-slate-800 hover:text-accent2"
              >
                {l.label}
              </Link>
            </li>
          ))}
        </ul>
      )}
    </header>
  );
}
