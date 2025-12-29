"use client";
import Link from "next/link";
import Image from "next/image";
import { useState, useRef } from "react";

import Header from "@components/header";
import Footer from "@components/footer";
import PageEnd from "@components/page-end";
import Card from "@components/card";
import CustomIcon from "@/components/custom-icons";

export default function Page() {
  const [playLandingPageVideo, setPlayLandingPageVideo] = useState(true);
  const landingPageVideoRef = useRef(null);

  const togglePlayPauseLandingPageVideo = () => {
    const video = landingPageVideoRef.current;
    if (video.paused) {
      video.play();
    } else {
      video.pause();
    }

    setPlayLandingPageVideo(!playLandingPageVideo);
  };

  return (
    <div>
      <div className="sticky top-0 z-20">
        <Header />
      </div>
      <div className="">
        <video
          ref={landingPageVideoRef}
          autoPlay
          loop
          muted
          className="z-0 absolute top-0 object-cover h-screen w-screen opacity-50"
        >
          <source src="/videos/landingpage-video.mp4" type="video/mp4" />
        </video>
        <div className="cursor-pointer absolute right-4 md:right-6 bottom-4 md:bottom-6 bg-black min-w-[2.75rem] min-h-[2.75rem] md:pt-[8px] pt-[.5625rem] pb-[.625rem] md:pb-[10px] px=[8px] md:px-[16px] rounded-[.2rem] flex items-center justify-center">
          <button
            className="justify-center items-center"
            onClick={togglePlayPauseLandingPageVideo}
          >
            <div className="flex flex-row items-center justify-center">
              <span className="">
                <CustomIcon
                  iconName={playLandingPageVideo ? "pause" : "play"}
                  className="text-[1rem] xl:text-[1.125rem] leading-[130%] tracking-normal"
                />
              </span>
              <span className="ml-[0.5rem] hidden md:inline text-[1rem] xl:text-[1.125rem] leading-[130%] tracking-normal">
                {playLandingPageVideo ? "Pause video" : "Play video"}
              </span>
            </div>
          </button>
        </div>
        <div
          className="h-screen top-0 left-0 right-0 bottom-0 mx-4 xl:mx-6"
          style={{
            height: "calc(100vh - 5rem)",
          }}
        >
          <div className="w-4/6 absolute bottom-[14px] md:bottom-[24px] left-0 right-0 mx-4 md:mx-auto">
            {/* <h1 className="text-[3.4375rem] xl:text-[4.5625rem] leading-none"> */}
            <h1 className="text-[2.625rem] md:text-[3.4375rem] xl:text-[4.2rem] leading-none">
              Creating safe AGI that benefits all of humanity
            </h1>
            <div className="inline-block mt-[3.750rem] pt-[3px] pb-[5px] px-[10px] border-[1px] rounded-[.2rem] hover:bg-white hover:text-black ">
              <Link href="/about" className="whitespace-nowrap">
                Learn about OpenAI
              </Link>
            </div>
          </div>
        </div>
      </div>
      <div className="mx-6 ">
        <div className="py-[5.25rem] ">
          <ul className="flex flex-row flex-wrap">
            <li className="w-full sm:w-1/2 md:w-1/2 xl:w-1/3 mt-[2.25rem] md:mt-[3rem] md:pr-16">
              <Link href="/research/overview">
                <div>
                  <h2 className="underline decoration-transparent underline-offset-1 text-[1.3125rem] md:text-[1.5rem] xl:text-[1.75rem] leading-[130%] md:leading-[120%] font-bold">
                    Pioneering research on the path to AGI
                  </h2>
                  <div className="mt-[.25rem] xl:mt-[.75rem]">
                    <span className="underline underline-offset-4 ">
                      Learn about our research
                    </span>
                  </div>
                </div>
              </Link>
            </li>
            <li className="w-full sm:w-1/2 md:w-1/2 xl:w-1/3 mt-[2.25rem] md:mt-[3rem] md:pr-16 ">
              <Link href="/products">
                <div>
                  <h2 className="underline decoration-transparent underline-offset-1 text-[1.3125rem] md:text-[1.5rem] xl:text-[1.75rem] leading-[130%] md:leading-[120%] font-bold">
                    Transforming work and creativity with AI
                  </h2>
                  <div className="mt-[.25rem] xl:mt-[.75rem]">
                    <span className="underline underline-offset-4 mt-[0.25rem] xl:mt-[0.75rem]">
                      Explore our products
                    </span>
                  </div>
                </div>
              </Link>
            </li>
            <li className="w-full sm:w-1/2 md:w-1/2 xl:w-1/3 mt-[2.25rem] md:mt-[3rem] md:pr-16">
              <Link href="/careers">
                <div>
                  <h2 className="underline decoration-transparent underline-offset-1 text-[1.3125rem] md:text-[1.5rem] xl:text-[1.75rem] leading-[130%] md:leading-[120%] font-bold">
                    Join us in shaping the future of technology
                  </h2>
                  <div className="mt-[.25rem] xl:mt-[.75rem]">
                    <span className="underline underline-offset-4 mt-[.25rem] xl:mt-[.75rem]">
                      View careers
                    </span>
                  </div>
                </div>
              </Link>
            </li>
          </ul>
        </div>
      </div>
      <div className="mx-4 xl:mx-6 pb-[4.5rem] md:pb-[3rem] xl:pb-[6rem] ">
        <div className="border-t-[.5px] pt-[.75rem] xl:pt-[.75rem] flex flex-col md:flex-row ">
          <h2 className="text-[1.75rem] leading-[110%] font-normal tracking-[-.01em] md:text-[2.25rem] xl:text-[3rem] xl:tracking-[-.02em]">
            Latest updates
          </h2>
          <div className="md:ml-auto mt-[.75rem] md:mt-0">
            <Link href="/blog">
              <div className="text-[1rem] xl:text-[1.125rem] underline underline-offset-4">
                View all updates
              </div>
            </Link>
          </div>
        </div>
        <div className="grid grid-flow-col md:grid-rows-2 xl:grid-rows-1 gap-6">
          <Card
            title="OpenAI announces leadership transition"
            link="/blog/openai-announces-leadership-transition"
            image="/images/latest-updates/latest-updates-leadership-transition.webp"
            date="Nov 17, 2023"
          />
          <Card
            title="OpenAI Data Partnerships"
            link="/blog/openai-data-partnerships"
            image="/images/latest-updates/latest-updates-data-partnerships.webp"
            date="Nov 9, 2023"
          />
          <Card
            title="Introducing GPTs"
            link="/blog/introducing-gpts"
            image="/images/latest-updates/latest-updates-introducing-gpts.webp"
            date="Nov 6, 2023"
          />

          <Card
            title="New Models And Developer Products Announced At DevDay"
            link="/blog/new-models-and-developer-products-announced-at-devday"
            image="/images/latest-updates/latest-updates-new-models-and-developer-products-announced-at-devday.webp"
            date="Nov 6, 2023"
          />
        </div>
      </div>
      <div className="pb-[4.5rem] md:pb-[3rem] xl:pb-[6rem] ">
        <div className="mx-4 xl:mx-6 pb-[4.5rem] md:pb-[3rem] xl:pb-[6rem]  md:grid md:grid-cols-2 border-t-[.5px] pt-[.75rem] xl:pt-[.75rem]">
          <div className="">
            <h2 className="text-[1.75rem] leading-[110%] font-normal tracking-[-.01em] md:text-[2.25rem] xl:text-[3rem] xl:tracking-[-.02em]">
              Safety & responibility
            </h2>
          </div>
          <div className="flex flex-col mt-4">
            <p className="leading-[130%] md:leading-[120%] tracking-[-0.01em] text-[1.3125rem] md:text[1.5rem] xl:text-[1.75rem] ">
              Our work to create safe and beneficial AI requires a deep
              understanding of the potential risks and benefits, as well as
              careful consideration of the impact.
            </p>
            <Link href="/safety">
              <div className="mt-[1rem] xl:mt[1.5rem] leading-[130%] tracking-normal text-[1rem] xl:text-[1.125rem] underline underline-offset-4">
                Learn about safety
              </div>
            </Link>
          </div>
        </div>
        <Image
          src="/images/safety/safety.webp"
          alt="Safety"
          width={2000}
          height={1500}
          className="object-cover"
        />
      </div>
      <div className="mx-4 xl:mx-6 pb-[4.5rem] md:pb-[3rem] xl:pb-[6rem] ">
        <div className="pb-[4.5rem] md:pb-[3rem] xl:pb-[6rem] md:grid md:grid-cols-2 border-t-[.5px] pt-[.75rem] xl:pt-[.75rem]">
          <div className="">
            <h2 className="text-[1.75rem] leading-[110%] font-normal tracking-[-.01em] md:text-[2.25rem] xl:text-[3rem] xl:tracking-[-.02em]">
              Research
            </h2>
          </div>
          <div className="flex flex-col mt-4">
            <p className="leading-[130%] md:leading-[120%] tracking-[-0.01em] text-[1.3125rem] md:text[1.5rem] xl:text-[1.75rem] ">
              We research generative models and how to align them with human
              values.
            </p>
            <Link href="/research/overview">
              <div className="mt-[1rem] xl:mt[1.5rem] leading-[130%] tracking-normal text-[1rem] xl:text-[1.125rem] underline underline-offset-4">
                Learn about our research
              </div>
            </Link>
          </div>
        </div>
        <div className="grid grid-flow-col md:grid-rows-2 xl:grid-rows-1 gap-4">
          <Card
            title="DALL·E 3 system card"
            link="/research/dall-e-3-system-card"
            image="/images/research/dall-e-3-system-card.webp"
            date="Oct 3, 2023"
          />
          <Card
            title="GPT-4V(ision) system card"
            link="/research/gpt-4-vision-system-card"
            image="/images/research/gpt-4vision-system-card.webp"
            date="Sep 25, 2023"
          />
          <Card
            title="Confidence-Building Measures for Artificial Intelligence: Workshop proceedings"
            link="/research/confidence-building-measures-for-artificial-intelligence-workshop-proceedings"
            image="/images/research/confidence-building-measures-for-artificial-intelligence-workshop-proceedings.webp"
            date="Aug 1, 2023"
          />
          <Card
            title="Frontier AI regulation: Managing emerging risks to public safety"
            link="/research/frontier-ai-regulation-managing-emerging-risks-to-public-safety"
            image="/images/research/frontier-ai-regulation-managing-emerging-risks-to-public-safety.webp"
            date="Jul 6, 2023"
          />
        </div>
      </div>
      <div className="mx-4 xl:mx-6 pb-[4.5rem] md:pb-[3rem] xl:pb-[6rem] ">
        <div className="pb-[4.5rem] md:pb-[3rem] xl:pb-[6rem] xl:grid xl:grid-cols-2 border-t-[.5px] pt-[.75rem] xl:pt-[.75rem]">
          <div className="">
            <h2 className="text-[1.75rem] leading-[110%] font-normal tracking-[-.01em] md:text-[2.25rem] xl:text-[3rem] xl:tracking-[-.02em]">
              Products
            </h2>
          </div>
          <div className="flex flex-col mt-4">
            <p className="leading-[130%] md:leading-[120%] tracking-[-0.01em] text-[1.3125rem] md:text[1.5rem] xl:text-[1.75rem] ">
              Our API platform offers our latest models and guides for safety
              best practices.
            </p>
            <Link href="/research/overview">
              <div className="mt-[1rem] xl:mt[1.5rem] leading-[130%] tracking-normal text-[1rem] xl:text-[1.125rem] underline underline-offset-4">
                Explore our products
              </div>
            </Link>
          </div>
        </div>
        <div className="grid grid-flow-col md:grid-rows-2 xl:grid-rows-1 gap-4">
          <Card
            title="Introduction to GPTs"
            link="/products/introduction-to-gpts"
            image="/images/products/introduction-to-gpts.webp"
            date="Nov 6, 2023"
          />
          <Card
            title="New models and developer products announced at DevDay"
            link="/products/new-models-and-developer-products-announced-at-devday"
            image="/images/products/new-models-and-developer-products-announced-at-devday.webp"
            date="Nov 6, 2023"
          />
          <Card
            title="DALL·E 3 is now available in ChatGPT Plus and Enterprise"
            link="/products/dall-e-3-is-now-available-in-chatgpt-plus-and-enterprise"
            image="/images/products/dall-e-3-is-now-available-in-chatgpt-plus-and-enterprise.webp"
            date="Oct 19, 2023"
          />
          <Card
            title="ChatGPT can now see, hear, and speak"
            link="/products/chatgpt-can-now-see-hear-and-speak"
            image="/images/products/chatgpt-can-now-see-hear-and-speak.webp"
            date="Sep 25, 2023"
          />
        </div>
      </div>
      <div className="pb-[4.5rem] md:pb-[3rem] xl:pb-[6rem] ">
        <div className="mx-4 xl:mx-6 pb-[4.5rem] md:pb-[3rem] xl:pb-[6rem] xl:grid xl:grid-cols-2 border-t-[.5px] pt-[.75rem] xl:pt-[.75rem]">
          <div className="">
            <h2 className="text-[1.75rem] leading-[110%] font-normal tracking-[-.01em] md:text-[2.25rem] xl:text-[3rem] xl:tracking-[-.02em]">
              Careers at OpenAI
            </h2>
          </div>
          <div className="flex flex-col mt-4">
            <p className="leading-[130%] md:leading-[120%] tracking-[-0.01em] text-[1.3125rem] md:text[1.5rem] xl:text-[1.75rem] ">
              Developing safe and beneficial AI requires people from a wide
              range of disciplines and backgrounds.
            </p>
            <Link href="/careers">
              <div className="mt-[1rem] xl:mt[1.5rem] leading-[130%] tracking-normal text-[1rem] xl:text-[1.125rem] underline underline-offset-4">
                View careers
              </div>
            </Link>
          </div>
        </div>
        <Image
          src="/images/careers/careers.webp"
          alt="Careers"
          width={2000}
          height={1500}
          className="object-cover pb-[4.5rem] md:pb-[3rem] xl:pb-[6rem] "
        />
        <div className="mx-4 xl:mx-6 pb-[4.5rem] md:pb-[3rem] xl:pb-[6rem] flex flex-col xl:grid xl:grid-cols-2 border-t-[.5px] pt-[.75rem] xl:pt-[.75rem]">
          <figure className="relative md:pl-6">
            <blockquote className="text-[1.75rem] leading-[110%] font-normal tracking-[-.01em] md:text-[2.25rem] xl:text-[3rem] xl:tracking-[-.02em]">
              <p className="hidden md:block">
                <span className="after:content-['”'] before:absolute before:left-0 before:content-['“']">
                  I encourage my team to keep learning. Ideas in different
                  topics or fields can often inspire new ideas and broaden the
                  potential solution space.
                </span>
              </p>
              <p className="block md:hidden mt-[1.5rem]">
                &ldquo;I encourage my team to keep learning. Ideas in different
                topics or fields can often inspire new ideas and broaden the
                potential solution space.&ldquo;
              </p>
              <figcaption className="mt-[1rem] xl:mt[1.5rem]">
                <span className="block font-semibold leading-[130%] tracking-normal text-[1rem] xl:text-[1.125rem]">
                  Lilian Weng
                </span>
                <span className="block leading-[130%] tracking-normal text-[1rem] xl:text-[1.125rem]">
                  Applied AI at OpenAI
                </span>
              </figcaption>
            </blockquote>
          </figure>
          <div className="order-first md:order-last mt-[8px] md:mt-[10px] md:ml-4">
            <Image
              src="/images/careers/lillian-weng.webp"
              alt="Lillian Weng"
              width={2841}
              height={2840}
              className="object-cover"
            />
          </div>
        </div>
      </div>
      <div className="z-10">
        <Footer />
      </div>
      <div className="z-0">
        <PageEnd />
      </div>
    </div>
  );
}
