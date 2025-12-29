"use client";
import Link from "next/link";

import OpenAILogo from "@components/openai-logo";
import CustomIcon from "@components/custom-icons";

const FooterLinks = {
  Research: [
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
  ],
  API: [
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
  ],
  ChatGPT: [
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
  ],
  Compnay: [
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
  ],
};

export default function   footer() {
  const handleScrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  return (
    <div className="mx-4 xl:mx-6 ">
      <div className="grid md:grid-rows-2 xl:grid-cols-6">
        <div className="xl:col-span-2">
          <Link href={"/"}>
            <OpenAILogo className="w-[118px] h-[32px] text-white" />
          </Link>
        </div>
        {Object.keys(FooterLinks).map((key, index) => (
          <div className="ml-4 xl:ml-6 flex flex-col" key={index}>
            <h4 className="font-semibold leading-[130%] tracking-normal text-[1rem] xl:text-[1.125rem]">
              {key}
            </h4>
            <ul className={"flex flex-col"}>
              {FooterLinks[key].map((link, index) => (
                <li key={index}>
                  <Link href={link.link} className="flex flex-row items-center">
                    <span className="block whitespace-nowrap hover:underline hover:underline-offset-4">
                      {link.name}
                    </span>
                    <span className="block">
                      {link.showArrow && <CustomIcon iconName="arrow" />}
                    </span>
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>
      <div className="pt-2 border-t-2 mt-[9rem] md:mt-[10rem] xl:mt-[11.25rem] grid grid-cols-2 xl:grid-cols-3">
        <div className="flex flex-col">
          <span className="font-semibold leading-[130%] tracking-normal text-[1rem] xl:text-[1.125rem]">
            OpenAI © 2015 - 2023
          </span>
          <Link href="/policies">
            <span className="hover:underline hover:underline-offset-4">
              Terms & Policies
            </span>
          </Link>
          <Link href="/policies/privacy-policy">
            <span className="hover:underline hover:underline-offset-4">
              Privacy Policy
            </span>
          </Link>
          <Link href="/brand">
            <span className="hover:underline hover:underline-offset-4">
              Brand Guidelines
            </span>
          </Link>
        </div>
        <div className="ml-6">
          <ul className="xl:flex xl:flex-row">
            <li className="xs:mt-[1px] md:mt-0 md:mr-[16px] lg:mr-[24px] lg:mb-[24px]">
              <Link href="/">
                <span className="hover:underline hover:underline-offset-4">
                  Twitter
                </span>
              </Link>
            </li>
            <li className="xs:mt-[1px] md:mt-0 md:mr-[16px] lg:mr-[24px] lg:mb-[24px]">
              <Link href="/">
                <span className="hover:underline hover:underline-offset-4">
                  YouTube
                </span>
              </Link>
            </li>
            <li className="xs:mt-[1px] md:mt-0 md:mr-[16px] lg:mr-[24px] lg:mb-[24px]">
              <Link href="/">
                <span className="hover:underline hover:underline-offset-4">
                  GitHub
                </span>
              </Link>
            </li>
            <li className="xs:mt-[1px] md:mt-0 md:mr-[16px] lg:mr-[24px] lg:mb-[24px]">
              <Link href="/">
                <span className="hover:underline hover:underline-offset-4">
                  SoundCloud
                </span>
              </Link>
            </li>
            <li className="xs:mt-[1px] md:mt-0 md:mr-[16px] lg:mr-[24px] lg:mb-[24px]">
              <Link href="/">
                <span className="hover:underline hover:underline-offset-4">
                  LinkedIn
                </span>
              </Link>
            </li>
          </ul>
          <button
            className="mt-6 flex flex-row items-center gap-1"
            onClick={handleScrollToTop}
          >
            <div className="mt-6 flex flex-row items-center gap-1">
              <span className="leading-[130%] tracking-normal text-[1rem] xl:text-[1.125rem] hover:underline hover:underline-offset-4">
                Back to top
              </span>
              <CustomIcon iconName="arrow" className=" -rotate-45" />
            </div>
          </button>
        </div>
      </div>
    </div>
  );
}
