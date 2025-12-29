"use client";

import { useEffect, useState } from "react";
import { useParams } from "next/navigation";
import { Clock, Eye, ArrowLeft } from "lucide-react";
import { Footer } from "@/components/Footer";
import { Button } from "@/components/ui/button";

interface Post {
  id: number;
  title: string;
  slug: string;
  excerpt: string;
  featuredImage: string;
  views: number;
  readingTime: number;
  author: {
    id: number;
    name: string;
    avatar: string;
  } | null;
}

interface Category {
  id: number;
  name: string;
  slug: string;
  description: string;
  posts: Post[];
}

export default function CategoryPage() {
  const params = useParams();
  const categorySlug = params.category as string;
  const [category, setCategory] = useState<Category | null>(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchCategory = async () => {
      try {
        const response = await fetch(`/api/categories/slug/${categorySlug}`);
        if (!response.ok) throw new Error("Category not found");
        const data = await response.json();
        setCategory(data);
      } catch (error) {
        console.error("Error fetching category:", error);
      } finally {
        setLoading(false);
      }
    };

    fetchCategory();
  }, [categorySlug]);

  if (loading) {
    return (
      <main className="min-h-screen w-full flex flex-col text-white">
        <div className="max-w-7xl mx-auto px-6 py-16 lg:py-24">
          <div className="animate-pulse space-y-6">
            <div className="h-12 bg-white/5 rounded w-1/2" />
            <div className="h-6 bg-white/5 rounded w-3/4" />
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mt-12">
              {[1, 2, 3].map((i) => (
                <div key={i} className="h-96 bg-white/5 rounded" />
              ))}
            </div>
          </div>
        </div>
      </main>
    );
  }

  if (!category) {
    return (
      <main className="min-h-screen w-full flex flex-col items-center justify-center text-white px-6">
        <h1 className="text-4xl font-bold mb-4">Category Not Found</h1>
        <p className="text-xl text-muted-foreground mb-8">
          The category you're looking for doesn't exist.
        </p>
        <Button asChild className="bg-white text-black hover:bg-white/90">
          <a href="/categories">
            <ArrowLeft className="mr-2" />
            Back to Categories
          </a>
        </Button>
      </main>
    );
  }

  return (
    <main className="min-h-screen w-full flex flex-col text-white">
      {/* Header */}
      <div className="border-b px-6 lg:px-16 py-16 lg:py-24">
        <div className="max-w-7xl mx-auto">
          <Button
            asChild
            variant="ghost"
            className="mb-8 text-muted-foreground hover:text-white"
          >
            <a href="/categories">
              <ArrowLeft className="mr-2 w-4 h-4" />
              Back to Categories
            </a>
          </Button>
          <h1 className="text-5xl lg:text-7xl font-bold mb-6">
            {category.name}
          </h1>
          <p className="text-xl lg:text-2xl text-muted-foreground max-w-3xl">
            {category.description}
          </p>
          <p className="text-lg text-muted-foreground mt-4">
            {category.posts.length} article{category.posts.length !== 1 ? "s" : ""}
          </p>
        </div>
      </div>

      {/* Posts Grid */}
      <section className="py-16 lg:py-24 px-6 lg:px-16">
        <div className="max-w-7xl mx-auto">
          {category.posts.length === 0 ? (
            <div className="text-center py-16">
              <p className="text-xl text-muted-foreground">
                No articles in this category yet.
              </p>
            </div>
          ) : (
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {category.posts.map((post) => (
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
