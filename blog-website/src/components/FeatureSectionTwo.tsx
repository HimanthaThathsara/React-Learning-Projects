import { Circle } from "lucide-react";
import React from "react";

type Props = {};

function FeatureSectionTwo({}: Props) {
  return (
    <div className="w-full backdrop-blur-2xl min-h-[300px]  lg:h-[600px]  border-b flex  max-sm:py-16 flex-col lg:flex-row items-center">
      <div className="lg:w-1/2 lg:border-r ml-[2px] lg:pl-16 px-8  flex flex-col justify-center h-full">
        <div className="flex mb-8 items-center gap-2">
          <h3 className="font-sans text-base capitalize">
            CONTENT THAT INSPIRES AND
          </h3>
          <Circle
            size={16}
            strokeWidth={4}
            className="stroke-[#d0f6ae] font-extrabold"
          />
        </div>
        <h1 className="">
          Written for the <br /> modern reader
        </h1>
        <p className="mt-8 max-w-lg ">
          Curated stories and insights with a focus on engaging experiences
        </p>
      </div>{" "}
      <div className="lg:w-1/2 flex justify-center">
        <img
          src="/feature.png"
          alt="Hero Image"
          className="rounded-lg brightness-80 hover:scale-105 duration-200 hover:animate-pulse"
        />
      </div>{" "}
    </div>
  );
}

export default FeatureSectionTwo;