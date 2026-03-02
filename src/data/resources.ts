import modeloCel from "../assets/files/actividades-para-desarrollar-el-modelo-cel.pdf";
import competenciasLideres from "../assets/files/competencias-socioemocionales-en-lideres.pdf";
import desarrolloOrganizacional from "../assets/files/desarrollo-organizacional-centro-medico-sigma.pdf";
import reclutamientoSeleccion from "../assets/files/reclutamiento-y-selección-sigma.pdf";
import metodoEscalaPuntuacion from "../assets/files/metodo-de-escala-de-puntuacion-grafica.pdf";

export type ResourceItem = {
  slug: string;
  title: string;
  description: string;
  fileUrl: string;
};

export const pdfResources: ResourceItem[] = [
  {
    slug: "actividades-modelo-cel",
    title: "Actividades para desarrollar el modelo CEL",
    description:
      "Documento con propuestas prácticas para fortalecer el clima laboral, la comunicación y el liderazgo en equipos de trabajo.",
    fileUrl: modeloCel,
  },
  {
    slug: "competencias-socioemocionales-lideres",
    title: "Competencias socioemocionales según el modelo CEL",
    description:
      "Guía enfocada en habilidades socioemocionales importantes para la gestión del talento humano, la regulación emocional y la construcción de relaciones laborales positivas.",
    fileUrl: competenciasLideres,
  },
  {
    slug: "desarrollo-organizacional-centro-medico-sigma",
    title: "Desarrollo organizacional - Centro Médico Sigma",
    description:
      "Presentación sobre estrategias de desarrollo organizacional aplicadas a entornos de salud para mejorar los sistemas de reconocimiento, capacitación y evaluación del talento humano.",
    fileUrl: desarrolloOrganizacional,
  },
  {
    slug: "reclutamiento-y-seleccion-sigma",
    title: "Reclutamiento y selección - Sigma",
    description:
      "Material de apoyo sobre el proceso de reclutamiento y selección de talento, desde el perfil del cargo hasta la evaluación final.",
    fileUrl: reclutamientoSeleccion,
  },
  {
    slug: "metodo-de-escala-de-puntuacion-grafica",
    title: "Método de escala de puntuación gráfica",
    description:
      "Herramienta en formato editable para la evaluación del desempeño del talento humano, adaptada a partir del diseño propuesto por Dessler y Varela (2011)",
    fileUrl: metodoEscalaPuntuacion,
  },
];

export const getResourceBySlug = (slug: string) =>
  pdfResources.find((resource) => resource.slug === slug);
