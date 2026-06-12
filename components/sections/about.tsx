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
              Curiosidad, estrategia y ejecución
            </h2>
            <div className="mb-10 space-y-5 text-[0.93rem] font-light leading-[1.95] text-foreground/60">
              <p>
                Siempre he destacado por combinar curiosidad, pensamiento estratégico, capacidad de
                ejecución y experiencia emprendedora. Esa combinación me permite identificar oportunidades
                de crecimiento donde otros ven complejidad, incertidumbre o simplemente más trabajo.
              </p>
              <p>
                Con los años he desarrollado una capacidad particularmente valiosa: entender rápidamente
                cómo funciona un negocio, conectar puntos aparentemente inconexos y transformar oportunidades
                en iniciativas concretas con impacto real. Mi rol muchas veces consiste en ayudar a los
                equipos a ver lo que tienen delante, pero que aún no han logrado articular.
              </p>
              <p>
                Mi foco está en crear valor sostenible: negocios que crecen, generan rentabilidad y pueden
                sostenerse en el tiempo. Probablemente te voy a desafiar a probar cosas nuevas, explorar
                escenarios distintos y mirar tu negocio desde perspectivas que no habías considerado.
              </p>
              <p>
                Amo la tecnología y me entusiasma profundamente el momento que estamos viviendo. En un
                mundo donde las respuestas son cada vez más abundantes, el verdadero valor sigue estando
                en formular las preguntas correctas, conectar información aparentemente dispersa y tomar
                mejores decisiones.
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
                  <span className="text-[0.83rem] font-light leading-snug text-foreground/55">
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
