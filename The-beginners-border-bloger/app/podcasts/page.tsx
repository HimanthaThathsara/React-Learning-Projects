import {Suspense} from "react";
import PageTitle from "@/components/PageTitle";
import Loading from "@/components/PodcastsList/loading";
import PodcastsList from "@/components/PodcastsList/PodcastsList";
import PodcastDetailsFile from "@/data/Podcast.json";

// Metadata for the Podcasts main page
export const metadata = {
  title: "Podcasts  | Essentials 101",
  description: "The latest podcasts list",
};

// Podcasts main page displaying a list of podcast episodes with a loading state (PodcastsList Page)
export default function PodcastsPage() {
  return (
    <main className="flex flex-col min-h-screen max-w-[95rem] w-full mx-auto px-4 lg:pt-0 sm:pt-4 xs:pt-2 lg:pb-4 md:pb-4 sm:pb-2 xs:pb-2">
      <PageTitle className="sr-only" imgSrc={PodcastDetailsFile.PageTitle.imgSrc} imgAlt={PodcastDetailsFile.PageTitle.imgAlt}>
        {PodcastDetailsFile.PageTitle.Title}
      </PageTitle>
      <Suspense fallback={<Loading />}>
        <PodcastsList />
      </Suspense>
    </main>
  );
}
