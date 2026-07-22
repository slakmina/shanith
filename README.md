# Shanith Dhanuja — Portfolio

Premium single-page portfolio website for **Shanith Dhanuja**, a Graphic Designer and 2D Motion Graphics / Animation Designer based in Colombo, Sri Lanka.

## Tech Stack

- **Framework:** Next.js 16 (App Router)
- **Language:** TypeScript
- **Styling:** Tailwind CSS v4
- **Animations:** Framer Motion
- **Icons:** Lucide React
- **Fonts:** Inter, Space Grotesk (Google Fonts)

## Getting Started

### Prerequisites

- Node.js 18+ 
- npm 9+

### Installation

```bash
# Clone the repository
git clone https://github.com/slakmina/shanith.git
cd shanith

# Install dependencies
npm install

# Start development server
npm run dev
```

The development server will start at `http://localhost:3000`.

### Build for Production

```bash
npm run build
npm start
```

## Project Structure

```
src/
├── app/
│   ├── globals.css          # Global styles & Tailwind config
│   ├── layout.tsx           # Root layout with fonts & SEO metadata
│   └── page.tsx             # Home page — single-page composition
├── components/
│   ├── layout/
│   │   ├── Navbar.tsx       # Glass-morph navigation with mobile menu
│   │   └── Footer.tsx       # Minimal footer with social links
│   ├── sections/
│   │   ├── Hero.tsx         # Full-screen hero with mouse-follow ambient orbs
│   │   ├── FeaturedWork.tsx # Project showcase section
│   │   ├── ProjectCard.tsx  # Individual project with 3D tilt hover
│   │   ├── About.tsx        # Bio, focus areas, and stats
│   │   ├── Skills.tsx       # Animated progress rings with icons
│   │   ├── Process.tsx      # Alternating timeline design workflow
│   │   ├── Experience.tsx   # Vertical timeline career history
│   │   ├── Testimonials.tsx # Client testimonials grid
│   │   └── Contact.tsx      # Contact form + info + social links
│   └── ui/
│       ├── Button.tsx       # Reusable button (primary/secondary/ghost)
│       └── SectionTitle.tsx # Consistent section header
├── data/
│   └── portfolio.ts         # All content: projects, skills, experience, etc.
└── public/
    └── images/
        ├── projects/        # Project thumbnail placeholders
        └── avatars/         # Testimonial avatar placeholders
```

## Design System

| Token | Value |
|-------|-------|
| Background | `#0B0B0B` |
| Surface | `#151515` |
| Surface Light | `#1E1E1E` |
| Border | `#2A2A2A` |
| Text | `#FFFFFF` |
| Text Secondary | `#A8A8A8` |
| Text Muted | `#6B6B6B` |
| Accent | `#FF6B35` |
| Accent Hover | `#FF8555` |

## Customizing Content

All portfolio content lives in `src/data/portfolio.ts`. Edit the arrays to update:

- **projects** — Featured work (images, descriptions, skills, Behance URLs)
- **skills** — Technical skills with proficiency percentages
- **processSteps** — Design process workflow steps
- **experiences** — Professional experience timeline
- **testimonials** — Client testimonials

## Adding Real Images

1. Export project images from Behance at 1600×1200px (4:3 aspect ratio)
2. Place them in `public/images/projects/` with descriptive names:
   - `branding-oryx-01.jpg`
   - `motion-reel-2024-01.jpg`
   - etc.
3. Update `imagePlaceholder` paths in `src/data/portfolio.ts`

## Deployment

Deploy to any platform that supports Next.js:

- **Vercel** (recommended): Connect the GitHub repo — zero configuration needed
- **Netlify**: Use the Next.js build plugin
- **Custom VPS**: Run `npm run build && npm start`

## License

All rights reserved — Shanith Dhanuja