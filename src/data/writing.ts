import { getCollection, type CollectionEntry } from "astro:content";

export type WritingFrontmatter = CollectionEntry<"writing">["data"];

export interface WritingItem extends Omit<WritingFrontmatter, "date"> {
  date: string;
  slug: string;
  href: string;
}

const mapEntry = (entry: CollectionEntry<"writing">): WritingItem => ({
  ...entry.data,
  date: entry.data.date.toISOString(),
  slug: entry.slug,
  href: `/writing/${entry.slug}/`,
});

export const getWritingPosts = async (): Promise<WritingItem[]> => {
  const entries = await getCollection(
    "writing",
    ({ data }) => data.published !== false,
  );

  return entries
    .map(mapEntry)
    .sort((a, b) => new Date(b.date).getTime() - new Date(a.date).getTime());
};
