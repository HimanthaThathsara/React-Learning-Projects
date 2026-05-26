// tsx
"use client";

import * as React from "react";
import * as SheetPrimitive from "@radix-ui/react-dialog"; // Radix dialog primitives used as building blocks
import {cva, type VariantProps} from "class-variance-authority"; // for variant-driven class generation
import {X} from "lucide-react";

import {cn} from "@/lib/utils"; // utility that merges class names (see commented implementation below)

/* Top-level Radix root component (renamed for convenience). It manages open/close state. */
const Sheet = SheetPrimitive.Root;

/* Trigger to open the sheet (keeps Radix primitive API) */
const SheetTrigger = SheetPrimitive.Trigger;

/* Close button primitive (also re-exported for convenience) */
const SheetClose = SheetPrimitive.Close;

/* 
  Portal wrapper:
  - Renders its children into a React Portal (outside the DOM hierarchy)
  - Accepts Portal props, forwards them to Radix's Portal
  - Uses cn(...) to merge optional className; class strings themselves not described here
*/
const SheetPortal = ({className, ...props}: SheetPrimitive.DialogPortalProps) => <SheetPrimitive.Portal className={cn(className)} {...props} />;
SheetPortal.displayName = SheetPrimitive.Portal.displayName;

/* 
  Overlay component:
  - forwards ref to Radix Overlay element (important for accessibility/focus management)
  - uses className merging and supports other props
  - wrap in forwardRef so parent components can reference the DOM node
*/
const SheetOverlay = React.forwardRef<React.ElementRef<typeof SheetPrimitive.Overlay>, React.ComponentPropsWithoutRef<typeof SheetPrimitive.Overlay>>(({className, ...props}, ref) => (
  <SheetPrimitive.Overlay
    className={cn(
      // a string of Tailwind classes — not explained per your request
      "fixed inset-0 z-50 bg-background/80 backdrop-blur-sm data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0",
      className
    )}
    {...props}
    ref={ref}
  />
));
SheetOverlay.displayName = SheetPrimitive.Overlay.displayName;

/* 
  Variant-driven classes for the panel content (cva returns a function that builds class strings
  based on the selected variant props). The internal class strings are not explained here.
*/
const sheetVariants = cva(
  "fixed z-50 gap-4 bg-background p-6 shadow-lg transition ease-in-out data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:duration-300 data-[state=open]:duration-500",
  {
    variants: {
      side: {
        top: "inset-x-0 top-0 border-b data-[state=closed]:slide-out-to-top data-[state=open]:slide-in-from-top",
        bottom: "inset-x-0 bottom-0 border-t data-[state=closed]:slide-out-to-bottom data-[state=open]:slide-in-from-bottom",
        left: "inset-y-0 left-0 h-full w-3/4 border-r data-[state=closed]:slide-out-to-left data-[state=open]:slide-in-from-left sm:max-w-sm",
        right: "inset-y-0 right-0 h-full w-3/4  border-l data-[state=closed]:slide-out-to-right data-[state=open]:slide-in-from-right sm:max-w-sm",
      },
    },
    defaultVariants: {
      side: "right",
    },
  }
);

/* 
  SheetContent:
  - A composition of Portal + Overlay + Radix Content
  - Accepts a `side` variant (top, bottom, left, right) which maps to different classes via sheetVariants
  - Renders children and an internal Close button (the X icon)
  - Uses forwardRef so consumers can get a ref to the content element
*/
interface SheetContentProps extends React.ComponentPropsWithoutRef<typeof SheetPrimitive.Content>, VariantProps<typeof sheetVariants> {}

const SheetContent = React.forwardRef<React.ElementRef<typeof SheetPrimitive.Content>, SheetContentProps>(({side = "right", className, children, ...props}, ref) => (
  <SheetPortal>
    <SheetOverlay />
    <SheetPrimitive.Content ref={ref} className={cn(sheetVariants({side}), className)} {...props}>
      {children}
      <SheetPrimitive.Close className="absolute right-4 top-4 rounded-sm opacity-70 ring-offset-background transition-opacity hover:opacity-100 focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2 disabled:pointer-events-none data-[state=open]:bg-secondary">
        <X className="h-4 w-4" />
        <span className="sr-only">Close</span> {/* accessible label for screen readers */}
      </SheetPrimitive.Close>
    </SheetPrimitive.Content>
  </SheetPortal>
));
SheetContent.displayName = SheetPrimitive.Content.displayName;

/* Small layout helper components: header, footer, title, description.
   They wrap simple HTML elements and forward props. */
const SheetHeader = ({className, ...props}: React.HTMLAttributes<HTMLDivElement>) => <div className={cn("flex flex-col space-y-2 text-center sm:text-left", className)} {...props} />;
SheetHeader.displayName = "SheetHeader";

const SheetFooter = ({className, ...props}: React.HTMLAttributes<HTMLDivElement>) => <div className={cn("flex flex-col-reverse sm:flex-row sm:justify-end sm:space-x-2", className)} {...props} />;
SheetFooter.displayName = "SheetFooter";

const SheetTitle = React.forwardRef<React.ElementRef<typeof SheetPrimitive.Title>, React.ComponentPropsWithoutRef<typeof SheetPrimitive.Title>>(({className, ...props}, ref) => (
  <SheetPrimitive.Title ref={ref} className={cn("text-lg font-semibold text-foreground", className)} {...props} />
));
SheetTitle.displayName = SheetPrimitive.Title.displayName;

const SheetDescription = React.forwardRef<React.ElementRef<typeof SheetPrimitive.Description>, React.ComponentPropsWithoutRef<typeof SheetPrimitive.Description>>(({className, ...props}, ref) => (
  <SheetPrimitive.Description ref={ref} className={cn("text-sm text-muted-foreground", className)} {...props} />
));
SheetDescription.displayName = SheetPrimitive.Description.displayName;

/* Expose a small API surface for consumers */
export {Sheet, SheetTrigger, SheetClose, SheetContent, SheetHeader, SheetFooter, SheetTitle, SheetDescription};
