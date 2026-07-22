export interface Project {
  id: string;
  title: string;
  category: string;
  description: string;
  skills: string[];
  imagePlaceholder: string;
  behanceUrl: string;
}

export interface Skill {
  name: string;
  icon: string;
  level: number; // 0-100
}

export interface ProcessStep {
  number: string;
  title: string;
  description: string;
}

export interface Experience {
  role: string;
  company: string;
  period: string;
  description: string;
}

export interface Testimonial {
  id: string;
  name: string;
  role: string;
  company: string;
  content: string;
  avatar: string;
}

export const projects: Project[] = [
  {
    id: "brand-identity-oryx",
    title: "Oryx — Brand Identity & Visual System",
    category: "Branding",
    description:
      "A complete brand identity system for Oryx, encompassing logo design, color palette curation, typography selection, and visual guidelines. The project unifies brand presence across digital and print touchpoints.",
    skills: [
      "Brand Identity",
      "Logo Design",
      "Visual System",
      "Typography",
      "Adobe Illustrator",
    ],
    imagePlaceholder: "/images/projects/branding-oryx-01.jpg",
    behanceUrl: "https://www.behance.net/gallery/shanith/oryx-brand-identity",
  },
  {
    id: "motion-reel-2024",
    title: "2D Motion Graphics Reel 2024",
    category: "Motion Graphics",
    description:
      "A curated reel showcasing 2D character animation, kinetic typography, shape layer motion, and broadcast-style graphics. Demonstrates mastery of rhythm, easing, and visual storytelling through motion.",
    skills: [
      "2D Animation",
      "Motion Graphics",
      "After Effects",
      "Kinetic Typography",
      "Character Animation",
    ],
    imagePlaceholder: "/images/projects/motion-reel-2024-01.jpg",
    behanceUrl:
      "https://www.behance.net/gallery/shanith/motion-graphics-reel-2024",
  },
  {
    id: "social-campaign-lumina",
    title: "Lumina — Social Media Campaign",
    category: "Social Media Design",
    description:
      "An integrated social media campaign featuring templated post designs, animated stories, and carousel layouts. The visual language balances bold geometric shapes with refined typography for high engagement.",
    skills: [
      "Social Media Design",
      "Content Creation",
      "Photoshop",
      "After Effects",
      "Art Direction",
    ],
    imagePlaceholder: "/images/projects/social-lumina-01.jpg",
    behanceUrl: "https://www.behance.net/gallery/shanith/lumina-social-campaign",
  },
  {
    id: "poster-collective",
    title: "Poster Collective — Experimental Typography",
    category: "Print & Poster",
    description:
      "A series of experimental posters exploring the intersection of typography, abstract geometry, and vibrant color palettes. Each poster tells its own visual story while maintaining a cohesive design language.",
    skills: [
      "Poster Design",
      "Typography",
      "Print Design",
      "Illustration",
      "Layout",
    ],
    imagePlaceholder: "/images/projects/poster-collective-01.jpg",
    behanceUrl:
      "https://www.behance.net/gallery/shanith/poster-collective-typography",
  },
  {
    id: "logo-marks-collection",
    title: "Logo Marks — Minimal Symbol Design",
    category: "Logo Design",
    description:
      "A curated collection of minimal logo marks and wordmarks designed for brands across technology, lifestyle, and hospitality sectors. Each mark distills brand essence into a singular, memorable symbol.",
    skills: [
      "Logo Design",
      "Brand Strategy",
      "Minimal Design",
      "Adobe Illustrator",
      "Concept Development",
    ],
    imagePlaceholder: "/images/projects/logo-marks-01.jpg",
    behanceUrl:
      "https://www.behance.net/gallery/shanith/logo-marks-collection",
  },
  {
    id: "illustration-series",
    title: "Vector Illustration Series",
    category: "Illustration",
    description:
      "A vibrant vector illustration series combining flat design principles with rich gradients and expressive character design. The collection demonstrates versatility across editorial, advertising, and brand illustration.",
    skills: [
      "Illustration",
      "Vector Art",
      "Adobe Illustrator",
      "Character Design",
      "Color Theory",
    ],
    imagePlaceholder: "/images/projects/illustration-series-01.jpg",
    behanceUrl:
      "https://www.behance.net/gallery/shanith/vector-illustration-series",
  },
];

export const skills: Skill[] = [
  { name: "Brand Identity", icon: "palette", level: 92 },
  { name: "Logo Design", icon: "shapes", level: 90 },
  { name: "Social Media Design", icon: "share2", level: 85 },
  { name: "Marketing Collateral", icon: "file-text", level: 82 },
  { name: "Illustration", icon: "pen-tool", level: 88 },
  { name: "2D Animation", icon: "film", level: 90 },
  { name: "Motion Graphics", icon: "clapperboard", level: 95 },
  { name: "Typography", icon: "type", level: 87 },
  { name: "Print Design", icon: "printer", level: 80 },
  { name: "Photo Manipulation", icon: "image", level: 83 },
];

export const processSteps: ProcessStep[] = [
  {
    number: "01",
    title: "Discover",
    description:
      "Understanding the brand, audience, and goals through in-depth research and collaborative discovery sessions.",
  },
  {
    number: "02",
    title: "Research",
    description:
      "Market analysis, competitor audit, and visual research to establish a strong strategic foundation.",
  },
  {
    number: "03",
    title: "Concept",
    description:
      "Exploring creative directions through mood boards, sketches, and initial design concepts.",
  },
  {
    number: "04",
    title: "Design",
    description:
      "Crafting the visual identity, motion graphics, and all creative assets with meticulous attention to detail.",
  },
  {
    number: "05",
    title: "Animate",
    description:
      "Bringing designs to life through 2D animation, motion graphics, and dynamic visual storytelling.",
  },
  {
    number: "06",
    title: "Deliver",
    description:
      "Polishing final assets, preparing comprehensive brand guidelines, and delivering production-ready files.",
  },
];

export const experiences: Experience[] = [
  {
    role: "Graphic Designer & 2D Motion Graphics Designer",
    company: "Freelance",
    period: "2020 — Present",
    description:
      "Delivering brand identity systems, motion graphics, social media campaigns, and print collateral for a diverse range of clients across multiple industries.",
  },
  {
    role: "Graphic Designer",
    company: "Creative Studio — Colombo, Sri Lanka",
    period: "2018 — 2020",
    description:
      "Led brand identity projects from concept to delivery. Created visual assets for marketing campaigns, social media, and corporate communications.",
  },
  {
    role: "Junior Graphic Designer",
    company: "Design Agency — Sri Lanka",
    period: "2016 — 2018",
    description:
      "Supported senior design team in creating marketing materials, social graphics, and presentation design. Developed foundational skills in Adobe Creative Suite and motion design.",
  },
];

export const testimonials: Testimonial[] = [
  {
    id: "t1",
    name: "Client Name",
    role: "Marketing Director",
    company: "Company Name",
    content:
      "Placeholder testimonial — replace with actual client feedback. The layout and design of this section is production-ready.",
    avatar: "/images/avatars/placeholder-01.jpg",
  },
  {
    id: "t2",
    name: "Client Name",
    role: "Creative Lead",
    company: "Company Name",
    content:
      "Placeholder testimonial — replace with actual client feedback. The layout and design of this section is production-ready.",
    avatar: "/images/avatars/placeholder-02.jpg",
  },
  {
    id: "t3",
    name: "Client Name",
    role: "Founder",
    company: "Company Name",
    content:
      "Placeholder testimonial — replace with actual client feedback. The layout and design of this section is production-ready.",
    avatar: "/images/avatars/placeholder-03.jpg",
  },
];