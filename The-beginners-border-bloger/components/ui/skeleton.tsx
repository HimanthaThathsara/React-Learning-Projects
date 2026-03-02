// cn(...) is a helper that normalizes and conditionally builds class strings (clsx) then resolves Tailwind class conflicts (twMerge).
import {cn} from "@/lib/utils";

// Skeleton is a small React component that renders a div and merges its own classes with any user-provided className.
function Skeleton({
  className,
  ...props
}: // Destructures className from incoming props and collects the rest into props. The component accepts any div attributes
React.HTMLAttributes<HTMLDivElement>) {
  return (
    <div
      // Uses the cn helper to combine the component’s base class string with any className passed by the consumer.
      className={cn("animate-pulse rounded-md bg-muted", className)}
      // {...props}
      // Spreads remaining attributes onto the div (so id, role, event handlers, data-* and aria-* props pass through).
      {...props}
    />
  );
}

export {Skeleton};
