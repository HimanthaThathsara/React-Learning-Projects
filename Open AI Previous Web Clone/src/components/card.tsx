import Image from "next/image";
import Link from "next/link";

type Props = {
  title: string;
  link: string;
  image: string;
  date: string;
};

export default function Card({ title, link, image, date }: Props) {
  return (
    <Link href={link}>
      <div className="flex flex-col mt-[2.25rem] md:mt-[3rem] xl:mt-[3.75rem] ">
        <Image
          src={image}
          alt={title}
          width={1600}
          height={1600}
          className="object-cover"
        />
        <div className=" flex-wrap mt-[0.50rem] leading-[130%] font-bold text-[1rem] xl:text-[1.125rem] hover:underline hover:underline-offset-[0.5px]">
          {title}
        </div>
        <div className="mt-[0.25rem] tracking-normal leading-[130%] text-[1rem] xl:text-[1.125rem]">
          {date}
        </div>
      </div>
    </Link>
  );
}
