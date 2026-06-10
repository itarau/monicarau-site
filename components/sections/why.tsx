"use client";

import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";

export function Why() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-80px" });

  return (
    <section className="border-b border-t border-border/40 bg-foreground/[0.02] px-6 py-28 lg:px-16">
      <div ref={ref} className="mx-auto max-w-3xl text-center">
        <motion.span
          initial={{ opacity: 0 }}
          animate={inView ? { opacity: 1 } : {}}
          transition={{ duration: 0.6 }}
          className="mb-8 block text-[0.65rem] font-semibold uppercase tracking-[0.22em] text-foreground/20"
        >
          ¿Por qué contratarme en lugar de una consultora?
        </motion.span>

        <motion.p
          initial={{ opacity: 0, y: 24 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, delay: 0.1 }}
          className="mb-8 font-serif text-[clamp(1.75rem,3.2vw,2.75rem)] font-normal leading-[1.45] tracking-tight text-foreground"
        >
          Trabajo directamente con equipos ejecutivos, combinando experiencia corporativa, emprendimiento
          y ejecución. Sin capas intermedias. Sin equipos junior. Sin PowerPoints que terminan en un cajón.
        </motion.p>

        <motion.p
          initial={{ opacity: 0, y: 16 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.7, delay: 0.25 }}
          className="border-t border-border/40 pt-7 text-base font-light leading-[1.75] text-primary"
        >
          Mi trabajo no termina cuando aparece una recomendación. Termina cuando existe una decisión,
          un plan y alguien ejecutándolo.
        </motion.p>
      </div>
    </section>
  );
}
