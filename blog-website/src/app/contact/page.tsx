"use client";

import { useState } from "react";
import { Footer } from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Mail, MessageSquare, Send } from "lucide-react";
import { toast } from "sonner";

export default function ContactPage() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  });
  const [loading, setLoading] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);

    // Simulate form submission
    setTimeout(() => {
      toast.success("Message sent successfully! We'll get back to you soon.");
      setFormData({ name: "", email: "", subject: "", message: "" });
      setLoading(false);
    }, 1000);
  };

  return (
    <main className="min-h-screen w-full flex flex-col text-white">
      {/* Header */}
      <div className="border-b px-6 lg:px-16 py-16 lg:py-24">
        <div className="max-w-7xl mx-auto">
          <h1 className="text-5xl lg:text-7xl font-bold mb-6">Get in Touch</h1>
          <p className="text-xl lg:text-2xl text-muted-foreground max-w-3xl">
            Have a question, suggestion, or want to contribute? We'd love to
            hear from you.
          </p>
        </div>
      </div>

      {/* Contact Section */}
      <section className="py-16 lg:py-24 px-6 lg:px-16">
        <div className="max-w-7xl mx-auto">
          <div className="grid lg:grid-cols-2 gap-16">
            {/* Contact Form */}
            <div>
              <h2 className="text-3xl font-bold mb-6">Send us a Message</h2>
              <form onSubmit={handleSubmit} className="space-y-6">
                <div>
                  <label className="block text-sm font-medium mb-2">
                    Name *
                  </label>
                  <Input
                    type="text"
                    value={formData.name}
                    onChange={(e) =>
                      setFormData({ ...formData, name: e.target.value })
                    }
                    required
                    className="bg-white/5 border-white/20 rounded-none"
                    placeholder="Your name"
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium mb-2">
                    Email *
                  </label>
                  <Input
                    type="email"
                    value={formData.email}
                    onChange={(e) =>
                      setFormData({ ...formData, email: e.target.value })
                    }
                    required
                    className="bg-white/5 border-white/20 rounded-none"
                    placeholder="your.email@example.com"
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium mb-2">
                    Subject *
                  </label>
                  <Input
                    type="text"
                    value={formData.subject}
                    onChange={(e) =>
                      setFormData({ ...formData, subject: e.target.value })
                    }
                    required
                    className="bg-white/5 border-white/20 rounded-none"
                    placeholder="What's this about?"
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium mb-2">
                    Message *
                  </label>
                  <Textarea
                    value={formData.message}
                    onChange={(e) =>
                      setFormData({ ...formData, message: e.target.value })
                    }
                    required
                    rows={6}
                    className="bg-white/5 border-white/20 rounded-none"
                    placeholder="Tell us more..."
                  />
                </div>
                <Button
                  type="submit"
                  disabled={loading}
                  className="bg-white text-black hover:bg-white/90 rounded-none w-full md:w-auto px-8"
                >
                  {loading ? (
                    "Sending..."
                  ) : (
                    <>
                      Send Message
                      <Send className="ml-2 w-4 h-4" />
                    </>
                  )}
                </Button>
              </form>
            </div>

            {/* Contact Info */}
            <div>
              <h2 className="text-3xl font-bold mb-6">Other Ways to Connect</h2>
              <div className="space-y-8">
                <div className="border border-white/10 rounded-lg p-6">
                  <div className="w-12 h-12 bg-white/10 rounded-lg flex items-center justify-center mb-4">
                    <Mail className="w-6 h-6" />
                  </div>
                  <h3 className="text-xl font-bold mb-2">Email Us</h3>
                  <p className="text-muted-foreground mb-3">
                    For general inquiries and support
                  </p>
                  <a
                    href="mailto:hello@techblog.dev"
                    className="text-white hover:underline"
                  >
                    hello@techblog.dev
                  </a>
                </div>

                <div className="border border-white/10 rounded-lg p-6">
                  <div className="w-12 h-12 bg-white/10 rounded-lg flex items-center justify-center mb-4">
                    <MessageSquare className="w-6 h-6" />
                  </div>
                  <h3 className="text-xl font-bold mb-2">Contributing</h3>
                  <p className="text-muted-foreground mb-3">
                    Want to write for us? We're always looking for quality
                    content from experienced developers.
                  </p>
                  <a
                    href="mailto:contribute@techblog.dev"
                    className="text-white hover:underline"
                  >
                    contribute@techblog.dev
                  </a>
                </div>

                <div className="border border-white/10 rounded-lg p-6">
                  <h3 className="text-xl font-bold mb-3">Follow Us</h3>
                  <p className="text-muted-foreground mb-4">
                    Stay updated with our latest articles and tech news
                  </p>
                  <div className="flex gap-4">
                    <a
                      href="https://twitter.com"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-white hover:text-white/80"
                    >
                      Twitter
                    </a>
                    <a
                      href="https://github.com"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-white hover:text-white/80"
                    >
                      GitHub
                    </a>
                    <a
                      href="https://linkedin.com"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-white hover:text-white/80"
                    >
                      LinkedIn
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </main>
  );
}
