"use client";

import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";

const formats = [
  { name: "Proyecto puntual",     duration: "4 a 8 semanas",        desc: "Diagnóstico, business case o iniciativa estratégica con foco y entregable claro." },
  { name: "Advisory estratégico", duration: "Sesiones mensuales",    desc: "Acompañamiento continuo para equipos ejecutivos que necesitan un pensador estratégico externo de forma recurrente." },
  { name: "Fractional Executive", duration: "1–2 días por semana",   desc: "Liderazgo ejecutivo integrado al equipo, con dedicación parcial y foco en resultados de crecimiento o transformación." },
];

export function Formats() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-60px" });

  return (
    <section id="formatos" className="px-6 py-28 lg:px-16">
      <div className="mb-3 flex items-center gap-3">
        <span className="h-px w-6 bg-primary/70" />
        <span className="text-[0.65rem] font-semibold uppercase tracking-[0.2em] text-primary">
          Formatos de trabajo
        </span>
      </div>
      <h2 className="mb-16 font-serif text-[clamp(2rem,4vw,3.2rem)] font-normal leading-[1.15] tracking-tight text-foreground">
        Cómo trabajamos juntos
      </h2>

      <div ref={ref} className="grid gap-4 sm:grid-cols-3">
        {formats.map((f, i) => (
          <motion.div
            key={i}
            initial={{ opacity: 0, y: 24 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6, delay: i * 0.12 }}
            className="group relative overflow-hidden rounded-sm border border-border/40 bg-foreground/[0.02] p-7 transition-all duration-300 hover:border-border/70 hover:bg-foreground/[0.04]"
          >
            <div className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-primary to-transparent opacity-0 transition-opacity duration-300 group-hover:opacity-100" />
            <h3 className="mb-1.5 font-serif text-[1.45rem] font-normal leading-snug text-foreground">
              {f.name}
            </h3>
            <div className="mb-5 text-[0.62rem] font-semibold uppercase tracking-[0.14em] text-primary/80">
              {f.duration}
            </div>
            <p className="text-[0.87rem] font-light leading-[1.85] text-foreground/55">{f.desc}</p>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
