# 🏗️ BluxRise - Modern Construction & Engineering Website Template

A modern, high-performance, and responsive website template designed specifically for commercial, industrial, and residential construction companies, civil engineering contractors, and architecture firms. 

Built with **Next.js (App Router)**, **TypeScript**, **Tailwind CSS v4**, and smooth micro-animations powered by **GSAP** and **Lenis Scroll**.

---

## ✨ Features

- **Modern & Professional Design**: Tailored aesthetics, typography (Plus Jakarta Sans & DM Sans), and clean visual hierarchy for general contractors, engineering firms, and builders.
- **Complete Page Layouts**:
  - 🏠 **Home Page**: Dynamic hero section, animated statistics, company overview, services showcase, featured projects, process timeline, interactive FAQ, client testimonials, and CTA banners.
  - 🏢 **About Us** (`/about`): Company history, mission, leadership, safety compliance, and certifications.
  - 🛠️ **Services** (`/services`): Detailed commercial, industrial, residential, and design-build service offerings.
  - 📐 **Projects Portfolio** (`/projects`): Filterable project gallery, metrics, and case studies.
  - 👷 **Careers** (`/careers`): Open positions, company culture, employee benefits, and job application CTAs.
  - 📰 **Blog / Insights** (`/blog`): Industry news, construction management insights, and thought leadership articles.
  - 📬 **Contact** (`/contact`): Consultation request form, interactive contact details, office locations, and quote inquiry.
  - 🚫 **Custom 404** (`/not-found`): Branded error page with quick recovery links.
- **Smooth Scrolling & Micro-Animations**: Integrated [Lenis](https://github.com/darkroomengineering/lenis) smooth scroll and [GSAP](https://greensock.com/gsap/) animations.
- **Iconography**: Crisp, lightweight vector icons from [`lucide-react`](https://lucide.dev/).
- **SEO & Performance Ready**: Optimized metadata, OpenGraph tags, semantic HTML5, clean routing, and fast load times with Turbopack.
- **100% Mobile Responsive**: Tested across desktop, tablet, and mobile breakpoints.

---

## 🛠️ Tech Stack

- **Framework**: [Next.js 16 (App Router)](https://nextjs.org/)
- **Language**: [TypeScript](https://www.typescriptlang.org/)
- **Styling**: [Tailwind CSS v4](https://tailwindcss.com/)
- **Animations**: [GSAP](https://gsap.com/) & [@gsap/react](https://gsap.com/resources/React/)
- **Smooth Scroll**: [Lenis](https://lenis.darkroom.engineering/)
- **Icons**: [Lucide React](https://lucide.dev/)

---

## 🚀 Getting Started

### Prerequisites

Ensure you have the following installed:
- [Node.js](https://nodejs.org/) (v18.18+ or v20+ recommended)
- `npm`, `pnpm`, or `yarn`

### Installation

1. **Clone or download the repository:**
   ```bash
   git clone https://github.com/noritix/bluxrise.git
   cd bluxrise
   ```

2. **Install dependencies:**
   ```bash
   npm install
   # or
   pnpm install
   # or
   yarn install
   ```

3. **Start the development server:**
   ```bash
   npm run dev
   ```

4. **Open your browser:**
   Navigate to [http://localhost:3000](http://localhost:3000) to view the website.

---

## 📁 Project Structure

```text
├── app/
│   ├── about/            # About page route
│   ├── blog/             # Blog & insights route
│   ├── careers/          # Careers & job openings route
│   ├── contact/          # Contact & quote request route
│   ├── projects/         # Portfolio & project showcases route
│   ├── services/         # Service catalog route
│   ├── globals.css       # Global styles & Tailwind v4 theme configuration
│   ├── layout.tsx        # Root layout, fonts, and meta tags
│   ├── not-found.tsx     # Custom 404 error page
│   └── page.tsx          # Homepage
├── components/
│   ├── About.tsx         # About teaser component
│   ├── Blog.tsx          # Blog highlight component
│   ├── CtaBanner.tsx     # Call-to-action banners
│   ├── Faq.tsx           # Accordion FAQ component
│   ├── FeaturedProjects.tsx # Project cards & filterable gallery
│   ├── Footer.tsx        # Global footer with links & newsletter
│   ├── Hero.tsx          # Hero section with primary CTAs
│   ├── Navbar.tsx        # Responsive navigation bar with mobile drawer
│   ├── Process.tsx       # Step-by-step workflow timeline
│   ├── Services.tsx      # Core services grid
│   ├── SmoothScroll.tsx  # Lenis smooth scroll provider
│   ├── Testimonials.tsx  # Client reviews & testimonials
│   └── WhyChooseUs.tsx   # Company value proposition & statistics
├── public/               # Static assets (images, logos, icons, favicon)
├── package.json          # Project metadata and dependencies
└── tsconfig.json         # TypeScript configuration
```

---

## 🎨 Customization Guide

### 1. Branding & Company Info
- Update the company name, logo, phone number, email, and address in:
  - `components/Navbar.tsx`
  - `components/Footer.tsx`
  - `app/contact/page.tsx`
  - `app/layout.tsx` (Metadata title and description)

### 2. Colors & Typography
- The template uses Google Fonts (`Plus Jakarta Sans` and `DM Sans`) configured in `app/layout.tsx`.
- Color schemes and custom theme utilities can be adjusted in `app/globals.css`.

### 3. Images & Media
- Place your company project photography and logos inside the `public/` directory.
- Replace placeholder imagery in `components/FeaturedProjects.tsx`, `components/Hero.tsx`, and `components/About.tsx`.

---

## 📦 Available Scripts

| Command | Description |
| :--- | :--- |
| `npm run dev` | Runs the Next.js development server with Turbopack |
| `npm run build` | Builds the optimized production application |
| `npm run start` | Runs the compiled production build locally |
| `npm run lint` | Runs ESLint to inspect code quality |

---

## 🌐 Deployment

The easiest way to deploy this template is through the [Vercel Platform](https://vercel.com/):

1. Push your repository to GitHub / GitLab / Bitbucket.
2. Import your repository into [Vercel](https://vercel.com/new).
3. Vercel will automatically detect Next.js and configure the build settings.
4. Click **Deploy**.

You can also deploy to Netlify, AWS Amplify, Docker, or any standard Node.js server.

---

## 📄 License

This project is open-source and free to use for personal and commercial projects. Feel free to customize and adapt it for your construction company or client projects.
