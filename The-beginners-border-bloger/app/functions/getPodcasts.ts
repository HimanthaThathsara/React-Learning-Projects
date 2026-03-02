// ...// ...existing code...

// Type describing the shape of a single podcast item returned by the API.
// Use this type to get compile-time guarantees about fields you expect.
export type PodcastType = {
  id: number;
  title: string;
  img: string;
  imgAlt: string;
  date: string;
  duration: string;
  episode: string;
  slug: string;
  content: {
    summary: string;
    section1: string;
    quote: [string, string];
    section2: string;
  }[];
};

// Async helper that fetches the list of podcasts and returns a typed array.
// - Returns Promise<PodcastType[]>, so callers can await or use .then.
// - Throws if the HTTP response status is not ok (status 200–299).
export async function getPodcasts(): Promise<PodcastType[]> {
  // Fetch JSON from a local dev endpoint (swap to production URL when deploying)
  const res = await fetch(
    // "https://raw.githubusercontent.com/asbhogal/Fyrre-Magazine/main/json/podcasts.json"
    // same details in local json file
    "http://localhost:3000/json/podcasts.json"
  );

  // Defensive check: if the response has a non-OK status, throw an error so
  // callers can catch it and handle UI error states.
  if (!res.ok) {
    throw new Error("Failed to fetch podcast data");
  }

  // Parse and return the JSON. TypeScript cannot validate runtime shape,
  // so the returned value is assumed to match PodcastType[].
  return res.json();
}

// ...existing code...
