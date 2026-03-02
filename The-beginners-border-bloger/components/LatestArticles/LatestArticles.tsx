// Home page Article List
"use client";

import Link from "next/link";
import Image from "next/image";
import Loading from "./loading";
import Sidebar from "../Sidebar";
import {Separator} from "@radix-ui/react-separator";
import {useArticleContext} from "@/hooks/useArticleContext";
import ComponentsDetailsFile from "@/data/Component.json";

export default function LatestArticles() {
  // Get data from context
  const {data} = useArticleContext();

  // Guard: ensure we have at least one magazine entry and that it has articles
  if (!data || data.length === 0) {
    return <Loading />;
  }

  const magazine = data[0]; // avoid repeating data[0] throughout the component
  const {articles = [], author} = magazine;

  // If there are no articles, render loading or fallback UI
  if (!articles || articles.length === 0) {
    return <Loading />;
  }

  // Helper: parse date to timestamp safely (invalid dates -> 0)
  const toTimestamp = (d?: string) => {
    const t = d ? new Date(d).getTime() : NaN;
    return Number.isFinite(t) ? t : 0;
  };

  // Copy before sort to avoid mutating the original articles array in context
  const allArticles = [...articles].sort((a, b) => toTimestamp(b.date) - toTimestamp(a.date));

  const latestArticle = allArticles[0];
  const remainingArticles = allArticles.slice(1);

  return (
    <>
      {/* Top latest article */}
      <div className="flex flex-col-reverse sm:flex-col gap-6 md:gap-12 py-6 md:py-10 max-w-[95rem] w-full mx-auto">
        <article className="flex flex-col-reverse sm:flex-col gap-6 md:gap-12">
          <article className="grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-12">
            <h2 className="text-subtitle">
              {/* Use slug-based route */}
              <Link href={`/magazine/${latestArticle.slug}`}>{latestArticle.title}</Link>
            </h2>
            <article className="flex flex-col justify-between gap-2">
              <p>{latestArticle.description}</p>
              <div className="flex flex-col sm:flex-row justify-between sm:items-center gap-2">
                <div className="flex flex-col sm:flex-row gap-2 sm:gap-6">
                  <span className="flex flex-wrap">
                    <p className="font-semibold pr-2">{ComponentsDetailsFile.LatestArticles.LatestArticle_Meta_Info.Text}</p>
                    <p>{author}</p>
                  </span>
                  <span className="flex flex-wrap">
                    <p className="font-semibold pr-2">{ComponentsDetailsFile.LatestArticles.LatestArticle_Meta_Info.Date}</p>
                    {/* Use latestArticle.date (not data[0].articles[0]) */}
                    <time dateTime={latestArticle.date}>{latestArticle.date}</time>
                  </span>
                  <span className="flex flex-wrap">
                    <p className="font-semibold pr-2">{ComponentsDetailsFile.LatestArticles.LatestArticle_Meta_Info.Read}</p>
                    <p>{latestArticle.read}</p>
                  </span>
                </div>
                <span className="px-3 py-2 border border-black rounded-full w-fit">
                  <p className="uppercase">{latestArticle.label}</p>
                </span>
              </div>
            </article>
          </article>

          {/* Featublack image for latest article */}
          <div>
            {/* <Image className="object-cover aspect-[9/6]" src={latestArticle.content?.[0]?.img ?? latestArticle.img} alt={latestArticle.imgAlt} width={window.innerWidth} height={200} priority /> */}
          </div>
        </article>
      </div>

      {/* Remaining articles list */}
      <div className="flex flex-col lg:flex-row gap-6 lg:gap-12 xl:gap-24">
        <div className="lg:w-3/4">
          {remainingArticles.map((article, index) => (
            // Use slug as key to avoid duplicate-title collisions
            <article key={article.slug}>
              <article className="grid md:grid-cols-[0fr_1fr] gap-6 sm:gap-12">
                <Link href={`magazine/${article.slug}`} className="h-60 w-60">
                  <Image className="w-full h-full object-cover hover:scale-105 transition" src={article.img} alt={article.imgAlt} width={240} height={240} />
                </Link>
                <article className="flex flex-col justify-between">
                  <div className="mb-4 :md:mb-0">
                    <h3 className="heading3-title mb-3">
                      <Link href={`/magazine/${article.slug}`}>{article.title}</Link>
                    </h3>

                    <p>{article.description}</p>
                  </div>
                  <div className="flex flex-col sm:flex-row gap-4 justify-between sm:items-center">
                    <div className="flex flex-col sm:flex-row gap-2 sm:gap-6">
                      <span className="flex flex-wrap">
                        <p className="font-semibold pr-2">{ComponentsDetailsFile.LatestArticles.LatestArticle_Meta_Info.Text}</p>
                        <p>{author}</p>
                      </span>
                      <span className="flex flex-wrap">
                        <p className="font-semibold pr-2">{ComponentsDetailsFile.LatestArticles.LatestArticle_Meta_Info.Date}</p>
                        <time dateTime={article.date}>{article.date}</time>
                      </span>
                      <span className="flex flex-wrap">
                        <p className="font-semibold pr-2">{ComponentsDetailsFile.LatestArticles.LatestArticle_Meta_Info.Read}</p>
                        <p>{article.read}</p>
                      </span>
                    </div>
                    <span className="px-3 py-2 border border-black rounded-full w-fit">
                      <p className="uppercase">{article.label}</p>
                    </span>
                  </div>
                </article>
              </article>

              {/*if item is finish the line or border will not create */}
              {index < remainingArticles.length - 1 && <Separator className="border border-black my-6" />}
            </article>
          ))}
        </div>

        <div className="lg:w-1/4">
          <Sidebar />
        </div>
      </div>
    </>
  );
}
