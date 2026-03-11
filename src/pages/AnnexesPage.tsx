import { useEffect, useState } from "react";
import anexo1Image from "../assets/images/annexes/anexo-1-taller-sobre-reclutamiento-y-seleccion.jpeg";
import anexo2Image from "../assets/images/annexes/anexo-2-material-visual-para-el-taller-de-reclutamiento-y-seleccion.jpeg";
import anexo3Image from "../assets/images/annexes/anexo-3-taller-sobre-desarrollo-organizacional.jpeg";
import anexo4Image from "../assets/images/annexes/anexo-4-material-visual-para-el-taller-de-desarrollo-organizacional.jfif";
import anexo5Image from "../assets/images/annexes/anexo-5-participacion-de-la-tutora-institucional.jfif";

type AnnexItem = {
  id: number;
  title: string;
  image: string;
};

const annexItems: AnnexItem[] = [
  {
    id: 1,
    title: "Taller sobre reclutamiento y selección.",
    image: anexo1Image,
  },
  {
    id: 2,
    title: "Material visual para el taller de reclutamiento y selección.",
    image: anexo2Image,
  },
  {
    id: 3,
    title: "Taller sobre desarrollo organizacional.",
    image: anexo3Image,
  },
  {
    id: 4,
    title: "Material visual para el taller de desarrollo organizacional.",
    image: anexo4Image,
  },
  {
    id: 5,
    title:
      "Participación de la tutora institucional Lic. Diana Vargas y el profesor universitario Frank Rivas en el taller de Desarrollo Organizacional.",
    image: anexo5Image,
  },
];

function AnnexesPage() {
  const [selectedItem, setSelectedItem] = useState<AnnexItem>(annexItems[0]);
  const [isDialogOpen, setIsDialogOpen] = useState(false);

  const openDialog = (item: AnnexItem) => {
    setSelectedItem(item);
    setIsDialogOpen(true);
  };

  const closeDialog = () => {
    setIsDialogOpen(false);
  };

  useEffect(() => {
    if (!isDialogOpen) {
      return;
    }

    const handleEscape = (event: KeyboardEvent) => {
      if (event.key === "Escape") {
        closeDialog();
      }
    };

    window.addEventListener("keydown", handleEscape);

    return () => {
      window.removeEventListener("keydown", handleEscape);
    };
  }, [isDialogOpen]);

  return (
    <section className="mx-auto w-full max-w-6xl px-4 py-8 sm:px-6 sm:py-10 lg:px-8 lg:py-12">
      <header className="mb-7 sm:mb-9">
        <h1 className="text-2xl font-bold text-slate-900 sm:text-3xl">Anexos de la experiencia</h1>
        <p className="mt-2 max-w-3xl text-sm leading-6 text-slate-600 sm:text-base">
          Evidencia fotográfica sobre las actividades realizadas en el Centro Médico Sigma como
          resultado de la participación de Arianna Flores, estudiante de la carrera de Psicología
          (ULA).
        </p>
      </header>

      <div className="grid grid-cols-2 gap-3 sm:grid-cols-3 sm:gap-4 lg:grid-cols-4">
        {annexItems.map((item) => {
          const isSelected = item.id === selectedItem.id;

          return (
            <button
              key={item.id}
              type="button"
              onClick={() => openDialog(item)}
              className={`group overflow-hidden rounded-xl border text-left transition-all ${
                isSelected
                  ? "border-[#2f4f77] ring-2 ring-[#2f4f77]/20"
                  : "border-slate-200 hover:border-slate-300"
              }`}
              aria-label={`Ver detalle de ${item.title}`}>
              <img
                src={item.image}
                alt={item.title}
                className="aspect-4/3 w-full object-cover"
                loading="lazy"
              />
              <div className="px-3 py-2 text-xs font-medium text-slate-700 sm:text-sm">
                {item.title}
              </div>
            </button>
          );
        })}
      </div>

      {isDialogOpen && (
        <div
          className="fixed inset-0 z-50 flex items-center justify-center bg-black/55 px-4 py-6"
          role="dialog"
          aria-modal="true"
          aria-label={`Detalle de ${selectedItem.title}`}
          onClick={closeDialog}>
          <article
            className="relative overflow-hidden rounded-2xl"
            onClick={(event) => event.stopPropagation()}>
            <div className="absolute top-2 right-2 flex items-center justify-end">
              <button
                type="button"
                onClick={closeDialog}
                className="inline-flex h-9 w-9 items-center justify-center rounded-full border border-slate-300 bg-white/95 text-slate-600 shadow-sm transition-colors hover:bg-slate-100"
                aria-label="Cerrar detalle">
                ✕
              </button>
            </div>

            <img
              src={selectedItem.image}
              alt={selectedItem.title}
              className="block max-h-[90vh] max-w-[95vw] h-auto w-auto object-contain"
            />
          </article>
        </div>
      )}
    </section>
  );
}

export default AnnexesPage;
