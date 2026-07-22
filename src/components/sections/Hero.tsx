"use client";

import { useEffect, useRef } from "react";
import { motion } from "framer-motion";
import { ArrowDown, ExternalLink, Mail } from "lucide-react";
import Button from "@/components/ui/Button";

export default function Hero() {
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      if (!containerRef.current) return;
      const { clientX, clientY } = e;
      const { innerWidth, innerHeight } = window;
      const x = (clientX / innerWidth - 0.5) * 20;
      const y = (clientY / innerHeight - 0.5) * 20;
      containerRef.current.style.setProperty("--mouse-x", `${x}px`);
      containerRef.current.style.setProperty("--mouse-y", `${y}px`);
    };

    window.addEventListener("mousemove", handleMouseMove, { passive: true });
    return () => window.removeEventListener("mousemove", handleMouseMove);
  }, []);

  return (
    <section
      ref={containerRef}
      className="relative min-h-screen flex items-center justify-center overflow-visible"
    >
      {/* Background ambient elements */}
      <div className="absolute inset-0 -z-10 overflow-hidden">
        {/* Subtle grid */}
        <div className="absolute inset-0 grid-pattern opacity-[0.03]" />

        {/* Ambient orbs */}
        <div
          className="absolute top-1/3 -left-32 w-96 h-96 rounded-full opacity-[0.07] blur-[120px]"
          style={{
            background:
              "radial-gradient(circle, #ff6b35 0%, transparent 70%)",
            transform: "translate(var(--mouse-x, 0px), var(--mouse-y, 0px))",
            transition: "transform 0.8s cubic-bezier(0.25, 0.1, 0.25, 1)",
          }}
        />
        <div
          className="absolute bottom-1/4 -right-32 w-[500px] h-[500px] rounded-full opacity-[0.05] blur-[140px]"
          style={{
            background:
              "radial-gradient(circle, #ff6b35 0%, transparent 70%)",
            transform:
              "translate(calc(var(--mouse-x, 0px) * -0.5), calc(var(--mouse-y, 0px) * -0.5))",
            transition: "transform 1s cubic-bezier(0.25, 0.1, 0.25, 1)",
          }}
        />
      </div>

      <div className="max-w-7xl mx-auto px-6 lg:px-12 w-full pt-20 md:pt-32 pb-20">
        <div className="flex flex-col items-center text-center max-w-4xl mx-auto">
          {/* Name */}
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
          >
            <p className="text-accent text-sm tracking-[0.2em] uppercase mb-4 font-medium">
              Graphic Designer & Animator
            </p>
            <h1 className="font-display text-5xl sm:text-6xl md:text-7xl lg:text-8xl font-bold tracking-tight leading-[1.0] text-balance">
              Shanith{" "}
              <span className="block text-gradient">Dhanuja</span>
            </h1>
          </motion.div>

          {/* Titles */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2, duration: 0.8, ease: "easeOut" }}
            className="mt-8 md:mt-10"
          >
            <p className="text-xl md:text-2xl lg:text-3xl text-text-secondary font-light leading-relaxed text-balance">
              Graphic Designer{" "}
              <span className="mx-3 text-border">|</span>{" "}
              <span className="text-text font-medium">
                2D Motion Graphics & Animation Designer
              </span>
            </p>
          </motion.div>

          {/* Intro */}
          <motion.p
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.35, duration: 0.8, ease: "easeOut" }}
            className="mt-6 text-text-secondary text-lg max-w-2xl leading-relaxed text-balance"
          >
            Crafting distinctive brand identities and immersive motion
            experiences that resonate. From concept to animation, I bring
            creative visions to life with precision and artistry.
          </motion.p>

          {/* CTA Buttons */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.5, duration: 0.8, ease: "easeOut" }}
            className="mt-10 flex flex-wrap items-center justify-center gap-4"
          >
            <Button
              href="#work"
              variant="primary"
              size="lg"
              icon={<ExternalLink size={18} />}
            >
              View Portfolio
            </Button>
            <Button
              href="#contact"
              variant="secondary"
              size="lg"
              icon={<Mail size={18} />}
            >
              Contact Me
            </Button>
          </motion.div>
        </div>
      </div>

      {/* Scroll indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.2, duration: 0.6 }}
        className="absolute bottom-8 left-1/2 -translate-x-1/2"
      >
        <motion.a
          href="#work"
          animate={{ y: [0, 10, 0] }}
          transition={{ repeat: Infinity, duration: 2, ease: "easeInOut" }}
          className="flex flex-col items-center gap-2 text-text-muted hover:text-accent transition-colors duration-300"
        >
          <span className="text-xs tracking-widest uppercase">Scroll</span>
          <ArrowDown size={16} />
        </motion.a>
      </motion.div>
    </section>
  );
}
