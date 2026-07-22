"use client";

import { motion } from "framer-motion";
import {
  Palette,
  Shapes,
  Share2,
  FileText,
  PenTool,
  Film,
  Clapperboard,
  Type,
  Printer,
  ImageIcon,
} from "lucide-react";
import type { LucideIcon } from "lucide-react";
import { skills } from "@/data/portfolio";
import SectionTitle from "@/components/ui/SectionTitle";

const iconMap: Record<string, LucideIcon> = {
  palette: Palette,
  shapes: Shapes,
  share2: Share2,
  "file-text": FileText,
  "pen-tool": PenTool,
  film: Film,
  clapperboard: Clapperboard,
  type: Type,
  printer: Printer,
  image: ImageIcon,
};

export default function Skills() {
  return (
    <section id="skills" className="py-24 md:py-32 px-6 lg:px-12 relative">
      {/* Background divider */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-px h-32 bg-gradient-to-b from-transparent via-border to-transparent" />

      <div className="max-w-7xl mx-auto">
        <SectionTitle
          label="Skills & Tools"
          title="Technical Expertise"
          description="A comprehensive toolkit refined over years of practice in graphic design, motion graphics, and visual communication."
        />

        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-4">
          {skills.map((skill, index) => {
            const IconComponent = iconMap[skill.icon] || Palette;
            return (
              <motion.div
                key={skill.name}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{
                  duration: 0.5,
                  delay: index * 0.05,
                  ease: "easeOut",
                }}
                className="group relative p-5 rounded-2xl bg-surface border border-border hover:border-accent/40 transition-all duration-300 flex flex-col items-center text-center"
              >
                {/* Progress ring */}
                <div className="relative w-16 h-16 mb-3">
                  <svg
                    className="w-16 h-16 -rotate-90"
                    viewBox="0 0 64 64"
                  >
                    <circle
                      cx="32"
                      cy="32"
                      r="28"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2"
                      className="text-border"
                    />
                    <motion.circle
                      cx="32"
                      cy="32"
                      r="28"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2"
                      strokeLinecap="round"
                      className="text-accent"
                      strokeDasharray={`${2 * Math.PI * 28}`}
                      initial={{
                        strokeDashoffset: 2 * Math.PI * 28,
                      }}
                      whileInView={{
                        strokeDashoffset:
                          2 * Math.PI * 28 * (1 - skill.level / 100),
                      }}
                      viewport={{ once: true }}
                      transition={{ duration: 1.2, delay: 0.3 + index * 0.05, ease: "easeOut" }}
                    />
                  </svg>
                  <div className="absolute inset-0 flex items-center justify-center">
                    <IconComponent
                      size={22}
                      className="text-accent group-hover:scale-110 transition-transform duration-300"
                    />
                  </div>
                </div>

                <h4 className="font-display text-sm font-semibold mb-1">
                  {skill.name}
                </h4>
                <p className="text-text-muted text-xs font-mono">
                  {skill.level}%
                </p>

                {/* Hover background glow */}
                <div className="absolute inset-0 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none bg-accent/[0.03]" />
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}