import { ArrowDownRight, ArrowUpRight } from "lucide-react";

import { Button } from "@/components/ui/button";

const blogPosts = [
  {
    heading: "Getting Started with Blogging",
    subheading: "Beginner's Guide",
    description:
      "Learn the fundamentals of creating compelling blog content that engages readers and builds your online presence. From topic selection to publishing strategies, this comprehensive guide covers everything you need to know.",
    image:
      "https://cdn.cosmos.so/d33ccd12-48ec-47f7-bd5e-bd497a5f5fb1?format=jpeg",
    url: "#",
  },
  {
    heading: "Content Strategy Masterclass",
    subheading: "Marketing & Growth",
    description:
      "Discover proven techniques for developing a content calendar, understanding your audience, and creating blog posts that drive traffic and conversions. Perfect for bloggers looking to scale their reach.",
    image:
      "https://cdn.cosmos.so/d828d816-1d9b-4816-9353-7a58fcfde3a9?format=jpeg",
    url: "#",
  },
  {
    heading: "SEO Optimization Techniques",
    subheading: "Technical Writing",
    description:
      "Master the art of search engine optimization for blog content. Learn keyword research, on-page SEO, and content structure techniques that help your posts rank higher in search results.",
    image:
      "https://cdn.cosmos.so/70637007-22b1-4ad4-8076-e085f761c943?format=jpeg",
    url: "#",
  },
  {
    heading: "Building Your Blog Community",
    subheading: "Audience Engagement",
    description:
      "Transform casual readers into loyal followers through effective community building strategies. Explore comment management, social media integration, and reader engagement best practices.",
    image:
      "https://cdn.cosmos.so/ee6edeb0-9a64-4452-9a47-5cfa02039ab7?format=jpeg",
    url: "#",
  },
];

const ProjectSection = () => {
  return (
    <section className="py-16 lg:py-32 max-sm:px-6 w-full  backdrop-blur-3xl">
      <div className="w-full">
        <div className="w-full lg:px-16 mx-auto">
          <p className="text-muted-foreground mb-1 uppercase md:text-lg">
            Inspiring Stories and Expert Insights
          </p>
          <h1 className="text-3xl font-bold uppercase md:text-7xl">Latest Posts</h1>
          <p className="text-muted-foreground mt-7 max-w-2xl">
            Dive into our collection of carefully crafted articles covering everything from beginner blogging tips to advanced content strategies. Join our community of writers and readers as we explore the art of digital storytelling together.
          </p>
          <Button className="mt-7 border border-white/20 bg-transparent text-white hover:bg-white/10 rounded-none px">
            View All Posts
            <ArrowDownRight className="size-4" />
          </Button>
        </div>
        <div className="mt-24 flex flex-col gap-5 md:mt-36">
          {blogPosts.map((post, idx) => (
            <a
              key={idx}
              href={post.url}
              className="group relative isolate min-h-96 lg:min-h-72 bg-cover bg-center px-5 py-14 lg:px-12 border border-x-0 max-sm:pb-32 lg:py-24"
              style={{
                backgroundImage: `url(${post.image})`,
              }}
            >
              <div className="relative z-10 flex flex-col gap-7 text-white/80 transition-colors duration-300 ease-out group-hover:text-white lg:flex-row">
                <div className="flex gap-1 text-2xl font-bold">
                  <span>/</span>
                  <span>{String(idx + 1).padStart(2, "0")}</span>
                </div>
                <div className="flex flex-1 flex-col gap-2.5">
                  <h3 className="text-2xl font-bold lg:text-4xl">
                    {post.heading}
                  </h3>
                  <p className="text-sm font-medium uppercase">
                    {post.subheading}
                  </p>
                </div>
                <div className="flex-1">
                  <div className="flex flex-col">
                    <p>{post.description}</p>
                    <div className="mt-2.5 h-0 transition-all duration-300 ease-out group-hover:h-10">
                      <div>
                        <Button className="rounded-none bg-transparent text-white border mt-4 w-fit opacity-90 transition-opacity duration-300 ease-out group-hover:opacity-100">
                          Read Article
                          <ArrowUpRight className="size-4" />
                        </Button>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="backdrop-blur-xs absolute inset-0 z-0 bg-black/80 transition-all duration-300 ease-out group-hover:bg-black/50 group-hover:backdrop-blur-none" />
            </a>
          ))}
        </div>
      </div>
    </section>
  );
};

export { ProjectSection };