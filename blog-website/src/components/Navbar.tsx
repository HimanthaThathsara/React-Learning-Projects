"use client";

import { ArrowRight, MenuIcon } from "lucide-react";

import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { Button } from "@/components/ui/button";
import {
  Sheet,
  SheetContent,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet";

const Navbar5 = () => {
  const navLinks = [
    { name: "About", href: "/about" },
    { name: "Categories", href: "/categories" },
    { name: "Blog", href: "/blog" },
    { name: "Contact", href: "/contact" },
  ];

  const categories = [
    {
      title: "Web Development",
      description: "Front-end and back-end web development tutorials",
      href: "/categories/web-development",
    },
    {
      title: "AI & Machine Learning",
      description: "Artificial intelligence and machine learning articles",
      href: "/categories/ai-machine-learning",
    },
    {
      title: "DevOps",
      description: "DevOps practices, CI/CD, and infrastructure",
      href: "/categories/devops",
    },
    {
      title: "Cloud Computing",
      description: "Cloud platforms and serverless computing",
      href: "/categories/cloud-computing",
    },
    {
      title: "Cybersecurity",
      description: "Security best practices and application security",
      href: "/categories/cybersecurity",
    },
    {
      title: "Open Source",
      description: "Open source projects and contributions",
      href: "/categories/open-source",
    },
  ];

  return (
    <section className="sticky bg-black z-50 bg-cover bg-center bg-fixed border-b border-border top-0">
      <div className="w-full max-sm:px-4 max-sm:py-2">
        <nav className="flex items-center justify-between">
          <a href="/" className="flex lg:w-1/2 lg:pl-6 items-center gap-2">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
              className="w-8 h-8"
            >
              <path d="M2 3h6a4 4 0 0 1 4 4v14a3 3 0 0 0-3-3H2z" />
              <path d="M22 3h-6a4 4 0 0 0-4 4v14a3 3 0 0 1 3-3h7z" />
            </svg>
            <h3 className="text-lg font-semibold tracking-tighter">
              Blog Space
            </h3>
          </a>
          <div className="hidden w-1/2 lg:flex items-center h-full">
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                className="px-8 py-6 text-lg font-medium text-muted-foreground hover:text-foreground w-full justify-center h-full flex items-center border-t-0 border-b-0 border"
              >
                {link.name}
              </a>
            ))}
          </div>
          <Sheet>
            <SheetTrigger asChild className="lg:hidden">
              <MenuIcon className="h-6 w-6 mr-4" />
            </SheetTrigger>
            <SheetContent side="top" className="max-h-screen overflow-auto">
              <SheetHeader>
                <SheetTitle>
                  <a href="/" className="flex items-center gap-2">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="24"
                      height="24"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      className="w-10 h-10"
                    >
                      <path d="M2 3h6a4 4 0 0 1 4 4v14a3 3 0 0 0-3-3H2z" />
                      <path d="M22 3h-6a4 4 0 0 0-4 4v14a3 3 0 0 1 3-3h7z" />
                    </svg>
                    <span className="text-lg font-semibold tracking-tighter">
                      Blog Space
                    </span>
                  </a>
                </SheetTitle>
              </SheetHeader>
              <div className="flex flex-col p-4">
                <Accordion type="single" collapsible className="mt-4 mb-2">
                  <AccordionItem value="categories" className="border-none">
                    <AccordionTrigger className="text-base hover:no-underline">
                      Categories
                    </AccordionTrigger>
                    <AccordionContent>
                      <div className="grid md:grid-cols-2">
                        {categories.map((category, index) => (
                          <a
                            href={category.href}
                            key={index}
                            className="rounded-md p-3 transition-colors hover:bg-muted/70"
                          >
                            <div key={category.title}>
                              <p className="mb-1 font-semibold text-foreground">
                                {category.title}
                              </p>
                              <p className="text-sm text-muted-foreground">
                                {category.description}
                              </p>
                            </div>
                          </a>
                        ))}
                      </div>
                    </AccordionContent>
                  </AccordionItem>
                </Accordion>
                <div className="flex flex-col gap-6">
                  <a href="/about" className="font-medium">
                    About
                  </a>
                  <a href="/blog" className="font-medium">
                    Blog
                  </a>
                  <a href="/contact" className="font-medium">
                    Contact
                  </a>
                </div>
              </div>
            </SheetContent>
          </Sheet>
        </nav>
      </div>
    </section>
  );
};

export { Navbar5 };