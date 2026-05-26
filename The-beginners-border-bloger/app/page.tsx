import Authors from "@/components/Authors/Authors";
import LatestArticles from "@/components/LatestArticles/LatestArticles";

import LatestPodcasts from "@/components/LatestPodcasts/LatestPodcasts";
import LatestPodcastsLoading from "@/components/LatestPodcasts/loading";
import AuthorsLoading from "@/components/Authors/loading";

import PageTitle from "@/components/PageTitle";
import Subheading from "@/components/Subheading";
import {Suspense} from "react";
import PageDetailsFile from "@/data/page.json";

export const metadata = {
  // Next.js special export used to set page <head> metadata (title, description)
  title: "Essentials 101 | Art & Life | Home",
  description: "Articles, podcasts and news from the Berlin cultural scene",
};

export default function Home() {
  return (
    <main className="flex flex-col min-h-screen max-w-[95rem] w-full mx-auto px-4 lg:pt-0 sm:pt-4 xs:pt-2 lg:pb-4 md:pb-4 sm:pb-2 xs:pb-2">
      {/* The Image in page Start */}
      <PageTitle className="sr-only" imgSrc={PageDetailsFile.Art_Life.imgSrc} imgAlt={PageDetailsFile.Art_Life.imgAlt}>
        {PageDetailsFile.Art_Life.titleText}
      </PageTitle>

      {/* Suspense lets a component "pause" rendering while it waits for an asynchronous resource, and show a fallback UI in the meantime. Think of it as a controlled loading boundary. */}
      <LatestArticles />

      {/* Section heading for podcasts with a link to the full list */}
      <Subheading className="text-subheading" url={PageDetailsFile.Podcast.url} linkText={PageDetailsFile.Podcast.linkText}>
        {PageDetailsFile.Podcast.titleText}
      </Subheading>
      <Suspense fallback={<LatestPodcastsLoading />}>
        <LatestPodcasts />
      </Suspense>

      {/* Section heading for authors */}
      <Subheading className="text-subheading" url={PageDetailsFile.Authors.url} linkText={PageDetailsFile.Authors.linkText}>
        {PageDetailsFile.Authors.titleText}
      </Subheading>
      <Suspense fallback={<AuthorsLoading />}>
        <Authors />
      </Suspense>
    </main>
  );
}
