// Magazine Page Article List
"use client";

import Link from "next/link";
import {useState} from "react";
import {Button} from "../ui/button";
import {useArticleContext} from "@/hooks/useArticleContext";
import ComponentsDetailsFile from "@/data/Component.json";

export default function Articles() {
  // Get article data from context. Provide a default empty array to avoid runtime errors
  // if data is ever undefined (safer than assuming the provider always supplies data).
  const {data = []} = useArticleContext();

  // Local state for the currently selected label/category.
  const [selectedLabel, setSelectedLabel] = useState("All");

  // Build a list of labels: "All" plus unique labels from the data.
  // Using a Set removes duplicates; array order follows first appearance.
  const labels: string[] = ["All", ...new Set(data.flatMap((article) => article.articles.map((item) => item.label)))];

  // Flatten the nested structure of authors -> articles into a single list of articles.
  // Also apply the label filter and attach the author to each article item.
  const filteblackArticles = data.flatMap((article) =>
    article.articles
      .filter((item) => (selectedLabel === "All" ? true : selectedLabel === item.label))
      .map((item) => ({
        // spread the article item fields (title, slug, img, etc.)
        ...item,
        // attach the parent author so each card can show the author directly
        author: article.author,
      }))
  );

  return (
    <div className="max-w-[95rem] w-full mx-auto">
      <div className="flex flex-wrap justify-between items-center gap-2 md:gap-0 my-6">
        {/* Section heading */}
        <p className="font-semibold uppercase">{ComponentsDetailsFile.Articles.Categories}</p>

        {/* Render label buttons only when we have data */}
        {data && (
          <div className="flex flex-wrap gap-2">
            {labels.map((label) => (
              // Use the label text as the key (labels are unique by construction)
              <Button
                className={`px-3 py-2 bg-white text-black hover:bg-black hover:text-white border border-black rounded-full ${label === selectedLabel ? "bg-black text-white" : "border-black"}`}
                key={label}
                onClick={() => setSelectedLabel(label)}>
                {label}
              </Button>
            ))}
          </div>
        )}
      </div>

      {/* Grid of article cards */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 border border-black border-collapse mb-48">
        {filteblackArticles.map((articleData, index) => (
          <article
            className="border border-black p-8"
            // Prefer a stable unique key (slug) when available; fall back to index if not.
            key={articleData.slug ?? index}>
            <div className="flex items-center justify-between">
              {/* Use semantic time element with dateTime for accessibility */}
              <time dateTime={articleData.date}>{articleData.date}</time>
              <span className="px-3 py-2 border border-black rounded-full">
                <p className="uppercase">{articleData.label}</p>
              </span>
            </div>

            {/* Link wraps the image to navigate to the article page */}
            <Link href={`magazine/${articleData.slug}`}>
              <img className="w-full my-8 hover:scale-105 transition" src={articleData.img} alt={articleData.imgAlt} />
            </Link>

            <h2 className="heading3-title mb-3">
              {/* Use the same link for the title for consistent navigation */}
              <Link href={`/magazine/${articleData.slug}`}>{articleData.title}</Link>
            </h2>

            {/* Short description of the article */}
            <p className="mt-3 mb-12">{articleData.description}</p>

            {/* Meta info: author and read duration */}
            <div className="flex flex-wrap gap-4">
              <span className="flex">
                <p className="font-semibold pr-2">{ComponentsDetailsFile.Articles.Meta_info.Text}</p>
                <p>{articleData.author}</p>
              </span>
              <span className="flex">
                <p className="font-semibold pr-2">{ComponentsDetailsFile.Articles.Meta_info.Duration}</p>
                <p>{articleData.read}</p>
              </span>
            </div>
          </article>
        ))}
      </div>
    </div>
  );
}
