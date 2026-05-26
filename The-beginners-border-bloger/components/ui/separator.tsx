"use client";

import * as React from "react";
import * as SeparatorPrimitive from "@radix-ui/react-separator";

import {cn} from "@/lib/utils";

/**
 * Separator
 *
 * - Wraps Radix's Separator primitive with default styling and
 *   a small API (orientation, decorative).
 * - forwardRef lets consumers get a ref to the underlying DOM element.
 */
const Separator = React.forwardRef<React.ElementRef<typeof SeparatorPrimitive.Root>, React.ComponentPropsWithoutRef<typeof SeparatorPrimitive.Root>>(
  ({className, orientation = "horizontal", decorative = true, ...props}, ref) => (
    <SeparatorPrimitive.Root
      // Forward the ref to the underlying DOM node
      ref={ref}
      // Radix prop: if true the separator is purely presentational
      decorative={decorative}
      // horizontal | vertical
      orientation={orientation}
      // Compose classes with `cn` (clsx + twMerge) so consumers can override
      className={cn(
        "shrink-0 bg-border",
        // size depends on orientation
        orientation === "horizontal" ? "h-[1px] w-full" : "h-full w-[1px]",
        className
      )}
      {...props}
    />
  )
);

// Keep the component displayName useful for DevTools and error traces
Separator.displayName = SeparatorPrimitive.Root.displayName;

export {Separator};
