import { defineConfig } from "@rsbuild/core";
import { pluginReact } from "@rsbuild/plugin-react";
import { pluginSass } from "@rsbuild/plugin-sass";

export default defineConfig({
  html: {
    title: "Visual Designer",
    favicon: "./src/assets/icons/favicon.png",
  },
  plugins: [pluginReact(), pluginSass()],
});
