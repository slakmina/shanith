"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import {
  Mail,
  MapPin,
  Send,
  Globe,
  ExternalLink,
} from "lucide-react";
import Button from "@/components/ui/Button";
import SectionTitle from "@/components/ui/SectionTitle";

export default function Contact() {
  const [formState, setFormState] = useState({
    name: "",
    email: "",
    message: "",
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Form submission placeholder — integrate with a service like EmailJS or Resend
    setFormState({ name: "", email: "", message: "" });
  };

  return (
    <section id="contact" className="py-24 md:py-32 px-6 lg:px-12 relative overflow-hidden">
      <div className="max-w-7xl mx-auto">
        <SectionTitle
          label="Contact"
          title="Let's Create Something Amazing"
          description="Have a project in mind? I'd love to hear about it. Reach out and let's discuss how we can bring your vision to life."
        />

        <div className="grid grid-cols-1 lg:grid-cols-5 gap-12 lg:gap-16 mt-8">
          {/* Contact Info */}
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7, ease: "easeOut" }}
            className="lg:col-span-2 space-y-6"
          >
            <div className="space-y-5">
              {/* Email */}
              <div className="flex items-start gap-4">
                <div className="w-10 h-10 rounded-xl bg-accent/10 flex items-center justify-center shrink-0">
                  <Mail size={18} className="text-accent" />
                </div>
                <div>
                  <p className="text-sm font-medium">Email</p>
                  <p className="text-text-secondary text-sm">
                    hello@shanithdhanuja.com
                  </p>
                </div>
              </div>

              {/* Location */}
              <div className="flex items-start gap-4">
                <div className="w-10 h-10 rounded-xl bg-accent/10 flex items-center justify-center shrink-0">
                  <MapPin size={18} className="text-accent" />
                </div>
                <div>
                  <p className="text-sm font-medium">Location</p>
                  <p className="text-text-secondary text-sm">
                    Colombo, Sri Lanka
                  </p>
                </div>
              </div>

              {/* Social Links */}
              <div className="flex items-start gap-4">
                <div className="w-10 h-10 rounded-xl bg-accent/10 flex items-center justify-center shrink-0">
                  <Globe size={18} className="text-accent" />
                </div>
                <div>
                  <p className="text-sm font-medium">Social</p>
                  <div className="flex items-center gap-3 mt-1">
                    <a
                      href="https://www.linkedin.com/in/shanith-dhanuja-a48620147/"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-text-secondary hover:text-accent transition-colors duration-300 flex items-center gap-1 text-sm"
                    >
                      LinkedIn
                      <ExternalLink size={12} />
                    </a>
                    <span className="text-border">|</span>
                    <a
                      href="https://www.behance.net/shanith"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-text-secondary hover:text-accent transition-colors duration-300 flex items-center gap-1 text-sm"
                    >
                      Behance
                      <ExternalLink size={12} />
                    </a>
                  </div>
                </div>
              </div>
            </div>

            {/* Quick CTA */}
            <div className="pt-6 border-t border-border">
              <p className="text-text-secondary text-sm leading-relaxed mb-4">
                Available for freelance projects, collaborations, and creative opportunities.
              </p>
              <Button
                href="https://www.behance.net/shanith"
                external
                variant="secondary"
                size="sm"
                icon={<ExternalLink size={14} />}
              >
                View Portfolio
              </Button>
            </div>
          </motion.div>

          {/* Contact Form */}
          <motion.div
            initial={{ opacity: 0, x: 40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7, ease: "easeOut" }}
            className="lg:col-span-3"
          >
            <form
              onSubmit={handleSubmit}
              className="p-6 md:p-8 rounded-2xl bg-surface border border-border space-y-5"
            >
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                <div className="space-y-2">
                  <label
                    htmlFor="name"
                    className="text-sm font-medium text-text-secondary"
                  >
                    Name
                  </label>
                  <input
                    type="text"
                    id="name"
                    value={formState.name}
                    onChange={(e) =>
                      setFormState({ ...formState, name: e.target.value })
                    }
                    placeholder="Your name"
                    className="w-full px-4 py-3 rounded-xl bg-background border border-border text-text placeholder:text-text-muted focus:outline-none focus:border-accent transition-colors duration-300 text-sm"
                  />
                </div>
                <div className="space-y-2">
                  <label
                    htmlFor="email"
                    className="text-sm font-medium text-text-secondary"
                  >
                    Email
                  </label>
                  <input
                    type="email"
                    id="email"
                    value={formState.email}
                    onChange={(e) =>
                      setFormState({ ...formState, email: e.target.value })
                    }
                    placeholder="your@email.com"
                    className="w-full px-4 py-3 rounded-xl bg-background border border-border text-text placeholder:text-text-muted focus:outline-none focus:border-accent transition-colors duration-300 text-sm"
                  />
                </div>
              </div>
              <div className="space-y-2">
                <label
                  htmlFor="message"
                  className="text-sm font-medium text-text-secondary"
                >
                  Message
                </label>
                <textarea
                  id="message"
                  rows={5}
                  value={formState.message}
                  onChange={(e) =>
                    setFormState({ ...formState, message: e.target.value })
                  }
                  placeholder="Tell me about your project..."
                  className="w-full px-4 py-3 rounded-xl bg-background border border-border text-text placeholder:text-text-muted focus:outline-none focus:border-accent transition-colors duration-300 text-sm resize-none"
                />
              </div>
              <button
                type="submit"
                className="w-full flex items-center justify-center gap-2 px-7 py-3 bg-accent text-background font-medium rounded-full hover:bg-accent-hover hover:glow-accent transition-all duration-300"
              >
                <Send size={16} />
                Send Message
              </button>
            </form>
          </motion.div>
        </div>
      </div>
    </section>
  );
}