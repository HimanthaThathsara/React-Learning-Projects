import PageLayout from "@/components/PageLayout";
import Hero from "@/components/Hero";
import Features from "@/components/Features";
import Projects from "@/components/Projects";
import WhyRegenCell from "@/components/WhyRegenCell";
import BlogPreview from "@/components/BlogPreview";
import SEO from "@/components/SEO";
import {useEffect} from "react";

const Index = () => {
  // Fix any ID conflicts when the page loads
  useEffect(() => {
    const contactElements = document.querySelectorAll('[id="contact"]');
    if (contactElements.length > 1) {
      // If there are multiple elements with id="contact", rename one
      contactElements[1].id = "contact-footer";
    }
  }, []);

  return (
    <PageLayout>
      <SEO
        title="RegenCell - Cell Tower Monitoring"
        description="RegenCell Technologies:Keeping Networks Alive — Anytime, Anywhere.."
        imageUrl="/Images/526dc38a-25fa-40d4-b520-425b23ae0464.png"
        keywords={["smart s", " technology", " sensors", " tech", "safety monitoring", "performance analytics", "manufacturing"]}
      />
      <Hero />
      <Features />
      <WhyRegenCell />
      <Projects />
      <BlogPreview />
    </PageLayout>
  );
};

export default Index;
