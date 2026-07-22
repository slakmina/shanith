"use client";

import { useRef } from "react";
import { motion, useMotionValue, useSpring } from "framer-motion";
import { ExternalLink } from "lucide-react";
import type { Project } from "@/data/portfolio";

interface ProjectCardProps {
  project: Project;
  index: number;
}

export default function ProjectCard({ project, index }: ProjectCardProps) {
  const cardRef = useRef<HTMLDivElement>(null);
  const x = useMotionValue(0);
  const y = useMotionValue(0);
  const rotateX = useSpring(useMotionValue(0), { stiffness: 100, damping: 30 });
  const rotateY = useSpring(useMotionValue(0), { stiffness: 100, damping: 30 });

  const isEven = index % 2 === 0;

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    if (!cardRef.current) return;
    const rect = cardRef.current.getBoundingClientRect();
    const mouseX = e.clientX - rect.left;
    const mouseY = e.clientY - rect.top;
    const centerX = rect.width / 2;
    const centerY = rect.height / 2;
    const rotateAmount = 5;
    rotateX.set(((mouseY - centerY) / centerY) * -rotateAmount);
    rotateY.set(((mouseX - centerX) / centerX) * rotateAmount);
    x.set(mouseX / rect.width);
    y.set(mouseY / rect.height);
  };

  const handleMouseLeave = () => {
    rotateX.set(0);
    rotateY.set(0);
    x.set(0.5);
    y.set(0.5);
  };

  return (
    <motion.div
      initial={{ opacity: 0, y: 60 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-80px" }}
      transition={{ duration: 0.7, delay: index * 0.1, ease: "easeOut" }}
      className="group relative"
    >
      <div
        ref={cardRef}
        onMouseMove={handleMouseMove}
        onMouseLeave={handleMouseLeave}
        className={`flex flex-col ${
          isEven ? "lg:flex-row" : "lg:flex-row-reverse"
        } gap-8 lg:gap-16 items-center`}
      >
        {/* Image */}
        <motion.div
          style={{ rotateX, rotateY }}
          className="relative w-full lg:w-7/12 aspect-[4/3] rounded-2xl overflow-hidden bg-surface border border-border group-hover:border-accent/30 transition-colors duration-500 cursor-pointer"
        >
          {/* Placeholder gradient */}
          <div className="absolute inset-0 bg-gradient-to-br from-surface-light via-surface to-background flex items-center justify-center">
            <div className="text-center p-8">
              <div className="w-16 h-16 mx-auto mb-4 rounded-full bg-accent/10 flex items-center justify-center">
                <ExternalLink size={24} className="text-accent" />
              </div>
              <p className="text-text-secondary text-sm font-mono">
                {project.imagePlaceholder.split("/").pop()}
              </p>
              <p className="text-text-muted text-xs mt-2">
                {project.category}
              </p>
            </div>
          </div>

          {/* Hover overlay */}
          <motion.div
            className="absolute inset-0 bg-accent/90 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-500"
          >
            <span className="font-display text-xl font-bold text-background tracking-tight">
              View Project
            </span>
          </motion.div>

          {/* Glow on hover */}
          <motion.div
            className="absolute inset-0 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none"
            style={{
              background:
                "radial-gradient(800px circle at var(--mouse-x, 50%) var(--mouse-y, 50%), rgba(255,107,53,0.15), transparent 40%)",
              "--mouse-x": `${x.get() * 100}%`,
              "--mouse-y": `${y.get() * 100}%`,
            } as React.CSSProperties}
          />
        </motion.div>

        {/* Content */}
        <div className="w-full lg:w-5/12">
          <span className="text-xs tracking-[0.2em] uppercase text-accent font-medium">
            {project.category}
          </span>
          <h3 className="mt-3 font-display text-2xl md:text-3xl font-bold tracking-tight text-balance group-hover:text-accent transition-colors duration-300">
            {project.title}
          </h3>
          <p className="mt-4 text-text-secondary leading-relaxed">
            {project.description}
          </p>

          {/* Skills tags */}
          <div className="mt-5 flex flex-wrap gap-2">
            {project.skills.map((skill) => (
              <span
                key={skill}
                className="px-3 py-1 text-xs rounded-full bg-surface-light border border-border text-text-secondary"
              >
                {skill}
              </span>
            ))}
          </div>

          {/* Link */}
          <a
            href={project.behanceUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 mt-6 text-sm font-medium text-text-secondary hover:text-accent transition-colors duration-300 group/link"
          >
            View on Behance
            <ExternalLink
              size={14}
              className="transition-transform duration-300 group-hover/link:translate-x-0.5 group-hover/link:-translate-y-0.5"
            />
          </a>
        </div>
      </div>
    </motion.div>
  );
}