const webpackMerge = require("webpack-merge");
const singleSpaDefaults = require("webpack-config-single-spa-ts");
const HtmlWebpackPlugin = require("html-webpack-plugin");

module.exports = (webpackConfigEnv) => {
  const orgName = "aec";
  const defaultConfig = singleSpaDefaults({
    orgName,
    projectName: "root-config",
    webpackConfigEnv,
  });

  return webpackMerge.smart(defaultConfig, {
    // modify the webpack config however you'd like to by adding to this object
    devServer: {
      historyApiFallback: true,
    },
    module: {
      rules: [
        // ...Right before your file-loader rule
        // Bypass automatic `.json` file processing for webpack
        {
          type: "javascript/auto",
          test: /\.json$/,
          loader: "file-loader",
          options: {
            name: "[name].[ext]",
          },
        },
      ],
      // ...
    },
    plugins: [
      new HtmlWebpackPlugin({
        inject: false,
        template: "src/index.ejs",
        templateParameters: {
          orgName,
        },
      }),
    ],
  });
};
