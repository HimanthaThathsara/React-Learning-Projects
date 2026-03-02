// Get the Podcast data and Store in useEffect
"use client";

import {useEffect, useState} from "react";
import {getPodcasts, PodcastType} from "@/app/functions/getPodcasts";
import {PodcastContext} from "@/hooks/usePodcastContext";

type PodcastContextProviderType = {
  children: React.ReactNode;
  limit?: number | null;
};

export default function PodcastContextProvider({children, limit = null}: PodcastContextProviderType) {
  // local state holding an array of PodcastType
  const [data, setData] = useState<PodcastType[]>([]);

  // useEffect runs once on mount and whenever `limit` changes.
  // It fetches podcasts and stores them in state.
  useEffect(() => {
    const fetchData = async () => {
      try {
        // call the helper that fetches podcast JSON
        const responseData = await getPodcasts();

        // if a `limit` is provided, slice the results to that length
        const limitedData = limit ? responseData.slice(0, limit) : responseData;

        // update state so any consumers of PodcastContext re-render with new data
        setData(limitedData);
      } catch (err) {
        // simple error logging — consider surface errors to UI in real apps
        console.log("Error fetching data", err);
      }
    };

    fetchData();
  }, [limit]);

  // Provide `data` and `setData` to descendant components via context.
  // Consumers can read `data` or call `setData` to update it.
  return <PodcastContext.Provider value={{data, setData}}>{children}</PodcastContext.Provider>;
}
