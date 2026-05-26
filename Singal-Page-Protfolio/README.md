# Loakesh Bachhu Portfolio

A modern Next.js portfolio website with server-side rendering (SSR) that replicates the original terminal-style HTML/CSS/JS portfolio.

## Features

- **Terminal-style Interface**: Maintains the original terminal aesthetic with green text on black background
- **Typewriter Effect**: Animated text typing effect for the main greeting
- **Modal Windows**: About and Contact sections open in styled modal windows
- **Responsive Design**: Works on all device sizes
- **Server-Side Rendering**: Built with Next.js 15 for optimal performance and SEO

## Technologies Used

- Next.js 15 with App Router
- TypeScript
- CSS Modules with custom styling
- React Hooks (useState, useEffect)

## Getting Started

### Prerequisites

- Node.js 18+
- npm or yarn

### Installation

1. Install dependencies:

```bash
npm install
```

2. Run the development server:

```bash
npm run dev
```

3. Open [http://localhost:3000](http://localhost:3000) in your browser

### Build for Production

```bash
npm run build
npm start
```

## Project Structure

- `src/app/page.tsx` - Main portfolio component
- `src/app/layout.tsx` - Root layout with metadata
- `src/app/globals.css` - Global styles matching the original design
- `public/` - Static assets

## Original Features Preserved

- Terminal-style navigation (`/About`, `/Contact`, `/Resume`)
- Typewriter animation effect
- Modal windows for About and Contact sections
- Exact same visual styling and layout
- Social media links (LinkedIn, GitHub, CodePen, Instagram)

## Customization

To customize the portfolio:

1. Update personal information in `src/app/page.tsx`
2. Modify styles in `src/app/globals.css`
3. Add new sections by extending the Modal component
4. Update metadata in `src/app/layout.tsx`

## License

This project is for portfolio purposes.
