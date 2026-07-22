"use client";

import { motion } from "framer-motion";
import { Briefcase } from "lucide-react";
import { experiences } from "@/data/portfolio";
import SectionTitle from "@/components/ui/SectionTitle";

export default function Experience() {
  return (
    <section id="experience" className="py-24 md:py-32 px-6 lg:px-12 relative overflow-hidden">
      <div className="max-w-7xl mx-auto">
        <SectionTitle
          label="Career"
          title="Professional Experience"
          description="A journey through creative roles that have shaped a versatile skill set in graphic design and motion graphics."
        />

        <div className="max-w-3xl mx-auto">
          <div className="relative space-y-0">
            {experiences.map((exp, index) => (
              <motion.div
                key={`${exp.role}-${exp.period}`}
                initial={{ opacity: 0, x: -30 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true, margin: "-60px" }}
                transition={{
                  duration: 0.6,
                  delay: index * 0.12,
                  ease: "easeOut",
                }}
                className="relative pl-12 pb-12 last:pb-0"
              >
                {/* Timeline bar */}
                <div className="absolute left-0 top-0 bottom-0 w-px bg-border">
                  {index === 0 && (
                    <div className="absolute top-0 left-1/2 -translate-x-1/2 w-3 h-3 rounded-full bg-accent" />
                  )}
                  {index < experiences.length - 1 && (
                    <div className="absolute top-0 left-0 w-px h-full bg-border" />
                  )}
                </div>

                {/* Content */}
                <div className="relative">
                  {/* Dot on timeline */}
                  <div className="absolute -left-[3.15rem] top-2 w-3 h-3 rounded-full bg-background border-2 border-accent" />

                  <span className="text-xs tracking-[0.15em] uppercase text-accent font-medium">
                    {exp.period}
                  </span>
                  <h3 className="font-display text-xl font-bold mt-1">
                    {exp.role}
                  </h3>
                  <div className="flex items-center gap-2 mt-1 text-text-muted">
                    <Briefcase size={14} />
                    <span className="text-sm">{exp.company}</span>
                  </div>
                  <p className="mt-3 text-text-secondary leading-relaxed">
                    {exp.description}
                  </p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}