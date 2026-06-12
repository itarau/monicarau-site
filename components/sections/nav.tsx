"use client";

import { useEffect, useState } from "react";
import { X, Menu } from "lucide-react";

const links = [
  { href: "#desafios", label: "Desafíos" },
  { href: "#servicios", label: "Servicios" },
  { href: "#sobre-mi", label: "Sobre mí" },
  { href: "#faq", label: "FAQ" },
];

export function Nav() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const handler = () => setScrolled(window.scrollY > 40);
    window.addEventListener("scroll", handler);
    return () => window.removeEventListener("scroll", handler);
  }, []);

  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "";
  }, [open]);

  return (
    <>
      <nav
        className={`fixed left-0 right-0 top-0 z-50 flex items-center justify-between px-6 transition-all duration-400 lg:px-16 ${
          scrolled
            ? "border-b border-border/40 bg-background/85 py-4 backdrop-blur-2xl"
            : "py-6"
        }`}
      >
        <a
          href="#"
          className="font-serif text-lg font-normal tracking-wide text-foreground"
        >
          Mónica <span className="text-primary">Rau</span>
        </a>

        {/* desktop */}
        <ul className="hidden items-center gap-8 lg:flex">
          {links.map((l) => (
            <li key={l.href}>
              <a
                href={l.href}
                className="text-[0.7rem] font-normal uppercase tracking-[0.1em] text-foreground/40 transition-colors hover:text-foreground"
              >
                {l.label}
              </a>
            </li>
          ))}
        </ul>

        <a
          href="#contacto"
          className="hidden rounded-sm border border-primary px-5 py-2.5 text-[0.68rem] font-semibold uppercase tracking-[0.1em] text-primary transition-all hover:bg-primary hover:text-primary-foreground lg:inline-flex"
        >
          Conversemos
        </a>

        <button
          onClick={() => setOpen(true)}
          className="flex h-9 w-9 flex-col items-center justify-center gap-[5px] lg:hidden"
          aria-label="Abrir menú"
        >
          <Menu className="h-5 w-5 text-foreground/70" />
        </button>
      </nav>

      {/* mobile overlay */}
      {open && (
        <div className="fixed inset-0 z-[200] flex flex-col items-center justify-center gap-8 bg-background/97 backdrop-blur-xl">
          <button
            onClick={() => setOpen(false)}
            className="absolute right-6 top-6"
            aria-label="Cerrar menú"
          >
            <X className="h-6 w-6 text-foreground/60" />
          </button>
          {links.map((l) => (
            <a
              key={l.href}
              href={l.href}
              onClick={() => setOpen(false)}
              className="font-serif text-3xl font-normal text-foreground/70 transition-colors hover:text-primary"
            >
              {l.label}
            </a>
          ))}
          <a
            href="#contacto"
            onClick={() => setOpen(false)}
            className="font-serif text-3xl font-normal text-primary"
          >
            Conversemos →
          </a>
        </div>
      )}
    </>
  );
}
