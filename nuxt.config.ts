// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  devtools: { enabled: true },
  app: {
    head: {
      title: "Travel",
      link: [
        { rel: "stylesheet", href: "/assets/css/main.min.css" },
        {
          rel: "stylesheet",
          href: "https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.4.0/css/all.min.css",
          crossorigin: "anonymous",
        },
      ],
      script: [
        { src: "/node_modules/bootstrap/dist/js/bootstrap.bundle.min.js" },
      ],
    },
  },
});
