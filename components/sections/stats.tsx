"use client";

import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";

const stats = [
  { value: "15+", label: "años liderando crecimiento, transformación y nuevos negocios" },
  { value: "3", label: "áreas de impacto: Growth · Transformation · New Ventures" },
  { value: "2", label: "startups fundadas y operadas" },
  { value: "Experiencia Híbrida", label: "Me muevo indistintamente tanto en el mundo corporativo como en el startup", small: true },
];

export function Stats() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-80px" });

  return (
    <div
      ref={ref}
      className="grid grid-cols-2 border-b border-t border-border/40 bg-background/60 px-6 backdrop-blur-sm lg:grid-cols-4 lg:px-16"
    >
      {stats.map((s, i) => (
        <motion.div
          key={i}
          initial={{ opacity: 0, y: 16 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: i * 0.1 }}
          className={`flex flex-col items-center gap-2 py-8 text-center ${i > 0 ? "border-l border-border/40 pl-4 lg:pl-8" : ""}`}
        >
          <span
            className={`font-serif font-normal leading-none tracking-tight text-primary ${
              s.small ? "text-[clamp(1.1rem,2.4vw,1.7rem)]" : "text-[clamp(1.6rem,4vw,3rem)]"
            }`}
          >
            {s.value}
          </span>
          <span className="max-w-[16ch] text-[0.8rem] font-light leading-[1.5] text-foreground/55">
            {s.label}
          </span>
        </motion.div>
      ))}
    </div>
  );
}
