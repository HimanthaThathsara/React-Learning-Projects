import {subscribeNewsletterSchema} from "@/lib/types"; // Zod schema for expected request shape
import {NextResponse} from "next/server"; // Next.js helper to create HTTP responses

export async function POST(request: Request) {
  // Read the incoming request body as JSON. This can throw if body isn't valid JSON.
  const body: unknown = await request.json();

  // Validate the body against the Zod schema using safeParse which never throws.
  const result = subscribeNewsletterSchema.safeParse(body);

  // Collect validation errors in an object keyed by field name.
  let zodErrors = {};
  if (!result.success) {
    // result.error.issues is an array of problems found by Zod.
    result.error.issues.forEach((issue) => {
      // issue.path is an array path (e.g. ['email']). We use the first segment as the key.
      // issue.message is the human-readable error message.
      zodErrors = {...zodErrors, [issue.path[0]]: issue.message};
    });
  }

  // Return a JSON response. When there are errors, return { errors: { ... } }, otherwise { success: true }.
  // Note: this always returns 200 OK; it does not set an error HTTP status.
  return NextResponse.json(Object.keys(zodErrors).length > 0 ? {errors: zodErrors} : {success: true});
}
