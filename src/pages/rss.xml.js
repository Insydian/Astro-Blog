import rss from '@astrojs/rss';

export async function GET(context) {
  const posts = Object.values(
    import.meta.glob('../pages/posts/*.md', { eager: true })
  )
    .filter((post) => !post.frontmatter?.draft)
    .sort((a, b) => {
      return (
        new Date(b.frontmatter.pubDate).getTime() -
        new Date(a.frontmatter.pubDate).getTime()
      );
    });

  return rss({
    title: 'Notes',
    description: 'A personal journal for writing, projects, and things I’m learning.',
    site: context.site,
    items: posts.map((post) => ({
      title: post.frontmatter.title,
      pubDate: new Date(post.frontmatter.pubDate),
      description: post.frontmatter.description,
      link: post.url,
    })),
  });
}
