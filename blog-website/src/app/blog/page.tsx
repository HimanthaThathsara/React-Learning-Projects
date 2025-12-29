"use client";

import { useEffect, useState } from "react";
import { Clock, Eye, Search } from "lucide-react";
import { Footer } from "@/components/Footer";
import { Input } from "@/components/ui/input";

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

export default function BlogPage() {
  const [posts, setPosts] = useState<Post[]>([]);
  const [loading, setLoading] = useState(true);
  const [searchQuery, setSearchQuery] = useState("");

  useEffect(() => {
    const fetchPosts = async () => {
      try {
        setLoading(true);
        const url = searchQuery
          ? `/api/posts?search=${encodeURIComponent(searchQuery)}&limit=100`
          : "/api/posts?limit=100";
        const response = await fetch(url);
        const data = await response.json();
        setPosts(data);
      } catch (error) {
        console.error("Error fetching posts:", error);
      } finally {
        setLoading(false);
      }
    };

    const debounce = setTimeout(() => {
      fetchPosts();
    }, 300);

    return () => clearTimeout(debounce);
  }, [searchQuery]);

  return (
    <main className="min-h-screen w-full flex flex-col text-white">
      {/* Header */}
      <div className="border-b px-6 lg:px-16 py-16 lg:py-24">
        <div className="max-w-7xl mx-auto">
          <h1 className="text-5xl lg:text-7xl font-bold mb-6">All Articles</h1>
          <p className="text-xl lg:text-2xl text-muted-foreground max-w-3xl mb-8">
            Explore our complete collection of technical articles, tutorials,
            and insights.
          </p>
          <div className="relative max-w-xl">
            <Search className="absolute left-4 top-1/2 transform -translate-y-1/2 text-muted-foreground w-5 h-5" />
            <Input
              type="text"
              placeholder="Search articles..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="pl-12 py-6 text-lg bg-white/5 border-white/20 focus:border-white/40 rounded-none"
            />
          </div>
        </div>
      </div>

      {/* Posts Grid */}
      <section className="py-16 lg:py-24 px-6 lg:px-16">
        <div className="max-w-7xl mx-auto">
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
          ) : posts.length === 0 ? (
            <div className="text-center py-16">
              <p className="text-xl text-muted-foreground">
                No articles found matching your search.
              </p>
            </div>
          ) : (
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {posts.map((post) => (
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
        </div>
      </section>

      <Footer />
    </main>
  );
}
