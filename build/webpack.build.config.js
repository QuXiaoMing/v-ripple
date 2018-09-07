const baseConfig = require("./webpack.base.config");
const merge = require('webpack-merge');
const path = require("path");

function resolve(str) {
  return path.resolve(__dirname, "../" + str);
}

module.exports = merge(baseConfig, {
  mode: 'production',
  entry: {
    app: resolve("src/index.js")
  },
  output: {
    path: resolve("dist"),
    filename: "v-tripple.js"
  }
});
