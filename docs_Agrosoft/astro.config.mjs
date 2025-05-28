// @ts-check
import { defineConfig } from "astro/config";
import starlight from "@astrojs/starlight";

// https://astro.build/config
export default defineConfig({
  integrations: [
    starlight({
      title: "Docs AgroSoft",
      social: [
        {
          icon: "github",
          label: "GitHub",
          href: "https://github.com/withastro/starlight",
        },
      ],
      sidebar: [
        {
          label: "Planteamiento del problema",
          items: [{ label: "Example Guide", slug: "doc1/example" }],
        },
        {
          label: "Especificacion Requisitos de Software",
          items: [{ label: "Example Guide", slug: "doc2/example" }],
        },
        {
          label: "Prototipado del Sistema",
          items: [{ label: "Example Guide", slug: "doc3/example" }],
        },
        {
          label: "Manual de Configuracion Base de Datos",
          items: [{ label: "Guia para la configuracion de la base de datos", slug: "doc4/example" }],
        },
      ],
    }),
  ],
});
