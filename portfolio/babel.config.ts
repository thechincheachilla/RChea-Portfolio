module.exports = {
  presets: [
    ["@babel/preset-env", { targets: "last 2 Chrome versions" }],
    "@babel/preset-react",
  ],
  plugins: [
    [
      "babel-plugin-import",
      {
        libraryName: "@mui/material",
        libraryDirectory: "",
        camel2DashComponentName: false,
      },
    ],
  ],
};
