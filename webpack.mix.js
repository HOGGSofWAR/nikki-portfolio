let mix = require("laravel-mix");
const dotenv = require("dotenv");
require("laravel-mix-eslint");
require("laravel-mix-stylelint");
const conf = dotenv.config({ path: "../../../../.env" });
if (!mix.inProduction()) {
  mix
    .webpackConfig({
      devtool: "source-map"
    })
    .sourceMaps();
}
mix
  .js("src/scripts/main.js", "dist/js")
  .eslint({
    fix: true,
    cache: false
    //...
  })
  .sass("src/styles/style.scss", "dist/css")
  .options({
    processCssUrls: false,
    postCss: [
      require("autoprefixer")(),
      require("postcss-fixie")(),
      require("postcss-pxtorem")(),
      require("postcss-reporter")(),
      require("doiuse")({
        browsers: ["ie >= 11", "> 1%"]
      })
    ]
  })
