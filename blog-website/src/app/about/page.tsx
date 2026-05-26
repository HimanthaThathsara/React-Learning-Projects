import { Footer } from "@/components/Footer";
import { Code, Users, Lightbulb, Target } from "lucide-react";

export default function AboutPage() {
  return (
    <main className="min-h-screen w-full flex flex-col text-white">
      {/* Hero Section */}
      <div className="border-b px-6 lg:px-16 py-16 lg:py-24">
        <div className="max-w-7xl mx-auto">
          <h1 className="text-5xl lg:text-7xl font-bold mb-6">About Us</h1>
          <p className="text-xl lg:text-2xl text-muted-foreground max-w-3xl">
            We're a community of passionate developers sharing knowledge, best
            practices, and insights about modern software development.
          </p>
        </div>
      </div>

      {/* Mission Section */}
      <section className="py-16 lg:py-24 px-6 lg:px-16">
        <div className="max-w-7xl mx-auto">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div>
              <h2 className="text-4xl lg:text-5xl font-bold mb-6">
                Our Mission
              </h2>
              <p className="text-xl text-muted-foreground mb-6">
                To empower developers worldwide with high-quality, practical
                content that bridges the gap between theory and real-world
                application. We believe in learning by doing and sharing
                knowledge freely.
              </p>
              <p className="text-xl text-muted-foreground">
                Whether you're just starting your coding journey or you're a
                seasoned engineer, our goal is to provide content that helps you
                grow, build better software, and stay current with the
                ever-evolving tech landscape.
              </p>
            </div>
            <img
              src="https://images.unsplash.com/photo-1522071820081-009f0129c71c?w=800&h=600"
              alt="Team collaboration"
              className="rounded-lg shadow-2xl"
            />
          </div>
        </div>
      </section>

      {/* Values Section */}
      <section className="py-16 lg:py-24 px-6 lg:px-16 border-t">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-4xl lg:text-5xl font-bold mb-12 text-center">
            Our Values
          </h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            <div className="text-center p-6">
              <div className="w-16 h-16 bg-white/10 rounded-lg flex items-center justify-center mx-auto mb-4">
                <Code className="w-8 h-8" />
              </div>
              <h3 className="text-xl font-bold mb-3">Quality Content</h3>
              <p className="text-muted-foreground">
                Every article is thoroughly researched, tested, and reviewed to
                ensure accuracy and practical value.
              </p>
            </div>
            <div className="text-center p-6">
              <div className="w-16 h-16 bg-white/10 rounded-lg flex items-center justify-center mx-auto mb-4">
                <Users className="w-8 h-8" />
              </div>
              <h3 className="text-xl font-bold mb-3">Community First</h3>
              <p className="text-muted-foreground">
                We foster an inclusive environment where developers of all
                levels can learn and grow together.
              </p>
            </div>
            <div className="text-center p-6">
              <div className="w-16 h-16 bg-white/10 rounded-lg flex items-center justify-center mx-auto mb-4">
                <Lightbulb className="w-8 h-8" />
              </div>
              <h3 className="text-xl font-bold mb-3">Practical Learning</h3>
              <p className="text-muted-foreground">
                We focus on real-world applications and hands-on examples you
                can use in your projects immediately.
              </p>
            </div>
            <div className="text-center p-6">
              <div className="w-16 h-16 bg-white/10 rounded-lg flex items-center justify-center mx-auto mb-4">
                <Target className="w-8 h-8" />
              </div>
              <h3 className="text-xl font-bold mb-3">Continuous Growth</h3>
              <p className="text-muted-foreground">
                Technology evolves rapidly, and so do we. We stay current with
                the latest trends and best practices.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* What We Cover Section */}
      <section className="py-16 lg:py-24 px-6 lg:px-16 border-t">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-4xl lg:text-5xl font-bold mb-12">
            What We Cover
          </h2>
          <div className="grid md:grid-cols-2 gap-8">
            <div className="border border-white/10 rounded-lg p-8">
              <h3 className="text-2xl font-bold mb-4">Web Development</h3>
              <p className="text-muted-foreground">
                From React and Next.js to backend frameworks, APIs, and
                full-stack development. We cover modern web technologies and
                best practices for building scalable applications.
              </p>
            </div>
            <div className="border border-white/10 rounded-lg p-8">
              <h3 className="text-2xl font-bold mb-4">DevOps & Cloud</h3>
              <p className="text-muted-foreground">
                Docker, Kubernetes, CI/CD pipelines, and cloud platforms like
                AWS, Azure, and GCP. Learn infrastructure as code and modern
                deployment strategies.
              </p>
            </div>
            <div className="border border-white/10 rounded-lg p-8">
              <h3 className="text-2xl font-bold mb-4">AI & Machine Learning</h3>
              <p className="text-muted-foreground">
                Neural networks, deep learning, model deployment, and practical
                AI applications. From fundamentals to production-ready ML
                systems.
              </p>
            </div>
            <div className="border border-white/10 rounded-lg p-8">
              <h3 className="text-2xl font-bold mb-4">Security & Best Practices</h3>
              <p className="text-muted-foreground">
                Application security, authentication, authorization, and secure
                coding practices. Learn to build applications that are both
                functional and secure.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 lg:py-24 px-6 lg:px-16 border-t">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-4xl lg:text-5xl font-bold mb-6">
            Join Our Community
          </h2>
          <p className="text-xl text-muted-foreground mb-8">
            Subscribe to get the latest articles, tutorials, and insights
            delivered to your inbox. No spam, just quality content.
          </p>
          <div className="flex gap-4 justify-center flex-wrap">
            <a
              href="/blog"
              className="bg-white text-black hover:bg-white/90 px-8 py-4 rounded-none font-semibold transition-colors"
            >
              Explore Articles
            </a>
            <a
              href="/contact"
              className="border border-white text-white hover:bg-white/10 px-8 py-4 rounded-none font-semibold transition-colors"
            >
              Get in Touch
            </a>
          </div>
        </div>
      </section>

      <Footer />
    </main>
  );
}
