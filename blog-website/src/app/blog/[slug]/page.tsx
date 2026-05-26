"use client";

import { useEffect, useState } from "react";
import { useParams } from "next/navigation";
import { Clock, Eye, Calendar, ArrowLeft, User } from "lucide-react";
import { Footer } from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { toast } from "sonner";

interface Post {
  id: number;
  title: string;
  content: string;
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
    bio: string;
    avatar: string;
    twitterHandle: string;
    githubHandle: string;
  } | null;
}

interface Comment {
  id: number;
  authorName: string;
  authorEmail: string;
  content: string;
  createdAt: string;
}

export default function BlogPostPage() {
  const params = useParams();
  const slug = params.slug as string;
  const [post, setPost] = useState<Post | null>(null);
  const [comments, setComments] = useState<Comment[]>([]);
  const [loading, setLoading] = useState(true);
  const [commentLoading, setCommentLoading] = useState(false);
  const [commentForm, setCommentForm] = useState({
    authorName: "",
    authorEmail: "",
    content: "",
  });

  useEffect(() => {
    const fetchPost = async () => {
      try {
        const response = await fetch(`/api/posts/slug/${slug}`);
        if (!response.ok) throw new Error("Post not found");
        const data = await response.json();
        setPost(data);

        // Fetch comments
        const commentsResponse = await fetch(`/api/comments/post/${data.id}`);
        const commentsData = await commentsResponse.json();
        setComments(commentsData);
      } catch (error) {
        console.error("Error fetching post:", error);
        toast.error("Failed to load article");
      } finally {
        setLoading(false);
      }
    };

    fetchPost();
  }, [slug]);

  const handleCommentSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!post) return;

    setCommentLoading(true);
    try {
      const response = await fetch("/api/comments", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          postId: post.id,
          ...commentForm,
        }),
      });

      if (!response.ok) throw new Error("Failed to post comment");

      const newComment = await response.json();
      setComments([newComment, ...comments]);
      setCommentForm({ authorName: "", authorEmail: "", content: "" });
      toast.success("Comment posted successfully!");
    } catch (error) {
      console.error("Error posting comment:", error);
      toast.error("Failed to post comment");
    } finally {
      setCommentLoading(false);
    }
  };

  if (loading) {
    return (
      <main className="min-h-screen w-full flex flex-col text-white">
        <div className="max-w-4xl mx-auto px-6 py-16 lg:py-24">
          <div className="animate-pulse space-y-6">
            <div className="h-12 bg-white/5 rounded w-3/4" />
            <div className="h-96 bg-white/5 rounded" />
            <div className="space-y-3">
              <div className="h-4 bg-white/5 rounded" />
              <div className="h-4 bg-white/5 rounded" />
              <div className="h-4 bg-white/5 rounded w-5/6" />
            </div>
          </div>
        </div>
      </main>
    );
  }

  if (!post) {
    return (
      <main className="min-h-screen w-full flex flex-col items-center justify-center text-white px-6">
        <h1 className="text-4xl font-bold mb-4">Article Not Found</h1>
        <p className="text-xl text-muted-foreground mb-8">
          The article you're looking for doesn't exist.
        </p>
        <Button asChild className="bg-white text-black hover:bg-white/90">
          <a href="/blog">
            <ArrowLeft className="mr-2" />
            Back to Articles
          </a>
        </Button>
      </main>
    );
  }

  return (
    <main className="min-h-screen w-full flex flex-col text-white">
      {/* Article Header */}
      <article className="max-w-4xl mx-auto px-6 py-8 lg:py-16 w-full">
        <Button
          asChild
          variant="ghost"
          className="mb-8 text-muted-foreground hover:text-white"
        >
          <a href="/blog">
            <ArrowLeft className="mr-2 w-4 h-4" />
            Back to Articles
          </a>
        </Button>

        {post.category && (
          <a
            href={`/categories/${post.category.slug}`}
            className="inline-block bg-white/90 text-black px-4 py-2 text-sm font-semibold rounded mb-6 hover:bg-white"
          >
            {post.category.name}
          </a>
        )}

        <h1 className="text-4xl lg:text-6xl font-bold mb-6">{post.title}</h1>

        <div className="flex items-center gap-6 text-muted-foreground mb-8 flex-wrap">
          <span className="flex items-center gap-2">
            <Calendar className="w-4 h-4" />
            {new Date(post.publishedAt).toLocaleDateString("en-US", {
              year: "numeric",
              month: "long",
              day: "numeric",
            })}
          </span>
          <span className="flex items-center gap-2">
            <Clock className="w-4 h-4" />
            {post.readingTime} min read
          </span>
          <span className="flex items-center gap-2">
            <Eye className="w-4 h-4" />
            {post.views?.toLocaleString()} views
          </span>
        </div>

        {post.author && (
          <div className="flex items-center gap-4 p-6 border border-white/10 rounded-lg mb-8">
            <img
              src={post.author.avatar}
              alt={post.author.name}
              className="w-16 h-16 rounded-full"
            />
            <div>
              <h3 className="font-bold text-lg">{post.author.name}</h3>
              <p className="text-sm text-muted-foreground">{post.author.bio}</p>
              {(post.author.twitterHandle || post.author.githubHandle) && (
                <div className="flex gap-4 mt-2 text-sm">
                  {post.author.twitterHandle && (
                    <a
                      href={`https://twitter.com/${post.author.twitterHandle}`}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-blue-400 hover:underline"
                    >
                      {post.author.twitterHandle}
                    </a>
                  )}
                  {post.author.githubHandle && (
                    <a
                      href={`https://github.com/${post.author.githubHandle}`}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-purple-400 hover:underline"
                    >
                      @{post.author.githubHandle}
                    </a>
                  )}
                </div>
              )}
            </div>
          </div>
        )}

        <img
          src={post.featuredImage}
          alt={post.title}
          className="w-full h-auto rounded-lg mb-12 shadow-2xl"
        />

        <div className="prose prose-invert prose-lg max-w-none">
          {post.content.split("\n\n").map((paragraph, idx) => (
            <p key={idx} className="mb-6 text-lg leading-relaxed">
              {paragraph}
            </p>
          ))}
        </div>
      </article>

      {/* Comments Section */}
      <section className="max-w-4xl mx-auto px-6 py-16 w-full border-t">
        <h2 className="text-3xl font-bold mb-8">
          Comments ({comments.length})
        </h2>

        {/* Comment Form */}
        <form
          onSubmit={handleCommentSubmit}
          className="mb-12 p-6 border border-white/10 rounded-lg"
        >
          <h3 className="text-xl font-bold mb-4">Leave a Comment</h3>
          <div className="grid md:grid-cols-2 gap-4 mb-4">
            <div>
              <label className="block text-sm font-medium mb-2">Name *</label>
              <Input
                type="text"
                value={commentForm.authorName}
                onChange={(e) =>
                  setCommentForm({ ...commentForm, authorName: e.target.value })
                }
                required
                className="bg-white/5 border-white/20 rounded-none"
              />
            </div>
            <div>
              <label className="block text-sm font-medium mb-2">Email *</label>
              <Input
                type="email"
                value={commentForm.authorEmail}
                onChange={(e) =>
                  setCommentForm({
                    ...commentForm,
                    authorEmail: e.target.value,
                  })
                }
                required
                className="bg-white/5 border-white/20 rounded-none"
              />
            </div>
          </div>
          <div className="mb-4">
            <label className="block text-sm font-medium mb-2">Comment *</label>
            <Textarea
              value={commentForm.content}
              onChange={(e) =>
                setCommentForm({ ...commentForm, content: e.target.value })
              }
              required
              rows={4}
              className="bg-white/5 border-white/20 rounded-none"
            />
          </div>
          <Button
            type="submit"
            disabled={commentLoading}
            className="bg-white text-black hover:bg-white/90 rounded-none"
          >
            {commentLoading ? "Posting..." : "Post Comment"}
          </Button>
        </form>

        {/* Comments List */}
        <div className="space-y-6">
          {comments.map((comment) => (
            <div
              key={comment.id}
              className="p-6 border border-white/10 rounded-lg"
            >
              <div className="flex items-center gap-3 mb-3">
                <div className="w-10 h-10 bg-white/10 rounded-full flex items-center justify-center">
                  <User className="w-5 h-5" />
                </div>
                <div>
                  <h4 className="font-semibold">{comment.authorName}</h4>
                  <p className="text-xs text-muted-foreground">
                    {new Date(comment.createdAt).toLocaleDateString("en-US", {
                      year: "numeric",
                      month: "long",
                      day: "numeric",
                    })}
                  </p>
                </div>
              </div>
              <p className="text-muted-foreground">{comment.content}</p>
            </div>
          ))}
        </div>
      </section>

      <Footer />
    </main>
  );
}
