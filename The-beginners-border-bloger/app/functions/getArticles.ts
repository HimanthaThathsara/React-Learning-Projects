// Define the structure of an article author/contributor
export type ArticleType = {
  // Author identification and metadata
  id: number;
  author: string;
  job: string;
  city: string;
  avatar: string;
  imgAlt: string;
  slug: string;

  // Collection of articles written by this author
  articles: Array<{
    // Article metadata
    title: string;
    popular: boolean;
    popularity: number;
    description: string;
    date: string;
    read: string;
    label: string;

    // Article visual elements
    img: string;
    imgAlt: string;
    slug: string;

    // Article body content structure
    content: Array<{
      img: string;
      summary: string;
      section1: string;
      quote: Array<string>;
      summary2: string;
      section2: string;
    }>;
  }>;
};

// Async function to fetch article data from API or local JSON
export async function getArticles() {
  // Make HTTP request to get articles data
  const res = await fetch(
    // Production URL (commented out) - GitHub raw content
    // "https://raw.githubusercontent.com/asbhogal/Fyrre-Magazine/main/json/articles.json"

    // Development URL - local JSON file served by dev server
    "http://localhost:3000/json/articles.json"
  );

  // Error handling: Check if the HTTP request was successful
  if (!res.ok) {
    // Throw descriptive error if fetch fails (network issues, 404, 500, etc.)
    throw new Error("Failed to fetch article data");
  }

  // Parse and return JSON response
  // Note: This returns Promise<any> - consider adding return type annotation
  return res.json();
}
