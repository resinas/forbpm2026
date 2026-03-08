const cheerio = require("cheerio");

module.exports = function (eleventyConfig) {
  eleventyConfig.addPassthroughCopy("styles.css");
  eleventyConfig.addPassthroughCopy("bpm-logo.svg");
  eleventyConfig.addPassthroughCopy("toronto-bg.svg");

  eleventyConfig.addTransform("sectionCards", function (content, outputPath) {
    if (!outputPath || !outputPath.endsWith(".html")) {
      return content;
    }

    const $ = cheerio.load(content);
    const article = $("article.content").first();
    if (!article.length) {
      return content;
    }

    const children = article.children().toArray();
    if (!children.length) {
      return content;
    }

    const wrapped = [];
    let currentSection = null;

    for (const node of children) {
      const tagName = (node.tagName || "").toLowerCase();
      const isHeading = tagName === "h2";

      if (!currentSection || isHeading) {
        currentSection = $("<section></section>").addClass("content-section");
        wrapped.push(currentSection);
      }

      currentSection.append(node);
    }

    article.empty();
    for (const section of wrapped) {
      article.append(section);
    }

    return $.html();
  });

  return {
    dir: {
      input: ".",
      includes: "_includes",
      output: "_site",
    },
    markdownTemplateEngine: "njk",
    htmlTemplateEngine: "njk",
  };
};
