import Link from "next/link";
import Image from "next/image";
import {getPodcasts} from "@/app/functions/getPodcasts";
import ComponentsDetailsFile from "@/data/Component.json";

//  PODCAST Home Section
export default async function LatestPodcasts() {
  // Get the data from getpodcasts and assign to the data variable
  const data = await getPodcasts();
  return (
    <div className="grid grid-cols-1 md:grid-cols-3  xl:grid-cols-3 max-w-[95rem] w-full mx-auto border border-black border-collapse">
      {/* Map the data from data variable */}
      {data
        .map((podcast) => (
          <article className="border border-black p-4 md:p-12" key={podcast.id}>
            <Link href={`/podcasts/${podcast.slug}`}>
              <Image className="hover:scale-105 transition" src={podcast.img} alt={podcast.imgAlt} width={920} height={920} />
            </Link>
            <h2 className="heading3-title mt-8 mb-12">
              <Link href={`/podcasts/${podcast.slug}`}>{podcast.title}</Link>
            </h2>
            <div className="flex flex-wrap gap-4">
              <span className="flex">
                <p className="font-semibold pr-2">{ComponentsDetailsFile.LatestPodcasts.LatestPodcasts_Meta_Info.Date}</p>
                <time dateTime={podcast.date}>{podcast.date}</time>
              </span>
              <span className="flex">
                <p className="font-semibold pr-2">{ComponentsDetailsFile.LatestPodcasts.LatestPodcasts_Meta_Info.Duration}</p>
                <p>{podcast.duration}</p>
              </span>
            </div>
          </article>
        ))
        .slice(0, 3)}
    </div>
  );
}
