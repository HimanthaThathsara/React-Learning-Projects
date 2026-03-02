import {createContext, useContext} from "react";
import {PodcastType} from "@/app/functions/getPodcasts";

type PodcastContextType = {
  data: PodcastType[];
  setData: React.Dispatch<React.SetStateAction<PodcastType[]>>;
};

/*
  Create the context. We initialize with `null` so consumers can detect
  when they are used outside of a provider (and throw a helpful error).
  Using `createContext<PodcastContextType | null>(null)` makes the type
  explicit: either the context value or null (no provider).
*/
export const PodcastContext = createContext<PodcastContextType | null>(null);

/*
  Custom hook to consume the PodcastContext.
  - Calls useContext to get the context value.
  - If the value is null, it throws an error so developers immediately
    know they forgot to wrap components with the provider.
  - Otherwise returns the typed context value (data and setData).
*/
export function usePodcastContext() {
  const podcastContext = useContext(PodcastContext);

  if (!podcastContext) {
    throw new Error("usePodcastContext must be used within a PodcastContextProvider");
  }

  return podcastContext;
}
