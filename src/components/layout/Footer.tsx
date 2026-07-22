"use client";

import { motion } from "framer-motion";
import { ArrowUp, ExternalLink } from "lucide-react";

export default function Footer() {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <footer className="py-12 px-6 lg:px-12 border-t border-border">
      <div className="max-w-7xl mx-auto">
        <div className="flex flex-col md:flex-row items-center justify-between gap-6">
          {/* Brand */}
          <div className="text-center md:text-left">
            <a
              href="#"
              className="font-display text-lg font-bold tracking-tight hover:text-accent transition-colors duration-300"
            >
              Shanith<span className="text-accent">.</span>
            </a>
            <p className="text-text-muted text-xs mt-1">
              Graphic Designer & 2D Motion Graphics Designer
            </p>
          </div>

          {/* Links */}
          <div className="flex items-center gap-4 text-sm text-text-secondary">
            <a
              href="https://www.linkedin.com/in/shanith-dhanuja-a48620147/"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-accent transition-colors duration-300 flex items-center gap-1"
            >
              LinkedIn
              <ExternalLink size={10} />
            </a>
            <span className="text-border">|</span>
            <a
              href="https://www.behance.net/shanith"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-accent transition-colors duration-300 flex items-center gap-1"
            >
              Behance
              <ExternalLink size={10} />
            </a>
          </div>

          {/* Copyright + Scroll Top */}
          <div className="flex items-center gap-4">
            <p className="text-text-muted text-xs">
              &copy; {new Date().getFullYear()} Shanith Dhanuja. All rights
              reserved.
            </p>
            <motion.button
              onClick={scrollToTop}
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.95 }}
              className="w-8 h-8 rounded-full bg-surface border border-border flex items-center justify-center text-text-muted hover:text-accent hover:border-accent transition-all duration-300"
              aria-label="Scroll to top"
            >
              <ArrowUp size={14} />
            </motion.button>
          </div>
        </div>
      </div>
    </footer>
  );
}