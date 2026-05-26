import SocialSharing from "@/components/SocialSharing";
import PostNavigation from "@/components/PostNavigation";
import PodcastContextProvider from "@/context/PodcastContext";
// Functions to fetch podcast data
import {PodcastType, getPodcasts} from "@/app/functions/getPodcasts";
import LatestPodcasts from "@/components/LatestPodcasts/LatestPodcasts";
import PodcastDetailsFile from "@/data/Podcast.json";

// Generate dynamic metadata for each podcast episode page
export async function generateMetadata({params}: {params: {title: string}}) {
  // Fetch podcast data and assing to 'podcast' variable
  const podcast: PodcastType[] = await getPodcasts();

  // Find the specific podcast episode data based on the URL parameter 'title'
  const podcastData = podcast.find((podcast: PodcastType) => podcast.slug === params.title);

  // Handle case where no matching podcastData is found
  if (!podcastData) {
    return <div>{PodcastDetailsFile.Not_Found.title}</div>;
  }

  // Return metadata object with dynamic title if podcastData is found
  return {
    title: `${podcastData.title} | Essentials 101`,
  };
}

export default async function PodcastDetails({params}: {params: {title: string}}) {
  try {
    // Fetch podcast data and assign to 'podcast' variable
    const podcast: PodcastType[] = await getPodcasts();
    // Find the specific podcast episode data based on the URL parameter 'title'
    const podcastData = podcast.find((podcast: PodcastType) => podcast.slug === params.title);
    // Handle case where no matching podcastData is found
    if (!podcastData) {
      return <div>{PodcastDetailsFile.Not_Found.title}</div>;
    }

    return (
      <main className="max-w-[95rem] w-full mx-auto px-4 pb-12 sm:pt-4 xs:pt-2 md:pb-4 sm:pb-2 xs:pb-2">
        {/* Back Button */}
        <PostNavigation href={PodcastDetailsFile.Back_Button.href}>{PodcastDetailsFile.Back_Button.Title}</PostNavigation>
        <article className="max-w-[75rem] w-full mx-auto flex flex-wrap gap-24">
          {/* Left Column */}
          <article className="flex flex-col lg:w-1/4">
            {/* image */}
            <img className="" src={podcastData.img} alt={podcastData.imgAlt} />
            <div className="flex justify-between mt-8 pb-12 border-b border-black">
              <p className="text-xl font-semibold">{PodcastDetailsFile.Listen_On.Title}</p>
              <SocialSharing links={PodcastDetailsFile.Listen_On.links} />
            </div>
            {/* other podcast details */}
            <div className="flex flex-col gap-4 pt-8">
              <div className="flex flex-wrap justify-between">
                <p className="font-semibold">{PodcastDetailsFile.Podcast_Details.Date}</p>
                <time dateTime={podcastData.date}>{podcastData.date}</time>
              </div>
              <div className="flex flex-wrap justify-between">
                <p className="font-semibold">{PodcastDetailsFile.Podcast_Details.Duration}</p>
                <p>{podcastData.duration}</p>
              </div>
              <div className="flex flex-wrap justify-between">
                <p className="flex font-semibold">{PodcastDetailsFile.Podcast_Details.Share}</p>
                <SocialSharing links={PodcastDetailsFile.Podcast_Details.Share_Link.links} />
              </div>
            </div>
          </article>

          {/* Main Content */}
          <article className="flex flex-col flex-1 w-full">
            <p className="uppercase font-semibold">{podcastData.episode}</p>
            <h1 className="podcast-title">{podcastData.title}</h1>
            {podcastData.content.map((podcastItem, index) => (
              <div key={index}>
                <p className="text-blog-summary pt-8 pb-16">{podcastItem.summary}</p>
                <p>{podcastItem.section1}</p>
                <div className="border-t-2 border-b-2 border-black my-6">
                  <div className="py-12">
                    <p className="text-blog-quote pb-6">&ldquo;{podcastItem.quote[0]}</p>
                    <p> {podcastItem.quote[1]}</p>
                  </div>
                </div>
                <p>{podcastItem.section2}</p>
              </div>
            ))}
          </article>
        </article>
        {/* Latest Episodes */}
        <div className="pb-12 md:pb-48">
          <h2 className="text-blog-subheading border-t-2 border-black mt-[9.5rem] pt-12 pb-12 md:pb-24">{PodcastDetailsFile.Latest_Episodes}</h2>
          <PodcastContextProvider limit={3}>
            <LatestPodcasts />
          </PodcastContextProvider>
        </div>
      </main>
    );
    // Handle errors during data fetching or rendering
  } catch (error) {
    console.error("Error in PodcastDetails component:", error);
    return <div>{PodcastDetailsFile.error}</div>;
  }
}
