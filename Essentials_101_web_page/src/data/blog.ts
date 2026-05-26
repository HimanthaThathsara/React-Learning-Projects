// Shared portfolio data
export const blog = [
  {
    slug: "norganex",
    title: "Norganex",
    studio: "Depot",
    image: "https://slelguoygbfzlpylpxfs.supabase.co/storage/v1/object/public/test-clones/7a355a38-75ce-40e5-a6c8-71106d1813b6-visuelle-co-uk/assets/images/Visuelle_Header-1-12.jpg",
    link: "/blog/norganex",
    description: "A comprehensive branding project for Norganex, showcasing modern design principles and innovative visual solutions.",
    category: "Branding",
    year: "2024",
    content: `
      <p>Norganex represents a bold step forward in contemporary branding. This project showcases the intersection of minimalist design and powerful visual communication.</p>
      <p>The design system was carefully crafted to reflect the brand's core values while maintaining flexibility across various touchpoints.</p>
      <p>Key deliverables included brand identity, packaging design, and digital assets that work seamlessly across all platforms.</p>
    `
  },
  {
    slug: "episode-18",
    title: "Episode 18",
    studio: "Oskar Lübeck",
    image: "https://slelguoygbfzlpylpxfs.supabase.co/storage/v1/object/public/test-clones/7a355a38-75ce-40e5-a6c8-71106d1813b6-visuelle-co-uk/assets/images/Visuelle_Header-1-12.jpg",
    link: "/blog/episode-18",
    description: "An experimental typography project exploring the boundaries of visual communication.",
    category: "Typography",
    year: "2024",
    content: `
      <p>Episode 18 is a typographic exploration that pushes the boundaries of traditional letterforms.</p>
      <p>This project demonstrates how typography can be both functional and artistic, creating a unique visual language.</p>
      <p>The work has been featured in several design publications and exhibitions worldwide.</p>
    `
  },
  {
    slug: "marie-antoinette",
    title: "Marie Antoinette",
    studio: "Local Studio",
    image: "https://slelguoygbfzlpylpxfs.supabase.co/storage/v1/object/public/test-clones/7a355a38-75ce-40e5-a6c8-71106d1813b6-visuelle-co-uk/assets/images/Visuelle_Header-1-12.jpg",
    link: "/blog/marie-antoinette",
    description: "A historical design project reimagining classical aesthetics for modern audiences.",
    category: "Illustration",
    year: "2024",
    content: `
      <p>Marie Antoinette bridges the gap between historical reference and contemporary design.</p>
      <p>The project combines traditional illustration techniques with modern digital tools to create a unique visual narrative.</p>
      <p>This work demonstrates how historical inspiration can inform cutting-edge design solutions.</p>
    `
  }
];

export type PortfolioItem = typeof blog[0];
