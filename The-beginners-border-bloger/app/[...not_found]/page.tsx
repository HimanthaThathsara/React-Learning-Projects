import {notFound} from "next/navigation";

// Export a server component that immediately signals Next.js to render a 404.
export default function NotFoundCatchAll() {
  // notFound() tells Next.js to stop rendering this page and show the nearest
  // `not-found` UI (not-found.tsx) or the default 404. It works in server
  // components (App Router).
  notFound();

  // No return needed — notFound() throws a special control-flow error internally.
}
