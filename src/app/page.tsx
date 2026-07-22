"use client";

import dynamic from "next/dynamic";
import { Suspense } from "react";

// Layout components
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";

// Sections
import Hero from "@/components/sections/Hero";

const FeaturedWork = dynamic(
  () => import("@/components/sections/FeaturedWork"),
  {
    ssr: false,
  }
);

const About = dynamic(() => import("@/components/sections/About"), {
  ssr: false,
});

const Skills = dynamic(() => import("@/components/sections/Skills"), {
  ssr: false,
});

const Process = dynamic(() => import("@/components/sections/Process"), {
  ssr: false,
});

const Experience = dynamic(
  () => import("@/components/sections/Experience"),
  { ssr: false }
);

const Testimonials = dynamic(
  () => import("@/components/sections/Testimonials"),
  { ssr: false }
);

const Contact = dynamic(() => import("@/components/sections/Contact"), {
  ssr: false,
});

function SectionFallback() {
  return (
    <div className="py-24 px-6 flex items-center justify-center">
      <div className="w-5 h-5 border-2 border-accent/30 border-t-accent rounded-full animate-spin" />
    </div>
  );
}

export default function HomePage() {
  return (
    <>
      <Navbar />
      <main className="relative">
        <Hero />
        <Suspense fallback={<SectionFallback />}>
          <FeaturedWork />
        </Suspense>
        <Suspense fallback={<SectionFallback />}>
          <About />
        </Suspense>
        <Suspense fallback={<SectionFallback />}>
          <Skills />
        </Suspense>
        <Suspense fallback={<SectionFallback />}>
          <Process />
        </Suspense>
        <Suspense fallback={<SectionFallback />}>
          <Experience />
        </Suspense>
        <Suspense fallback={<SectionFallback />}>
          <Testimonials />
        </Suspense>
        <Suspense fallback={<SectionFallback />}>
          <Contact />
        </Suspense>
      </main>
      <Footer />
    </>
  );
}