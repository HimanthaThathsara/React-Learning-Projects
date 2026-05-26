// Single article page
import Articles from "@/components/Articles/Articles";
import Loading from "@/components/Articles/loading";
import PageTitle from "@/components/PageTitle";
import {Suspense} from "react";
import MagazineDetailsFile from "@/data/Magazine.json";

export const metadata = {
  title: "Articles  | Essentials 101",
  description: "Articles from our team of writers, editors and artists",
};

export default function MagazinePage() {
  return (
    <main className="flex flex-col min-h-screen max-w-[95rem] w-full mx-auto px-4 lg:pt-0 sm:pt-4 xs:pt-2 lg:pb-4 md:pb-4 sm:pb-2 xs:pb-2">
      <PageTitle className="sr-only" imgSrc={MagazineDetailsFile.PageTitle.imgSrc} imgAlt={MagazineDetailsFile.PageTitle.imgAlt}>
        {MagazineDetailsFile.PageTitle.Title}
      </PageTitle>
      <Suspense fallback={<Loading />}>
        <Articles />
      </Suspense>
    </main>
  );
}
