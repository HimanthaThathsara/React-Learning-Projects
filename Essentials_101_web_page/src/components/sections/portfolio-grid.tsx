import Link from "next/link";
import Image from "next/image";
import { blog } from "@/data/blog";

export default function PortfolioGrid() {
  return (
    <section className="bg-black text-white w-full py-8 md:py-12">
      <div className="container mx-auto px-5 md:px-10 max-w-[100%]">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-x-6 gap-y-12">
          {blog.map((item, index) => (
            <Link
              key={index}
              href={item.link}
              className="group block no-underline"
            >
              <div className="relative w-full aspect-[3/2] overflow-hidden bg-[#1A1A1A]">
                <Image
                  src={item.image}
                  alt={`${item.title} by ${item.studio}`}
                  fill
                  sizes="(max-width: 768px) 100vw, (max-width: 1024px) 50vw, 33vw"
                  className="object-cover transition-transform duration-500 ease-in-out group-hover:scale-110"
                  priority={true}
                />
              </div>

              <div className="mt-4 flex flex-col items-start justify-start">
                <h2 className="font-normal text-[24px] leading-[1.2] text-white tracking-tight group-hover:font-bold group-hover:text-white">
                  {item.title}
                </h2>
                <p className="font-normal text-[14px] leading-[1.4] text-white mt-1 lg:mt-2 group-hover:font-bold group-hover:text-white">
                  {item.studio}
                </p>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}