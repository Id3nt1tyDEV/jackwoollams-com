import { getCollection, type CollectionEntry } from "astro:content";

export type CaseStudyFrontmatter = CollectionEntry<"caseStudies">["data"];

export interface CaseStudyItem extends Omit<CaseStudyFrontmatter, "date"> {
  date: string;
  slug: string;
  href: string;
}

const mapEntry = (entry: CollectionEntry<"caseStudies">): CaseStudyItem => ({
  ...entry.data,
  date: entry.data.date.toISOString(),
  slug: entry.slug,
  href: `/case-studies/${entry.slug}/`
});

export const getCaseStudies = async (): Promise<CaseStudyItem[]> => {
  const entries = await getCollection("caseStudies", ({ data }) => data.published !== false);

  return entries
    .map(mapEntry)
    .sort((a, b) => new Date(b.date).getTime() - new Date(a.date).getTime());
};

export const getRecentCaseStudies = async (count = 3): Promise<CaseStudyItem[]> => {
  const caseStudies = await getCaseStudies();
  return caseStudies.slice(0, count);
};