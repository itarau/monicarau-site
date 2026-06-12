"use client";

import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";

const cases = [
  {
    org: "Walmart Chile",
    role: "Liderazgo de innovación corporativa",
    desc: "Lideré la evolución del modelo de innovación corporativa de Walmart Chile. Diseñé e implementé un modelo conectado a prioridades estratégicas del negocio, fortaleciendo capacidades internas y acelerando la ejecución de iniciativas de crecimiento.",
  },
  {
    org: "Muvu",
    role: "Co-fundadora · Salud digital B2B",
    desc: "Cofundé una startup de salud digital B2B, liderando el desarrollo del modelo de negocio, alianzas estratégicas y validación de mercado hasta su implementación en el mercado corporativo.",
  },
  {
    org: "Blemd",
    role: "Fundadora · Café especialidad + IA",
    desc: "Diseñé y lancé un modelo de negocio basado en personalización mediante inteligencia artificial para el mercado del café de especialidad.",
  },
];

export function Impact() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-60px" });

  return (
    <section id="impacto" className="px-6 py-28 lg:px-16">
      <div className="mb-3 flex items-center gap-3">
        <span className="h-px w-6 bg-primary/70" />
        <span className="text-[0.65rem] font-semibold uppercase tracking-[0.2em] text-primary">
          Casos de trabajo
        </span>
      </div>
      <h2 className="mb-4 font-serif text-[clamp(2rem,4vw,3.2rem)] font-normal leading-[1.15] tracking-tight text-foreground">
        Evidencia, no promesas
      </h2>
      <p className="mb-16 max-w-[52ch] text-[0.93rem] font-light leading-[1.9] text-foreground/60">
        Proyectos reales en los que he trabajado directamente — desde la estrategia hasta la ejecución.
      </p>

      <div ref={ref} className="grid gap-px bg-border/40 sm:grid-cols-3">
        {cases.map((c, i) => (
          <motion.div
            key={i}
            initial={{ opacity: 0, y: 24 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6, delay: i * 0.12 }}
            className="group bg-background p-8 transition-colors duration-300 hover:bg-background/80"
          >
            <h3 className="mb-1.5 font-serif text-[1.55rem] font-normal leading-snug text-foreground">
              {c.org}
            </h3>
            <div className="mb-5 text-[0.62rem] font-semibold uppercase tracking-[0.14em] text-primary/80">
              {c.role}
            </div>
            <p className="text-[0.87rem] font-light leading-[1.85] text-foreground/55">{c.desc}</p>
          </motion.div>
        ))}
      </div>

      <p className="mt-px border-t border-border/40 pt-4 text-[0.8rem] font-light italic text-foreground/20">
        También asesoro proyectos estratégicos en colaboración con centros de innovación e instituciones académicas de primer nivel.
      </p>
    </section>
  );
}
