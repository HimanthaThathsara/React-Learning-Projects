// Get the Article data and set in useEffect.

"use client";

import {useEffect, useState} from "react";
import {getArticles, ArticleType} from "@/app/functions/getArticles";
import {ArticleContext} from "@/hooks/useArticleContext";

type ArticleContextProviderType = {
  children: React.ReactNode;
};

export default function ArticleContextProvider({children}: ArticleContextProviderType) {
  // Local state to hold an array of articles.
  // ArticleType[] is the TypeScript type for each article object.
  const [data, setData] = useState<ArticleType[]>([]);

  // useEffect with an empty dependency array runs once after the component mounts.
  // This is where we fetch article data from the server (or static JSON).
  useEffect(() => {
    // Define an async function inside useEffect so we can use await.
    const fetchData = async () => {
      try {
        // getArticles performs the HTTP request and returns parsed JSON.
        const responseData = await getArticles();
        // Save the fetched data into React state so child components can use it.
        setData(responseData);
      } catch (err) {
        // Simple error logging — in production you might surface this to the UI.
        console.log("Error fetching data", err);
      }
    };

    fetchData();
  }, []); // empty array => run once on mount

  // Provide the fetched data to the React tree via context.
  // Components that call useContext(ArticleContext) will receive { data }.
  return <ArticleContext.Provider value={{data}}>{children}</ArticleContext.Provider>;
}
