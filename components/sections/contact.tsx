"use client";

import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";
import { ArrowRight } from "lucide-react";
export function Contact() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-80px" });

  return (
    <section
      id="contacto"
      className="relative overflow-hidden border-t border-border/40 bg-foreground/[0.015] px-6 py-32 text-center lg:px-16"
    >
      {/* glow */}
      <div className="pointer-events-none absolute left-1/2 top-1/2 h-[500px] w-[500px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-primary/[0.04] blur-[140px]" />

      <div ref={ref} className="relative z-10 mx-auto max-w-2xl">
        <motion.div
          initial={{ opacity: 0 }}
          animate={inView ? { opacity: 1 } : {}}
          transition={{ duration: 0.5 }}
          className="mb-3 flex items-center justify-center gap-3"
        >
          <span className="h-px w-6 bg-primary/70" />
          <span className="text-[0.65rem] font-semibold uppercase tracking-[0.2em] text-primary">
            Conversemos
          </span>
          <span className="h-px w-6 bg-primary/70" />
        </motion.div>

        <motion.h2
          initial={{ opacity: 0, y: 24 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.7, delay: 0.1 }}
          className="mb-4 font-serif text-[clamp(2.2rem,5vw,4rem)] font-normal leading-[1.1] tracking-tight text-foreground"
        >
          ¿Tomémonos un café?
        </motion.h2>

        <motion.p
          initial={{ opacity: 0, y: 16 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="mb-10 text-[0.93rem] font-light leading-[1.85] text-foreground/60"
        >
          Agenda una conversación exploratoria para entender si hay fit.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 16 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.3 }}
          className="mb-10"
        >
          <a
            href="mailto:hola@monicarau.com"
            className="relative inline-block font-serif text-[1.6rem] font-normal text-foreground transition-colors duration-200 hover:text-primary after:absolute after:bottom-[-2px] after:left-0 after:right-0 after:h-px after:bg-gradient-to-r after:from-transparent after:via-primary after:to-transparent"
          >
            hola@monicarau.com
          </a>
        </motion.div>

        <motion.div
          initial={{ opacity: 0 }}
          animate={inView ? { opacity: 1 } : {}}
          transition={{ duration: 0.5, delay: 0.4 }}
          className="mb-6 text-[0.63rem] font-semibold uppercase tracking-[0.18em] text-foreground/20"
        >
          o conecta directamente
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 12 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.45 }}
        >
          <a
            href="https://linkedin.com/in/monicarau"
            target="_blank"
            rel="noopener noreferrer"
            className="group inline-flex items-center gap-2 rounded-sm bg-primary px-8 py-3 text-[0.72rem] font-semibold uppercase tracking-[0.12em] text-primary-foreground transition-colors hover:bg-primary/90"
          >
            Conectar en LinkedIn
            <ArrowRight className="h-3.5 w-3.5 transition-transform group-hover:translate-x-1" />
          </a>
        </motion.div>
      </div>
    </section>
  );
}
