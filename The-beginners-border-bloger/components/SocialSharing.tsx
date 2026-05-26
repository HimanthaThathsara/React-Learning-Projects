import Link from "next/link";

// Define a TypeScript interface for social media link data structure
// This ensures type safety and documents what properties each link object should have
export type SocialMediaLink = {
  href: string;
  ariaLabel: string;
  src: string;
  alt: string;
};

// Define the props interface for the SocialSharing component
// This component expects an array of social media links
type SocialSharingProps = {
  links: SocialMediaLink[];
};

// Main component function that renders a row of social media sharing buttons
export default function SocialSharing({links}: SocialSharingProps) {
  return (
    // Container div with flexbox layout and gap between items
    <div className="flex gap-3">
      {/* Map over the links array to create a Link component for each social media platform */}
      {links.map((link, index) => (
        // Next.js Link component for optimized navigation
        <Link
          key={index} // React key for list items (using index)
          href={link.href} // Destination URL from the link object
          aria-label={link.ariaLabel} // Accessibility label for screen readers
          target="_blank" // Opens link in new tab/window
        >
          {/* Social media icon image */}
          <img
            className="h-full w-fit" // Tailwind classes: full height, width fits content
            src={link.src} // Image source from link object
            alt={link.alt} // Alt text for accessibility
          />
        </Link>
      ))}
    </div>
  );
}
