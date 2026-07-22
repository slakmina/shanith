"use client";

import { motion } from "framer-motion";
import { Quote } from "lucide-react";
import { testimonials } from "@/data/portfolio";
import SectionTitle from "@/components/ui/SectionTitle";

export default function Testimonials() {
  return (
    <section className="py-24 md:py-32 px-6 lg:px-12 relative overflow-hidden">
      <div className="max-w-7xl mx-auto">
        <SectionTitle
          label="Testimonials"
          title="What Clients Say"
          description="Feedback from the people and brands I've had the pleasure of working with."
        />

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {testimonials.map((testimonial, index) => (
            <motion.div
              key={testimonial.id}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-60px" }}
              transition={{
                duration: 0.6,
                delay: index * 0.1,
                ease: "easeOut",
              }}
              className="relative p-6 rounded-2xl bg-surface border border-border hover:border-accent/20 transition-all duration-300"
            >
              <Quote size={32} className="text-accent/20 mb-4" />
              <p className="text-text-secondary leading-relaxed text-sm italic mb-6">
                &ldquo;{testimonial.content}&rdquo;
              </p>
              <div className="flex items-center gap-3 pt-4 border-t border-border">
                {/* Avatar placeholder */}
                <div className="w-10 h-10 rounded-full bg-accent/10 flex items-center justify-center text-accent text-sm font-bold">
                  {testimonial.name.charAt(0)}
                </div>
                <div>
                  <p className="text-sm font-semibold">{testimonial.name}</p>
                  <p className="text-xs text-text-muted">
                    {testimonial.role}, {testimonial.company}
                  </p>
                </div>
              </div>

              {/* Subtle accent line */}
              <div className="absolute bottom-0 left-0 right-0 h-0.5 bg-gradient-to-r from-transparent via-accent/30 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 rounded-b-2xl" />
            </motion.div>
          ))}
        </div>

        {/* Note about placeholders */}
        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.6, duration: 0.5 }}
          className="text-center text-text-muted text-xs mt-8"
        >
          Placeholder testimonials — replace with real client feedback once available.
        </motion.p>
      </div>
    </section>
  );
}