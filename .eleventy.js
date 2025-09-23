module.exports = function(eleventyConfig) {
  // CSSファイルとimagesを通すための設定
  eleventyConfig.addPassthroughCopy("src/css");
  eleventyConfig.addPassthroughCopy("src/images");
  eleventyConfig.addPassthroughCopy("src/manifest.json");

  // 日付フィルターを追加
  eleventyConfig.addFilter("date", function(dateObj) {
    return new Date(dateObj).toLocaleDateString('ja-JP');
  });

  return {
    dir: {
      input: "src",
      output: "_site",
      includes: "_includes",
      layouts: "_layouts"
    },
    templateFormats: ["md", "njk", "html"],
    markdownTemplateEngine: "njk",
    htmlTemplateEngine: "njk"
  };
};