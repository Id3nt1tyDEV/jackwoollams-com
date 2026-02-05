export interface WritingFrontmatter {
  title: string;
  summary: string;
  date: string;
  tags: string[];
}

export interface WritingItem extends WritingFrontmatter {
  slug: string;
  href: string;
}

type WritingModule = {
  frontmatter: WritingFrontmatter;
};

const writingModules = import.meta.glob<WritingModule>(
  "../pages/writing/*.mdx",
  {
    eager: true,
  },
);

const getSlugFromPath = (path: string) =>
  path.split("/").at(-1)?.replace(".mdx", "") ?? "";

export const getWritingPosts = (): WritingItem[] =>
  Object.entries(writingModules)
    .map(([path, module]) => {
      const slug = getSlugFromPath(path);
      return {
        ...module.frontmatter,
        slug,
        href: `/writing/${slug}/`,
      };
    })
    .sort((a, b) => new Date(b.date).getTime() - new Date(a.date).getTime());
