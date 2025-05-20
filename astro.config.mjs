import { defineConfig } from "astro/config";
import tailwind from "@astrojs/tailwind";
import alpinejs from "@astrojs/alpinejs";

// https://astro.build/config
export default defineConfig({
  devToolbar: {
    enabled: false
  },
  i18n: {
    locales: ["en", "nl"],
    defaultLocale: "nl",
    routing: {
      prefixDefaultLocale: false,
    },
  },
  integrations: [tailwind(), alpinejs()],
  image: {
    domains: ["res.cloudinary.com"],
  },
});
