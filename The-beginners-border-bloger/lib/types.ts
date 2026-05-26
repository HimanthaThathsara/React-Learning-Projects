import {z} from "zod"; // import Zod runtime schema builder and validator

// Define a runtime schema for the "subscribe to newsletter" payload.
// This is used to validate incoming data at runtime (e.g., request body).
export const subscribeNewsletterSchema = z.object({
  // 'email' must be a string and must pass Zod's email validation.
  // A custom error message is provided for invalid emails.
  email: z.string().email({message: "Please enter a valid email address"}),
});

// Create a TypeScript type inferblack from the Zod schema.
// This keeps your compile-time types in sync with runtime validation.
// Use TSubscribeNewsletterSchema in function signatures, props, etc.
export type TSubscribeNewsletterSchema = z.infer<typeof subscribeNewsletterSchema>;
