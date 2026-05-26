"use client";

import { useEffect, useState } from "react";
import { ArrowRight, Clock, Eye, User } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Footer } from "@/components/Footer";

interface Post {
  id: number;
  title: string;
  slug: string;
  excerpt: string;
  featuredImage: string;
  views: number;
  readingTime: number;
  publishedAt: string;
  category: {
    id: number;
    name: string;
    slug: string;
  } | null;
  author: {
    id: number;
    name: string;
    avatar: string;
  } | null;
}

export default function Home() {
  const [featuredPosts, setFeaturedPosts] = useState<Post[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchFeaturedPosts = async () => {
      try {
        const response = await fetch("/api/posts?limit=6");
        const data = await response.json();
        setFeaturedPosts(data);
      } catch (error) {
        console.error("Error fetching posts:", error);
      } finally {
        setLoading(false);
      }
    };

    fetchFeaturedPosts();
  }, []);

  return (
    <main className="min-h-screen w-full flex flex-col text-white">
      {/* Hero Section */}
      <div className="w-full min-h-[500px] lg:min-h-[600px] border-b flex flex-col lg:flex-row items-center">
        <div className="lg:w-1/2 lg:border-r px-8 py-12 lg:px-16 flex flex-col justify-center h-full">
          <h1 className="text-4xl lg:text-7xl font-bold">
            Tech Insights for Modern Developers
          </h1>
          <p className="mt-8 max-w-2xl text-xl lg:text-2xl">
            Explore in-depth tutorials, best practices, and cutting-edge
            techniques in web development, cloud computing, AI, and more.
            Written by developers, for developers.
          </p>
          <div className="mt-10 flex gap-4 flex-wrap">
            <Button
              asChild
              className="bg-white text-black hover:bg-white/90 rounded-none px-8 py-6 text-lg"
            >
              <a href="/blog">
                Explore Articles
                <ArrowRight className="ml-2" />
              </a>
            </Button>
            <Button
              asChild
              variant="outline"
              className="border-white text-white hover:bg-white/10 rounded-none px-8 py-6 text-lg"
            >
              <a href="/categories">Browse Categories</a>
            </Button>
          </div>
        </div>
        <div className="lg:w-1/2 flex items-center justify-center p-8 lg:p-16">
          <img
            src="https://images.unsplash.com/photo-1517694712202-14dd9538aa97?w=800&h=600"
            alt="Tech Developer"
            className="rounded-lg max-w-full h-auto shadow-2xl hover:scale-105 transition-transform duration-300"
          />
        </div>
      </div>

      {/* Featured Posts Section */}
      <section className="py-16 lg:py-24 px-6 lg:px-16">
        <div className="max-w-7xl mx-auto">
          <div className="mb-12">
            <p className="text-muted-foreground text-lg uppercase mb-2">
              Latest & Greatest
            </p>
            <h2 className="text-4xl lg:text-6xl font-bold">Featured Articles</h2>
            <p className="text-muted-foreground mt-4 text-xl max-w-3xl">
              Dive into our most popular and recent articles covering everything
              from Next.js to Machine Learning, DevOps to Cybersecurity.
            </p>
          </div>

          {loading ? (
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {[1, 2, 3, 4, 5, 6].map((i) => (
                <div
                  key={i}
                  className="border border-white/10 rounded-lg overflow-hidden animate-pulse"
                >
                  <div className="w-full h-48 bg-white/5" />
                  <div className="p-6 space-y-3">
                    <div className="h-4 bg-white/5 rounded w-1/3" />
                    <div className="h-6 bg-white/5 rounded" />
                    <div className="h-4 bg-white/5 rounded" />
                    <div className="h-4 bg-white/5 rounded w-2/3" />
                  </div>
                </div>
              ))}
            </div>
          ) : (
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {featuredPosts.map((post) => (
                <a
                  key={post.id}
                  href={`/blog/${post.slug}`}
                  className="group border border-white/10 rounded-lg overflow-hidden hover:border-white/30 transition-all duration-300 hover:shadow-2xl hover:shadow-white/5"
                >
                  <div className="relative overflow-hidden">
                    <img
                      src={post.featuredImage}
                      alt={post.title}
                      className="w-full h-48 object-cover group-hover:scale-110 transition-transform duration-300"
                    />
                    {post.category && (
                      <div className="absolute top-4 left-4 bg-white/90 text-black px-3 py-1 text-sm font-semibold rounded">
                        {post.category.name}
                      </div>
                    )}
                  </div>
                  <div className="p-6">
                    <h3 className="text-xl font-bold mb-3 group-hover:text-white/80 transition-colors">
                      {post.title}
                    </h3>
                    <p className="text-muted-foreground text-sm mb-4 line-clamp-2">
                      {post.excerpt}
                    </p>
                    <div className="flex items-center justify-between text-xs text-muted-foreground">
                      <div className="flex items-center gap-4">
                        <span className="flex items-center gap-1">
                          <Clock className="w-3 h-3" />
                          {post.readingTime} min
                        </span>
                        <span className="flex items-center gap-1">
                          <Eye className="w-3 h-3" />
                          {post.views?.toLocaleString()}
                        </span>
                      </div>
                      {post.author && (
                        <div className="flex items-center gap-2">
                          <img
                            src={post.author.avatar}
                            alt={post.author.name}
                            className="w-5 h-5 rounded-full"
                          />
                          <span>{post.author.name}</span>
                        </div>
                      )}
                    </div>
                  </div>
                </a>
              ))}
            </div>
          )}

          <div className="mt-12 text-center">
            <Button
              asChild
              size="lg"
              className="bg-white text-black hover:bg-white/90 rounded-none px-8"
            >
              <a href="/blog">
                View All Articles
                <ArrowRight className="ml-2" />
              </a>
            </Button>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-16 lg:py-24 px-6 lg:px-16 border-t">
        <div className="max-w-7xl mx-auto grid md:grid-cols-3 gap-12 text-center">
          <div>
            <h3 className="text-5xl lg:text-6xl font-bold mb-2">18+</h3>
            <p className="text-muted-foreground text-xl">
              In-depth Articles
            </p>
          </div>
          <div>
            <h3 className="text-5xl lg:text-6xl font-bold mb-2">8</h3>
            <p className="text-muted-foreground text-xl">Tech Categories</p>
          </div>
          <div>
            <h3 className="text-5xl lg:text-6xl font-bold mb-2">5</h3>
            <p className="text-muted-foreground text-xl">Expert Authors</p>
          </div>
        </div>
      </section>

      <Footer />
    </main>
  );
}