"use client";

import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";

const items = [
  "Están creciendo y necesitan claridad sobre dónde apostar para sostener ese crecimiento.",
  "Están redefiniendo su modelo de negocio y necesitan estructura para hacerlo bien.",
  "Necesitan nuevas fuentes de ingresos y no saben por dónde partir.",
  "Tienen iniciativas estratégicas importantes que no avanzan al ritmo que deberían.",
  "No tienen capacidad interna dedicada para liderar transformación o crecimiento.",
];

export function ForWhom() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-60px" });

  return (
    <section id="para-quien" className="bg-foreground/[0.015] px-6 py-28 lg:px-16">
      <div className="grid gap-16 lg:grid-cols-2 lg:gap-24">
        <div>
          <div className="mb-3 flex items-center gap-3">
            <span className="h-px w-6 bg-primary/70" />
            <span className="text-[0.65rem] font-semibold uppercase tracking-[0.2em] text-primary">
              Para quién trabajo
            </span>
          </div>
          <h2 className="font-serif text-[clamp(2rem,4vw,3.2rem)] font-normal leading-[1.15] tracking-tight text-foreground">
            Empresas medianas que tienen mucho en juego
          </h2>
          <p className="mt-4 text-[0.93rem] font-light leading-[1.9] text-foreground/60">
            No trabajo con todo el mundo. Trabajo bien con empresas que se reconocen en alguno de estos perfiles.
          </p>
        </div>

        <div ref={ref} className="flex flex-col divide-y divide-border/40 border-t border-border/40">
          {items.map((item, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, x: 16 }}
              animate={inView ? { opacity: 1, x: 0 } : {}}
              transition={{ duration: 0.5, delay: i * 0.08 }}
              className="group flex items-baseline gap-3 py-5 text-[0.93rem] font-light leading-[1.7] text-foreground/55 transition-colors duration-200 hover:text-foreground/70"
            >
              <span className="flex-shrink-0 text-[0.8rem] text-primary/70 transition-transform duration-200 group-hover:translate-x-1">
                →
              </span>
              {item}
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
