"use client";

import { motion } from "framer-motion";

interface SectionTitleProps {
  label: string;
  title: string;
  description?: string;
  align?: "left" | "center";
}

export default function SectionTitle({
  label,
  title,
  description,
  align = "center",
}: SectionTitleProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-80px" }}
      transition={{ duration: 0.6, ease: "easeOut" }}
      className={`mb-16 md:mb-20 ${
        align === "center" ? "text-center" : "text-left"
      }`}
    >
      <span className="inline-block text-xs tracking-[0.2em] uppercase text-accent font-medium mb-3">
        {label}
      </span>
      <h2 className="font-display text-4xl md:text-5xl lg:text-6xl font-bold tracking-tight text-balance">
        {title}
      </h2>
      {description && (
        <p className="mt-4 text-text-secondary text-lg max-w-2xl mx-auto text-balance">
          {description}
        </p>
      )}
    </motion.div>
  );
}