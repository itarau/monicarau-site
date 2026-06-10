"use client";

import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";
import Image from "next/image";

const credentials = [
  { year: "15+ años", text: "Liderazgo en crecimiento, nuevos negocios y transformación estratégica" },
  { year: "Corporativo", text: "Liderazgo de innovación en Walmart Chile" },
  { year: "Academia", text: "Magíster en Innovación y Emprendimiento — OBS / Universitat de Barcelona" },
  { year: "Alianzas", text: "Trabajo con centros de innovación e instituciones académicas de primer nivel" },
];

export function About() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-80px" });

  return (
    <section id="sobre-mi" className="bg-foreground/[0.015]">
      <div className="grid lg:grid-cols-2">
        {/* image */}
        <div className="relative min-h-[340px] overflow-hidden lg:min-h-[700px]">
          <Image
            src="https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?w=900&q=80&fit=crop"
            alt="Mónica Rau — consultora en estrategia y crecimiento"
            fill
            className="object-cover brightness-75 grayscale-[25%] transition-transform duration-700 hover:scale-[1.02]"
            sizes="(max-width: 1024px) 100vw, 50vw"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-background/[0.015] to-transparent lg:from-foreground/[0.015]" />
          <div className="absolute inset-0 bg-gradient-to-t from-background/80 to-transparent lg:from-foreground/[0.04]" />
        </div>

        {/* text */}
        <div ref={ref} className="flex flex-col justify-center px-8 py-16 lg:px-16 lg:py-24">
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.7 }}
          >
            <div className="mb-3 flex items-center gap-3">
              <span className="h-px w-6 bg-primary/70" />
              <span className="text-[0.65rem] font-semibold uppercase tracking-[0.2em] text-primary">
                Sobre mí
              </span>
            </div>
            <h2 className="mb-6 font-serif text-[clamp(2rem,4vw,3.2rem)] font-normal leading-[1.15] tracking-tight text-foreground">
              Del diseño a la estrategia de negocios
            </h2>
            <div className="mb-10 space-y-5 text-[0.93rem] font-light leading-[1.95] text-foreground/45">
              <p>
                Mi formación en diseño me enseñó algo que los negocios muchas veces olvidan: que los
                mejores resultados vienen de comprender el problema de verdad antes de proponer la solución.
              </p>
              <p>
                Llevo más de 15 años en ese espacio: liderando crecimiento, transformación y desarrollo
                de nuevos negocios en corporaciones y emprendimientos. He visto de cerca cómo una buena
                idea se pierde por falta de foco, y cómo una empresa puede reinventarse cuando alguien
                la ayuda a ordenar sus apuestas.
              </p>
              <p>
                Hoy trabajo con empresas que están enfrentando decisiones relevantes de crecimiento o
                transformación. En paralelo, construyo mis propios negocios. Eso me mantiene con los
                pies en la realidad del emprendimiento — no solo en la teoría.
              </p>
            </div>

            <div className="flex flex-col divide-y divide-border/40 border-t border-border/40">
              {credentials.map((c, i) => (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, x: 12 }}
                  animate={inView ? { opacity: 1, x: 0 } : {}}
                  transition={{ duration: 0.5, delay: 0.2 + i * 0.08 }}
                  className="flex items-baseline gap-4 py-3.5"
                >
                  <span className="min-w-[90px] text-[0.63rem] font-semibold uppercase tracking-[0.08em] text-primary/80">
                    {c.year}
                  </span>
                  <span className="text-[0.83rem] font-light leading-snug text-foreground/40">
                    {c.text}
                  </span>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
