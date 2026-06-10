"use client";

import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";

const items = [
  { quote: "Sabemos que tenemos que cambiar, crecer o transformarnos, pero no sabemos dónde apostar ni cómo ejecutarlo.", tag: "Punto de partida" },
  { quote: "Tenemos muchas iniciativas y no sabemos por dónde partir, ni cómo priorizar.", tag: "Growth" },
  { quote: "Necesitamos una nueva vía de crecimiento, pero no tenemos claridad de dónde está la oportunidad.", tag: "Growth" },
  { quote: "Queremos transformar el negocio para adaptarnos al mercado, pero no sabemos por dónde partir.", tag: "Transformation" },
  { quote: "Tenemos ideas, pero no logramos convertirlas en proyectos con sustento financiero.", tag: "New Ventures" },
  { quote: "Nuestra estrategia existe, pero la ejecución no avanza. Hay un gap entre lo que decidimos y lo que pasa.", tag: "Transformation" },
  { quote: "Necesitamos liderazgo para impulsar crecimiento o transformación, pero no estamos listos para incorporar una gerencia full-time.", tag: "Fractional" },
];

export function Challenges() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-60px" });

  return (
    <section id="desafios" className="px-6 py-28 lg:px-16">
      <div className="mb-16">
        <div className="mb-3 flex items-center gap-3">
          <span className="h-px w-6 bg-primary/70" />
          <span className="text-[0.65rem] font-semibold uppercase tracking-[0.2em] text-primary">
            Desafíos que resuelvo
          </span>
        </div>
        <h2 className="font-serif text-[clamp(2rem,4vw,3.2rem)] font-normal leading-[1.15] tracking-tight text-foreground">
          ¿Te reconoces en alguno de estos?
        </h2>
        <p className="mt-4 max-w-[52ch] text-[0.93rem] font-light leading-[1.9] text-foreground/40">
          Estas son las conversaciones que tengo con los equipos con los que trabajo.
          Si alguna resuena, probablemente hay algo en lo que puedo ayudarte.
        </p>
      </div>

      <div
        ref={ref}
        className="grid gap-px bg-border/40 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4"
      >
        {items.map((item, i) => (
          <motion.div
            key={i}
            initial={{ opacity: 0, y: 20 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.55, delay: i * 0.07 }}
            className="group relative overflow-hidden bg-background p-7 transition-colors duration-300 hover:bg-background/80"
          >
            <div className="absolute inset-0 bg-gradient-to-br from-primary/[0.06] to-transparent opacity-0 transition-opacity duration-300 group-hover:opacity-100" />
            <p className="relative mb-4 font-serif text-[1.05rem] font-normal italic leading-[1.65] text-foreground/65 before:mr-1 before:font-serif before:text-[2rem] before:leading-none before:text-primary/70 before:content-['“']">
              {item.quote}
            </p>
            <span className="relative text-[0.6rem] font-semibold uppercase tracking-[0.14em] text-primary/60">
              {item.tag}
            </span>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
