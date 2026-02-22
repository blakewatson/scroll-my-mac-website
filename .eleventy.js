import markdownIt from "markdown-it";

export default function (eleventyConfig) {
  eleventyConfig.addPassthroughCopy("assets");

  const md = markdownIt({
    html: true,
    linkify: true,
    typographer: true,
  });
  eleventyConfig.addFilter("md", (content) => md.render(content));
}
