export default function formatString(input: string) {
  // Remove characters that are not letters, numbers, whitespace, or 'ø'.
  // Keeps ASCII letters (a-z, A-Z), digits (0-9), whitespace (\s) and the Norwegian 'ø'.
  const cleaned = input.replace(/[^a-zA-Z0-9\sø]/g, "");

  // Replace one or more whitespace characters with a single hyphen.
  // This collapses spaces/tabs/newlines into URL-friendly separators.
  const hyphenated = cleaned.replace(/\s+/g, "-");

  // Normalize to lowercase for consistency.
  return hyphenated.toLowerCase();
}
