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
            <div className="mb-10 space-y-5 text-[0.93rem] font-light leading-[1.95] text-foreground/45">
              <p>
                Siempre he destacado por mi energía y por combinar curiosidad, pensamiento estratégico,
                capacidad de ejecución y experiencia emprendedora. Esto me permite identificar oportunidades
                donde otros posiblemente ven complejidad.
              </p>
              <p>
                Uno de mis súper poderes es que una vez que entiendo el sistema en profundidad, puedo
                conectar puntos aparentemente inconexos o difíciles de visualizar, construir consensos
                y transformar oportunidades en iniciativas concretas con impacto en el negocio.
              </p>
              <p>
                Mi foco siempre está en crear valor sostenible: negocios que crecen, generan rentabilidad
                y pueden sostenerse en el tiempo. Probablemente te voy a empujar a probar cosas nuevas,
                pensar en nuevos escenarios, y si lo necesitas, tal vez te haga mirar tu negocio desde
                una perspectiva completamente diferente.
              </p>
              <p>
                Amo la tecnología y me encanta el minuto que estamos viviendo hoy, en donde las respuestas
                son abundantes, pero el valor sigue estando en formular las preguntas correctas y atreverse
                a tomar mejores decisiones.
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
