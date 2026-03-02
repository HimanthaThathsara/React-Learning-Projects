import {createContext, useContext} from "react";
import {ArticleType} from "@/app/functions/getArticles";

type ArticleContextType = {
  data: ArticleType[];
};

// Create the React Context with initial value of null
// The context can either hold ArticleContextType data or be null (before provider is set up)
export const ArticleContext = createContext<ArticleContextType | null>(null);

// Custom hook to safely access the ArticleContext
// This hook provides a convenient way to consume the context with built-in error handling
export function useArticleContext() {
  // Get the current context value using React's useContext hook
  const articleContext = useContext(ArticleContext);

  // Guard clause: Ensure the hook is used within a provider
  // This prevents runtime errors when the context is accessed outside of its provider
  if (!articleContext) {
    throw new Error("useArticleContext must be used within an ArticleContextProvider");
  }

  // Return the context value (guaranteed to be non-null due to the guard above)
  // Components can now safely access the article data without null checks
  return articleContext;
}
