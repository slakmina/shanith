"use client";

import { motion } from "framer-motion";
import { processSteps } from "@/data/portfolio";
import SectionTitle from "@/components/ui/SectionTitle";

export default function Process() {
  return (
    <section id="process" className="py-24 md:py-32 px-6 lg:px-12 relative overflow-hidden">
      <div className="max-w-7xl mx-auto">
        <SectionTitle
          label="How I Work"
          title="Design Process"
          description="A structured yet flexible approach that ensures every project moves from concept to completion with clarity and creative excellence."
        />

        {/* Timeline */}
        <div className="relative">
          {/* Center line (desktop) */}
          <div className="hidden lg:block absolute left-1/2 top-0 bottom-0 w-px bg-border -translate-x-1/2" />

          <div className="flex flex-col lg:gap-0">
            {processSteps.map((step, index) => {
              const isLeft = index % 2 === 0;
              return (
                <motion.div
                  key={step.number}
                  initial={{ opacity: 0, y: 40 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, margin: "-60px" }}
                  transition={{ duration: 0.6, delay: index * 0.08, ease: "easeOut" }}
                  className={`relative flex flex-col lg:flex-row items-center lg:items-start gap-6 lg:gap-12 py-8 lg:py-12 ${
                    isLeft ? "lg:flex-row" : "lg:flex-row-reverse"
                  }`}
                >
                  {/* Dot on timeline */}
                  <div className="hidden lg:flex absolute left-1/2 -translate-x-1/2 w-4 h-4 rounded-full bg-accent border-4 border-background z-10" />

                  {/* Content */}
                  <div
                    className={`w-full lg:w-[calc(50%-3rem)] ${
                      isLeft ? "lg:text-right" : "lg:text-left"
                    }`}
                  >
                    <div
                      className={`p-6 lg:p-8 rounded-2xl bg-surface border border-border hover:border-accent/20 transition-all duration-300 ${
                        isLeft ? "lg:mr-auto" : "lg:ml-auto"
                      }`}
                    >
                      <span className="font-display text-4xl font-bold text-accent/30">
                        {step.number}
                      </span>
                      <h3 className="font-display text-xl font-bold mt-1 mb-2">
                        {step.title}
                      </h3>
                      <p className="text-text-secondary text-sm leading-relaxed">
                        {step.description}
                      </p>
                    </div>
                  </div>

                  {/* Empty spacer for alternating layout */}
                  <div className="hidden lg:block w-[calc(50%-3rem)]" />
                </motion.div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}