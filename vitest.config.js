import { defineConfig } from "vitest/config";
import react from "@vitejs/plugin-react";
//import plugin from "eslint-plugin-react-hooks";

export default defineConfig({
    plugins: [react()],
    test: {
        globals: true,
        environment: "jsdom",
        setupFiles: "./src/test/setup.js",
    }
});