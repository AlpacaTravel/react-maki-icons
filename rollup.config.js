import babel from "rollup-plugin-babel";
import commonjs from "rollup-plugin-commonjs";
import external from "rollup-plugin-peer-deps-external";
import postcss from "rollup-plugin-postcss";
import resolve from "rollup-plugin-node-resolve";
import url from "rollup-plugin-url";
import svgr from "@svgr/rollup";
import globby from "globby";

import pkg from "./package.json";

const plugins = [
  external(),
  postcss({
    modules: true,
  }),
  url(),
  svgr(),
  babel({
    exclude: "node_modules/**",
    plugins: ["external-helpers"],
  }),
  resolve(),
  commonjs(),
];

const createConfig = (filename) => ({
  input: `src/${filename}.js`,
  output: [
    {
      file: `./icons/${filename.replace("icons/", "")}.js`,
      format: "cjs",
      name: "example-rollup-library",
    },
    {
      file: `./icons/${filename.replace("icons/", "")}.es.js`,
      format: "es",
      sourcemap: false,
    },
  ],
  plugins,
});

const components = globby.sync("src/icons/*.js");
const componentConfigs = components
  .map((r) => r.replace(/.*src\//, "").replace(/.js$/, ""))
  .map(createConfig);

export default [createConfig("index"), ...componentConfigs];
