import {Skeleton} from "../ui/skeleton";

export default function Loading() {
  return (
    // Skeleton is a small React component that renders a div and merges its own classes with any user-provided className.
    // Skeleton have two input ClassName and props.
    <Skeleton className="bg-[#a1a1a1] max-w-[95rem] h-[64px] rounded-none"></Skeleton>
  );
}
