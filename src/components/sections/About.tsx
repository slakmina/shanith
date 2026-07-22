"use client";

import { motion } from "framer-motion";
import { Palette, Lightbulb, Film, Sparkles } from "lucide-react";
import SectionTitle from "@/components/ui/SectionTitle";

const highlights = [
  {
    icon: Palette,
    title: "Graphic Design",
    description:
      "Creating cohesive visual identities that communicate brand values with clarity and impact across every touchpoint.",
  },
  {
    icon: Film,
    title: "Motion Graphics",
    description:
      "Bringing static designs to life through 2D animation, kinetic typography, and compelling visual narratives.",
  },
  {
    icon: Lightbulb,
    title: "Creative Direction",
    description:
      "Guiding projects from initial concept through to final delivery with a focus on strategic, purpose-driven design.",
  },
  {
    icon: Sparkles,
    title: "Visual Storytelling",
    description:
      "Crafting narratives through design and motion that connect emotionally and leave lasting impressions.",
  },
];

export default function About() {
  return (
    <section id="about" className="py-24 md:py-32 px-6 lg:px-12 relative">
      <div className="max-w-7xl mx-auto">
        <SectionTitle
          label="About"
          title="Designer. Animator. Storyteller."
          description="With a passion for visual communication and motion design, I help brands express their identity through thoughtful, compelling creative work."
        />

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center mt-8">
          {/* Bio */}
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7, ease: "easeOut" }}
          >
            <p className="text-text-secondary text-lg leading-relaxed mb-4">
              I'm a Graphic Designer and 2D Motion Graphics Designer based
              in Sri Lanka, with several years of experience crafting brand
              identities, motion design, and visual content for clients across
              diverse industries.
            </p>
            <p className="text-text-secondary text-lg leading-relaxed mb-4">
              My work spans brand identity systems, logo design, social media
              campaigns, print collateral, illustration, and 2D animation. I
              combine strategic thinking with creative execution to deliver
              designs that are both visually striking and purpose-driven.
            </p>
            <p className="text-text-secondary text-lg leading-relaxed">
              Proficient across the Adobe Creative Suite — Photoshop,
              Illustrator, After Effects, and Premiere Pro — I bring ideas to
              life with meticulous attention to detail, from concept
              development through to final production.
            </p>

            {/* Stats */}
            <div className="flex gap-8 md:gap-12 mt-10">
              {[
                { value: "6+", label: "Years Experience" },
                { value: "50+", label: "Projects Delivered" },
                { value: "30+", label: "Happy Clients" },
              ].map((stat) => (
                <div key={stat.label}>
                  <p className="font-display text-3xl md:text-4xl font-bold text-accent">
                    {stat.value}
                  </p>
                  <p className="text-text-muted text-sm mt-1">{stat.label}</p>
                </div>
              ))}
            </div>
          </motion.div>

          {/* Focus Areas */}
          <motion.div
            initial={{ opacity: 0, x: 40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7, ease: "easeOut" }}
            className="grid grid-cols-1 sm:grid-cols-2 gap-4"
          >
            {highlights.map((item) => (
              <div
                key={item.title}
                className="p-6 rounded-2xl bg-surface border border-border hover:border-accent/30 hover:bg-surface-light transition-all duration-300 group"
              >
                <div className="w-10 h-10 rounded-xl bg-accent/10 flex items-center justify-center mb-4 group-hover:bg-accent/20 transition-colors duration-300">
                  <item.icon size={20} className="text-accent" />
                </div>
                <h3 className="font-display text-lg font-semibold mb-2">
                  {item.title}
                </h3>
                <p className="text-text-secondary text-sm leading-relaxed">
                  {item.description}
                </p>
              </div>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  );
}