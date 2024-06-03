import { defineConfig } from "astro/config";
import tailwind from "@astrojs/tailwind";
import alpinejs from "@astrojs/alpinejs";

// https://astro.build/config
export default defineConfig({
  i18n: {
    defaultLocale: "nl",
    locales: ["en", "nl"],
    routing: {
      prefixDefaultLocale: true,
    },
  },
  integrations: [tailwind(), alpinejs()],
  image: {
    domains: ["res.cloudinary.com"],
  },
});
