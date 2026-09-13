# Krutika Bhoi - Portfolio Website

A world-class, premium, production-ready portfolio website built with React 19, TypeScript, and modern web technologies. Features a dark futuristic design with glassmorphism, smooth animations, and[...] 

**Live Site:** https://kitportfolio-five.vercel.app/

## 🌐 Live Demo

[🔗 Visit the Live Demo](https://kitportfolio-five.vercel.app/)

> **Note:** This points to the deployed portfolio site.

## 📸 Screenshots

[![Portfolio Homepage](screenshots/homepage.png)](https://kitportfolio-five.vercel.app/)

> **How to add your screenshot:**
> 1. Open your website in a browser
> 2. Take a screenshot (Press `PrtScn` or use Snipping Tool)
> 3. Save it as `homepage.png` in the `screenshots/` folder
> 4. The image will automatically appear here

## 🚀 Tech Stack

- **React 19** - Latest React with improved performance
- **Vite** - Fast build tool and dev server
- **TypeScript** - Type-safe development
- **Tailwind CSS** - Utility-first CSS framework
- **Framer Motion** - Smooth animations & transitions
- **GSAP** - Professional-grade animations
- **React Three Fiber** - 3D capabilities
- **Three.js** - 3D graphics library
- **React Icons** - Icon library

## ✨ Features

- **Loading Screen** - Animated logo with progress bar
- **Navbar** - Glassmorphism, sticky, responsive with mobile menu & active section tracking
- **Hero Section** - Full screen with animated background blobs, typing animation, profile image with floating rings
- **About Section** - Glass card with statistics, professional summary
- **Skills Section** - Animated category cards with technology icons
- **Experience Section** - Timeline layout with glass cards
- **Education Section** - BCA (Currently Pursuing) and Applied AI & ML Essentials program details with premium card design
- **Certifications Section** - Animated grid cards with hover effects
- **Projects Section** - Premium cards with hover effects and modal popup
- **GitHub Section** - Stats, top languages graph, repository cards
- **Contact Section** - Contact form + information with glass card design
- **Footer** - Premium footer with social links & back to top button
- **Scroll Progress Indicator** - Gradient progress bar at top
- **Animated Cursor** - Custom cursor with hover effects
- **Responsive Design** - Works perfectly on desktop, tablet, and mobile
- **SEO Optimized** - Meta tags, Open Graph, Twitter Cards

## 🎨 Design

- **Theme**: Dark futuristic premium
- **Design Language**: Glassmorphism, soft glowing effects, animated gradients
- **Color Palette**:
  - Background: `#050816`
  - Primary: `#7C3AED`
  - Secondary: `#38BDF8`
  - Accent: `#00F5D4`
  - Pink: `#EC4899`
- **Typography**: Inter, Poppins, Sora

## 📁 Project Structure

```
portfolio/
├── public/
│   ├── resume.pdf          # Downloadable resume
│   ├── favicon.svg          # Browser tab icon
│   └── kitttu.jpg           # Profile photo
├── src/
│   ├── components/
│   │   ├── sections/        # Main page sections
│   │   │   ├── LoadingScreen.tsx
│   │   │   ├── Navbar.tsx
│   │   │   ├── Hero.tsx
│   │   │   ├── TypeAnimation.tsx
│   │   │   ├── About.tsx
│   │   │   ├── Skills.tsx
│   │   │   ├── Experience.tsx
│   │   │   ├── Education.tsx
│   │   │   ├── Certifications.tsx
│   │   │   ├── Projects.tsx
│   │   │   ├── GitHubSection.tsx
│   │   │   ├── Contact.tsx
│   │   │   └── Footer.tsx
│   │   └── ui/              # Reusable UI components
│   │       ├── Button.tsx
│   │       ├── SectionHeader.tsx
│   │       ├── ScrollProgress.tsx
│   │       └── AnimatedCursor.tsx
│   ├── data/
│   │   └── portfolio.ts     # All portfolio content data
│   ├── hooks/
│   │   ├── useMousePosition.ts
│   │   └── useScrollProgress.ts
│   ├── styles/
│   │   └── globals.css      # Global styles & Tailwind
│   ├── utils/
│   │   └── cn.ts            # className utility
│   ├── App.tsx               # Main app component
│   ├── main.tsx              # Entry point
│   └── vite-env.d.ts         # Vite type declarations
├── index.html
├── package.json
├── tsconfig.json
├── vite.config.ts
├── tailwind.config.js
├── postcss.config.js
└── README.md
```

## 🛠️ Installation & Setup

### Prerequisites

- **Node.js** (v18 or higher)
- **npm** (comes with Node.js)

### Steps to Run Locally

1. **Clone or navigate to the project**
   ```bash
   cd C:\Users\HP\Desktop\portfolio
   ```

2. **Install dependencies**
   ```bash
   npm install
   ```

3. **Start the development server**
   ```bash
   npm run dev
   ```

4. **Open in browser**
   - The server will start at `http://localhost:5173`
   - Open this URL in your browser to see the portfolio

### Build for Production

```bash
npm run build
```

This creates an optimized `dist/` folder ready for deployment.

### Preview Production Build

```bash
npm run preview
```

## 🚀 Deployment

The `dist/` folder contains the production build. You can deploy it to:

- **Vercel** - Connect your GitHub repo for auto-deploy
- **Netlify** - Drag and drop the `dist/` folder
- **GitHub Pages** - Use the `gh-pages` branch
- **Any static hosting** - Upload the `dist/` folder

## 🔧 Customization

### Update Personal Info
Edit `src/data/portfolio.ts` to update:
- Name, title, email
- Social media links
- About summary
- Skills, experience, education
- Projects, certifications

### Update Profile Photo
Replace or add your photo in the `public/` folder and update the `avatar` path in `src/data/portfolio.ts`.

### Update Resume
Replace `public/resume.pdf` with your latest resume PDF.

### Update Colors
Edit the color palette in `tailwind.config.js`.

## 📄 License

This project is personal portfolio code. Feel free to use it as inspiration or template for your own portfolio.

---

Made with ❤️ by Krutika Bhoi
