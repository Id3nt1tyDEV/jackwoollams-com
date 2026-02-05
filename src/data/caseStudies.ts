export interface CaseStudyFrontmatter {
  title: string;
  subtitle: string;
  summary: string;
  date: string;
  tags: string[];
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
    eager: true,
  },
);

const getSlugFromPath = (path: string) =>
  path.split("/").at(-1)?.replace(".mdx", "") ?? "";

export const getCaseStudies = (): CaseStudyItem[] =>
  Object.entries(caseStudyModules)
    .map(([path, module]) => {
      const slug = getSlugFromPath(path);
      return {
        ...module.frontmatter,
        slug,
        href: `/case-studies/${slug}/`,
      };
    })
    .sort((a, b) => new Date(b.date).getTime() - new Date(a.date).getTime());

export const getRecentCaseStudies = (count = 3): CaseStudyItem[] =>
  getCaseStudies().slice(0, count);
