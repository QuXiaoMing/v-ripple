const webpack = require("webpack");
const rm = require("rimraf");
const ora = require("ora");
const path = require("path");
const chalk = require("chalk");
const config = require("./webpack.build.config");
const spinner = ora({
  color: "green",
  text: "正在打包。。。"
});

spinner.start();

rm(path.resolve(__dirname, "../dist/js"), err => {
  if (err) throw err;
  webpack(config, (err, stats) => {
    spinner.stop();
    if (err) throw err;
    process.stdout.write(
      stats.toString({
        colors: true,
        modules: false,
        children: false,
        chunks: false,
        chunkModules: false
      }) + "\n\n"
    );
    // style a string
    console.log(chalk.blue("好消息！"));

    // compose multiple styles using the chainable API
    console.log(chalk.blue.bgRed.bold(" 代码已经打包成功，上线吧"));
  });
});
