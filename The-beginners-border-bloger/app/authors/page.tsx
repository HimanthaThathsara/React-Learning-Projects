//  Authors Page Displays a list of authors with a loading state
import AuthorsList from "@/components/AuthorList";
import PageTitle from "@/components/PageTitle";
import {Suspense} from "react";
import Loading from "./loading";
import AuthorsDetailsFile from "@/data/Authors.json";

// Main Authors Page Component (Lists all authors)
export default function AuthorsPage() {
  return (
    <main className="flex flex-col min-h-screen max-w-[95rem] w-full mx-auto px-4 lg:pt-0 sm:pt-4 xs:pt-2 lg:pb-4 md:pb-4 sm:pb-2 xs:pb-2">
      <PageTitle className="sr-only" imgSrc={AuthorsDetailsFile.Author.img_url} imgAlt={AuthorsDetailsFile.Author.imgAlt}>
        {AuthorsDetailsFile.Author.Name}
      </PageTitle>
      <Suspense fallback={<Loading />}>
        <AuthorsList />
      </Suspense>
    </main>
  );
}
