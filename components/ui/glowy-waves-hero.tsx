"use client";

import { motion, type Variants } from "framer-motion";
import { ArrowRight, ChevronDown } from "lucide-react";
import { useEffect, useRef } from "react";
import { buttonVariants } from "@/components/ui/button";

type Point = { x: number; y: number };

interface WaveConfig {
  offset: number;
  amplitude: number;
  frequency: number;
  color: string;
  opacity: number;
}

const containerVariants: Variants = {
  hidden: { opacity: 0, y: 24 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.9, staggerChildren: 0.13 },
  },
};

const itemVariants: Variants = {
  hidden: { opacity: 0, y: 28 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.7, ease: "easeOut" } },
};

export function GlowyWavesHero() {
  const canvasRef = useRef<HTMLCanvasElement | null>(null);
  const mouseRef = useRef<Point>({ x: 0, y: 0 });
  const targetMouseRef = useRef<Point>({ x: 0, y: 0 });

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    let animationId: number;
    let time = 0;

    const gold = "201, 169, 110";
    const indigo = "120, 100, 220";
    const teal = "80, 160, 180";

    const waves: WaveConfig[] = [
      { offset: 0,              amplitude: 75,  frequency: 0.003,  color: `rgba(${gold}, 0.55)`,   opacity: 0.55 },
      { offset: Math.PI / 2,   amplitude: 95,  frequency: 0.0026, color: `rgba(${gold}, 0.3)`,    opacity: 0.30 },
      { offset: Math.PI,       amplitude: 60,  frequency: 0.0034, color: `rgba(${indigo}, 0.22)`, opacity: 0.22 },
      { offset: Math.PI * 1.5, amplitude: 85,  frequency: 0.0022, color: `rgba(${teal}, 0.18)`,   opacity: 0.18 },
      { offset: Math.PI * 2,   amplitude: 50,  frequency: 0.004,  color: `rgba(${gold}, 0.12)`,   opacity: 0.12 },
    ];

    const prefersReduced = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    const mouseInfluence = prefersReduced ? 10 : 65;
    const influenceRadius = prefersReduced ? 160 : 320;
    const smoothing = prefersReduced ? 0.04 : 0.1;

    const resize = () => {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
      const c = { x: canvas.width / 2, y: canvas.height / 2 };
      mouseRef.current = c;
      targetMouseRef.current = c;
    };

    resize();
    window.addEventListener("resize", resize);
    window.addEventListener("mousemove", (e) => {
      targetMouseRef.current = { x: e.clientX, y: e.clientY };
    });
    window.addEventListener("mouseleave", () => {
      targetMouseRef.current = { x: canvas.width / 2, y: canvas.height / 2 };
    });

    const drawWave = (wave: WaveConfig) => {
      ctx.save();
      ctx.beginPath();
      for (let x = 0; x <= canvas.width; x += 4) {
        const dx = x - mouseRef.current.x;
        const dy = canvas.height / 2 - mouseRef.current.y;
        const dist = Math.sqrt(dx * dx + dy * dy);
        const inf = Math.max(0, 1 - dist / influenceRadius);
        const mouseEffect = inf * mouseInfluence * Math.sin(time * 0.001 + x * 0.01 + wave.offset);
        const y =
          canvas.height / 2 +
          Math.sin(x * wave.frequency + time * 0.002 + wave.offset) * wave.amplitude +
          Math.sin(x * wave.frequency * 0.4 + time * 0.003) * (wave.amplitude * 0.45) +
          mouseEffect;
        x === 0 ? ctx.moveTo(x, y) : ctx.lineTo(x, y);
      }
      ctx.lineWidth = 2;
      ctx.strokeStyle = wave.color;
      ctx.globalAlpha = wave.opacity;
      ctx.shadowBlur = 40;
      ctx.shadowColor = wave.color;
      ctx.stroke();
      ctx.restore();
    };

    const animate = () => {
      time += 1;
      mouseRef.current.x += (targetMouseRef.current.x - mouseRef.current.x) * smoothing;
      mouseRef.current.y += (targetMouseRef.current.y - mouseRef.current.y) * smoothing;

      const g = ctx.createLinearGradient(0, 0, 0, canvas.height);
      g.addColorStop(0, "rgba(7,8,13,1)");
      g.addColorStop(1, "rgba(12,13,22,1)");
      ctx.fillStyle = g;
      ctx.fillRect(0, 0, canvas.width, canvas.height);
      ctx.globalAlpha = 1;
      ctx.shadowBlur = 0;
      waves.forEach(drawWave);
      animationId = requestAnimationFrame(animate);
    };

    animationId = requestAnimationFrame(animate);
    return () => { cancelAnimationFrame(animationId); };
  }, []);

  return (
    <section
      className="relative isolate flex min-h-screen w-full flex-col items-center justify-end overflow-hidden pb-24"
      id="inicio"
    >
      <canvas ref={canvasRef} className="absolute inset-0 h-full w-full" aria-hidden="true" />

      {/* glow blobs */}
      <div className="pointer-events-none absolute inset-0 -z-10">
        <div className="absolute left-1/2 top-0 h-[500px] w-[500px] -translate-x-1/2 rounded-full bg-primary/[0.05] blur-[160px]" />
        <div className="absolute bottom-0 right-0 h-[380px] w-[380px] rounded-full bg-primary/[0.04] blur-[120px]" />
      </div>

      {/* grid overlay */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-0"
        style={{
          backgroundImage:
            "linear-gradient(rgba(255,255,255,.02) 1px,transparent 1px),linear-gradient(90deg,rgba(255,255,255,.02) 1px,transparent 1px)",
          backgroundSize: "80px 80px",
          maskImage: "radial-gradient(ellipse 80% 80% at 50% 50%,black 0%,transparent 100%)",
        }}
      />

      <div className="relative z-10 mx-auto w-full max-w-6xl px-6 lg:px-12">
        <motion.div variants={containerVariants} initial="hidden" animate="visible">

          {/* eyebrow */}
          <motion.div variants={itemVariants} className="mb-8 flex items-center gap-3">
            <span className="h-px w-10 bg-primary/70" />
            <span className="text-[0.65rem] font-semibold uppercase tracking-[0.22em] text-primary">
              Estrategia · Crecimiento · Nuevos Negocios
            </span>
          </motion.div>

          {/* headline */}
          <motion.h1
            variants={itemVariants}
            className="mb-10 font-serif text-[clamp(2.6rem,5.5vw,5.2rem)] font-normal leading-[1.1] tracking-tight text-foreground"
          >
            Ayudo a empresas a encontrar{" "}
            <em className="italic text-primary">nuevas fuentes de crecimiento rentable.</em>
          </motion.h1>

          {/* bottom row */}
          <motion.div
            variants={itemVariants}
            className="grid gap-10 md:grid-cols-2 md:items-end"
          >
            <p className="text-base/[1.9] font-light text-foreground/70 max-w-[46ch]">
              Evaluamos oportunidades, priorizamos inversiones y transformamos
              ideas en iniciativas sostenibles y ejecutables.
            </p>

            <div className="flex flex-col items-start gap-6 md:items-end">
              <p className="border-l border-primary/60 pl-4 text-sm/[1.75] font-light text-foreground/55 md:border-l-0 md:border-r md:pl-0 md:pr-4 md:text-right">
                Tengo la capacidad de detectar oportunidades antes de que sean<br className="hidden md:block" />
                evidentes para el resto y convertirlas en decisiones ejecutables.
              </p>
              <div className="flex flex-wrap gap-3">
                <a
                  href="#desafios"
                  className="group inline-flex items-center gap-2 rounded-sm bg-primary px-7 py-3 text-[0.72rem] font-semibold uppercase tracking-[0.12em] text-primary-foreground transition-colors hover:bg-primary/90"
                >
                  ¿Qué resuelvo?
                  <ArrowRight className="h-3.5 w-3.5 transition-transform group-hover:translate-x-1" />
                </a>
                <a
                  href="#contacto"
                  className="inline-flex items-center rounded-sm border border-border/40 bg-transparent px-7 py-3 text-[0.72rem] font-normal uppercase tracking-[0.12em] text-foreground/70 transition-all hover:border-border/70 hover:bg-foreground/5 hover:text-foreground"
                >
                  Conversemos
                </a>
              </div>
            </div>
          </motion.div>
        </motion.div>
      </div>

      {/* scroll hint */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.6, duration: 1 }}
        className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2"
      >
        <span className="text-[0.6rem] font-medium uppercase tracking-[0.18em] text-foreground/20">
          Scroll
        </span>
        <ChevronDown className="h-4 w-4 animate-bounce text-foreground/20" />
      </motion.div>
    </section>
  );
}
