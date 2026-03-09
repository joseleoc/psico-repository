import modeloCel from "../assets/files/actividades-para-desarrollar-el-modelo-cel.pdf";
import competenciasLideres from "../assets/files/competencias-socioemocionales-en-lideres.pdf";
import desarrolloOrganizacional from "../assets/files/desarrollo-organizacional-centro-medico-sigma.pdf";
import reclutamientoSeleccion from "../assets/files/reclutamiento-y-seleccion-sigma.pdf";
import metodoEscalaPuntuacion from "../assets/files/metodo-de-escala-de-puntuacion-grafica.docx";
import metodoEscalaPuntuacionPdf from "../assets/files/metodo-de-escala-de-puntuacion-grafica.pdf";
import presentacionResultados from "../assets/files/presentacion-de-resultados-y-guia-de-recomendaciones-centro-medico-sigma.pdf";

export type ResourceFileType = "pdf" | "docx";

export type ResourceItem = {
  slug: string;
  title: string;
  description: string;
  viewUrl: string;
  viewType: ResourceFileType;
  downloadUrl: string;
  downloadType: ResourceFileType;
};

export const pdfResources: ResourceItem[] = [
  {
    slug: "reclutamiento-y-seleccion-sigma",
    title: "Reclutamiento y selección - Centro Médico Sigma",
    description:
      "Material de apoyo sobre el proceso de reclutamiento y selección de talento, desde el perfil del cargo hasta la evaluación final.",
    viewUrl: reclutamientoSeleccion,
    viewType: "pdf",
    downloadUrl: reclutamientoSeleccion,
    downloadType: "pdf",
  },
  {
    slug: "desarrollo-organizacional-centro-medico-sigma",
    title: "Desarrollo organizacional - Centro Médico Sigma",
    description:
      "Presentación sobre estrategias de desarrollo organizacional aplicadas a entornos de salud para mejorar los sistemas de reconocimiento, capacitación y evaluación del talento humano.",
    viewUrl: desarrolloOrganizacional,
    viewType: "pdf",
    downloadUrl: desarrolloOrganizacional,
    downloadType: "pdf",
  },

  {
    slug: "metodo-de-escala-de-puntuacion-grafica",
    title: "Método de escala de puntuación gráfica",
    description:
      "Herramienta en formato editable para la evaluación del desempeño del talento humano, adaptada a partir del diseño propuesto por Dessler y Varela (2011).",
    viewUrl: metodoEscalaPuntuacionPdf,
    viewType: "pdf",
    downloadUrl: metodoEscalaPuntuacion,
    downloadType: "docx",
  },
  {
    slug: "competencias-socioemocionales-lideres",
    title: "Competencias socioemocionales según el modelo CEL",
    description:
      "Guía enfocada en habilidades socioemocionales importantes para la gestión del talento humano, la regulación emocional y la construcción de relaciones laborales positivas.",
    viewUrl: competenciasLideres,
    viewType: "pdf",
    downloadUrl: competenciasLideres,
    downloadType: "pdf",
  },
  {
    slug: "actividades-modelo-cel",
    title: "Actividades para desarrollar el modelo CEL",
    description:
      "Documento con propuestas prácticas para fortalecer el clima laboral, la comunicación y el liderazgo en equipos de trabajo.",
    viewUrl: modeloCel,
    viewType: "pdf",
    downloadUrl: modeloCel,
    downloadType: "pdf",
  },

  {
    slug: "presentacion-de-resultados-y-guia-de-recomendaciones-centro-medico-sigma",
    title: "Presentación de resultados y guía de recomendaciones - Centro Médico Sigma",
    description:
      "Este documento presenta los resultados del diagnóstico organizacional realizado en el Centro Médico Sigma como parte de las prácticas profesionales en Psicología Organizacional de Arianna Flores. Incluye un análisis del clima laboral por departamentos (basado en la escala INCLOR), una matriz FODA y una guía de recomendaciones estratégicas.",
    viewUrl: presentacionResultados,
    viewType: "pdf",
    downloadUrl: presentacionResultados,
    downloadType: "pdf",
  },
];

export const getResourceBySlug = (slug: string) =>
  pdfResources.find((resource) => resource.slug === slug);
