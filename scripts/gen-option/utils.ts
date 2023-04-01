import * as streams from "https://deno.land/std@0.182.0/streams/mod.ts";

export async function downloadString(url: string): Promise<string> {
  const textDecoder = new TextDecoder();
  const response = await fetch(url);
  if (!response.body) {
    throw new Error(`Failed to read ${url}`);
  }
  const reader = streams.readerFromStreamReader(response.body.getReader());
  return textDecoder.decode(await streams.readAll(reader));
}

export function regexIndexOf(s: string, pattern: RegExp, offset = 0): number {
  const index = s.slice(offset).search(pattern);
  return index < 0 ? index : index + offset;
}
