import { CASE_STUDY_TAG_SET, type CaseStudyTag } from "./taxonomy";

export interface CaseStudyFrontmatter {
  title: string;
  subtitle: string;
  summary: string;
  date: string;
  tags: CaseStudyTag[];
  role: string;
  stack: string[];
  outcomes: string[];
  confidentiality?: string;
}

export interface CaseStudyItem extends CaseStudyFrontmatter {
  slug: string;
  href: string;
}

type CaseStudyModule = {
  frontmatter: CaseStudyFrontmatter;
};

const caseStudyModules = import.meta.glob<CaseStudyModule>(
  "../pages/case-studies/*.mdx",
  {
    eager: true
  }
);

const getSlugFromPath = (path: string) => path.split("/").at(-1)?.replace(".mdx", "") ?? "";

const validateTags = (slug: string, tags: string[]): CaseStudyTag[] => {
  if (tags.length < 2 || tags.length > 4) {
    throw new Error(`Case study '${slug}' must include between 2 and 4 tags.`);
  }

  tags.forEach((tag) => {
    if (!CASE_STUDY_TAG_SET.has(tag)) {
      throw new Error(`Case study '${slug}' uses unsupported tag '${tag}'.`);
    }
  });

  return tags as CaseStudyTag[];
};

export const getCaseStudies = (): CaseStudyItem[] =>
  Object.entries(caseStudyModules)
    .map(([path, module]) => {
      const slug = getSlugFromPath(path);
      return {
        ...module.frontmatter,
        tags: validateTags(slug, module.frontmatter.tags),
        slug,
        href: `/case-studies/${slug}/`
      };
    })
    .sort((a, b) => new Date(b.date).getTime() - new Date(a.date).getTime());

export const getRecentCaseStudies = (count = 3): CaseStudyItem[] => getCaseStudies().slice(0, count);