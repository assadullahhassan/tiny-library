# 📚 Tiny Library

**Tiny Library** is a minimalist, modern book-curation web application designed to help readers discover quality books without feeling overwhelmed by endless options. Built with **Next.js 16**, this application focuses on simplicity, intentional design, and ease of navigation.

---

## 🌟 Key Features

- **Curated Book Browsing**: Explore a hand-picked collection of titles across multiple genres (Fiction, Non-Fiction, Romance, Fantasy, Thriller, Horror, Historical, Biography, Self-Help).
- **Genre Filtering**: Quick and responsive filtering sidebar to find books by category.
- **Detailed Book View**: Dedicated individual views featuring full artwork, author details, publication date, likes counter, and genre tags.
- **Like / Interaction System**: Real-time feedback for favorited books.
- **Clean & Minimalist Aesthetics**: Modern, responsive layout with custom image masks and smooth transitions.
- **About & Ethos Page**: Overview of the platform's mission and core values with an integrated contact CTA.

---

## 🛠️ Tech Stack

- **Framework**: [Next.js 15](https://nextjs.org/) (App Router)
- **Language**: TypeScript 
- **Styling**: Tailwind CSS
- **Icons**: Lucide React
- **Deployment**: Vercel

---

## 📁 Project Structure

```text
tiny-library/
├── public/              # Static assets (logos, default book covers)
├── src/
│   ├── app/             # Next.js 16 App Router pages & layouts
│   │   ├── page.tsx     # Landing Page
│   │   ├── books/       # Books catalogue & detail routes
│   │   └── about/       # About page & Ethos
│   ├── components/      # Reusable UI components (Navbar, BookCard, Sidebar, etc.)
│   ├── lib/             # Utility functions & data fetchers
│   └── types/           # TypeScript interfaces and types
├── README.md
└── package.json
```

---

## 🚀 Getting Started

### Prerequisites

Ensure you have Node.js installed on your system:
- **Node.js**: `v18.x` or higher
- **npm**, **yarn**, **pnpm**, or **bun**

### Installation

1. **Clone the repository:**
   ```bash
   git clone https://github.com/assadullahhassan/tiny-library.git
   cd tiny-library
   ```

2. **Install dependencies:**
   ```bash
   npm install
   # or
   pnpm install
   # or
   yarn install
   ```

3. **Run the development server:**
   ```bash
   npm run dev
   ```

4. **Open in browser:**
   Navigate to `http://localhost:3000` to view the application in action.

---

## 📜 Available Scripts

- `npm run dev` – Starts the development server.
- `npm run build` – Builds the production application.
- `npm run start` – Runs the built production server.
- `npm run lint` – Runs ESLint checks.

---
