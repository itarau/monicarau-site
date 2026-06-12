"use client";

import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";

const stats = [
  { num: "15+", label: "años liderando crecimiento, transformación y nuevos negocios" },
  { num: "3",   label: "áreas de impacto: Growth · Transformation · New Ventures" },
  { num: "2",   label: "startups fundadas y operadas" },
  { label: "Corporativo + Startup", sub: "experiencia en ambos mundos" },
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
          className={`flex flex-col gap-1.5 py-8 ${i > 0 ? "border-l border-border/40 pl-6 lg:pl-8" : ""}`}
        >
          {s.num ? (
            <span className="font-serif text-5xl font-normal leading-none tracking-tight text-primary">
              {s.num}
            </span>
          ) : (
            <span className="text-base font-medium leading-snug text-foreground">
              {s.label}
            </span>
          )}
          <span className="text-[0.7rem] font-light leading-snug text-foreground/50">
            {s.num ? s.label : s.sub}
          </span>
        </motion.div>
      ))}
    </div>
  );
}
