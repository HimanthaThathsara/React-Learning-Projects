"use client";

import { useState, useEffect } from "react";
import Link from "next/link";

import OpenAILogo from "@components/openai-logo";
import CustomIcon from "@components/custom-icons";
import HeaderDropdownButton from "@/components/header-dropdown";

export default function Header() {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const isScrolled = window.scrollY > 20;
      setScrolled(isScrolled);
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <header
      className={`${
        scrolled ? "bg-black" : "bg-transparent"
      } py-[1rem] md:py-[1.375rem] text-white transition duration-300 text-[17px]`}
    >
      <div className="flex flex-row items-center justify-between mx-6">
        <Link href={"/"} className="w-1/6">
          <OpenAILogo className="w-[118px] h-[32px] text-white" />
        </Link>
        <nav className="hidden xl:flex xl:justify-between xl:w-5/6">
          <ul className="flex flex-row gap-[1.5rem]">
            <li className="flex items-center">
              <HeaderDropdownButton
                buttonName="Research"
                dropdownLinks={[
                  {
                    name: "Overview",
                    link: "/research/overview",
                    showArrow: false,
                  },
                  {
                    name: "Index",
                    link: "/research",
                    showArrow: false,
                  },
                  {
                    name: "GPT-4",
                    link: "/gpt-4",
                    showArrow: false,
                  },
                  {
                    name: "DALL·E 3",
                    link: "/dall-e-3",
                    showArrow: false,
                  },
                ]}
              />
            </li>
            <li className="flex items-center">
              <HeaderDropdownButton
                buttonName="API"
                dropdownLinks={[
                  {
                    name: "Overview",
                    link: "/api/overview",
                    showArrow: false,
                  },
                  {
                    name: "Data Privacy",
                    link: "/enterprise-privacy",
                    showArrow: false,
                  },
                  {
                    name: "Pricing",
                    link: "/",
                    showArrow: false,
                  },
                  {
                    name: "Docs",
                    link: "",
                    showArrow: true,
                  },
                ]}
              />
            </li>
            <li className="flex items-center">
              <HeaderDropdownButton
                buttonName="ChatGPT"
                dropdownLinks={[
                  {
                    name: "Overview",
                    link: "/chatgpt",
                    showArrow: false,
                  },
                  {
                    name: "Enterprie",
                    link: "/enterprise",
                    showArrow: false,
                  },
                  {
                    name: "Try ChatGPT",
                    link: "/",
                    showArrow: true,
                  },
                ]}
              />
            </li>

            <li className="flex items-center">
              <Link
                href="/safety"
                className="hover:underline hover:underline-offset-4 pb-1"
              >
                Safety
              </Link>
            </li>
            <li className="flex items-center">
              <HeaderDropdownButton
                buttonName="Company"
                dropdownLinks={[
                  {
                    name: "About",
                    link: "/about",
                    showArrow: false,
                  },
                  {
                    name: "Blog",
                    link: "/blog",
                    showArrow: false,
                  },
                  {
                    name: "Careers",
                    link: "/careers",
                    showArrow: false,
                  },

                  {
                    name: "Residency",
                    link: "/residency",
                    showArrow: false,
                  },
                  {
                    name: "Charter",
                    link: "/charter",
                    showArrow: false,
                  },
                  {
                    name: "Security",
                    link: "/security",
                    showArrow: false,
                  },
                  {
                    name: "Customer Stories",
                    link: "/customer-stories",
                    showArrow: false,
                  },
                ]}
              />
            </li>
          </ul>

          <ul className="flex flex-row items-center gap-[1.5rem]">
            <li>
              <button className="hover:underline hover:underline-offset-4 pb-1">
                Search
              </button>
            </li>
            <li className="">
              <Link
                href="/"
                className="flex flex-row items-center hover:underline hover:underline-offset-4 pb-1"
              >
                <span className="whitespace-nowrap">Log in</span>
                <CustomIcon iconName="arrow" />
              </Link>
            </li>
            <li className="pt-[3px] px-[10px] pb-[5px] border-[1px] border-white rounded-[.2rem]">
              <Link href="/" className="flex flex-row items-center">
                <span className="whitespace-nowrap">Try ChatGPT</span>
                <CustomIcon iconName="arrow" />
              </Link>
            </li>
          </ul>
        </nav>
        <nav className="xl:hidden">
          <button className="hover:underline hover:underline-offset-4">
            Menu
          </button>
        </nav>
      </div>
    </header>
  );
}
