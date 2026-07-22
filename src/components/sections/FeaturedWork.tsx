"use client";

import { projects } from "@/data/portfolio";
import SectionTitle from "@/components/ui/SectionTitle";
import ProjectCard from "@/components/sections/ProjectCard";

export default function FeaturedWork() {
  return (
    <section id="work" className="py-24 md:py-32 px-6 lg:px-12">
      <div className="max-w-7xl mx-auto">
        <SectionTitle
          label="Selected Work"
          title="Featured Projects"
          description="A curated selection of branding, motion graphics, and design projects that showcase creative range and attention to detail."
        />

        <div className="flex flex-col gap-24 md:gap-32">
          {projects.map((project, index) => (
            <ProjectCard key={project.id} project={project} index={index} />
          ))}
        </div>
      </div>
    </section>
  );
}