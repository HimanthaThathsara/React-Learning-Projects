import PageTitle from "@/components/PageTitle";
import Link from "next/link";
import NotFoundDetailsFile from "@/data/Not-Found.json";

export const metadata = {
  title: "Page not found | Essentials 101",
  description: "Page does not exist",
};

export default function NotFound() {
  return (
    <main className="flex flex-col min-h-screen max-w-[95rem] w-full mx-auto px-4 lg:pt-0 sm:pt-4 xs:pt-2 lg:pb-4 md:pb-4 sm:pb-2 xs:pb-2">
      <div>
        <PageTitle className="sr-only" imgSrc={NotFoundDetailsFile.Image_Path} imgAlt={NotFoundDetailsFile.Image_Alt}>
          {NotFoundDetailsFile.Metadata.title}
        </PageTitle>

        <h2>
          {NotFoundDetailsFile.Description}
          <Link className="font-semibold" href="/">
            {NotFoundDetailsFile.Return_Home}
          </Link>
        </h2>
      </div>
    </main>
  );
}
