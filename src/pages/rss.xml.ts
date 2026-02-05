import rss from "@astrojs/rss";
import { getCollection } from "astro:content";

export async function GET(context: { site?: URL }) {
  const writingPosts = await getCollection(
    "writing",
    ({ data }) => data.published !== false,
  );
  const sortedPosts = writingPosts.sort(
    (a, b) => b.data.date.getTime() - a.data.date.getTime(),
  );

  return rss({
    title: "Jack Woollams - Writing",
    description:
      "Short notes on analytics governance, reporting, and delivery practice.",
    site: context.site ?? "https://jackwoollams.com",
    items: sortedPosts.map((post) => ({
      title: post.data.title,
      pubDate: post.data.date,
      description: post.data.summary,
      categories: post.data.tags,
      link: `/writing/${post.slug}/`,
    })),
  });
}
