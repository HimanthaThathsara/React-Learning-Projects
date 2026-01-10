"use client";

import SectionHeading from "../../section-heading";
import {Badge} from "../../ui/badge";
import {Button} from "../../ui/button";
import HeadingLine from "../../ui/heading-line";

import {Robot} from "../../ui/robot";
import env from "../../../config/env";
import {cn} from "../../../lib/utils";
import {ArrowUpRight} from "lucide-react";
import {motion} from "motion/react";

const About = () => {
  return (
    <SectionHeading text="About" id="about" className="overflow-hidden">
      <div className="flex items-center lg:h-[95vh]">
        <div className="relative flex-1 px-4 py-12 md:px-12">
          <h2 className="font-incognito text-2xl font-semibold md:text-5xl lg:text-4xl">
            Meet the Developer,
            <br />
            Not Just the Code
          </h2>

          <HeadingLine className="mt-6" lineWidth={40} />

          <Robot className="absolute top-6 -right-8 z-5 w-64 font-mono text-white max-md:scale-x-[-1] md:top-8 md:right-4">
            <div className="max-md:scale-x-[-1]">Hey👋</div>
          </Robot>

          <div className="text-foreground/70 bg-muted/20 relative z-10 mx-auto mt-6 max-w-3xl rounded-lg border-2 border-dotted text-sm leading-relaxed backdrop-blur-3xl md:text-base">
            <div className="p-6">
              <p className="">
                I build fast, friendly products that make users smile
                <span className="mx-1 inline-block align-middle">
                  <span className="ring-offset-background relative inline-block w-12 rotate-6 overflow-hidden rounded-md ring ring-offset-2">
                    <img src={"/gifs/kawaii%20cat%20GIF.gif"} className="h-auto w-full object-cover object-center" alt="kawaii cat cheering" />
                  </span>
                </span>
                —and sometimes their dogs too.
              </p>

              <p className="">
                Stack: Next.js, React, TypeScript, Tailwind. Clean APIs, tiny micro‑interactions, big delight
                <span className="mx-1 inline-block align-middle">
                  <span className="ring-offset-background relative inline-block w-12 -rotate-3 overflow-hidden rounded-md ring ring-offset-2">
                    <img src={"/gifs/cate%20coding.gif"} className="max-h-8 w-full object-cover object-center" alt="cat intensely coding" />
                  </span>
                </span>
                .
              </p>

              <p className="">
                Off‑duty: coffee, sketching animations, and One Piece marathons
                <span className="mx-1 inline-block align-middle">
                  <span className="ring-offset-background relative inline-block w-12 rotate-3 overflow-hidden rounded-md ring ring-offset-2">
                    <img src={"/gifs/happy%20one%20piece%20GIF.gif"} className="h-auto w-full object-cover object-center" alt="happy One Piece vibe" />
                  </span>
                </span>
                .
              </p>

              <p className="">
                Best in small teams: quick loops, clear comms, high‑fives after deploy
                <span className="mx-1 inline-block align-middle">
                  <span className="ring-offset-background relative inline-block w-12 -rotate-2 overflow-hidden rounded-md ring ring-offset-2">
                    <img src={"/gifs/One%20Piece%20GIF%20by%20TOEI%20Animation%20UK.gif"} className="h-auto w-full object-cover object-center" alt="One Piece crew teamwork" />
                  </span>
                </span>
                .
              </p>

              <p>
                Got a messy brief or a half‑baked idea?
                <span className="mx-1 inline-block align-middle">
                  <span className="ring-offset-background relative inline-block w-12 rotate-2 overflow-hidden rounded-md ring ring-offset-2">
                    <img src={"/gifs/kirby%20confused.gif"} className="h-auto w-full object-cover object-center" alt="kirby confused but ready" />
                  </span>
                </span>
                Let’s turn it into something real.
              </p>
            </div>

            <div className="border-t-2 border-dotted p-6">
              <Button asChild size={"lg"} variant={"outline"} className="group border-2 font-medium">
                <a href="mailto:himanthathathsara2005@gmail.com">
                  Contact Me
                  <ArrowUpRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
                </a>
              </Button>
            </div>
          </div>
        </div>

        {/* Left */}
      </div>
    </SectionHeading>
  );
};

export default About;
