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
          items: [{ label: "Introducción", slug: "doc1/example" }],
        },
        {
          label: "Especificacion Requisitos de Software",
          items: [{ label: "Requisitos", slug: "doc2/example" }],
        },
        {
          label: "Prototipado del Sistema",
          items: [{ label: "Example Guide", slug: "doc3/example" }],
        },
        {
          label: "Manual de Configuracion Base de Datos",
          items: [
            {
              label: "Guia para la configuracion de la base de datos",
              slug: "doc4/example",
            },
          ],
        },
        {
          label: "Documento de Diseños UML",
          items: [
            { label: "Introduccion", slug: "doc5/introduccion" },
            {
              label: "Descripcion general de autores",
              slug: "doc5/descripcion",
            },
            {
              label: "Diagramas de casos de uso",
              slug: "doc5/casos_uso",
            },
            {
              label: "Especificacion casos de uso",
              slug: "doc5/especificacion_casos_uso",
            },
            {
              label: "Diagramas de actividades",
              slug: "doc5/diagramas_actividades",
            },
            {
              label: "Diagramas de clases",
              slug: "doc5/diagramas_clases",
            },
            {
              label: "Modelo entidad relacion",
              slug: "doc5/er",
            },
          ],
        },
      ],
    }),
  ],
});
