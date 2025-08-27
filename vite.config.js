import { defineConfig } from "vite";
import path from "path";

export default defineConfig({
   root: ".",
   base: "/besnik-task/",
   build: {
      outDir: "docs",
      assetsDir: "assets",
      rollupOptions: {
         input: "index.html",
      },
   },
   resolve: {
      alias: {
         "@": path.resolve(__dirname, "./src"),
      },
   },
});
