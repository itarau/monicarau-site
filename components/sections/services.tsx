"use client";

import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";
import { ArrowRight } from "lucide-react";

const services = [
  {
    num: "01",
    tag: "Diagnóstico estratégico",
    title: "Strategic Opportunity Assessment",
    desc: "Identificamos dónde apostar, priorizamos las iniciativas relevantes y construimos una hoja de ruta de ejecución concreta.",
    deliverables: ["Diagnóstico estratégico", "Mapa de oportunidades priorizadas", "Roadmap ejecutivo 90 días"],
  },
  {
    num: "02",
    tag: "Proyectos financiables",
    title: "Business Case & Executive Pitch Lab",
    desc: "Convertimos iniciativas estratégicas en casos de negocio financiables, con métricas, narrativa ejecutiva y plan de implementación.",
    deliverables: ["Business case completo", "Modelo de métricas e impacto", "Pitch ejecutivo"],
  },
  {
    num: "03",
    tag: "Liderazgo ejecutivo",
    title: "Fractional Growth & Transformation Leader",
    subtitle: "Liderazgo ejecutivo part-time para crecimiento y transformación.",
    desc: "Acompañamiento ejecutivo part-time para liderar crecimiento, transformación y nuevos negocios sin incorporar una gerencia full-time.",
    deliverables: ["Liderazgo ejecutivo part-time", "Gestión de portafolio de iniciativas", "Puente estrategia–ejecución"],
  },
];

export function Services() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-60px" });

  return (
    <section id="servicios" className="bg-background/40 px-6 py-28 lg:px-16">
      {/* header */}
      <div className="mb-14 max-w-2xl lg:mb-20">
        <div className="mb-3 flex items-center gap-3">
          <span className="h-px w-6 bg-primary/70" />
          <span className="text-[0.65rem] font-semibold uppercase tracking-[0.2em] text-primary">
            Servicios
          </span>
        </div>
        <h2 className="font-serif text-[clamp(2rem,4vw,3.2rem)] font-normal leading-[1.15] tracking-tight text-foreground">
          Tres formas de trabajar juntos
        </h2>
        <p className="mt-4 mb-8 text-[0.93rem] font-light leading-[1.9] text-foreground/60">
          Dependiendo del momento en que se encuentra tu empresa, el acompañamiento tiene distinta forma.
        </p>
        <a
          href="#contacto"
          className="group inline-flex items-center gap-2 rounded-sm bg-primary px-5 py-2.5 text-[0.7rem] font-semibold uppercase tracking-[0.1em] text-primary-foreground transition-colors hover:bg-primary/90"
        >
          Hablemos de tu caso
          <ArrowRight className="h-3.5 w-3.5 transition-transform group-hover:translate-x-1" />
        </a>
      </div>

      {/* cards */}
      <div ref={ref} className="grid grid-cols-1 gap-px bg-border/40 sm:grid-cols-3">
        {services.map((s, i) => (
          <motion.div
            key={i}
            initial={{ opacity: 0, y: 20 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6, delay: i * 0.12 }}
            className="group relative overflow-hidden bg-background p-8 transition-colors duration-300 hover:bg-background/80"
          >
            <div className="absolute bottom-0 left-0 right-0 h-0.5 scale-x-0 bg-primary transition-transform duration-300 origin-left group-hover:scale-x-100 sm:top-0 sm:bottom-auto sm:h-auto sm:w-0.5 sm:scale-y-0 sm:scale-x-100 sm:origin-top sm:group-hover:scale-y-100" />
            <span className="mb-4 block font-serif text-[4.5rem] font-normal leading-none text-foreground/[0.08]">
              {s.num}
            </span>
            <div className="text-[0.62rem] font-semibold uppercase tracking-[0.16em] text-primary/90 mb-2">
              {s.tag}
            </div>
            <h3 className="font-serif text-[1.45rem] font-normal leading-snug text-foreground mb-2">
              {s.title}
            </h3>
            {s.subtitle && (
              <p className="text-[0.82rem] italic font-light text-foreground/60 mb-3">{s.subtitle}</p>
            )}
            <p className="text-[0.87rem] font-light leading-[1.85] text-foreground/65 mb-5">
              {s.desc}
            </p>
            <ul className="flex flex-col gap-2 border-t border-border/40 pt-4">
              {s.deliverables.map((d) => (
                <li key={d} className="flex items-baseline gap-2 text-[0.83rem] font-light leading-[1.6] text-foreground/60">
                  <span className="text-primary/60 text-xs">—</span>
                  {d}
                </li>
              ))}
            </ul>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
