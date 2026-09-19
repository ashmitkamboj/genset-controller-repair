# Genset Controller Repair Website

Official website for **Genset Controller Repair** — specialists in component-level electronic repairs, LCD display screen replacements, motherboard card refurbishing, and diagnostic testing for industrial diesel generator controllers.

Live Domain: [gensetcontrollerrepair.com](https://gensetcontrollerrepair.com/)

---

## 🛠️ Key Features

- **Brand-Specific Repair Service Pages**:
  - **Cummins, Sudhir & Jakson**: PS0500, PS0600, PS0601, PS0602, HMI211, HMI320, PCC1301, PCC1302, PCC3300, PCC3320, ECP, ECPG, Powercom, AUX101-AUX105.
  - **Mahindra Powerol**: GC1211, GC1111, GC1112, GC2111, GC2112, SUN409 (GCS-409), SUN904.
  - **Kirloskar KOEL Green**: KG934, KG545, KG645, KG640.
  - **Ashok Leyland LeyPower**: GC1201, GC1202.
  - **Other Universal Controllers**: Deep Sea Electronics (DSE 7320, 7310, 6120, 4520), ComAp InteliCompact & InteliLite, Crompton Greaves (CG CGI 14N overcurrent relays), Greaves Cotton, Smartgen, Woodward.
- **Interactive Enquiry Form with Image Uploads**:
  - Fast enquiry submission with direct photo attachment support (up to 5 controller photos, max 5MB per photo).
  - Instant image file preview with remove buttons.
- **Resend Email API Integration**:
  - Secure backend API route (`/api/contact`) powered by Resend.
  - Delivers enquiry details and attached controller photos directly to your email inbox.
  - Rate limiting (5 requests per 15 min window) and input sanitization built-in.
- **SEO & Performance Optimized**:
  - Canonical SEO routes, structured metadata, fast Turbopack compilation, and 100% static prerendering for lightning-fast page load.

---

## 💻 Tech Stack

- **Framework**: Next.js 16 (App Router + Turbopack)
- **Language**: TypeScript
- **Styling**: Tailwind CSS + Custom CSS Design System
- **Email Service**: Resend API
- **Icons & UI**: Lucide React Icons & Tailwind Typography

---


## 🚀 Getting Started

### 1. Install Dependencies

```bash
npm install
```

### 2. Run Local Development Server

```bash
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) in your browser.

### 3. Production Build & Test

```bash
npm run build
npm run start
```

---

## 📂 Project Structure

```text
├── public/
│   ├── images/                                            # General homepage images
│   └── repair-services/                                   # High-resolution gallery images for brand pages
│       ├── ashok-leyland/
│       ├── cummins-sudhir-jakson/
│       ├── kirloskar/
│       ├── mahindra/
│       ├── other/
│       └── images/
├── src/
│   ├── app/
│   │   ├── api/
│   │   │   └── contact/
│   │   │       └── route.ts                               # Resend API contact endpoint & photo attachments
│   │   ├── repair-services/                               # Primary service routes
│   │   │   ├── ashok-leyland/page.tsx                     # Ashok Leyland repair page
│   │   │   ├── cummins-sudhir-jakson/page.tsx             # Cummins / Sudhir / Jakson repair page
│   │   │   ├── kirloskar/page.tsx                         # Kirloskar repair page
│   │   │   ├── mahindra/page.tsx                          # Mahindra repair page
│   │   │   ├── other/page.tsx                             # Deep Sea, ComAp & other controllers page
│   │   │   └── page.tsx                                   # Main Repair Services gallery page
│   │   ├── repair-of-ashok-leyland-genset-controller/     # SEO redirect route
│   │   ├── repair-of-cummins-sudhir-jakson-genset-controller/ # SEO redirect route
│   │   ├── repair-of-kirloskar-genset-controller/         # SEO redirect route
│   │   ├── repair-of-mahindra-genset-controller/          # SEO redirect route
│   │   ├── repair-of-other-controllers/                   # SEO redirect route
│   │   ├── globals.css                                    # Custom design system & global styles
│   │   ├── icon.png                                       # Favicon / App icon
│   │   ├── layout.tsx                                     # Root layout & HTML structure
│   │   └── page.tsx                                       # Homepage
│   └── components/
│       ├── AboutSection.tsx                               # About Us section component
│       ├── ContactForm.tsx                                # Enquiry Form with image upload feature
│       ├── Footer.tsx                                     # Footer with contact details & form
│       ├── Navbar.tsx                                     # Header navigation bar with dropdown menu
│       ├── RepairsSection.tsx                             # Services showcase grid
│       └── TestimonialsSection.tsx                       # Customer reviews / feedback
├── .env.local                                             # Environment configuration (Resend API key, CORS, Email)
├── next.config.ts                                         # Next.js configuration
├── package.json                                           # Project dependencies and npm scripts
├── tsconfig.json                                          # TypeScript configuration
└── README.md                                              # Project documentation
```

---

