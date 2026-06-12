"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Plus } from "lucide-react";

const faqs = [
  {
    q: "¿Con qué tipo de empresas trabajas?",
    a: "Trabajo principalmente con empresas medianas en Chile que están enfrentando decisiones relevantes de crecimiento o transformación: empresas que necesitan nuevas fuentes de ingresos, que quieren redefinir su modelo de negocio, o que tienen iniciativas estratégicas que no avanzan al ritmo que deberían.",
  },
  {
    q: "¿Qué es exactamente el modelo Fractional?",
    a: "Es liderazgo ejecutivo part-time: accedes a capacidad senior en estrategia, crecimiento y transformación sin el costo de una gerencia full-time. Trabajo directamente con el equipo ejecutivo, sin capas intermedias ni equipos junior.",
  },
  {
    q: "¿Cómo es el proceso de trabajo?",
    a: "Depende del desafío. Para empresas que necesitan claridad estratégica, comenzamos con un diagnóstico y roadmap. Para iniciativas que necesitan sustento financiero, desarrollamos un business case completo con pitch ejecutivo. Para acompañamiento continuo, el modelo Fractional es la opción.",
  },
  {
    q: "¿Trabajas fuera de Santiago?",
    a: "Sí. Estoy basada en Santiago, Chile, pero trabajo con empresas en distintas ciudades y países de Latinoamérica, tanto de forma remota como presencial según el proyecto.",
  },
  {
    q: "¿Qué te diferencia de una consultora tradicional?",
    a: "Trabajo directamente, sin equipos junior ni capas intermedias. Combino experiencia corporativa con la perspectiva de quien también funda y opera sus propios negocios. Y no termino cuando aparece una recomendación: termino cuando existe una decisión, un plan y alguien ejecutándolo.",
  },
];

export function FAQ() {
  const [open, setOpen] = useState<number | null>(null);

  return (
    <section id="faq" className="px-6 py-28 lg:px-16">
      <div className="mb-3 flex items-center gap-3">
        <span className="h-px w-6 bg-primary/70" />
        <span className="text-[0.65rem] font-semibold uppercase tracking-[0.2em] text-primary">
          Preguntas frecuentes
        </span>
      </div>
      <h2 className="mb-16 font-serif text-[clamp(2rem,4vw,3.2rem)] font-normal leading-[1.15] tracking-tight text-foreground">
        Lo que suelen preguntar antes de trabajar juntos
      </h2>

      <div className="max-w-3xl divide-y divide-border/40 border-t border-border/40">
        {faqs.map((faq, i) => (
          <div key={i}>
            <button
              onClick={() => setOpen(open === i ? null : i)}
              className="flex w-full items-center justify-between gap-4 py-5 text-left text-[0.93rem] font-normal text-foreground/65 transition-colors hover:text-foreground"
              aria-expanded={open === i}
            >
              {faq.q}
              <span
                className={`flex h-6 w-6 flex-shrink-0 items-center justify-center rounded-full border border-border/50 text-primary transition-all duration-300 ${
                  open === i ? "rotate-45 bg-primary/10 border-primary/40" : ""
                }`}
              >
                <Plus className="h-3.5 w-3.5" />
              </span>
            </button>
            <AnimatePresence initial={false}>
              {open === i && (
                <motion.div
                  initial={{ height: 0, opacity: 0 }}
                  animate={{ height: "auto", opacity: 1 }}
                  exit={{ height: 0, opacity: 0 }}
                  transition={{ duration: 0.35, ease: "easeInOut" }}
                  className="overflow-hidden"
                >
                  <p className="pb-5 text-[0.88rem] font-light leading-[1.85] text-foreground/60">
                    {faq.a}
                  </p>
                </motion.div>
              )}
            </AnimatePresence>
          </div>
        ))}
      </div>
    </section>
  );
}
