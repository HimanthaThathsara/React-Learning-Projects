import formatString from "@/app/functions/formatString";
import {getArticles} from "@/app/functions/getArticles";
import PostNavigation from "@/components/PostNavigation";
import SocialSharing from "@/components/SocialSharing";
import Link from "next/link";
import AuthorsDetailsFile from "@/data/Authors.json";

type AuthorData = {
  author: string;
  job: string;
  city: string;
  avatar: string;
  imgAlt: string;
  slug: string;
  biography: {
    summary: string;
    body: string;
  };
  articles: ArticleData[];
};

type ArticleData = {
  title: string;
  img: string;
  date: string;
  read: string;
  label: string;
  slug: string;
};

// Author's Data Fetch
export async function generateMetadata({params}: {params: {author: string}}) {
  // Fetch the list of authors/articles (getArticles may throw on network errors)
  const authors: AuthorData[] = await getArticles();

  // Decode the URL-encoded author slug coming from the route params
  const decodedAuthor = decodeURIComponent(params.author);

  // Find the author data that matches the decoded slug
  const authorData = authors.find((author: AuthorData) => author.slug === decodedAuthor);

  // If there's no matching author, return a simple fallback title
  if (!authorData) {
    return {
      title: AuthorsDetailsFile.Not_Found.title,
    };
  }

  // Return a descriptive title for the author page used by Next.js metadata
  return {
    title: `${authorData.author} | Essentials 101`,
  };
}

// Author's Component
export default async function AuthorDetails({params}: {params: {author: string}}) {
  try {
    // Fetch all authors data
    const authors: AuthorData[] = await getArticles();

    // Decode author slug from URL parameters
    const decodedAuthor = decodeURIComponent(params.author);

    const authorData = authors.find((author: AuthorData) => author.slug === decodedAuthor);

    // Handle case where author is not found
    if (!authorData) {
      return <p>{AuthorsDetailsFile.Not_Found.description}</p>;
    }

    return (
      <main className="max-w-[95rem] w-full mx-auto px-4 sm:pt-4 xs:pt-2 lg:pb-4 md:pb-4 sm:pb-2 xs:pb-2">
        {/* Back Button */}
        <PostNavigation href={AuthorsDetailsFile.Back_Button.href}>{AuthorsDetailsFile.Back_Button.Title}</PostNavigation>
        <article className="max-w-[75rem] w-full mx-auto grid lg:grid-cols-[300px_680px] gap-8 md:gap-6 justify-around">
          {/* Left Side */}
          <div className="w-fit">
            <img src={authorData.avatar} alt={authorData.imgAlt} />
            <div className="flex justify-between border-top border-t border-black mt-12 pt-6">
              <p className="uppercase font-semibold text-lg">{AuthorsDetailsFile.Meta_Data.Follow}</p>
              <SocialSharing links={AuthorsDetailsFile.Meta_Data.Share_Link.links} />
            </div>
          </div>
          {/* Right Side */}
          <article>
            <h1 className="text-subheading pb-8">{authorData.author}</h1>
            <p className="text-blog-summary pb-12">{authorData.biography.summary}</p>
            <p>{authorData.biography.body}</p>
          </article>
        </article>
        {/* Suggested Authors other articles */}
        <div className="pb-12 md:pb-48">
          <h2 className="text-blog-subheading mt-[9.5rem] pt-12 pb-12 md:pb-24">
            {AuthorsDetailsFile.Meta_Data.Articles_by} {authorData.author}
          </h2>
          <AuthorArticles articles={authorData.articles} />
        </div>
      </main>
    );
    // End of try block with catch
  } catch (error) {
    console.error("Error fetching author details:", error);
    return <p>{AuthorsDetailsFile.error}</p>;
  }
}

// Author's Articles Component
function AuthorArticles({articles}: {articles: ArticleData[]}) {
  return (
    <div className="grid md:grid-cols-2 border border-black border-collapse">
      {articles.map((article, index) => (
        <article className="flex items-center gap-2 md:gap-12 p-8 border border-black" key={index}>
          <Link href={`/magazine/${article.slug}`}>
            <img className="h-[9.375rem] w-[9.375rem] hover:scale-105 transition" src={article.img} alt={article.title} />
          </Link>
          <div>
            <p className="heading3-title pb-4">
              <Link href={`/magazine/${article.slug}`}>{article.title}</Link>
            </p>
            <div className="flex gap-8">
              <span className="flex">
                <p className="font-semibold pr-2">{AuthorsDetailsFile.Articles_component_Date}</p>
                <time dateTime={article.date}>{article.date}</time>
              </span>
              <span className="flex">
                <p className="font-semibold pr-2">{AuthorsDetailsFile.Articles_component_city}</p>
                <p className="">{article.label}</p>
              </span>
            </div>
          </div>
        </article>
      ))}
    </div>
  );
}
