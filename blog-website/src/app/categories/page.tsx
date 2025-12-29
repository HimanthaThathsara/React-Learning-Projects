"use client";

import { useEffect, useState } from "react";
import { BookOpen, ArrowRight } from "lucide-react";
import { Footer } from "@/components/Footer";

interface Category {
  id: number;
  name: string;
  slug: string;
  description: string;
}

export default function CategoriesPage() {
  const [categories, setCategories] = useState<Category[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchCategories = async () => {
      try {
        const response = await fetch("/api/categories?limit=100");
        const data = await response.json();
        setCategories(data);
      } catch (error) {
        console.error("Error fetching categories:", error);
      } finally {
        setLoading(false);
      }
    };

    fetchCategories();
  }, []);

  return (
    <main className="min-h-screen w-full flex flex-col text-white">
      {/* Header */}
      <div className="border-b px-6 lg:px-16 py-16 lg:py-24">
        <div className="max-w-7xl mx-auto">
          <h1 className="text-5xl lg:text-7xl font-bold mb-6">Categories</h1>
          <p className="text-xl lg:text-2xl text-muted-foreground max-w-3xl">
            Browse our content by topic. From web development to machine
            learning, we cover all aspects of modern software engineering.
          </p>
        </div>
      </div>

      {/* Categories Grid */}
      <section className="py-16 lg:py-24 px-6 lg:px-16">
        <div className="max-w-7xl mx-auto">
          {loading ? (
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {[1, 2, 3, 4, 5, 6].map((i) => (
                <div
                  key={i}
                  className="border border-white/10 rounded-lg p-8 animate-pulse"
                >
                  <div className="w-16 h-16 bg-white/5 rounded-lg mb-4" />
                  <div className="h-6 bg-white/5 rounded mb-3" />
                  <div className="h-4 bg-white/5 rounded" />
                  <div className="h-4 bg-white/5 rounded w-2/3 mt-2" />
                </div>
              ))}
            </div>
          ) : (
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {categories.map((category) => (
                <a
                  key={category.id}
                  href={`/categories/${category.slug}`}
                  className="group border border-white/10 rounded-lg p-8 hover:border-white/30 transition-all duration-300 hover:shadow-2xl hover:shadow-white/5"
                >
                  <div className="w-16 h-16 bg-white/10 rounded-lg flex items-center justify-center mb-4 group-hover:bg-white/20 transition-colors">
                    <BookOpen className="w-8 h-8" />
                  </div>
                  <h2 className="text-2xl font-bold mb-3 group-hover:text-white/80 transition-colors">
                    {category.name}
                  </h2>
                  <p className="text-muted-foreground mb-4">
                    {category.description}
                  </p>
                  <span className="inline-flex items-center text-sm font-medium group-hover:underline">
                    Explore Articles
                    <ArrowRight className="ml-2 w-4 h-4 group-hover:translate-x-1 transition-transform" />
                  </span>
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
