import Link from "next/link";
import Image from "next/image";
import formatString from "@/app/functions/formatString";
//Import the data form getArticle file
import {ArticleType, getArticles} from "@/app/functions/getArticles";
import ComponentsDetailsFile from "@/data/Component.json";

// This Is AUTHORS Page List.
export default async function AuthorsList() {
  // Assign the Import data to the 'data' variable
  const data: Array<ArticleType> = await getArticles();

  return (
    <div className="flex flex-col max-w-[95rem] w-full mx-auto py-8 lg:pt-24 lg:pb-48">
      {/* Get the data from "data" variable and map using authors and index*/}
      {data.map((authors, index) => (
        <div key={authors.id}>
          <article className="flex flex-col md:flex-row justify-between md:items-center gap-2 md:gap-0">
            {/* Image */}
            <div className="flex flex-col md:flex-row md:items-center gap-2 md:gap-16">
              <Image className="h-[9.375rem] w-[9.375rem]" src={authors.avatar} alt={authors.imgAlt} width={150} height={150} />
              <h2 className="heading3-title">{authors.author}</h2>
            </div>
            {/* Other details */}
            <div className="flex flex-col lg:flex-row gap-2 lg:gap-24">
              <div className="flex gap-2">
                <p className="font-semibold">{ComponentsDetailsFile.AuthorList.Job}</p>
                <p>{authors.job}</p>
              </div>
              <div className="flex gap-2">
                <p className="font-semibold">{ComponentsDetailsFile.AuthorList.City}</p>
                <p>{authors.city}</p>
              </div>
              {/* Author Fully page link */}
              <Link className="flex gap-2" href={`authors/${formatString(authors.author)}`}>
                <span className="uppercase font-semibold">{ComponentsDetailsFile.AuthorList.About}</span>
                <img src={ComponentsDetailsFile.AuthorList.src} alt={ComponentsDetailsFile.AuthorList.alt} />
              </Link>
            </div>
          </article>
          {/* Manage the Border when not last item */}
          {index < data.length - 1 && <div className="border border-black my-6" />}
        </div>
      ))}
    </div>
  );
}
