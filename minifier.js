const minify = require("html-minifier").minify;
const fs = require("fs");

const main = () => {
  const filePath = process.argv[2];
  let html = fs.readFileSync(filePath).toString();
  let minified = minify(html, {
    collapseWhitespace: true,
    minifyCSS: true,
    removeComments: true,
    removeEmptyAttributes: true,
  });
  minified = minified.replaceAll('"', "'");
  minified = minified.replaceAll("\n", "");

  const wrote = fs.writeFileSync(`${filePath}.minified`, minified);
  console.log("Done");
};

main();
